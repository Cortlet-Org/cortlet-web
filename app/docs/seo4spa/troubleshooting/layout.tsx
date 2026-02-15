import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "seo4spa — Troubleshooting | Cortlet Docs",
    description:
        "Fix common issues when using seo4spa in Single Page Applications. Learn why meta tags aren't updating and how to resolve framework-specific problems.",
    alternates: {
        canonical: "https://cortlet.com/docs/seo4spa/troubleshooting",
    },
    openGraph: {
        title: "seo4spa — Troubleshooting",
        description:
            "Solve issues with meta tags not updating, framework integration, and SPA navigation using seo4spa.",
        url: "https://cortlet.com/docs/seo4spa/troubleshooting",
        siteName: "Cortlet",
        type: "article",
        images: [
            {
                url: "https://cdn.cortlet.com/images/seo4spa/og-banner.png",
                width: 1200,
                height: 630,
                alt: "seo4spa Troubleshooting",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "seo4spa — Troubleshooting",
        description:
            "Common issues and fixes for using seo4spa in dynamic Single Page Apps.",
        images: ["https://cdn.cortlet.com/images/seo4spa/og-banner.png"],
    },
};

export default function Seo4SpaTroubleshootingLayout({
                                                         children,
                                                     }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        name: "seo4spa Troubleshooting Guide",
                        description:
                            "Common fixes and debugging steps for the seo4spa JavaScript SEO library.",
                        url: "https://cortlet.com/docs/seo4spa/troubleshooting",
                        publisher: {
                            "@type": "Organization",
                            name: "Cortlet",
                            url: "https://cortlet.com",
                        },
                    }),
                }}
            />
            <div className="flex w-full">{children}</div>
        </>
    );
}
