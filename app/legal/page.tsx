import Link from "next/link";
import Navbar from "@/app/components/Navbar";

export default function LegalCenter() {
    return (
        <main className="min-h-screen w-full bg-white text-black dark:bg-black dark:text-white px-6 py-24 transition-colors duration-300">
            <Navbar/>
            {/* PAGE HEADER */}
            <header className="text-center mb-16">
                <h1 className="text-5xl font-bold mb-4">Legal Center</h1>
                <p className="text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto text-lg">
                    Access all Cortlet legal documents, policies, and licensing information in one place.
                </p>
            </header>

            {/* DOCUMENT GRID */}
            <section className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* CARD COMPONENT */}
                <Link
                    href="/legal/privacy"
                    className="p-6 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 hover:border-black dark:hover:border-white transition group"
                >
                    <h2 className="text-xl font-semibold group-hover:text-black dark:group-hover:text-white">
                        Privacy Policy
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 mt-2 text-sm">
                        How Cortlet processes and protects your data.
                    </p>
                </Link>

                <Link
                    href="/legal/tos"
                    className="p-6 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 hover:border-black dark:hover:border-white transition group"
                >
                    <h2 className="text-xl font-semibold group-hover:text-black dark:group-hover:text-white">
                        Terms of Service
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 mt-2 text-sm">
                        Rules and conditions for using the platform.
                    </p>
                </Link>

                <Link
                    href="/legal/cookie"
                    className="p-6 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 hover:border-black dark:hover:border-white transition group"
                >
                    <h2 className="text-xl font-semibold group-hover:text-black dark:group-hover:text-white">
                        Cookie Policy
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 mt-2 text-sm">
                        Information on cookies and tracking technologies.
                    </p>
                </Link>

                <Link
                    href="/legal/eula"
                    className="p-6 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 hover:border-black dark:hover:border-white transition group"
                >
                    <h2 className="text-xl font-semibold group-hover:text-black dark:group-hover:text-white">
                        End User License Agreement
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 mt-2 text-sm">
                        License and usage terms for Cortlet software.
                    </p>
                </Link>

                <Link
                    href="/legal/aup"
                    className="p-6 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 hover:border-black dark:hover:border-white transition group"
                >
                    <h2 className="text-xl font-semibold group-hover:text-black dark:group-hover:text-white">
                        Acceptable Use Policy
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 mt-2 text-sm">
                        Permitted usage for Cortlet products.
                    </p>
                </Link>

                <Link
                    href="/legal/apache-2"
                    className="p-6 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 hover:border-black dark:hover:border-white transition group"
                >
                    <h2 className="text-xl font-semibold group-hover:text-black dark:group-hover:text-white">
                        Apache 2.0 License
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 mt-2 text-sm">
                        Terms for Apache-licensed components.
                    </p>
                </Link>

                <Link
                    href="/legal/mit"
                    className="p-6 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 hover:border-black dark:hover:border-white transition group"
                >
                    <h2 className="text-xl font-semibold group-hover:text-black dark:group-hover:text-white">
                        MIT License
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 mt-2 text-sm">
                        Terms for MIT-licensed components.
                    </p>
                </Link>

                <Link
                    href="/legal/dmca"
                    className="p-6 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 hover:border-black dark:hover:border-white transition group"
                >
                    <h2 className="text-xl font-semibold group-hover:text-black dark:group-hover:text-white">
                        DMCA
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 mt-2 text-sm">
                        Learn how to submit copyright takedown notices and report infringing content.
                    </p>
                </Link>

                <Link
                    href="/legal/impressum"
                    className="p-6 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 hover:border-black dark:hover:border-white transition group"
                >
                    <h2 className="text-xl font-semibold group-hover:text-black dark:group-hover:text-white">
                        Impressum
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 mt-2 text-sm">
                        Legal disclosure and responsible entity information for Cortlet.
                    </p>
                </Link>

                <Link
                    href="/legal/code-of-conduct"
                    className="p-6 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 hover:border-black dark:hover:border-white transition group"
                >
                    <h2 className="text-xl font-semibold group-hover:text-black dark:group-hover:text-white">
                        Code of Conduct
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 mt-2 text-sm">
                        Rules, expectations, and behavior guidelines for interacting with Cortlet services.
                    </p>
                </Link>


            </section>

            {/* FOOTER */}
            <footer className="text-center text-neutral-600 dark:text-neutral-400 text-sm mt-20">
                © {new Date().getFullYear()} Cortlet — All Rights Reserved.
            </footer>

        </main>
    );
}
