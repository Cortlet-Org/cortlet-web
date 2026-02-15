import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service — Cortlet",
    description:
        "The official Cortlet Terms of Service. Understand your rights, obligations, acceptable use rules, account guidelines, and limitations of liability.",
    metadataBase: new URL("https://cortlet.com"),
    alternates: {
        canonical: "/legal/tos",
    },
    openGraph: {
        title: "Cortlet Terms of Service",
        description:
            "Review the Cortlet Terms of Service, outlining user responsibilities, platform rules, limitations, and legal conditions.",
        url: "https://cortlet.com/legal/tos",
        siteName: "Cortlet",
        type: "article",
    },
    robots: {
        index: true,
        follow: true,
    },
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#000000" },
    ],
};

export default function ToSLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="max-w-4xl mx-auto w-full pt-20 pb-32 px-6">
            {children}
        </section>
    );
}
