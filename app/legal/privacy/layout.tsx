import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy — Cortlet",
    description:
        "Learn how Cortlet collects, uses, and protects your data. Includes details on analytics, security logging, and developer authentication.",
    metadataBase: new URL("https://cortlet.com"),
    alternates: {
        canonical: "/legal/privacy",
    },
    openGraph: {
        title: "Cortlet Privacy Policy",
        description:
            "Information on data usage, analytics, authentication, and privacy practices at Cortlet.",
        url: "https://cortlet.com/legal/privacy",
        siteName: "Cortlet",
        type: "article",
    }
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="max-w-4xl mx-auto w-full">
            {children}
        </section>
    );
}
