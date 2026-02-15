import Navbar from "@/app/components/Navbar";
import Seo4SpaSidebar from "./sidebar";

export const metadata = {
    title: "seo4spa Documentation — Cortlet",
    description: "Documentation for seo4spa, the SPA meta tag updater.",
    openGraph: {
        title: "seo4spa Docs — Cortlet",
        description: "Learn how to use seo4spa in your SPA framework.",
        url: "https://cortlet.com/docs/seo4spa",
        siteName: "Cortlet",
        type: "article",
    }
};

export default function Seo4SpaLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />

            <div className="flex w-full">

                {/* FIXED SIDEBAR */}
                <Seo4SpaSidebar />

                {/* MAIN CONTENT — SHIFTED RIGHT SO IT IS NEVER HIDDEN */}
                <main className="flex-1 md:ml-72 px-10 pt-24 pb-24 max-w-5xl">
                    {children}
                </main>

            </div>
        </>
    );
}
