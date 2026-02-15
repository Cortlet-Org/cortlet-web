import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Install seo4spa — Docs",
    description: "Installation guide for seo4spa, the SEO enhancement layer for SPA frameworks.",
    openGraph: {
        title: "Install seo4spa",
        description: "Installation guide for seo4spa, including npm, yarn, pnpm, and bun commands.",
        type: "article",
        url: "https://cortlet.com/docs/seo4spa/install",
    },
    alternates: {
        canonical: "https://cortlet.com/docs/seo4spa/install",
    }
};

export default function Seo4SpaInstallLayout({
                                                 children,
                                             }: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex w-full min-h-screen overflow-hidden font-sans">

            {/* SIDEBAR (automatically rendered by /docs/seo4spa/sidebar.tsx inside the page) */}
            {/* The page itself (page.tsx) includes <Seo4SpaSidebar /> so we don't include it here */}

            {/* MAIN CONTENT AREA */}
            <div className="flex-1 p-10 pt-28">
                {children}
            </div>

        </div>
    );
}
