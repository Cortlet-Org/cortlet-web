"use client";

import { useState } from "react";
import Seo4SpaSidebar from "../sidebar";

export default function Seo4SpaInstallPage() {
    const tabs = ["npm", "yarn", "pnpm", "bun"] as const;

    const [active, setActive] = useState<(typeof tabs)[number]>("npm");

    const commands: Record<typeof active, string> = {
        npm: "npm install seo4spa",
        yarn: "yarn add seo4spa",
        pnpm: "pnpm add seo4spa",
        bun: "bun add seo4spa",
    };

    return (
        <div className="flex w-full pt-28">

            {/* SIDEBAR */}
            <Seo4SpaSidebar />

            {/* MAIN CONTENT */}
            <main className="flex-1 px-10 pb-32">

                {/* HEADER */}
                <h1 className="text-5xl font-bold mb-4">Installation</h1>

                <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-10 max-w-2xl">
                    Install <strong>seo4spa</strong> using any modern JavaScript package manager.
                    Choose your preferred tool below.
                </p>

                {/* INSTALL TABS */}
                <div className="mb-8">
                    <div className="inline-flex bg-neutral-200 dark:bg-neutral-900 p-1 rounded-xl select-none">

                        {tabs.map((t) => (
                            <button
                                key={t}
                                onClick={() => setActive(t)}
                                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all
                                    ${
                                    active === t
                                        ? "bg-white dark:bg-black shadow text-black dark:text-white"
                                        : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                                }
                                `}
                            >
                                {t.toUpperCase()}
                            </button>
                        ))}

                    </div>
                </div>

                {/* TERMINAL UI */}
                <div
                    className="
                        rounded-xl overflow-hidden border
                        border-neutral-300 dark:border-neutral-800
                        bg-neutral-100 dark:bg-neutral-900 shadow-sm
                    "
                >
                    {/* TERMINAL HEADER */}
                    <div className="flex items-center gap-2 px-4 py-2 bg-neutral-200 dark:bg-neutral-800 border-b border-neutral-300 dark:border-neutral-700">
                        <span className="w-3 h-3 rounded-full bg-red-500" />
                        <span className="w-3 h-3 rounded-full bg-yellow-500" />
                        <span className="w-3 h-3 rounded-full bg-green-500" />
                    </div>

                    {/* TERMINAL CONTENT */}
                    <pre className="p-6 text-sm font-mono text-neutral-900 dark:text-neutral-100">
                        <code className="select-all">{commands[active]}</code>
                    </pre>
                </div>

                <p className="mt-6 text-neutral-600 dark:text-neutral-400 text-sm">
                    seo4spa is fully ESM-ready and supports all major frontend tooling environments.
                </p>

            </main>
        </div>
    );
}
