// /app/legal/eula/page.tsx
import Navbar from "@/app/components/Navbar";

export const metadata = {
    title: "End User License Agreement (EULA) — Cortlet",
    description:
        "The End User License Agreement governing the use of Cortlet applications, SDKs, software, and developer tools.",
    openGraph: {
        title: "Cortlet EULA",
        description:
            "Agreement governing the use of Cortlet applications, SDKs, and software.",
        url: "https://cortlet.com/legal/eula",
        siteName: "Cortlet",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Cortlet EULA",
        description:
            "Agreement governing the use of Cortlet applications, SDKs, and software.",
    },
};

export default function LegalEulaLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />

            <main className="pt-28 pb-24 px-6 max-w-4xl mx-auto">
                {children}
            </main>
        </>
    );
}
