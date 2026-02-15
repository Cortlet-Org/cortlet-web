import Navbar from "@/app/components/Navbar";
import QuantpkgSidebar from "../sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Quantpkg Configuration — Cortlet Docs",
    description: "Quantpkg has zero configuration. Learn how its simple no-config design works.",
    openGraph: {
        title: "Quantpkg Config — Cortlet",
        description: "Zero-configuration package manager.",
        url: "https://cortlet.com/docs/quantpkg/config",
        siteName: "Cortlet",
        type: "article",
    }
};

export default function QuantpkgConfigLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />

            <div className="pt-24 px-6 max-w-7xl mx-auto flex gap-10">
                <QuantpkgSidebar />
                <div className="flex-1">{children}</div>
            </div>
        </>
    );
}
