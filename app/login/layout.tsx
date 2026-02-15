import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Log In — Cortlet",
    description: "Sign in with Google or GitHub to access your Cortlet developer dashboard.",
    openGraph: {
        title: "Log In — Cortlet",
        description: "Authenticate securely with Google or GitHub.",
        url: "https://cortlet.com/login",
        siteName: "Cortlet",
        type: "website",
    },
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors flex items-center justify-center p-6">
            {children}
        </main>
    );
}
