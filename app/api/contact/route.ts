import { NextResponse } from "next/server";
import { Resend } from "resend";
import { validateCortletCaptcha } from "@/lib/validateCaptcha";

export async function POST(req: Request) {
    try {
        const { name, email, message, token } = await req.json();

        if (!token) {
            return NextResponse.json({
                success: false,
                error: "Missing captcha token",
            });
        }

        // 1️⃣ Validate CortletCaptcha
        const isValid = await validateCortletCaptcha(token);

        if (!isValid) {
            return NextResponse.json({
                success: false,
                error: "Invalid captcha token",
            });
        }

        // 2️⃣ Send email using Resend
        const resend = new Resend(process.env.RESEND_API_KEY);

        const result = await resend.emails.send({
            from: "Cortlet Contact Form <support@cortlet.com>",
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

        console.log("(GEmail720): Email result (CESS):", result)
        return NextResponse.json({ success: true });

    } catch (error) {
        console.error("Contact API error:", error);
        return NextResponse.json({
            success: false,
            error: "Server error",
        });
    }
}
