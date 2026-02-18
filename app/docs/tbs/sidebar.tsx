"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

export default function TBSSidebar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const links = [
        { label: "Introduction", href: "/docs/tbs" },
        { label: "Installation", href: "/docs/tbs/install" },
        { label: "Writing Dart Bootloaders", href: "/docs/tbs/bootloaders" },
        { label: "Platform Support", href: "/docs/tbs/platforms" },
        { label: "API Reference", href: "/docs/tbs/api" },
        { label: "Troubleshooting", href: "/docs/tbs/troubleshooting" },
    ];

    return (
        <>
            {/* MOBILE BUTTON */}
            <button
                onClick={() => setOpen(true)}
                className="lg:hidden fixed top-20 left-4 z-50 p-3
                           bg-neutral-900 text-white rounded-xl shadow-lg"
            >
                <IoMenu size={24} />
            </button>

            {/* MOBILE DRAWER */}
            {open && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 z-40"
                    onClick={() => setOpen(false)}
                >
                    <aside
                        className="absolute left-0 top-0 bottom-0 w-72 bg-white dark:bg-black
                                   border-r border-neutral-300 dark:border-neutral-800 p-6 z-50"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-sm uppercase tracking-wide font-semibold text-neutral-600 dark:text-neutral-400 mb-4">
                            TBS DOCS
                        </h2>

                        <nav className="flex flex-col gap-3">
                            {links.map((link) => {
                                const active = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className={`
                                            px-4 py-2 rounded-xl text-sm transition-all
                                            ${
                                            active
                                                ? "bg-neutral-800 text-white font-semibold shadow-sm"
                                                : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900"
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </nav>
                    </aside>
                </div>
            )}

            {/* DESKTOP SIDEBAR */}
            <aside
                className="hidden lg:flex flex-col
                           w-72 min-w-[18rem]
                           bg-white dark:bg-black
                           border-r border-neutral-300 dark:border-neutral-800
                           px-6 py-10
                           fixed top-16 bottom-0 left-0
                           overflow-y-auto"
            >
                <h2 className="text-sm uppercase tracking-wide font-semibold text-neutral-600 dark:text-neutral-400 mb-4">
                    TBS DOCS
                </h2>

                <nav className="flex flex-col gap-3">
                    {links.map((link) => {
                        const active = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`
                                    px-4 py-2 rounded-xl text-sm transition-all
                                    ${
                                    active
                                        ? "bg-neutral-800 text-white font-semibold shadow-sm"
                                        : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900"
                                }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>
            </aside>
        </>
    );
}
