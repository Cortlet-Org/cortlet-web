import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from "next/link";
import ChatWidget from "@/app/components/ChatWidget";

export default function Home() {
    return (
        <>
            <Navbar />

            {/* MAIN WRAPPER */}
            <main className="w-full min-h-screen bg-white text-black dark:bg-black dark:text-white font-sans transition-colors duration-300">

                {/* ================= HERO ================= */}
                <section className="relative overflow-hidden pt-32 pb-44">

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
                            Build Better. Build Cortlet.
                        </h1>

                        <p className="text-xl text-neutral-700 dark:text-neutral-300 max-w-2xl leading-relaxed mb-10">
                            A platform of development tools engineered for precision, performance,
                            and long-term reliability. Cortlet provides the foundation to build
                            exceptional software with clarity and confidence.
                        </p>

                        {/* CTA BUTTONS */}
                        <div className="flex gap-4">
                            <Link
                                href="/products"
                                className="px-8 py-3 rounded-full font-medium bg-black text-white dark:bg-white dark:text-black transition hover:opacity-80"
                            >
                                Explore Products
                            </Link>

                            <Link
                                href="/docs"
                                className="px-8 py-3 rounded-full border border-black dark:border-white font-medium transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                            >
                                Documentation
                            </Link>

                            <Link
                                href="/contact"
                                className="px-8 py-3 rounded-full font-medium bg-black text-white dark:bg-white dark:text-black transition hover:opacity-80"
                            >
                                Contact for queries
                            </Link>

                        </div>
                    </div>
                </section>

                {/* ================= FEATURE GRID ================= */}
                <section className="max-w-6xl mx-auto px-6 py-24">
                    <h2 className="text-4xl font-semibold mb-12 text-center">Why Cortlet?</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                        <div className="p-8 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 hover:border-neutral-500 dark:hover:border-neutral-400 transition">
                            <h3 className="text-2xl font-medium mb-3">Precision Engineered</h3>
                            <p className="text-neutral-700 dark:text-neutral-300">
                                Tools crafted with strict design principles ensuring stability,
                                predictability, and top-tier performance.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 hover:border-neutral-500 dark:hover:border-neutral-400 transition">
                            <h3 className="text-2xl font-medium mb-3">Developer-First</h3>
                            <p className="text-neutral-700 dark:text-neutral-300">
                                Everything is designed to reduce friction and maximize clarity and productivity.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 hover:border-neutral-500 dark:hover:border-neutral-400 transition">
                            <h3 className="text-2xl font-medium mb-3">Modern Foundations</h3>
                            <p className="text-neutral-700 dark:text-neutral-300">
                                Built upon modern principles, ensuring long-term maintainability and clean architecture.
                            </p>
                        </div>

                    </div>
                </section>

                {/* ================= PRODUCT SECTION ================= */}
                <section className="max-w-6xl mx-auto px-6 py-24">

                    <h2 className="text-4xl font-semibold mb-8">Product Categories</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        <div className="group p-7 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 hover:border-black dark:hover:border-white transition">
                            <h3 className="text-xl font-medium mb-2 group-hover:text-black dark:group-hover:text-white">
                                General-use applications
                            </h3>
                            <p className="text-neutral-700 dark:text-neutral-300">
                                Applications designed for general use.
                            </p>
                        </div>

                        <div className="group p-7 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 hover:border-black dark:hover:border-white transition">
                            <h3 className="text-xl font-medium mb-2 group-hover:text-black dark:group-hover:text-white">
                                Developer Libraries
                            </h3>
                            <p className="text-neutral-700 dark:text-neutral-300">
                                Libraries installable via a package manager.
                            </p>
                        </div>

                        <div className="group p-7 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 hover:border-black dark:hover:border-white transition">
                            <h3 className="text-xl font-medium mb-2 group-hover:text-black dark:group-hover:text-white">
                                Developer Software
                            </h3>
                            <p className="text-neutral-700 dark:text-neutral-300">
                                CLI/GUI Software designed for developers.
                            </p>
                        </div>

                    </div>
                </section>

                {/* ================= FOOTER ================= */}
                <footer className="border-t border-neutral-300 dark:border-neutral-800 py-12 text-center text-neutral-600 dark:text-neutral-400 text-sm">
                    © {new Date().getFullYear()} Cortlet — All Rights Reserved.
                </footer>
                <ChatWidget/>
            </main>
        </>
    );
}
