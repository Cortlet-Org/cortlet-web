import Seo4SpaSidebar from "./sidebar";

export default function Seo4SpaDocsPage() {
    return (
        <>
            <Seo4SpaSidebar />

            <div className="flex-1 pb-32">
                {/* HEADER */}
                <h1 className="text-5xl font-bold mb-4">seo4spa Documentation</h1>
                <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-10 max-w-2xl">
                    Welcome to the official documentation for <strong>seo4spa</strong>, Cortlet’s
                    meta-tag engine designed for Single Page Applications.
                    It ensures accurate, dynamic SEO for client-side frameworks by updating metadata
                    during route changes—keeping SPAs fully indexable, crawlable, and optimized.
                </p>

                {/* SECTION 1 */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-3">How seo4spa Works</h2>
                    <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6 max-w-3xl">
                        Traditional SEO relies on servers serving fully rendered HTML.
                        But SPAs dynamically change the page <strong>without reloading</strong>, leaving crawlers
                        with outdated metadata.
                        seo4spa fixes this by providing a lightweight, framework-agnostic engine that
                        updates title, description, OpenGraph, and Twitter Card metadata <strong>instantly</strong>
                        whenever the route changes.
                    </p>

                    <div className="pl-4 border-l-4 border-blue-500 dark:border-blue-400">
                        <p className="text-neutral-700 dark:text-neutral-300 italic">
                            Most SPAs lose 60–90% of organic impressions because their metadata
                            never updates. seo4spa eliminates that problem with zero configuration.
                        </p>
                    </div>
                </section>

                {/* SECTION 2 */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-3">Why SPAs Fail SEO</h2>
                    <ul className="list-disc ml-6 space-y-4 text-neutral-700 dark:text-neutral-300 max-w-3xl">
                        <li>
                            Meta tags remain static even when navigating between pages.
                        </li>
                        <li>
                            Social media previews show outdated thumbnails and text.
                        </li>
                        <li>
                            Crawlers receive incomplete or incorrect content.
                        </li>
                        <li>
                            Frameworks like React, Vue, and Svelte rely on JavaScript for routing.
                        </li>
                        <li>
                            Many frameworks require complicated SSR setups to fix SEO.
                        </li>
                    </ul>

                    <p className="mt-6 text-neutral-700 dark:text-neutral-300 max-w-3xl">
                        seo4spa allows SPAs to remain client-side while still maintaining accurate,
                        dynamic SEO—without switching to SSR or SSG.
                    </p>
                </section>

                {/* SECTION 3 */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-3">What seo4spa Updates Automatically</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        {[
                            "Title Tag",
                            "Meta Description",
                            "Opengraph Title"
                        ].map((item) => (
                            <div
                                key={item}
                                className="p-5 rounded-xl border border-neutral-300 dark:border-neutral-800
                                           bg-white dark:bg-neutral-900 hover:border-blue-500
                                           dark:hover:border-blue-400 transition"
                            >
                                <p className="font-medium">{item}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SECTION 4 */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-3">Framework Compatibility</h2>

                    <p className="text-neutral-700 dark:text-neutral-300 max-w-3xl mb-6">
                        seo4spa works with any framework that supports client-side routing, including:
                    </p>

                    <ul className="list-disc ml-6 space-y-3 text-neutral-700 dark:text-neutral-300">
                        <li>React SPAs</li>
                    </ul>

                    <div className="mt-6 p-4 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800">
                        <p className="text-neutral-700 dark:text-neutral-300">
                            If your app changes routes with JavaScript, seo4spa can update your metadata.
                        </p>
                    </div>
                </section>

                {/* SECTION 5 */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-3">SEO Benefits</h2>

                    <div className="space-y-4 text-neutral-700 dark:text-neutral-300 max-w-3xl">
                        <p><strong>✔ Accurate page previews</strong> on Twitter, Discord, Slack, WhatsApp, Messenger, etc.</p>
                        <p><strong>✔ Better indexing</strong> because metadata matches actual page content.</p>
                        <p><strong>✔ Higher CTR</strong> due to improved rich previews for each route.</p>
                        <p><strong>✔ Zero performance overhead</strong> — updates are instant and direct.</p>
                        <p><strong>✔ No SSR required</strong> — stay fully client-side with accurate metadata.</p>
                    </div>
                </section>

                {/* SECTION 6 */}
                <section>
                    <h2 className="text-3xl font-semibold mb-3">When Should You Use seo4spa?</h2>

                    <p className="text-neutral-700 dark:text-neutral-300 max-w-3xl mb-6">
                        You should use seo4spa if your application is:
                    </p>

                    <ul className="list-disc ml-6 space-y-4 text-neutral-700 dark:text-neutral-300 max-w-3xl">
                        <li>A fully client-side application</li>
                        <li>A Vite/React or Vue SPA</li>
                        <li>Using React Router or custom routing</li>
                        <li>A dashboard, internal tool, or marketing site with dynamic pages</li>
                        <li>Experiencing wrong previews when shared on social media</li>
                        <li>Indexed incorrectly by Google or Bing</li>
                    </ul>

                    <p className="mt-6 text-neutral-700 dark:text-neutral-300">
                        seo4spa ensures your metadata reflects the *actual* content being viewed, not the initial HTML shell.
                    </p>
                </section>
            </div>
        </>
    );
}
