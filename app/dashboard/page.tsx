"use client";

import { useAuth } from "@/app/hooks/useAuth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/app/components/Navbar";

export default function DashboardPage() {
    const { user, loading } = useAuth();
    const router = useRouter();

    // 🚀 Secure redirect
    useEffect(() => {
        if (!loading && !user) {
            router.replace("/login");
        }
    }, [loading, user, router]);

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center text-neutral-600 dark:text-neutral-300">
                Loading dashboard…
            </div>
        );
    }

    if (!user) return null;

    return (
        <>
            <Navbar />

            <main className="pt-32 px-6 max-w-6xl mx-auto select-none">

                {/* HEADER */}
                <h1 className="text-5xl font-bold mb-3">
                    Hello, Developer.
                </h1>

                <p className="text-neutral-700 dark:text-neutral-300 text-xl mb-12">
                    Your name is <strong>{user.displayName}</strong>.
                </p>

                {/* DASHBOARD GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

                    {/* SDKs CARD */}
                    <div className="
                        p-8 rounded-2xl
                        border border-neutral-300 dark:border-neutral-800
                        bg-white dark:bg-neutral-900
                        hover:border-neutral-500 dark:hover:border-neutral-400
                        transition-all
                    ">
                        <h2 className="text-2xl font-semibold mb-3">
                            SDKs
                        </h2>

                        <p className="text-neutral-700 dark:text-neutral-400 mb-4">
                            No SDKs available yet.
                        </p>

                        <div className="
                            text-sm text-yellow-500 dark:text-yellow-400 font-medium
                        ">
                            Coming soon.
                        </div>
                    </div>

                    {/* APIs CARD */}
                    <div className="
                        p-8 rounded-2xl
                        border border-neutral-300 dark:border-neutral-800
                        bg-white dark:bg-neutral-900
                        hover:border-neutral-500 dark:hover:border-neutral-400
                        transition-all
                    ">
                        <h2 className="text-2xl font-semibold mb-3">
                            APIs
                        </h2>

                        <p className="text-neutral-700 dark:text-neutral-400 mb-4">
                            No APIs available yet.
                        </p>

                        <div className="
                            text-sm text-yellow-500 dark:text-yellow-400 font-medium
                        ">
                            Coming soon.
                        </div>
                    </div>

                </div>

            </main>
        </>
    );
}
