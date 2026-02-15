import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function SolutionsPage() {
    return (
        <>
            {/* SEO JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: "Cortlet Solutions",
                        description:
                            "Explore Cortlet's solutions for developers, teams, students, and enterprises — built for performance, clarity, and reliability.",
                        url: "https://cortlet.com/solutions",
                    }),
                }}
            />

            <Navbar />

            <main className="pt-28 px-6 max-w-6xl mx-auto font-sans">

                {/* HERO */}
                <section className="text-center mb-20">
                    <h1 className="text-5xl font-bold mb-6">
                        Solutions Built for <span className="text-blue-600 dark:text-blue-400">Everyone</span>
                    </h1>

                    <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
                        Whether you're a student, a developer, or a full team building production software,
                        Cortlet provides the tools and structure for long-term success.
                    </p>
                </section>

                {/* SOLUTION CATEGORIES */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">

                    <SolutionCard
                        title="For Students"
                        desc="Break down complex topics, manage learning, and improve exam preparation using Cortlet Deconstruct."
                        link="/products/deconstruct"
                        badge="Education"
                    />

                    <SolutionCard
                        title="For Developers"
                        desc="High-performance tools like seo4spa and Quantpkg provide clarity, speed, and maintainability."
                        link="/products"
                        badge="Engineering"
                    />

                    <SolutionCard
                        title="For Teams"
                        desc="Build reliable pipelines, scale projects, and maintain organization using Cortlet’s structured tools."
                        link="/docs"
                        badge="Teams"
                    />

                </section>

                {/* USE CASES */}
                <section className="mb-24">
                    <h2 className="text-4xl font-bold mb-10 text-center">
                        Practical Use Cases
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                        <UseCaseCard
                            title="Modern Web Apps"
                            desc="Use seo4spa to enable proper SEO for SPA frameworks like React, Vue, and Svelte."
                        />

                        <UseCaseCard
                            title="Large-Scale C++ Projects"
                            desc="Quantpkg helps maintain clean dependency structure and speed in enterprise C++ systems."
                        />

                        <UseCaseCard
                            title="Learning Optimization"
                            desc="Deconstruct helps to break down heavy subjects into small, manageable steps."
                        />

                        <UseCaseCard
                            title="Team Documentation"
                            desc="Cortlet Docs ensures teams stay aligned and organized with structured project documentation."
                        />

                        <UseCaseCard
                            title="Exam Preparation"
                            desc="Deconstruct simplifies studying, helping users remove stress and focus effectively."
                        />

                        <UseCaseCard
                            title="SEO Optimization"
                            desc="Add dynamic meta tags to single-page apps without rewriting your project architecture."
                        />

                    </div>
                </section>

                {/* CTA */}
                <section className="text-center pb-24">
                    <Link
                        href="/products"
                        className="
                            px-10 py-4 rounded-full
                            bg-black dark:bg-white
                            text-white dark:text-black
                            text-lg font-semibold
                            hover:opacity-80 transition
                        "
                    >
                        Explore Cortlet Products
                    </Link>

                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-4">
                        Designed for clarity. Engineered for performance.
                    </p>
                </section>

            </main>
        </>
    );
}


function SolutionCard({
                          title,
                          desc,
                          link,
                          badge,
                      }: {
    title: string;
    desc: string;
    link: string;
    badge: string;
}) {
    return (
        <Link
            href={link}
            className="
                p-6 rounded-2xl border
                border-neutral-300 dark:border-neutral-800
                bg-white dark:bg-neutral-900 shadow-sm
                hover:border-blue-600 dark:hover:border-blue-400
                transition-all group
            "
        >
            <span className="
                text-xs px-2 py-1 bg-blue-600 dark:bg-blue-400
                text-white dark:text-black rounded-full inline-block mb-4
            ">
                {badge}
            </span>

            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {title}
            </h3>

            <p className="text-neutral-600 dark:text-neutral-400">
                {desc}
            </p>
        </Link>
    );
}


function UseCaseCard({ title, desc }: { title: string; desc: string }) {
    return (
        <div
            className="
                p-6 rounded-2xl border
                border-neutral-300 dark:border-neutral-800
                bg-white dark:bg-neutral-900 shadow-sm
                hover:border-neutral-500 dark:hover:border-neutral-400
                transition-all
            "
        >
            <h4 className="text-xl font-semibold mb-2">{title}</h4>
            <p className="text-neutral-600 dark:text-neutral-400">{desc}</p>
        </div>
    );
}
