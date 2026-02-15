import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";

export const metadata: Metadata = {
    title: "Developer Dashboard — Cortlet",
    description: "Manage your Cortlet developer account, settings, API access, and tools.",
    openGraph: {
        title: "Cortlet Developer Dashboard",
        description: "View your account, activity, and developer tools in one place.",
        url: "https://cortlet.com/dashboard",
        siteName: "Cortlet",
        type: "website",
    },
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />

            <main className="pt-24 pb-32 px-6 min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors">
                <div className="max-w-6xl mx-auto">
                    {children}
                </div>
            </main>
        </>
    );
}
