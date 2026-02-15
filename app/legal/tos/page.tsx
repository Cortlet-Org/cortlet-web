import Link from "next/link";

export default function TermsOfServicePage() {
    return (
        <main className="max-w-4xl mx-auto pt-24 pb-32 px-6 text-left">

            {/* TITLE */}
            <h1 className="text-5xl font-bold text-neutral-900 dark:text-white mb-4">
                Terms of Service
            </h1>

            <p className="text-neutral-600 dark:text-neutral-400 mb-12">
                Last updated: {new Date().getFullYear()}
            </p>

            {/* INTRO */}
            <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-10 leading-relaxed">
                These Terms govern your use of Cortlet’s website, authentication
                system, developer tools, APIs, and related services. By using
                Cortlet, you agree to these Terms. If you do not agree, you must
                stop using the services immediately.
            </p>

            <hr className="border-neutral-300 dark:border-neutral-800 mb-12" />

            {/* SECTION 1 */}
            <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white mb-4">
                1. Use of the Platform
            </h2>

            <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
                Cortlet provides software, libraries, documentation, and developer
                tools intended for professional development workflows. You agree
                not to misuse, harm, or interfere with the Services.
            </p>

            <ul className="list-disc pl-6 text-neutral-700 dark:text-neutral-300 mb-10 leading-relaxed">
                <li>No reverse-engineering unless permitted by licenses.</li>
                <li>No unauthorized access attempts.</li>
                <li>No abuse of APIs, rate limits, or SDKs.</li>
                <li>No harmful or illegal use of the Services.</li>
            </ul>

            {/* SECTION 2 */}
            <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white mb-4">
                2. Account & Authentication
            </h2>

            <p className="text-neutral-700 dark:text-neutral-300 mb-10 leading-relaxed">
                Cortlet uses OAuth (Google, GitHub) for developer authentication.
                By signing in, you authorize Cortlet to receive basic profile
                details as described in our Privacy Policy. You are responsible for
                maintaining your login security.
            </p>

            {/* SECTION 3 */}
            <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white mb-4">
                3. Software Licensing
            </h2>

            <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
                Cortlet tools may include open-source components under MIT or
                Apache-2.0 licensing. You agree to comply with the terms of all
                included licenses.
            </p>

            <ul className="list-disc pl-6 text-neutral-700 dark:text-neutral-300 mb-10 leading-relaxed">
                <li>Cortlet may update or remove tools at any time.</li>
                <li>Compatibility between major versions is not guaranteed.</li>
                <li>API usage must follow documented rules.</li>
            </ul>

            {/* SECTION 4 */}
            <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white mb-4">
                4. Privacy & Data Collection
            </h2>

            <p className="text-neutral-700 dark:text-neutral-300 mb-10 leading-relaxed">
                Cortlet collects limited operational data such as OAuth login
                details, usage analytics, and security logs. For full details, see our{" "}
                <Link
                    href="/legal/privacy"
                    className="underline text-blue-600 dark:text-blue-400"
                >
                    Privacy Policy
                </Link>.
            </p>

            {/* NEW SECTION (VALID NOW) */}
            <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white mb-4">
                Anti-Bot & Abuse Prevention
            </h2>

            <p className="text-neutral-700 dark:text-neutral-300 mb-10 leading-relaxed">
                Cortlet uses internal security mechanisms to detect automated or
                malicious activity, which may involve real-time analysis of pointer
                movement, interaction timing, or similar behavioral signals. These
                signals are anonymous, not stored, and used solely to prevent abuse.
                They do not constitute tracking or fingerprinting.
            </p>

            {/* SECTION 5 */}
            <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white mb-4">
                5. Limitation of Liability
            </h2>

            <p className="text-neutral-700 dark:text-neutral-300 mb-10 leading-relaxed">
                Cortlet is provided “as is” without warranty of any kind. Cortlet
                is not liable for indirect, incidental, or consequential damages
                arising from use of the Services.
            </p>

            {/* SECTION 6 */}
            <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white mb-4">
                6. Changes to These Terms
            </h2>

            <p className="text-neutral-700 dark:text-neutral-300 mb-10 leading-relaxed">
                Terms may be updated to reflect new features, legal requirements,
                or security improvements. Continued use after changes constitutes
                acceptance of the updated Terms.
            </p>

            {/* SECTION 7 */}
            <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white mb-4">
                7. Contact
            </h2>

            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                For questions regarding these Terms, email{" "}
                <a
                    href="mailto:support@cortlet.com"
                    className="underline text-blue-600 dark:text-blue-400"
                >
                    support@cortlet.com
                </a>.
            </p>
        </main>
    );
}
