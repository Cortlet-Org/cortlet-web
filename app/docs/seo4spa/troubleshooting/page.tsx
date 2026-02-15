import Seo4SpaSidebar from "../sidebar";

export default function Seo4SpaTroubleshootingPage() {
    return (
        <div className="flex w-full">
            <Seo4SpaSidebar />

            <main className="flex-1 px-10 pt-28 pb-24 max-w-4xl">

                <h1 className="text-5xl font-bold mb-6">Troubleshooting</h1>

                <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-10">
                    If meta tags are not updating correctly in your SPA, or if social
                    preview cards aren’t showing the right information, this guide helps
                    you quickly diagnose and fix common issues.
                </p>

                <hr className="border-neutral-300 dark:border-neutral-800 my-10" />

                {/* ISSUE 1 */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-3">
                        Meta Tags Aren’t Updating
                    </h2>

                    <p className="mb-4 text-neutral-700 dark:text-neutral-300">
                        If a tag does not change after calling <code>MetaTag.Property</code> or{" "}
                        <code>MetaTag.Name</code>, it may already exist in the DOM with a
                        conflicting value.
                    </p>

                    <pre className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-xl p-5 font-mono text-sm overflow-x-auto whitespace-pre-wrap">
{`MetaTag.Property({
    prop: "og:title",
    content: "Updated Title"
});`}
                    </pre>

                    <p className="mt-4 text-neutral-700 dark:text-neutral-300">
                        Ensure your JavaScript runs <strong>after the DOM is loaded</strong>,
                        and ensure your router triggers the update on each navigation.
                    </p>
                </section>

                <hr className="border-neutral-300 dark:border-neutral-800 my-10" />

                {/* ISSUE 2 */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-3">
                        Social Media Shows Old Preview
                    </h2>

                    <p className="mb-4 text-neutral-700 dark:text-neutral-300">
                        Platforms like Discord, Facebook, and Twitter often cache previews.
                        Even if seo4spa updates the tags correctly, the cached preview may not
                        refresh immediately.
                    </p>

                    <ul className="list-disc pl-6 space-y-3 text-neutral-700 dark:text-neutral-300 mb-4">
                        <li>Use Facebook Sharing Debugger to force refresh</li>
                        <li>Use Twitter Card Validator to re-scrape metadata</li>
                        <li>Ensure image URLs are versioned to avoid cache reuse</li>
                    </ul>

                    <pre className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-xl p-5 font-mono text-sm overflow-x-auto whitespace-pre-wrap">
{`MetaTag.Property({
    prop: "og:image",
    content: "https://cdn.cortlet.com/previews/seo4spa-banner?v=2"
});`}
                    </pre>
                </section>

                <hr className="border-neutral-300 dark:border-neutral-800 my-10" />

                {/* ISSUE 3 */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-3">
                        Tags Work on Desktop but Not on Mobile
                    </h2>

                    <p className="mb-4 text-neutral-700 dark:text-neutral-300">
                        Some mobile social apps ignore dynamic meta tags and only read tags
                        present in the original HTML response.
                    </p>

                    <p className="text-neutral-700 dark:text-neutral-300">
                        This is a platform limitation. SPAs that require strict SEO for mobile
                        previews typically use <strong>SSR or SSG</strong>, not DOM-based meta updates.
                    </p>
                </section>

                <hr className="border-neutral-300 dark:border-neutral-800 my-10" />

                {/* ISSUE 4 */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold mb-3">
                        MetaTag.Property Doesn’t Change <code>&lt;title&gt;</code>
                    </h2>

                    <p className="mb-4 text-neutral-700 dark:text-neutral-300">
                        seo4spa does <strong>not</strong> modify the document title.
                        To update the <code>&lt;title&gt;</code> tag, you must set it manually:
                    </p>

                    <pre className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-xl p-5 font-mono text-sm overflow-x-auto whitespace-pre-wrap">
{`document.title = "New Page Title";`}
                    </pre>
                </section>

                <footer className="mt-24 text-neutral-500 dark:text-neutral-400 text-sm">
                    © {new Date().getFullYear()} Cortlet — seo4spa Documentation
                </footer>

            </main>
        </div>
    );
}
