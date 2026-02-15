import type { Metadata } from "next";
import QuantpkgSidebar from "./sidebar";
import Navbar from "@/app/components/Navbar";
import Seo4SpaSidebar from "@/app/docs/seo4spa/sidebar";

export const metadata: Metadata = {
    title: "Quantpkg Documentation — Cortlet",
    description: "Documentation for Quantpkg, Cortlet’s lightweight C++ package manager.",
    openGraph: {
        title: "Quantpkg Documentation — Cortlet",
        description: "Learn how to install, use, and manage C++ packages with Quantpkg.",
        url: "https://cortlet.com/docs/quantpkg",
        type: "article",
    },
};

export default function QuantpkgLayout({
                                           children,
                                       }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />

            <div className="flex w-full">

                {/* FIXED SIDEBAR */}
                <QuantpkgSidebar />

                {/* MAIN CONTENT — SHIFTED RIGHT SO IT IS NEVER HIDDEN */}
                <main className="flex-1 md:ml-72 px-10 pt-24 pb-24 max-w-5xl">
                    {children}
                </main>

            </div>
        </>
    );
}
