import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "seo4spa — Updating Meta Tags | Cortlet Documentation",
    description:
        "Learn how to dynamically update OpenGraph and meta name tags in Single Page Applications using seo4spa.",
    openGraph: {
        title: "seo4spa — Updating Meta Tags",
        description:
            "Guide for using MetaTag.Property and MetaTag.Name to dynamically update meta tags.",
        url: "https://cortlet.com/docs/seo4spa/meta",
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
        title: "seo4spa — Meta Tag Guide",
        description:
            "How to update SEO meta tags dynamically inside SPA apps using seo4spa.",
        images: [
            "https://cdn.cortlet.com/images/opengraph-images/og_dark_1200x630.png",
        ],
    },
};

export default function Seo4SpaMetaLayout({
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
