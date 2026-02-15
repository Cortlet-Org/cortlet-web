import QuantpkgSidebar from "../sidebar";

export default function QuantpkgUsagePage() {
    return (
        <div className="flex w-full">

            {/* SIDEBAR */}
            <QuantpkgSidebar />

            {/* CONTENT */}
            <main className="flex-1 px-10 pt-28 pb-24 max-w-4xl">

                <h1 className="text-5xl font-bold mb-6">Usage</h1>

                <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-10">
                    Quantpkg provides simple commands to initialize a project and install packages
                    directly from GitHub. Here are the commands you will use most frequently.
                </p>

                <hr className="border-neutral-300 dark:border-neutral-800 my-10" />

                {/* INIT PROJECT */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4">Initialize a New Project</h2>

                    <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                        Start a new Quantpkg project using:
                    </p>

                    <div className="bg-neutral-100 dark:bg-neutral-900 border
                        border-neutral-300 dark:border-neutral-800 rounded-xl p-5
                        font-mono text-sm whitespace-pre-wrap overflow-x-auto">
                        {`quantpkg init`}
                    </div>
                </section>

                <hr className="border-neutral-300 dark:border-neutral-800 my-10" />

                {/* INSTALL PACKAGE */}
                <section>
                    <h2 className="text-3xl font-semibold mb-4">Install a Package</h2>

                    <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                        Install any C++ library directly from GitHub:
                    </p>

                    <div className="bg-neutral-100 dark:bg-neutral-900 border
                        border-neutral-300 dark:border-neutral-800 rounded-xl p-5
                        font-mono text-sm whitespace-pre-wrap overflow-x-auto">
                        {`quantpkg install <github_user>/<repo>`}
                    </div>

                    <p className="mt-6 text-neutral-700 dark:text-neutral-300 mb-3">
                        Examples:
                    </p>

                    <div className="bg-neutral-100 dark:bg-neutral-900 border
                        border-neutral-300 dark:border-neutral-800 rounded-xl p-5
                        font-mono text-sm whitespace-pre-wrap overflow-x-auto">
                        {`quantpkg install fmtlib/fmt
quantpkg install Neargye/magic_enum`}
                    </div>
                </section>

                <footer className="mt-24 text-neutral-500 dark:text-neutral-400 text-sm">
                    © {new Date().getFullYear()} Cortlet — Quantpkg Documentation
                </footer>

            </main>
        </div>
    );
}
