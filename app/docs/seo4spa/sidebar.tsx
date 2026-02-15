"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Seo4SpaSidebar() {
    const pathname = usePathname();

    const links = [
        { label: "Introduction", href: "/docs/seo4spa" },
        { label: "Installation", href: "/docs/seo4spa/install" },
        { label: "Updating Meta Tags", href: "/docs/seo4spa/meta" },
        { label: "SPA Framework Support", href: "/docs/seo4spa/frameworks" },
        { label: "Examples", href: "/docs/seo4spa/examples" },
        { label: "API Reference", href: "/docs/seo4spa/api" },
        { label: "Troubleshooting", href: "/docs/seo4spa/troubleshooting" },
    ];

    return (
        <aside
            className="
                hidden md:flex flex-col
                w-72 min-w-[18rem]
                bg-white dark:bg-black
                border-r border-neutral-300 dark:border-neutral-800
                px-6 py-10
                fixed top-16 bottom-0 left-0
                overflow-y-auto
            "
        >
            <h2 className="text-sm uppercase tracking-wide font-semibold text-neutral-600 dark:text-neutral-400 mb-4">
                SEO4SPA DOCS
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
                            }
                            `}
                        >
                            {link.label}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}
