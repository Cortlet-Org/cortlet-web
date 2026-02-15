import Seo4SpaSidebar from "../sidebar";

export default function Seo4SpaMetaPage() {
    return (
        <div className="flex w-full">

            {/* SIDEBAR */}
            <Seo4SpaSidebar />

            {/* MAIN CONTENT */}
            <main className="flex-1 px-10 pt-28 pb-24 max-w-4xl">

                <h1 className="text-5xl font-bold mb-6">Updating Meta Tags</h1>

                <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8">
                    Single Page Applications don’t reload the document when navigating,
                    which means meta tags normally stay frozen on the first page load.
                    <strong> seo4spa </strong> solves this by updating OpenGraph,
                    description, title, and other meta tags at runtime. However, for it to work, you need to restart your dev server/hot reload it (if your framework version supports it).
                </p>

                <p className="text-neutral-700 dark:text-neutral-300 mb-10">
                    These updates help improve:
                </p>

                <ul className="list-disc pl-6 space-y-3 text-neutral-700 dark:text-neutral-300 mb-12">
                    <li>Social media previews (OpenGraph & Twitter Cards)</li>
                    <li>Search engine crawlers that support DOM-updated metadata</li>
                    <li>Dynamic routing in SPAs (React, Vue, Svelte, etc.)</li>
                    <li>Shareable deep links that show correct previews</li>
                </ul>

                <hr className="border-neutral-300 dark:border-neutral-800 my-10" />

                {/* ================= BASIC USAGE ================= */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4">Basic Usage</h2>

                    <p className="text-neutral-700 dark:text-neutral-300 mb-6">
                        You can update individual meta tags at any point in your app lifecycle —
                        for example, inside a route change handler or when loading page content.
                    </p>

                    {/* CODEBLOCK */}
                    <div className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-xl p-5 font-mono text-sm overflow-x-auto">
                        <pre className="whitespace-pre-wrap">
{`import { MetaTag } from "seo4spa";

// Update OpenGraph title
MetaTag.Property({
    prop: "og:title",
    content: "Pricing - Cortlet"
});

// Update <meta name="description">
MetaTag.Name({
    name: "description",
    content: "Compare seo4spa pricing options and choose the best fit."
});`}
                        </pre>
                    </div>
                </section>

                <hr className="border-neutral-300 dark:border-neutral-800 my-10" />

                {/* ================= ROUTE-BASED UPDATES ================= */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4">Updating Tags on Route Change</h2>

                    <p className="text-neutral-700 dark:text-neutral-300 mb-6">
                        For SPAs using React, Vue, or Svelte, you can update metadata whenever
                        the user navigates between pages.
                    </p>

                    {/* CODEBLOCK */}
                    <div className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-xl p-5 font-mono text-sm overflow-x-auto">
                        <pre className="whitespace-pre-wrap">
{`// Example: React Router

import { useEffect } from "react";
import { MetaTag } from "seo4spa";

export default function PricingPage() {
    useEffect(() => {
        MetaTag.Property({ prop: "og:title", content: "Pricing - Cortlet" });
        MetaTag.Name({ name: "description", content: "Choose your plan." });
    }, []);

    return <div>...</div>;
}`}
                        </pre>
                    </div>

                    <p className="text-neutral-700 dark:text-neutral-300">
                        This ensures each route has its own correct SEO metadata.
                    </p>
                </section>

                <hr className="border-neutral-300 dark:border-neutral-800 my-10" />

                {/* ================= SOCIAL SHARING ================= */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4">Improving Social Media Sharing</h2>

                    <p className="text-neutral-700 dark:text-neutral-300 mb-6">
                        OpenGraph tags define what platforms like Discord, Twitter, or Facebook
                        display when a user shares a link. seo4spa helps dynamic pages
                        produce meaningful previews.
                    </p>

                    {/* CODEBLOCK */}
                    <div className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-xl p-5 font-mono text-sm overflow-x-auto">
                        <pre className="whitespace-pre-wrap">
{`MetaTag.Property({
    prop: "og:image",
    content: "https://cdn.cortlet.com/previews/product-banner.png"
});`}
                        </pre>
                    </div>
                </section>

                <hr className="border-neutral-300 dark:border-neutral-800 my-10" />

                {/* ================= NOTES ================= */}
                <section>
                    <h2 className="text-3xl font-semibold mb-4">Important Notes</h2>

                    <ul className="list-disc pl-6 space-y-3 text-neutral-700 dark:text-neutral-300">
                        <li>Some crawlers (like Googlebot) may still require SSR for full SEO.</li>
                        <li>Most social media platforms DO read live-updated meta tags.</li>
                        <li>seo4spa does not modify the document title — use <code>document.title</code>.</li>
                        <li>No dependencies and no re-render required — updates the DOM directly.</li>
                    </ul>
                </section>

                <footer className="mt-24 text-neutral-500 dark:text-neutral-400 text-sm">
                    © {new Date().getFullYear()} Cortlet — seo4spa Documentation
                </footer>

            </main>
        </div>
    );
}
