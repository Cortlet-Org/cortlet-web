import Navbar from "@/app/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cortlet Documentation",
    description: "Documentation for Cortlet developer tools including seo4spa and Quantpkg.",
    openGraph: {
        title: "Cortlet Documentation",
        description: "Learn how to use Cortlet tools with clean and organized developer docs.",
        url: "https://cortlet.com/docs",
        siteName: "Cortlet",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Cortlet Docs",
        description: "Developer documentation for seo4spa, Quantpkg, and more.",
    }
};

export default function DocsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />

            {/* PAGE WRAPPER */}
            <main
                className="
                    pt-24
                    px-6
                    max-w-7xl mx-auto
                    flex gap-10
                    min-h-screen
                    transition-colors duration-300
                "
            >
                {children}
            </main>
        </>
    );
}
