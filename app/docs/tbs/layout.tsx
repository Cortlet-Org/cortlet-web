import type { Metadata } from "next";
import TBSSidebar from "./sidebar";
export const metadata: Metadata = {
    title: "TBS Documentation — Cortlet",
    description:
        "Official documentation for TBS (Teretalia Boot Set) by Cortlet — a Dart-based DSL for building BIOS bootloaders.",

    // OpenGraph
    openGraph: {
        title: "TBS Documentation — by Cortlet",
        description:
            "Learn how to build BIOS-level bootloaders using Dart with TBS. Includes examples, API reference, platform support, and troubleshooting.",
        url: "https://www.cortlet.com/docs/tbs",
        siteName: "TBS Docs",
        type: "website",
        locale: "en_US",
    },

    // Twitter
    twitter: {
        card: "summary_large_image",
        title: "TBS Documentation — Cortlet",
        description:
            "Dart Bootloader Builder: Learn TBS, a Dart DSL for building BIOS boot sectors.",
    },

    // Icons
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },

    keywords: [
        "TBS",
        "Teretalia Boot Set",
        "Cortlet",
        "Dart bootloader",
        "BIOS boot sector",
        "Dart DSL",
        "OS development",
        "bootloaders",
    ],
};

// ────────────────────────────────────────────────────────────────
// LAYOUT COMPONENT
// ────────────────────────────────────────────────────────────────

export default function TBSLayout({
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
