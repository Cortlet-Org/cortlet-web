import Link from "next/link";
import QuantpkgSidebar from "../sidebar";

export default function QuantpkgInstallPage() {
    return (
        <div className="flex w-full">
            <QuantpkgSidebar />

            <main className="flex-1 px-10 pb-32">

                <h1 className="text-5xl font-bold mb-6">Installation</h1>

                <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-10">
                    Install Quantpkg for Windows or Linux using the official releases.
                </p>

                <hr className="border-neutral-300 dark:border-neutral-800 my-10" />

                {/* WINDOWS */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4">Windows Installation</h2>

                    <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                        Download the official installer from GitHub releases.
                    </p>

                    {/* EXTERNAL LINK — correctly using <a> */}
                    <a
                        href="https://github.com/Cortlet-Org/quantpkg/releases"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black font-medium hover:opacity-80 transition"
                    >
                        Download for Windows
                    </a>

                    <p className="mt-6 text-neutral-700 dark:text-neutral-300 font-medium">
                        sha256:
                    </p>

                    <code className="block bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 p-3 rounded-lg mt-2 font-mono text-sm">
                        d9eef53d479de5a26eff834b312214575e528d24c72d59ff72431a1aeb89027b
                    </code>
                </section>

                <hr className="border-neutral-300 dark:border-neutral-800 my-10" />

                {/* LINUX */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4">Linux Installation</h2>

                    <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                        Download the binary and make it executable.
                    </p>

                    {/* EXTERNAL LINK — correctly using <a> */}
                    <a
                        href="https://github.com/Cortlet-Org/quantpkg/releases"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black font-medium hover:opacity-80 transition"
                    >
                        Download for Linux
                    </a>

                    <h3 className="text-xl font-semibold mt-8 mb-3">Make it executable</h3>

                    <code className="block bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 p-3 rounded-lg font-mono text-sm">
                        sudo chmod +x quantpkg
                    </code>

                    <h3 className="text-xl font-semibold mt-8 mb-3">sha256</h3>

                    <code className="block bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 p-3 rounded-lg font-mono text-sm">
                        15aaa13a707467819328b5094462e81a4eb903bc2c6f4979aa67712cb746e1ef
                    </code>
                </section>

                <footer className="mt-24 text-neutral-500 dark:text-neutral-400 text-sm">
                    © {new Date().getFullYear()} Cortlet — Quantpkg Documentation
                </footer>

            </main>
        </div>
    );
}
