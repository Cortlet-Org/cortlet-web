"use client";
import { useState } from "react";
import CortletCaptcha from "@/app/components/CortletCaptcha";

export default function ContactPage() {
    const [status, setStatus] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);

    async function handleSubmit(e: any) {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        if (!captchaToken) {
            setStatus("Please complete the human verification.");
            setLoading(false);
            return;
        }

        try {
            const formData = new FormData(e.target);
            const name = formData.get("name");
            const email = formData.get("email");
            const message = formData.get("message");

            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                    token: captchaToken, // ← CortletCaptcha token
                }),
            });

            const data = await res.json();

            if (data.success) {
                setStatus("Message sent! Our support team will get back in around 1–2 days (worst case: 2–4 days).");

                if (e.target) e.target.reset();
                setCaptchaToken(null);
            } else {
                setStatus("Captcha failed or email failed. Please try again.");
            }
        } catch (error) {
            console.error(error);
            setStatus("Something went wrong. Try again.");
        }

        setLoading(false);
    }

    return (
        <main className="w-full min-h-screen bg-white text-black dark:bg-black dark:text-white px-6 py-24 transition">

            <h1 className="text-5xl font-bold text-center mb-10">Contact Us</h1>

            <form
                onSubmit={handleSubmit}
                className="max-w-xl mx-auto bg-neutral-100 dark:bg-neutral-900 p-8 rounded-2xl border border-neutral-300 dark:border-neutral-700"
            >
                <div className="mb-6">
                    <label className="block mb-1 text-lg">Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700"
                    />
                </div>

                <div className="mb-6">
                    <label className="block mb-1 text-lg">Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700"
                    />
                </div>

                <div className="mb-6">
                    <label className="block mb-1 text-lg">Message</label>
                    <textarea
                        name="message"
                        rows={5}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700"
                    ></textarea>
                </div>

                {/* CortletCaptcha Widget */}
                <CortletCaptcha onToken={(t) => setCaptchaToken(t)} />

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium hover:opacity-80 transition mt-6"
                >
                    {loading ? "Sending..." : "Send Message"}
                </button>

                {status && (
                    <p
                        className={`mt-4 text-center ${
                            status.startsWith("Message sent")
                                ? "text-green-400"
                                : "text-red-400"
                        }`}
                    >
                        {status}
                    </p>
                )}
            </form>
        </main>
    );
}
