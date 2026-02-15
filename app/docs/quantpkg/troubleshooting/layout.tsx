import Navbar from "@/app/components/Navbar";
import QuantpkgSidebar from "../sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Quantpkg — Troubleshooting",
    description: "Fix common Quantpkg installation and package errors.",
    openGraph: {
        title: "Quantpkg Troubleshooting",
        description: "Learn how to diagnose Quantpkg errors and installation problems.",
        url: "https://cortlet.com/docs/quantpkg/troubleshooting",
        siteName: "Cortlet",
        type: "article",
    }
};

export default function QuantpkgTroubleshootingLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <main className="pt-24 px-6 max-w-7xl mx-auto flex gap-10">
                <QuantpkgSidebar />
                <div className="flex-1">{children}</div>
            </main>
        </>
    );
}
