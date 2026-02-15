import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "seo4spa — Practical Examples | Cortlet Docs",
    description:
        "Real-world examples showing how to update SEO metadata in SPAs using seo4spa.",
    openGraph: {
        title: "seo4spa — Practical Examples",
        description:
            "A set of practical examples demonstrating how seo4spa updates meta tags dynamically.",
        url: "https://cortlet.com/docs/seo4spa/examples",
        siteName: "Cortlet Docs",
        images: [
            {
                url: "https://cdn.cortlet.com/images/opengraph-images/og_dark_1200x630.png",
                width: 1200,
                height: 630,
            },
        ],
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "seo4spa Examples",
        description: "Practical meta-tag examples for Single Page Applications.",
        images: [
            "https://cdn.cortlet.com/images/opengraph-images/og_dark_1200x630.png",
        ],
    },
};

export default function Seo4SpaExamplesLayout({
                                                  children,
                                              }: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen w-full bg-white dark:bg-black text-black dark:text-white">
            {children}
        </div>
    );
}
