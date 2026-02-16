// /app/legal/apache-2/page.tsx
import Navbar from "@/app/components/Navbar";

export const metadata = {
    title: "Apache 2.0 License — Cortlet",
    description: "View the full Apache License 2.0 text as used by Cortlet open-source projects.",
    openGraph: {
        title: "Apache 2.0 License — Cortlet",
        description: "Official Apache License 2.0 legal document for Cortlet projects.",
        url: "https://cortlet.com/legal/apache-2",
        siteName: "Cortlet",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Apache 2.0 License — Cortlet",
        description: "Full Apache 2.0 license text.",
    },
};

export default function ApacheLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />

            <main className="pt-28 pb-24 px-6 max-w-4xl mx-auto">
                {children}
            </main>
        </>
    );
}
