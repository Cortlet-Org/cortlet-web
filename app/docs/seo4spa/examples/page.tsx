import Seo4SpaSidebar from "../sidebar";
import React from "react";

export default function Seo4SpaExamplesPage() {
    return (
        <div className="flex w-full">

            {/* SIDEBAR */}
            <Seo4SpaSidebar />

            {/* MAIN CONTENT */}
            <main className="flex-1 px-10 pt-28 pb-24 max-w-4xl">

                <h1 className="text-5xl font-bold mb-6">Examples</h1>

                <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-10">
                    These examples demonstrate how <strong>seo4spa</strong> can be used
                    inside different SPA architectures to update meta tags dynamically.
                </p>

                <hr className="border-neutral-300 dark:border-neutral-800 my-10" />

                {/* EXAMPLE 1 — STATIC ROUTE */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4">Static Route Example</h2>
                    <p className="text-neutral-700 dark:text-neutral-300 mb-6">
                        Update metadata inside a static view or component when it mounts.
                    </p>

                    <ExampleBlock>
                        {`import { MetaTag } from "seo4spa";

export default function AboutPage() {
    MetaTag.Name({
        name: "description",
        content: "Learn more about our mission and team."
    });

    MetaTag.Property({
        prop: "og:title",
        content: "About Us — Cortlet"
    });

    return <div>...</div>;
}`}
                    </ExampleBlock>
                </section>

                {/* EXAMPLE 3 — SOCIAL PREVIEW UPDATE */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4">Dynamic Social Preview</h2>
                    <p className="text-neutral-700 dark:text-neutral-300 mb-6">
                        Update the OpenGraph preview image on-the-fly for shareable deep links.
                    </p>

                    <ExampleBlock>
                        {`MetaTag.Property({
    prop: "og:image",
    content: "https://cdn.cortlet.com/previews/product-" + productId + ".png"
});`}
                    </ExampleBlock>
                </section>


                <hr className="border-neutral-300 dark:border-neutral-800 my-10" />

                <footer className="mt-24 text-neutral-500 dark:text-neutral-400 text-sm">
                    © {new Date().getFullYear()} Cortlet — seo4spa Documentation
                </footer>

            </main>
        </div>
    );
}

function ExampleBlock({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-xl p-5 font-mono text-sm overflow-x-auto mb-6 whitespace-pre-wrap">
            {children}
        </div>
    );
}
