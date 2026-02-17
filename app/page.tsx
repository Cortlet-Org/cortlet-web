import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from "next/link";
import ChatWidget from "@/app/components/ChatWidget";

export default function Home() {
    return (
        <>
            <Navbar />

            <main className="w-full min-h-screen bg-white text-black dark:bg-black dark:text-white font-sans transition-colors duration-300">

                {/* HERO */}
                <section className="relative overflow-hidden pt-28 pb-32 sm:pt-32 sm:pb-44">

                    {/* Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,120,120,0.25),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)]" />

                    <div className="absolute blur-[120px] w-[400px] h-[400px] bg-black/10 dark:bg-white/10 rounded-full top-32 left-10" />
                    <div className="absolute blur-[120px] w-[300px] h-[300px] bg-black/5 dark:bg-white/5 rounded-full bottom-10 right-10" />

                    <div className="relative z-10 flex flex-col items-center text-center px-6">

                        <Image
                            src="https://cdn.cortlet.com/images/sized-images/icon_light_512.png"
                            alt="Cortlet Logo"
                            width={120}
                            height={120}
                            className="mb-8 drop-shadow-[0_0_30px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                        />

                        {/* FIXED HERO TEXT */}
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
                            Build Better.<br />Build Cortlet.
                        </h1>

                        <p className="text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 max-w-xl leading-relaxed mb-10">
                            A platform of development tools engineered for precision, performance,
                            and long-term reliability.
                        </p>

                        {/* FIXED CTA WRAP */}
                        <div className="flex flex-wrap gap-4 justify-center w-full max-w-md mx-auto">
                            <Link
                                href="/products"
                                className="px-6 py-3 text-sm sm:text-base rounded-full font-medium bg-black text-white dark:bg-white dark:text-black transition hover:opacity-80"
                            >
                                Explore Products
                            </Link>

                            <Link
                                href="/docs"
                                className="px-6 py-3 text-sm sm:text-base rounded-full border border-black dark:border-white font-medium transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                            >
                                Documentation
                            </Link>

                            <Link
                                href="/contact"
                                className="px-6 py-3 text-sm sm:text-base rounded-full font-medium bg-black text-white dark:bg-white dark:text-black transition hover:opacity-80"
                            >
                                Contact for queries
                            </Link>
                        </div>

                    </div>
                </section>

                {/* WHY CORTLET */}
                <section className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
                    <h2 className="text-3xl sm:text-4xl font-semibold mb-12 text-center">Why Cortlet?</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-7 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 hover:border-neutral-500 dark:hover:border-neutral-400 transition">
                            <h3 className="text-xl font-medium mb-2">Precision Engineered</h3>
                            <p className="text-neutral-700 dark:text-neutral-300">
                                Tools crafted with strict design principles ensuring performance.
                            </p>
                        </div>

                        <div className="p-7 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 hover:border-neutral-500 dark:hover:border-neutral-400 transition">
                            <h3 className="text-xl font-medium mb-2">Developer-First</h3>
                            <p className="text-neutral-700 dark:text-neutral-300">
                                Designed to reduce friction and maximize clarity.
                            </p>
                        </div>

                        <div className="p-7 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 hover:border-neutral-500 dark:hover:border-neutral-400 transition">
                            <h3 className="text-xl font-medium mb-2">Modern Foundations</h3>
                            <p className="text-neutral-700 dark:text-neutral-300">
                                Built on modern principles for long-term maintainability.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="border-t border-neutral-300 dark:border-neutral-800 py-10 text-center text-neutral-600 dark:text-neutral-400 text-sm">
                    © {new Date().getFullYear()} Cortlet — All Rights Reserved.
                </footer>

                {/* FIXED MOBILE CHAT WIDGET */}
                <ChatWidget />

            </main>
        </>
    );
}
