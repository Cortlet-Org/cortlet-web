import { NextResponse } from "next/server";
import { Resend } from "resend";
import { logEvent } from "@/app/utils/Logging";

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        await logEvent("CONTACT_FORM_RECEIVED", {
            name,
            email,
            messageType: typeof message,
            preview: typeof message === "string" ? message.slice(0, 80) : ""
        });

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json({
                success: false,
                error: "Missing required fields",
            });
        }

        const resend = new Resend(process.env.RESEND_API_KEY);

        const result = await resend.emails.send({
            from: "Cortlet Contact <support@cortlet.com>",
            to: "support@cortlet.com",
            subject: `New message from ${name}`,
            html: `
                <h2>New Contact Message</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        });

        if (result.error) {
            console.error("RESEND ERROR:", result.error);

            await logEvent("CONTACT_EMAIL_FAILED", {
                email,
                resendError: result.error.message
            });

            return NextResponse.json({
                success: false,
                error: result.error.message || "Email send failed",
            });
        }

        await logEvent("CONTACT_EMAIL_SENT", { email });

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error("Contact API error:", error);

        await logEvent("CONTACT_SERVER_ERROR", {
            error: String(error)
        });

        return NextResponse.json({
            success: false,
            error: "Server error",
        });
    }
}
