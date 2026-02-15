import QuantpkgSidebar from "../sidebar";

export default function QuantpkgPackagesPage() {
    return (
        <div className="flex w-full">

            {/* SIDEBAR */}
            <QuantpkgSidebar />

            {/* MAIN CONTENT */}
            <main className="flex-1 px-10 pt-28 pb-24 max-w-4xl">

                <h1 className="text-5xl font-bold mb-6">Package Management</h1>

                <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-10">
                    Quantpkg provides a single, simple package-management command:
                    <strong> install</strong>.
                    It downloads C++ libraries directly from GitHub repositories.
                </p>

                <hr className="border-neutral-300 dark:border-neutral-800 my-10" />

                {/* INSTALL COMMAND */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4">Install a Package</h2>

                    <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                        Install any GitHub-hosted C++ library using:
                    </p>

                    <div className="bg-neutral-100 dark:bg-neutral-900 rounded-xl p-4 font-mono text-sm border border-neutral-300 dark:border-neutral-800">
                        quantpkg install github_user/repo
                    </div>

                    <p className="mt-4 text-neutral-700 dark:text-neutral-300">
                        Example:
                    </p>

                    <div className="bg-neutral-100 dark:bg-neutral-900 rounded-xl p-4 mt-2 font-mono text-sm border border-neutral-300 dark:border-neutral-800 whitespace-pre-wrap">
                        {`quantpkg install fmtlib/fmt
quantpkg install Neargye/magic_enum`}
                    </div>

                    <p className="text-neutral-700 dark:text-neutral-300 mt-4">
                        Quantpkg automatically:
                    </p>

                    <ul className="list-disc pl-6 space-y-3 text-neutral-700 dark:text-neutral-300 mt-3">
                        <li>Fetches the repository</li>
                        <li>Validates the package</li>
                        <li>Adds it to your project directory</li>
                    </ul>
                </section>

                <hr className="border-neutral-300 dark:border-neutral-800 my-10" />

                {/* NO OTHER COMMANDS */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold mb-4">Limitations</h2>

                    <p className="text-neutral-700 dark:text-neutral-300">
                        Quantpkg does NOT support:
                    </p>

                    <ul className="list-disc pl-6 space-y-3 text-neutral-700 dark:text-neutral-300 mt-3">
                        <li>No version pinning</li>
                        <li>No dependency tree resolution</li>
                        <li>No uninstall command</li>
                        <li>No package registry — GitHub only</li>
                    </ul>

                    <p className="mt-4 text-neutral-700 dark:text-neutral-300">
                        The goal is to remain simple, minimal, and GitHub-powered.
                    </p>
                </section>

                <footer className="mt-24 text-neutral-500 dark:text-neutral-400 text-sm">
                    © {new Date().getFullYear()} Cortlet — Quantpkg Documentation
                </footer>

            </main>
        </div>
    );
}
