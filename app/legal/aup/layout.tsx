// /app/legal/aup/page.tsx
import Navbar from "@/app/components/Navbar";

export const metadata = {
    title: "Acceptable Use Policy — Cortlet",
    description:
        "The Acceptable Use Policy governing how Cortlet services, SDKs, APIs, and platforms may be used.",
    openGraph: {
        title: "Cortlet Acceptable Use Policy",
        description:
            "Rules and permitted usage for Cortlet services and developer tools.",
        url: "https://cortlet.com/legal/aup",
        siteName: "Cortlet",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Cortlet AUP",
        description:
            "Rules and permitted usage for Cortlet services and developer tools.",
    },
};

export default function LegalAupLayout({
                                           children,
                                       }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />

            <main className="pt-28 pb-24 px-6 max-w-4xl mx-auto">
                {children}
            </main>
        </>
    );
}
