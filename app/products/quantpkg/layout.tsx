import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Quantpkg — Cortlet",
    description:
        "Quantpkg is a modern, high-performance C++ package manager built for speed, reliability, and developer clarity.",
    openGraph: {
        title: "Quantpkg — High-performance C++ Package Manager",
        description:
            "Quantpkg delivers fast package resolution, clean dependency graphs, and modern tooling for C++ ecosystems.",
        url: "https://cortlet.com/products/quantpkg",
        siteName: "Cortlet",
        images: [
            {
                url: "https://cdn.cortlet.com/images/sized-images/icon_light_512.png",
                width: 1200,
                height: 630,
                alt: "Quantpkg by Cortlet",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Quantpkg — C++ Package Manager",
        description:
            "Fast, lightweight, developer-first package manager by Cortlet.",
        images: ["https://cdn.cortlet.com/images/sized-images/icon_light_512.png"],
    },
};

export default function QuantpkgLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        name: "Quantpkg",
                        operatingSystem: "Cross-platform",
                        applicationCategory: "DeveloperTool",
                        description:
                            "A fast, modern package manager for C++ ecosystems by Cortlet.",
                        url: "https://cortlet.com/products/quantpkg",
                        offers: {
                            "@type": "Offer",
                            price: "0",
                            priceCurrency: "USD",
                        },
                    }),
                }}
            />

            {children}
        </>
    );
}
