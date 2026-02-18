import type { Metadata } from "next";
import TBSSidebar from "../sidebar";

export const metadata: Metadata = {
    title: "Troubleshooting — TBS Documentation",
    description:
        "Fix common issues with TBS (Teretalia Boot Set) including BIOS printing errors, interrupt issues, compiler problems, and environment setup mistakes.",

    openGraph: {
        title: "Troubleshooting — TBS Documentation",
        description:
            "Solutions to the most common issues encountered when using TBS, the Dart-based bootloader toolkit created by Cortlet.",
        url: "https://cortlet.com/docs/tbs/troubleshooting",
        type: "article",
        siteName: "Cortlet",
    },

    keywords: [
        "TBS troubleshooting",
        "TBS errors",
        "bootloader debugging",
        "Cortlet",
        "Teretalia Boot Set issues",
        "Dart BIOS errors",
        "TBS help",
    ],
};

export default function TBSTroubleshootingLayout({
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
