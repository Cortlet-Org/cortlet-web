import type { Metadata } from "next";
import TBSSidebar from "../sidebar"

export const metadata: Metadata = {
    title: "Writing Dart Bootloaders — TBS Documentation",
    description:
        "Learn how to write BIOS-level bootloaders in Dart using TBS (Teretalia Boot Set) by Cortlet. Includes registers, interrupts, printing, halting, and examples.",

    openGraph: {
        title: "Writing Dart Bootloaders — TBS Documentation",
        description:
            "A complete guide to writing BIOS boot sectors using Dart and the TBS DSL created by Cortlet.",
        url: "https://cortlet.com/docs/tbs/bootloaders",
        type: "article",
        siteName: "Cortlet",
    },

    keywords: [
        "TBS bootloader",
        "Dart bootloader",
        "Cortlet",
        "Teretalia Boot Set",
        "BIOS boot sector",
        "Dart registers",
        "TBS DSL",
    ],
};

export default function TBSBootloadersLayout({
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
