import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";

export default function ProductsPage() {
    return (
        <>
            {/* JSON-LD for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        name: "Cortlet Products",
                        description:
                            "Explore Cortlet developer tools such as Deconstruct, seo4spa, and Quantpkg.",
                        url: "https://cortlet.com/products",
                    }),
                }}
            />

            <Navbar />

            {/* MAIN WRAPPER */}
            <main className="w-full min-h-screen bg-white text-black dark:bg-black dark:text-white font-sans transition-colors duration-300">

                {/* ================= HERO ================= */}
                <section className="relative overflow-hidden pt-32 pb-32">

                    {/* Animated Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,120,120,0.25),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)] transition-all duration-500" />

                    {/* Glow Orbs */}
                    <div className="absolute blur-[120px] w-[500px] h-[500px] bg-black/10 dark:bg-white/10 rounded-full top-40 left-20 transition-all duration-300" />
                    <div className="absolute blur-[120px] w-[400px] h-[400px] bg-black/5 dark:bg-white/5 rounded-full bottom-20 right-20 transition-all duration-300" />

                    {/* HERO CONTENT */}
                    <div className="relative z-10 flex flex-col items-center text-center px-6">
                        <Image
                            src="https://cdn.cortlet.com/images/sized-images/icon_light_512.png"
                            alt="Cortlet Logo"
                            width={150}
                            height={150}
                            className="drop-shadow-[0_0_40px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-300 mb-10"
                        />

                        <h1 className="text-6xl sm:text-7xl font-bold tracking-tight mb-6">
                            Our Products
                        </h1>

                        <p className="text-xl text-neutral-700 dark:text-neutral-300 max-w-2xl leading-relaxed mb-10">
                            Explore tools built for clarity, performance, and modern development workflows.
                        </p>
                    </div>
                </section>

                {/* ================= PRODUCT GRID ================= */}
                <section className="max-w-6xl mx-auto px-6 py-24">
                    <h2 className="text-4xl font-semibold mb-12 text-center">
                        Explore The Tools
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                        <ProductCard
                            title="Deconstruct"
                            description="Break down stressful tasks, studying, and problems into simple steps. iOS only."
                            href="/products/deconstruct"
                        />

                        <ProductCard
                            title="seo4spa"
                            description="An NPM package that dynamically updates meta tags inside SPA frameworks."
                            href="/products/seo4spa"
                        />

                        <ProductCard
                            title="Quantpkg"
                            description="A powerful, lightweight C++ package manager for developers."
                            href="/products/quantpkg"
                        />

                        <ProductCard
                            title="tbs (new)"
                            description="Dart-based compiler for writing Dart bootloaders in Dart."
                            href="/products/tbs"
                        />
                    </div>
                </section>

                {/* ================= FOOTER ================= */}
                <footer className="border-t border-neutral-300 dark:border-neutral-800 py-12 text-center text-neutral-600 dark:text-neutral-400 text-sm">
                    © {new Date().getFullYear()} Cortlet — All Rights Reserved.
                </footer>

            </main>
        </>
    );
}

function ProductCard({ title, description, href }: { title: string; description: string; href: string }) {
    return (
        <Link
            href={href}
            className="
                group p-8 rounded-2xl bg-neutral-100 dark:bg-neutral-900
                border border-neutral-300 dark:border-neutral-800
                hover:border-black dark:hover:border-white
                transition-all flex flex-col gap-3
            "
        >
            <h3 className="text-2xl font-semibold group-hover:text-black dark:group-hover:text-white transition">
                {title}
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                {description}
            </p>
        </Link>
    );
}
