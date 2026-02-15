import Navbar from "@/app/components/Navbar";
import Link from "next/link";

export default function DocsPage() {
    return (
        <>
            <Navbar />

            {/* MAIN */}
            <main className="w-full min-h-screen pt-28 px-6 max-w-5xl mx-auto font-sans">

                {/* HERO */}
                <section className="text-center mb-20">
                    <h1 className="text-6xl font-bold mb-4">
                        Cortlet <span className="text-blue-600 dark:text-blue-400">Docs</span>
                    </h1>

                    <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
                        Welcome to the official Cortlet documentation.
                        Learn how to use Cortlet tools like Deconstruct, seo4spa, and Quantpkg
                        with clear, structured, developer-friendly guides.
                    </p>
                </section>

                {/* QUICK START */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold mb-6">Quick Start</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                        <DocCard
                            title="seo4spa Documentation"
                            desc="Integrate proper SEO into SPA frameworks by updating meta tags dynamically."
                            href="/docs/seo4spa"
                        />

                        <DocCard
                            title="Quantpkg CLI"
                            desc="Install packages, resolve dependencies, and manage C++ workflows."
                            href="/docs/quantpkg"
                        />
                    </div>
                </section>
                

                {/* FOOTER */}
                <footer className="text-center text-neutral-500 dark:text-neutral-400 py-16">
                    © {new Date().getFullYear()} Cortlet Docs — All Rights Reserved.
                </footer>
            </main>
        </>
    );
}

/* ------------------------------
   Reusable Components
--------------------------------*/

function DocCard({
                     title,
                     desc,
                     href,
                 }: {
    title: string;
    desc: string;
    href: string;
}) {
    return (
        <Link
            href={href}
            className="
                block p-6 rounded-2xl border
                border-neutral-300 dark:border-neutral-800
                bg-white dark:bg-neutral-900 shadow-sm
                hover:border-blue-600 dark:hover:border-blue-400
                transition-all group
            "
        >
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {title}
            </h3>

            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {desc}
            </p>
        </Link>
    );
}

function CategoryCard({
                          title,
                          desc,
                          href,
                      }: {
    title: string;
    desc: string;
    href: string;
}) {
    return (
        <Link
            href={href}
            className="
                block p-6 rounded-2xl border
                border-neutral-300 dark:border-neutral-800
                bg-white dark:bg-neutral-900 shadow-sm
                hover:border-neutral-600 dark:hover:border-neutral-400
                transition-all
            "
        >
            <h4 className="text-xl font-semibold mb-2">{title}</h4>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {desc}
            </p>
        </Link>
    );
}
