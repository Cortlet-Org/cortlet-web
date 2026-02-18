import type { Metadata } from "next";
import TBSSidebar from "../sidebar";

export const metadata: Metadata = {
    title: "Install TBS — Dart Bootloader Toolkit",
    description:
        "Learn how to install TBS (Teretalia Boot Set) by Cortlet. Step-by-step guide for adding TBS to your Dart or Flutter project using pub.dev.",

    openGraph: {
        title: "Install TBS — Official Guide",
        description:
            "Step-by-step installation instructions for TBS, the Dart-based BIOS bootloader toolkit by Cortlet.",
        url: "https://www.cortlet.com/docs/tbs/install",
        type: "article",
    },

    twitter: {
        card: "summary_large_image",
        title: "Install TBS — Dart BIOS Bootloader Toolkit",
        description:
            "Official installation instructions for TBS, a Dart DSL for creating BIOS boot sectors.",
    },

    keywords: [
        "TBS install",
        "Teretalia Boot Set installation",
        "Dart bootloader setup",
        "Cortlet",
        "pub.dev tbs",
    ],
};

export default function TBSInstallLayout({
                                             children,
                                         }: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-neutral-100">

            {/* SIDEBAR LEFT */}
            <TBSSidebar />

            {/* MAIN CONTENT */}
            <main className="flex-1 lg:ml-72 px-6 md:px-12 py-16">
                {children}
            </main>
        </div>
    );
}
