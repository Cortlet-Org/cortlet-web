import { NextResponse } from "next/server";
import crypto from "crypto";
import fs from "fs";

export async function POST() {
    try {
        const privateKey = process.env.CORTLET_PRIVATE_PEM!.replace(/\\n/g, "\n");

        // STEP 1 — Create payload
        const payload = {
            ts: Date.now(),
            nonce: crypto.randomBytes(16).toString("hex"),
        };

        const payloadString = JSON.stringify(payload);

        // STEP 2 — SHA1 integrity
        const sha1 = crypto
            .createHmac("sha1", process.env.CORTLET_SHA1_SECRET || "fallback_secret")
            .update(payloadString)
            .digest("hex");

        // Combine them BEFORE signing
        const combined = JSON.stringify({ payload, sha1 });

        // STEP 3 — SIGN (REAL CRYPTOGRAPHIC SIGNATURE)
        const signature = crypto
            .sign("sha256", Buffer.from(combined), privateKey)
            .toString("base64");

        // Final token = base64(combined + signature)
        const token = Buffer.from(
            JSON.stringify({
                combined,
                signature,
            }),
            "utf8"
        ).toString("base64");

        return NextResponse.json({ success: true, token });
    } catch (err) {
        console.error("Captcha creation error:", err);
        return NextResponse.json({ success: false });
    }
}
