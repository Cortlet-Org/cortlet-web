import Navbar from "@/app/components/Navbar";
import QuantpkgSidebar from "../sidebar";
import type { Metadata } from "next";

// ⭐ FULL PRODUCTION-READY SEO ⭐
export const metadata: Metadata = {
    title: "Quantpkg Usage — Cortlet Docs",
    description: "Learn how to use Quantpkg, the lightweight GitHub-powered C++ package manager.",

    keywords: [
        "quantpkg",
        "c++ package manager",
        "cpp packages",
        "c++ tooling",
        "c++ dependency manager",
        "cortlet",
        "developer tools"
    ],

    openGraph: {
        title: "Quantpkg Usage — Cortlet",
        description: "Learn how to use Quantpkg: initializing projects, installing packages, and running commands.",
        url: "https://cortlet.com/docs/quantpkg/usage",
        siteName: "Cortlet",
        type: "article",
        images: [
            {
                url: "https://cdn.cortlet.com/images/previews/quantpkg-docs.png",
                width: 1200,
                height: 630,
                alt: "Quantpkg Documentation Preview"
            }
        ]
    },

    twitter: {
        card: "summary_large_image",
        title: "Quantpkg Usage — Cortlet",
        description: "Learn how to use the Quantpkg C++ package manager effectively.",
        images: ["https://cdn.cortlet.com/images/previews/quantpkg-docs.png"]
    },

    alternates: {
        canonical: "https://cortlet.com/docs/quantpkg/usage"
    }
};

export default function QuantpkgUsageLayout({
                                                children,
                                            }: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* NAVBAR ALWAYS ON TOP */}
            <Navbar />

            {/* MAIN DOC WRAPPER */}
            <div className="pt-24 px-6 max-w-7xl mx-auto flex gap-10">

                {/* SIDEBAR */}
                <QuantpkgSidebar />

                {/* CONTENT */}
                <div className="flex-1">
                    {/* ⭐ JSON-LD STRUCTURED DATA ⭐ */}
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "TechArticle",
                                headline: "Quantpkg Usage",
                                about: "How to use the Quantpkg C++ package manager.",
                                author: {
                                    "@type": "Organization",
                                    name: "Cortlet",
                                    url: "https://cortlet.com"
                                },
                                publisher: {
                                    "@type": "Organization",
                                    name: "Cortlet",
                                    logo: {
                                        "@type": "ImageObject",
                                        url: "https://cdn.cortlet.com/images/sized-images/icon_light_512.png"
                                    }
                                },
                                url: "https://cortlet.com/docs/quantpkg/usage",
                                mainEntityOfPage: "https://cortlet.com/docs/quantpkg/usage"
                            })
                        }}
                    />

                    {children}
                </div>
            </div>
        </>
    );
}
