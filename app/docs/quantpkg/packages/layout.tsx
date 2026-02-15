import Navbar from "@/app/components/Navbar";
import QuantpkgSidebar from "../sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Quantpkg Package Management — Cortlet Docs",
    description: "Learn how to install packages using Quantpkg, the minimal GitHub-powered C++ package manager.",
    openGraph: {
        title: "Quantpkg Packages — Cortlet",
        description: "Guide for installing GitHub-hosted packages using Quantpkg.",
        url: "https://cortlet.com/docs/quantpkg/packages",
        siteName: "Cortlet",
        type: "article"
    }
};

export default function QuantpkgPackagesLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />

            <div className="pt-24 px-6 max-w-7xl mx-auto flex gap-10">
                <QuantpkgSidebar />
                <div className="flex-1">
                    {children}
                </div>
            </div>
        </>
    );
}
