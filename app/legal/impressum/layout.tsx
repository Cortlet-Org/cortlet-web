import Navbar from "@/app/components/Navbar";

export const metadata = {
    title: "Legal Notice (Impressum) — Cortlet",
    description:
        "Official Legal Notice (Impressum) for Cortlet Software. Contact information, legal responsibilities, and regulatory disclosures for Cortlet products and services.",
    keywords: [
        "Cortlet",
        "Legal Notice",
        "Impressum",
        "Cortlet Software",
        "Company Information",
        "Legal Disclosure",
        "Support Contact",
    ],

    openGraph: {
        title: "Legal Notice (Impressum) — Cortlet",
        description:
            "Official Legal Notice for Cortlet Software, including contact information and legal disclosures.",
        url: "https://cortlet.com/legal/impressum",
        siteName: "Cortlet",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "https://cdn.cortlet.com/images/opengraph-images/og_light_1200x630.png",
                width: 1200,
                height: 630,
                alt: "Cortlet Legal Notice (Impressum)",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Legal Notice (Impressum) — Cortlet",
        description:
            "Official Legal Notice for Cortlet Software. Contact, legal responsibility, disclosures, and regulatory compliance.",
        images: [
            "https://cdn.cortlet.com/images/opengraph-images/og_light_1200x630.png",
        ],
        creator: "@cortlet",
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function ImpressumLayout({
                                            children,
                                        }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />

            <main className="w-full min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
                {children}
            </main>
        </>
    );
}
