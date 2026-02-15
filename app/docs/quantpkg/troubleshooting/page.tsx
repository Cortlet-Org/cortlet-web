import QuantpkgSidebar from "../sidebar";

export default function QuantpkgTroubleshootingPage() {
    return (
        <div className="flex w-full">
            <QuantpkgSidebar />

            <main className="flex-1 px-10 pt-28 pb-24 max-w-4xl">

                <h1 className="text-5xl font-bold mb-6">Troubleshooting</h1>

                <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-10">
                    If Quantpkg fails to install a package, initialize a project, or cannot
                    fetch from GitHub, this guide will help you diagnose common issues and
                    understand the error codes returned by the CLI.
                </p>

                <hr className="border-neutral-300 dark:border-neutral-800 my-10" />

                {/* ERROR 1 */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-3">QPKG-NOTFOUND</h2>

                    <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                        This means the GitHub repository does not exist or cannot be found.
                    </p>

                    <div className="
                        bg-neutral-100 dark:bg-neutral-900
                        border border-neutral-300 dark:border-neutral-800
                        rounded-xl p-5 font-mono text-sm
                        whitespace-pre-wrap
                    ">
                        {`quantpkg install unknown/not-real`}
                    </div>

                    <p className="mt-4 text-neutral-700 dark:text-neutral-300">
                        Double-check the username and repository name.
                        Quantpkg requires the format:
                    </p>

                    <div className="mt-2 font-mono text-sm bg-neutral-100 dark:bg-neutral-900 px-3 py-2 rounded">
                        user/repo
                    </div>
                </section>

                <hr className="border-neutral-300 dark:border-neutral-800 my-10" />

                {/* ERROR 2 */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-3">QPKG-MISSINGFILE</h2>

                    <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                        This happens when your project is missing <code>quantpkg.toml</code>.
                    </p>

                    <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                        You must run <code>quantpkg init</code> before installing any packages.
                    </p>

                    <div className="
                        bg-neutral-100 dark:bg-neutral-900
                        border border-neutral-300 dark:border-neutral-800
                        rounded-xl p-5 font-mono text-sm
                        whitespace-pre-wrap
                    ">
                        {`quantpkg init`}
                    </div>
                </section>

                <hr className="border-neutral-300 dark:border-neutral-800 my-10" />

                {/* ERROR 3 */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-3">QPKG-NETWORK</h2>

                    <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                        This means Quantpkg failed to fetch package files from GitHub after
                        multiple attempts.
                    </p>

                    <ul className="list-disc pl-6 space-y-2 text-neutral-700 dark:text-neutral-300 mb-4">
                        <li>Your internet connection might be unstable</li>
                        <li>GitHub rate-limited your IP</li>
                        <li>The repository is temporarily unavailable</li>
                    </ul>

                    <p className="text-neutral-700 dark:text-neutral-300">
                        Try again later, or check GitHub status.
                    </p>
                </section>

                <hr className="border-neutral-300 dark:border-neutral-800 my-10" />

                {/* ERROR 4 */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-3">QPKG-INSTALLFAIL</h2>

                    <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                        Quantpkg successfully downloaded the repo, but installation failed.
                    </p>

                    <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                        Common causes:
                    </p>

                    <ul className="list-disc pl-6 space-y-2 text-neutral-700 dark:text-neutral-300">
                        <li>Repository missing <code>quantpkg.toml</code></li>
                        <li>Repo doesn’t contain valid source files</li>
                        <li>Repo structure incompatible with Quantpkg’s expectations</li>
                    </ul>
                </section>

                <hr className="border-neutral-300 dark:border-neutral-800 my-10" />

                {/* EXTRA SECTION */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold mb-3">General Tips</h2>

                    <ul className="list-disc pl-6 space-y-3 text-neutral-700 dark:text-neutral-300">
                        <li>Make sure your folder is writable (Windows admin issues).</li>
                        <li>Delete <code>quantpkg_packages/</code> if the install got corrupted.</li>
                        <li>Check that your terminal PATH includes Quantpkg (installer should do this).</li>
                        <li>Ensure GitHub is reachable from your network.</li>
                    </ul>
                </section>

                <footer className="mt-24 text-neutral-500 dark:text-neutral-400 text-sm">
                    © {new Date().getFullYear()} Cortlet — Quantpkg Documentation
                </footer>

            </main>
        </div>
    );
}
