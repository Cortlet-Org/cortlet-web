import QuantpkgSidebar from "../sidebar";
import Navbar from "@/app/components/Navbar";

export const metadata = {
    title: "Quantpkg Installation — Cortlet",
    description: "How to install Quantpkg on Windows or Linux.",
    openGraph: {
        title: "Quantpkg Installation — Cortlet",
        description: "Guide for downloading and installing Quantpkg.",
        type: "article",
        url: "https://cortlet.com/docs/quantpkg/install"
    }
};

export default function QuantpkgInstallLayout({
                                                  children,
                                              }: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* GLOBAL NAV */}
            <Navbar />

            {/* MAIN DOCS WRAPPER */}
            <div className="pt-24 flex">

                {/* FIXED SIDEBAR */}
                <QuantpkgSidebar />

                {/* PAGE CONTENT */}
                <main className="flex-1 px-10 pb-32">
                    {children}
                </main>

            </div>
        </>
    );
}
