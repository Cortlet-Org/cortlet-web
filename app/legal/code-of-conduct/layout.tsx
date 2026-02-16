// /app/legal/conduct/page.tsx
import Navbar from "@/app/components/Navbar";

export const metadata = {
    title: "Code of Conduct — Cortlet",
    description: "Guidelines and expectations for behavior when using Cortlet tools, services, and community spaces.",
    openGraph: {
        title: "Code of Conduct — Cortlet",
        description: "Understand Cortlet’s behavioral guidelines and usage expectations.",
        url: "https://cortlet.com/legal/conduct",
        siteName: "Cortlet",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Code of Conduct — Cortlet",
        description: "Guidelines and expectations for interacting with Cortlet services.",
    }
};

export default function LegalConductLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />

            <main className="pt-28 pb-24 px-6 max-w-4xl mx-auto">
                {children}
            </main>
        </>
    );
}
