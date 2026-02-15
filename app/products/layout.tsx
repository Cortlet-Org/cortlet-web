import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cortlet Products",
    description: "Explore Cortlet's developer tools.",
    openGraph: {
        title: "Cortlet Products",
        description: "Explore Cortlet's developer tools.",
        url: "https://cortlet.com/products",
        siteName: "Cortlet",
        images: [
            {
                url: "https://cdn.cortlet.com/images/opengraph-images/og_dark_1200x630.png",
                width: 1200,
                height: 630,
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        images: [
            "https://cdn.cortlet.com/images/opengraph-images/og_dark_800x418.png",
        ],
    },
};

export default function ProductsLayout({
                                           children,
                                       }: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
            {children}
        </div>
    );
}
