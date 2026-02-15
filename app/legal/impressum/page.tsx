export default function ImpressumPage() {
    return (
        <main className="max-w-4xl mx-auto pt-24 pb-32 px-6 text-left">

            <h1 className="text-5xl font-bold text-neutral-900 dark:text-white mb-4">
                Legal Notice (Impressum)
            </h1>

            <p className="text-neutral-600 dark:text-neutral-400 mb-12">
                Last updated: {new Date().getFullYear()}
            </p>

            {/* PROVIDER SECTION */}
            <h2 className="text-3xl font-semibold mb-4">
                Service Provider
            </h2>

            <p className="text-neutral-700 dark:text-neutral-300 mb-8 leading-relaxed">
                Cortlet Software
                <br />
                Developer & Publisher of software products including iOS applications,
                Windows CLI tools, and NPM libraries.
            </p>

            <hr className="border-neutral-300 dark:border-neutral-800 mb-12" />

            {/* CONTACT SECTION */}
            <h2 className="text-3xl font-semibold mb-4">
                Contact Information
            </h2>

            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-10">
                Email (Support):{" "}
                <a
                    href="mailto:support@cortlet.com"
                    className="underline text-blue-600 dark:text-blue-400"
                >
                    support@cortlet.com
                </a>
                <br />
                This is the official communication channel for legal, technical, and
                support inquiries related to Cortlet Software.
            </p>

            {/* RESPONSIBLE ENTITY */}
            <h2 className="text-3xl font-semibold mb-4">
                Responsible for Content (§55 Abs. 2 RStV)
            </h2>

            <p className="text-neutral-700 dark:text-neutral-300 mb-10 leading-relaxed">
                Cortlet Software
                <br />
                (A software brand identity. No personal residential information is
                published for safety reasons. Direct all inquiries to the email above.)
            </p>

            {/* LIABILITY */}
            <h2 className="text-3xl font-semibold mb-4">
                Liability for Content
            </h2>

            <p className="text-neutral-700 dark:text-neutral-300 mb-10 leading-relaxed">
                Cortlet Software makes every effort to ensure the accuracy and
                reliability of its website content, documentation, and product
                information. No guarantee is made regarding completeness or
                uninterrupted availability. External links are the responsibility of
                their respective operators.
            </p>

            {/* BUSINESS STATUS */}
            <h2 className="text-3xl font-semibold mb-4">
                Business Activity
            </h2>

            <p className="text-neutral-700 dark:text-neutral-300 mb-10 leading-relaxed">
                Cortlet Software develops and distributes software applications and
                developer tools. Some products may be free, open-source, or commercial,
                depending on their individual licensing terms.
            </p>

            {/* FINAL FOOTER */}
            <footer className="text-neutral-500 dark:text-neutral-400 text-sm mt-20">
                © {new Date().getFullYear()} Cortlet Software — Legal Notice (Impressum)
            </footer>
        </main>
    );
}
