import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Fonts
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

const mono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
});

// OpenGraph + Twitter + Canonical + Meta
export const metadata: Metadata = {
    title: {
        default: "Cortlet — Developer Tools",
        template: "%s | Cortlet",
    },
    description: "Cutting-edge developer tools engineered for precision, reliability, and performance.",

    openGraph: {
        title: "Cortlet — Developer Tools",
        description: "Cortlet creates high-performance developer tools for modern engineering workflows.",
        url: "https://cortlet.com",
        siteName: "Cortlet",
        images: [
            {
                url: "https://ctascdn.s3.amazonaws.com/images/opengraph-images/og_dark_1200x630.png",
                width: 1200,
                height: 630,
                alt: "Cortlet OpenGraph Image",
            },
        ],
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Cortlet — Developer Tools",
        description: "High-performance developer tooling designed for speed and precision.",
        images: ["https://cdn.cortlet.com/images/opengraph-images/og_dark_1200x630.png"],
        creator: "@cortlet",
    },

    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "https://cdn.cortlet.com/images/sized-images/icon_light_128.png",
    },

    metadataBase: new URL("https://cortlet.com"),

    alternates: {
        canonical: "https://cortlet.com",
    },
    manifest: "/manifest.json"
};

// JSON-LD → Google Structured Data
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Cortlet",
    "url": "https://cortlet.com",
    "logo": "https://cdn.cortlet.com/images/sized-images/icon_light_512.png",
    "description": "High-performance developer tools built for reliability and precision.",
    "sameAs": [
        "https://github.com/Cortlet-Org",
    ],
    "brand": {
        "@type": "Brand",
        "name": "Cortlet",
        "logo": "https://cdn.cortlet.com/images/sized-images/icon_light_512.png"
    }
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`dark ${inter.variable} ${mono.variable}`}>
        <head>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </head>

        <body className="antialiased bg-white text-black dark:bg-black dark:text-white font-sans">
        {children}
        </body>
        </html>
    );
}
