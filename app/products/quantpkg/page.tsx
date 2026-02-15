import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import CopyButton from "@/app/components/CopyBtn";

export default function QuantpkgPage() {
    return (
        <>
            {/* JSON-LD for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        name: "Quantpkg",
                        operatingSystem: "Windows, Linux",
                        applicationCategory: "DeveloperApplication",
                        downloadUrl: "https://www.cortlet.com/Cortlet-Org/quantpkg/",
                        softwareVersion: "1.0.0",
                        description:
                            "Quantpkg is a high-performance C++ package manager for Windows and Linux, providing fast dependency resolution and lightweight tooling.",
                    }),
                }}
            />

            <Navbar />

            <main className="pt-28 px-6 max-w-5xl mx-auto">

                {/* HERO */}
                <section className="text-center mb-20">
                    <Image
                        src="https://cdn.cortlet.com/images/sized-images/icon_light_512.png"
                        alt="Quantpkg Logo"
                        width={140}
                        height={140}
                        className="mx-auto mb-8 drop-shadow-xl"
                    />

                    <h1 className="text-5xl font-bold mb-4">
                        Quantpkg
                    </h1>

                    <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
                        A modern, lightweight, blazing-fast C++ package manager.
                        Designed for speed, clarity, and a frictionless developer experience.
                    </p>

                    <div className="mt-6 inline-block px-4 py-2 bg-purple-600 text-white dark:bg-purple-400 dark:text-black rounded-full text-sm font-medium shadow">
                        Available on Windows & Linux
                    </div>
                </section>

                {/* FEATURES */}
                <section className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-24">

                    <FeatureCard
                        title="Lightning-fast dependency resolution"
                        desc="Quantpkg installs and resolves dependencies instantly using a modern dependency graph engine."
                    />

                    <FeatureCard
                        title="Zero-bloat package management"
                        desc="Small, clean, and efficient. Only the features developers actually need — nothing more."
                    />

                    <FeatureCard
                        title="Perfect for modern C++ ecosystems"
                        desc="Built to integrate directly with real-world workflows, build systems, and large-scale applications."
                    />

                    <FeatureCard
                        title="Open-source and community driven"
                        desc="Developed on GitHub with full transparency and active improvement from the Cortlet community."
                    />

                </section>

                {/* DOWNLOAD SECTION */}
                <section className="text-center pb-24">

                    <a
                        href="https://github.com/Cortlet-Org/quantpkg/"
                        className="
                            inline-block px-10 py-4 rounded-full
                            bg-black dark:bg-white
                            text-white dark:text-black
                            font-semibold text-lg
                            hover:opacity-85 transition
                        "
                    >
                        Visit Quantpkg on GitHub
                    </a>

                    <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-3">
                        Source code, releases, documentation, and issue tracking.
                    </p>

                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">

                        <DownloadCard
                            title="Download for Windows"
                            desc="Download the official Quantpkg .exe installer."
                            link="https://github.com/Cortlet-Org/quantpkg/releases/"
                            badge="EXE Installer"
                        />

                        <DownloadCard
                            title="Download for Linux"
                            desc="Download the Linux binary and make it executable."
                            link="https://github.com/Cortlet-Org/quantpkg/releases/"
                            badge="Binary File"
                        />
                    </div>

                    <p className="mt-6 text-neutral-700 dark:text-neutral-300 text-sm font-sans">
                        Linux install command:<br />
                        <code className="bg-neutral-200 dark:bg-neutral-900 px-3 py-1 rounded inline-block mt-2 font-mono">
                            sudo chmod +x quantpkg
                        </code>
                    </p>

                    <div className="mt-6 text-neutral-700 dark:text-neutral-300 text-sm font-sans items-center justify-center">
                        Windows sha256:<br />
                        <div className="flex items-center gap-2 mt-2">
                            <code className="bg-neutral-200 dark:bg-neutral-900 px-3 py-1 rounded font-mono break-all">
                                d9eef53d479de5a26eff834b312214575e528d24c72d59ff72431a1aeb89027b
                            </code>
                            <CopyButton text="d9eef53d479de5a26eff834b312214575e528d24c72d59ff72431a1aeb89027b" />
                        </div>
                    </div>

                    <div className="mt-6 text-neutral-700 dark:text-neutral-300 text-sm font-sans justify-center items-center">
                        Linux sha256:<br />
                        <div className="flex items-center gap-2 mt-2">
                            <code className="bg-neutral-200 dark:bg-neutral-900 px-3 py-1 rounded font-mono break-all">
                                15aaa13a707467819328b5094462e81a4eb903bc2c6f4979aa67712cb746e1ef
                            </code>
                            <CopyButton text="15aaa13a707467819328b5094462e81a4eb903bc2c6f4979aa67712cb746e1ef" />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
    return (
        <div
            className="
                p-6 rounded-2xl border
                border-neutral-300 dark:border-neutral-800
                bg-white dark:bg-neutral-900 shadow-sm
                hover:border-purple-600 dark:hover:border-purple-400
                transition-all
            "
        >
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-neutral-600 dark:text-neutral-400">{desc}</p>
        </div>
    );
}

function DownloadCard({
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
                block p-6 rounded-2xl border
                border-neutral-300 dark:border-neutral-800
                bg-white dark:bg-neutral-900 shadow-sm
                hover:border-purple-600 dark:hover:border-purple-400
                transition-all
            "
        >
            <span
                className="text-xs bg-purple-600 dark:bg-purple-400 text-white dark:text-black px-2 py-1 rounded-full inline-block mb-3"
            >
                {badge}
            </span>

            <h3 className="text-xl font-semibold mb-2">{title}</h3>

            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {desc}
            </p>
        </Link>
    );
}

