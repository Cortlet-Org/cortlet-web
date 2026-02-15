// /app/legal/mit/layout.tsx
import Navbar from "@/app/components/Navbar";

export const metadata = {
    title: "MIT License — Cortlet",
    description: "View the official MIT License text as used by Cortlet projects.",
    openGraph: {
        title: "MIT License — Cortlet",
        description: "Official MIT license legal document.",
        url: "https://cortlet.com/legal/mit",
        siteName: "Cortlet",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "MIT License — Cortlet",
        description: "Full MIT license text.",
    },
};

export default function MitLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <main className="pt-28 pb-24 px-6 max-w-4xl mx-auto">
                {children}
            </main>
        </>
    );
}
