// /app/legal/cookie/page.tsx
import Navbar from "@/app/components/Navbar";

export const metadata = {
    title: "Cookie Policy — Cortlet",
    description: "Learn how Cortlet uses cookies, analytics identifiers, and tracking technologies.",
    openGraph: {
        title: "Cookie Policy — Cortlet",
        description: "Learn how Cortlet uses cookies and analytics identifiers.",
        url: "https://cortlet.com/legal/cookie",
        siteName: "Cortlet",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Cookie Policy — Cortlet",
        description: "Learn how Cortlet uses cookies and analytics identifiers.",
    }
};

export default function LegalCookieLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />

            <main className="pt-28 pb-24 px-6 max-w-4xl mx-auto">
                {children}
            </main>
        </>
    );
}
