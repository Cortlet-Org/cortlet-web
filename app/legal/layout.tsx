import Navbar from "@/app/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Legal Information — Cortlet",
    description:
        "Official legal documentation for Cortlet, including Terms of Service, Privacy Policy, Cookie Policy, EULA, and Open Source Licenses.",
    metadataBase: new URL("https://cortlet.com"),
    alternates: {
        canonical: "/legal",
    },
    openGraph: {
        title: "Cortlet Legal Center",
        description:
            "View all official Cortlet legal documents in one place — Privacy, Terms, Cookie Policy, EULA, and open-source license information.",
        url: "https://cortlet.com/legal",
        siteName: "Cortlet",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
    },
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#000000" },
    ],
    authors: [{ name: "Cortlet" }],
    creator: "Cortlet",
    publisher: "Cortlet",
};

export default function LegalLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />

            {/* Wrapper for all legal pages */}
            <main className="pt-28 px-6 max-w-6xl mx-auto pb-32">
                {children}
            </main>
        </>
    );
}
