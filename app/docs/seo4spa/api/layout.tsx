import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "seo4spa — API Reference | Cortlet Docs",
    description:
        "Full API reference for seo4spa, including MetaTag.Property and MetaTag.Name. Learn how to update meta tags dynamically in any SPA framework.",

    alternates: {
        canonical: "https://cortlet.com/docs/seo4spa/api",
    },

    openGraph: {
        title: "seo4spa — API Reference",
        description:
            "Official API documentation for seo4spa, the lightweight SEO utility for SPAs.",
        url: "https://cortlet.com/docs/seo4spa/api",
        siteName: "Cortlet",
        type: "article",
        images: [
            {
                url: "https://cdn.cortlet.com/images/seo4spa/og-banner.png",
                width: 1200,
                height: 630,
                alt: "seo4spa API Reference",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "seo4spa — API Reference",
        description:
            "Explore the complete API reference for seo4spa, including dynamic SEO meta tag utilities for SPAs.",
        images: ["https://cdn.cortlet.com/images/seo4spa/og-banner.png"],
    },
};

export default function Seo4SpaApiLayout({
                                             children,
                                         }: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* JSON-LD STRUCTURED DATA */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "TechArticle",
                        headline: "seo4spa — API Reference",
                        description:
                            "Documentation for the seo4spa JavaScript library, including meta tag utilities and usage examples.",
                        url: "https://cortlet.com/docs/seo4spa/api",
                        publisher: {
                            "@type": "Organization",
                            name: "Cortlet",
                            url: "https://cortlet.com",
                            logo: {
                                "@type": "ImageObject",
                                url: "https://cdn.cortlet.com/images/sized-images/icon_light_512.png",
                            },
                        },
                    }),
                }}
            />

            {/* PAGE CONTENT */}
            <div className="flex w-full">
                {children}
            </div>
        </>
    );
}
