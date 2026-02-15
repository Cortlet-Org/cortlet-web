import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "seo4spa (NPM) | Cortlet",
    description:
        "seo4spa is an NPM package that dynamically updates meta tags, title, and OpenGraph data inside Single Page Applications.",
    openGraph: {
        title: "seo4spa – Dynamic Meta Tag Updates for SPAs",
        description:
            "An NPM package that updates metadata at runtime inside SPAs during client-side navigation.",
        url: "https://cortlet.com/products/seo4spa",
        images: [
            {
                url: "https://cdn.cortlet.com/images/opengraph-images/og_dark_1200x630.png",
                width: 1200,
                height: 630,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
    },
};

export default function Seo4SpaLayout({
                                          children,
                                      }: {
    children: React.ReactNode;
}) {
    return <div className="min-h-screen w-full">{children}</div>;
}
