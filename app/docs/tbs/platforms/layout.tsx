import type { Metadata } from "next";
import TBSSidebar from "../sidebar";

export const metadata: Metadata = {
    title: "Platform Support — TBS Documentation",
    description:
        "Learn which platforms support TBS (Teretalia Boot Set) by Cortlet, including Linux, macOS, and Windows compatibility details.",

    openGraph: {
        title: "Platform Support — TBS Documentation",
        description:
            "Supported platforms for TBS (Teretalia Boot Set), including Linux, macOS, and Windows.",
        url: "https://cortlet.com/docs/tbs/platforms",
        type: "article",
        siteName: "Cortlet",
    },

    keywords: [
        "TBS platform support",
        "TBS Linux",
        "TBS macOS",
        "TBS Windows",
        "Cortlet",
        "Teretalia Boot Set",
        "Dart bootloader platforms",
    ],
};

export default function TBSPlatformsLayout({
                                               children,
                                           }: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-neutral-100">

            {/* SIDEBAR */}
            <TBSSidebar />

            {/* MAIN CONTENT */}
            <main className="flex-1 lg:ml-72 px-6 md:px-12 py-16">
                {children}
            </main>
        </div>
    );
}
