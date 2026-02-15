export default function QuantpkgDocsHome() {
    return (
        <main className="max-w-4xl">

            <h1 className="text-5xl font-bold mb-6">Quantpkg</h1>

            <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8">
                <strong>Quantpkg</strong> is a modern, lightweight, blazing-fast
                C++ package manager built for developers who want simplicity,
                clarity, and performance.
            </p>

            <p className="text-neutral-700 dark:text-neutral-300 mb-10 leading-relaxed">
                Whether you&#39;re managing a small utility project or a large C++ codebase,
                Quantpkg provides a clean workflow for installing, updating, removing,
                and resolving package dependencies — without the bloat of traditional tools.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">

                <Card
                    title="Lightweight & Fast"
                    desc="Designed with zero overhead. Every operation is optimized for speed."
                />

                <Card
                    title="Windows & Linux Support"
                    desc="Cross-platform binaries ensure consistent behavior across systems."
                />

                <Card
                    title="Developer-Focused"
                    desc="Simple commands, predictable output, and clean integration."
                />

                <Card
                    title="Open Source"
                    desc="Completely transparent and available on GitHub under the Apache license."
                />
            </div>

            <h2 className="text-3xl font-semibold mb-4">What Can Quantpkg Do?</h2>

            <ul className="list-disc pl-6 space-y-3 text-neutral-700 dark:text-neutral-300 mb-12">
                <li>Install Packages</li>
                <li>Create packages via quantpkg.toml</li>
                <li>Integrate with C++ build systems (e.g. CMake)</li>
            </ul>

            <p className="text-neutral-700 dark:text-neutral-300 mb-6">
                Use the sidebar to navigate installation guides, API references,
                troubleshooting, and advanced examples.
            </p>

            <footer className="mt-16 text-neutral-500 dark:text-neutral-400 text-sm">
                © {new Date().getFullYear()} Cortlet — Quantpkg Documentation
            </footer>
        </main>
    );
}

function Card({ title, desc }: { title: string; desc: string }) {
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
