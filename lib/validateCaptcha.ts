import crypto from "crypto";
import fs from "fs";

export async function validateCortletCaptcha(token: string): Promise<boolean> {
    try {
        const publicKey = fs.readFileSync("cortlet_public.pem", "utf8");

        // Decode base64 token → { combined, signature }
        const decoded = JSON.parse(Buffer.from(token, "base64").toString("utf8"));
        const { combined, signature } = decoded;

        // 1️⃣ Verify RSA Signature
        const isSignatureValid = crypto.verify(
            "sha256",
            Buffer.from(combined),
            publicKey,
            Buffer.from(signature, "base64")
        );

        if (!isSignatureValid) {
            console.log("❌ RSA signature invalid");
            return false;
        }

        // 2️⃣ Parse combined payload
        const { payload, sha1 } = JSON.parse(combined);

        // 3️⃣ Check SHA1 integrity
        const expectedSha1 = crypto
            .createHmac("sha1", process.env.CORTLET_SHA1_SECRET || "fallback_secret")
            .update(JSON.stringify(payload))
            .digest("hex");

        if (sha1 !== expectedSha1) {
            console.log("❌ SHA1 mismatch");
            return false;
        }

        // 4️⃣ Expiration check (3 minutes)
        if (Date.now() - payload.ts > 3 * 60 * 1000) {
            console.log("❌ Token expired");
            return false;
        }

        return true;

    } catch (error) {
        console.error("Captcha validation error:", error);
        return false;
    }
}
