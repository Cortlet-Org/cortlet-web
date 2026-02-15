import Seo4SpaSidebar from "../sidebar";

export default function Seo4SpaApiPage() {
    return (
        <div className="flex w-full">

            {/* SIDEBAR */}
            <Seo4SpaSidebar />

            {/* MAIN CONTENT */}
            <main className="flex-1 px-10 pt-28 pb-24 max-w-4xl">

                <h1 className="text-5xl font-bold mb-6">API Reference</h1>

                <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-10">
                    The <strong>seo4spa</strong> library contains two primary functions for managing
                    SEO metadata inside Single Page Applications: <code>MetaTag.Property()</code> and
                    <code> MetaTag.Name()</code>.
                </p>

                <hr className="border-neutral-300 dark:border-neutral-800 my-10" />

                {/* PROPERTY API */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4">MetaTag.Property()</h2>

                    <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                        Creates or updates a <code>&lt;meta property=&#34;...&#34; /&gt;</code> tag.
                        Commonly used for OpenGraph, Twitter cards, and social preview metadata.
                    </p>

                    {/* Signature */}
                    <div className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-xl p-5 font-mono text-sm mb-4">
                        <pre className="whitespace-pre-wrap">
{`MetaTag.Property(options: {
    prop: string;
    content: string;
}): void`}
                        </pre>
                    </div>

                    {/* Example */}
                    <h3 className="text-xl font-semibold mb-2">Example</h3>

                    <div className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-xl p-5 font-mono text-sm overflow-x-auto">
                        <pre className="whitespace-pre-wrap">
{`import { MetaTag } from "seo4spa";

MetaTag.Property({
    prop: "og:title",
    content: "Pricing - Cortlet"
});

MetaTag.Property({
    prop: "og:image",
    content: "https://cdn.cortlet.com/previews/product.png"
});`}
                        </pre>
                    </div>
                </section>

                <hr className="border-neutral-300 dark:border-neutral-800 my-10" />

                {/* NAME API */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4">MetaTag.Name()</h2>

                    <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                        Creates or updates a <code>&lt;meta name=&#34;...&#34; /&gt;</code> tag.
                        Perfect for tags like <strong>description</strong>, <strong>keywords</strong>,
                        <strong> author</strong>, etc.
                    </p>

                    {/* Signature */}
                    <div className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-xl p-5 font-mono text-sm mb-4">
                        <pre className="whitespace-pre-wrap">
{`MetaTag.Name(options: {
    name: string;
    content: string;
}): void`}
                        </pre>
                    </div>

                    <h3 className="text-xl font-semibold mb-2">Example</h3>

                    <div className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-xl p-5 font-mono text-sm overflow-x-auto">
                        <pre className="whitespace-pre-wrap">
{`import { MetaTag } from "seo4spa";

MetaTag.Name({
    name: "description",
    content: "This is a dynamic page description."
});

MetaTag.Name({
    name: "keywords",
    content: "seo, spa, cortlet"
});`}
                        </pre>
                    </div>
                </section>

                <hr className="border-neutral-300 dark:border-neutral-800 my-10" />

                {/* BEHAVIOR */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4">Behavior & Rules</h2>

                    <ul className="list-disc pl-6 space-y-3 text-neutral-700 dark:text-neutral-300">
                        <li>Existing meta tags are automatically updated.</li>
                        <li>If a tag does not exist, it is created and appended to <code>&lt;head&gt;</code>.</li>
                        <li>No re-render needed — works directly on the DOM.</li>
                        <li>Compatible with all SPA frameworks (React, Vue, Svelte, etc.).</li>
                        <li>Does not modify <code>&lt;title&gt;</code> — set it manually.</li>
                    </ul>
                </section>

                <footer className="mt-24 text-neutral-500 dark:text-neutral-400 text-sm">
                    © {new Date().getFullYear()} Cortlet — seo4spa Documentation
                </footer>

            </main>
        </div>
    );
}
