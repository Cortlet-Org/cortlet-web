import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Deconstruct | Cortlet",
    description:
        "Deconstruct helps students and individuals break down overwhelming subjects, exam topics, and stressful tasks into simple, clear steps. Available only on iOS.",
    openGraph: {
        title: "Deconstruct – Clarity for Studying & Life",
        description:
            "Break down exams, stressful subjects, and overwhelming tasks into simple, structured steps. iOS only.",
        url: "https://cortlet.com/products/deconstruct",
        type: "website",
        images: [
            {
                url: "https://cdn.cortlet.com/images/opengraph-images/og_dark_1200x630.png",
                width: 1200,
                height: 630,
                alt: "Deconstruct by Cortlet",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        images: [
            "https://cdn.cortlet.com/images/opengraph-images/og_dark_800x418.png",
        ],
    },
};

export default function DeconstructLayout({
                                              children,
                                          }: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen w-full">
            {children}
        </div>
    );
}
