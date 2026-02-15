import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Framework Support — seo4spa Docs",
    description:
        "Learn how to use seo4spa with React Router, Vue, SvelteKit, Next.js, and other SPA frameworks.",
    openGraph: {
        title: "Framework Support — seo4spa",
        description:
            "Integration guides for using seo4spa across popular SPA frameworks such as React Router, Vue, SvelteKit, and more.",
        url: "https://cortlet.com/docs/seo4spa/frameworks",
        siteName: "Cortlet Docs",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Framework Support — seo4spa",
        description:
            "Integration guides for using seo4spa across popular SPA frameworks such as React Router, Vue, SvelteKit, and more.",
    },
};

export default function Seo4SpaFrameworksLayout({
                                                    children,
                                                }: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex w-full min-h-screen">

            {/* PAGE CONTENT */}
            <div className="flex-1">
                {children}
            </div>

        </div>
    );
}
