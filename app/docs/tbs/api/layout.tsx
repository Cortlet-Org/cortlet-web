import type { Metadata } from "next";
import TBSSidebar from "../sidebar";

export const metadata: Metadata = {
    title: "API Reference — TBS Documentation",
    description:
        "Explore the full API reference for TBS (Teretalia Boot Set) by Cortlet, including register operations, printing, halting, and compiling bootloaders.",

    openGraph: {
        title: "API Reference — TBS Documentation",
        description:
            "A complete list of functions available in TBS, including register access, printing, BIOS interrupts, and bootloader control.",
        url: "https://cortlet.com/docs/tbs/api",
        type: "article",
        siteName: "Cortlet",
    },

    keywords: [
        "TBS API",
        "TBS reference",
        "TBS functions",
        "Dart bootloader API",
        "Cortlet",
        "Teretalia Boot Set",
        "TBS documentation",
        "TBS DSL",
    ],
};

export default function TBSApiLayout({
                                         children,
                                     }: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-neutral-100">

            {/* SIDEBAR */}
            <TBSSidebar />

            {/* CONTENT */}
            <main className="flex-1 lg:ml-72 px-6 md:px-12 py-16">
                {children}
            </main>
        </div>
    );
}
