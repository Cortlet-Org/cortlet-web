import QuantpkgSidebar from "../sidebar";

export default function QuantpkgConfigPage() {
    return (
        <div className="flex w-full">
            <QuantpkgSidebar />

            <main className="flex-1 px-10 pt-28 pb-24 max-w-4xl">

                <h1 className="text-5xl font-bold mb-6">Project Configuration</h1>

                <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-10">
                    Quantpkg uses a single configuration file named <code>quantpkg.toml</code>.
                    This file is automatically created when you run <code>quantpkg init</code>
                    in your project directory. It controls your package name, version, and
                    dependencies.
                </p>

                <hr className="border-neutral-300 dark:border-neutral-800 my-10" />


                {/* CONFIG FILE SECTION */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4">quantpkg.toml</h2>

                    <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                        This is the only config file used by Quantpkg.
                        No <code>.quantpkgrc</code>, <code>config.json</code>, or any other settings file exists.
                    </p>

                    <div className="
                        bg-neutral-100 dark:bg-neutral-900
                        rounded-xl p-5 border
                        border-neutral-300 dark:border-neutral-800
                        font-mono text-sm whitespace-pre-wrap
                    ">
                        {`[package]
name = "myproject"
version = "1.0.0"

[dependencies]
fmt = "fmtlib/fmt"
magic_enum = "Neargye/magic_enum"`}
                    </div>

                    <p className="mt-4 text-neutral-700 dark:text-neutral-300">
                        All dependencies listed inside <code>[dependencies]</code> will be installed into
                        your <strong>current project folder</strong>, not globally.
                    </p>
                </section>

                <hr className="border-neutral-300 dark:border-neutral-800 my-10" />


                {/* INSTALL DIRECTORY */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4">Where Packages Are Installed?</h2>

                    <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                        Quantpkg installs packages <strong>inside the project directory</strong> created
                        by <code>quantpkg init</code>.
                    </p>

                    <div className="
                        bg-neutral-100 dark:bg-neutral-900
                        rounded-xl p-4 border
                        border-neutral-300 dark:border-neutral-800
                        font-mono text-sm
                    ">
                        ./quantpkg_packages/
                    </div>

                    <p className="mt-4 text-neutral-700 dark:text-neutral-300">
                        Each dependency is downloaded from GitHub and stored inside this folder.
                    </p>
                </section>

                <hr className="border-neutral-300 dark:border-neutral-800 my-10" />


                {/* NO FLAGS */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold mb-4">CLI Flags & Options</h2>

                    <p className="text-neutral-700 dark:text-neutral-300">
                        Quantpkg has <strong>no configuration flags</strong>.
                        The entire tool is controlled through:
                    </p>

                    <ul className="list-disc pl-6 mt-3 space-y-2 text-neutral-700 dark:text-neutral-300">
                        <li><code>quantpkg init</code> — create quantpkg.toml</li>
                        <li><code>quantpkg install &lt;user/repo&gt;</code> — install a package</li>
                        <li><code>quantpkg help</code></li>
                        <li><code>quantpkg --version</code></li>
                    </ul>
                </section>

                <footer className="mt-24 text-neutral-500 dark:text-neutral-400 text-sm">
                    © {new Date().getFullYear()} Cortlet — Quantpkg Documentation
                </footer>
            </main>
        </div>
    );
}
