import Seo4SpaSidebar from "../sidebar";

export default function Seo4SpaFrameworksPage() {
    return (
        <div className="flex w-full">

            {/* SIDEBAR */}
            <Seo4SpaSidebar />

            {/* MAIN CONTENT */}
            <main className="flex-1 px-10 pt-28 pb-24 max-w-4xl">

                <h1 className="text-5xl font-bold mb-6">SPA Framework Support</h1>

                <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-10">
                    <strong>seo4spa</strong> works with any client-side router.
                    Since most frameworks do not automatically refresh meta tags on navigation,
                    seo4spa provides a lightweight, universal solution for updating tags
                    when the route changes.
                </p>

                <hr className="border-neutral-300 dark:border-neutral-800 my-10" />

                {/* ================= REACT ROUTER ================= */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4">React Router</h2>

                    <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                        React Router does not update the HTML head automatically on navigation.
                        Use <code>useEffect</code> to update tags whenever the path changes.
                    </p>

                    <div className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-xl p-5 font-mono text-sm overflow-x-auto">
                        <pre className="whitespace-pre-wrap">
{`import { useEffect } from "react";
import { MetaTag } from "seo4spa";
import { useLocation } from "react-router-dom";

export default function Page() {
    const { pathname } = useLocation();

    useEffect(() => {
        MetaTag.Name({ name: "description", content: "New Page Description" });
        MetaTag.Property({ prop: "title", content: "My SPA Page" });
    }, [pathname]);

    return <div>...</div>;
}`}
                        </pre>
                    </div>
                </section>

                <hr className="border-neutral-300 dark:border-neutral-800 my-10" />

                {/* ================= NEXT.JS CLIENT-SIDE ================= */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4">Next.js (Client-Side Only)</h2>

                    <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                        Next.js App Router only updates meta tags on full navigation.
                        For SPA-style navigation, update tags in a client component
                        using <code>usePathname()</code>.
                    </p>

                    <div className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-xl p-5 font-mono text-sm overflow-x-auto">
                        <pre className="whitespace-pre-wrap">
{`"use client";
import { useEffect } from "react";
import { MetaTag } from "seo4spa";
import { usePathname } from "next/navigation";

export default function MetaUpdater() {
    const pathname = usePathname();

    useEffect(() => {
        MetaTag.Property({
            prop: "title",
            content: "Route: " + pathname
        });
    }, [pathname]);

    return null; // No UI needed
}`}
                        </pre>
                    </div>
                </section>

                <hr className="border-neutral-300 dark:border-neutral-800 my-10" />

                {/* ================= VUE ROUTER ================= */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4">Vue Router</h2>

                    <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                        Vue does not update head metadata unless using a plugin.
                        seo4spa gives you direct DOM control instead.
                    </p>

                    <div className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-xl p-5 font-mono text-sm overflow-x-auto">
                        <pre className="whitespace-pre-wrap">
{`import { MetaTag } from "seo4spa";
import { watch } from "vue";
import { useRoute } from "vue-router";

export default {
    setup() {
        const route = useRoute();

        watch(
            () => route.fullPath,
            () => {
                MetaTag.Name({
                    name: "description",
                    content: "Vue Page: " + route.fullPath
                });
            }
        );
    }
};`}
                        </pre>
                    </div>
                </section>

                <hr className="border-neutral-300 dark:border-neutral-800 my-10" />

                {/* ================= SVELTEKIT ================= */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4">SvelteKit (SPA Mode)</h2>

                    <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                        In SvelteKit SPA mode (<code>export const ssr = false;</code>),
                        seo4spa can update OpenGraph and metadata dynamically.
                    </p>

                    <div className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-xl p-5 font-mono text-sm overflow-x-auto">
                        <pre className="whitespace-pre-wrap">
{`import { MetaTag } from "seo4spa";
import { page } from "$app/stores";

$: {
    MetaTag.Property({
        prop: "title",
        content: "Svelte Page: " + $page.url.pathname
    });
}`}
                        </pre>
                    </div>
                </section>

                <footer className="mt-24 text-neutral-500 dark:text-neutral-400 text-sm">
                    © {new Date().getFullYear()} Cortlet — seo4spa Documentation
                </footer>
            </main>
        </div>
    );
}
