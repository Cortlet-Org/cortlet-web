import Link from "next/link";

export default function CodeOfConductPage() {
    return (
        <main className="max-w-4xl mx-auto pt-24 pb-32 px-6 text-left">

            {/* TITLE */}
            <h1 className="text-5xl font-bold text-neutral-900 dark:text-white mb-4">
                Code of Conduct
            </h1>

            <p className="text-neutral-600 dark:text-neutral-400 mb-12">
                Last updated: {new Date().getFullYear()}
            </p>

            {/* INTRO */}
            <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-10 leading-relaxed">
                This Code of Conduct outlines the behavior expected when using
                Cortlet’s tools, website, services, and open-source projects.
                Cortlet aims to maintain a safe, respectful, and productive
                environment for all users. By participating, you agree to follow
                these guidelines.
            </p>

            <hr className="border-neutral-300 dark:border-neutral-800 mb-12" />

            {/* SECTION 1 */}
            <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white mb-4">
                1. Expected Behavior
            </h2>

            <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
                Users interacting with Cortlet or contributing to its projects should:
            </p>

            <ul className="list-disc pl-6 text-neutral-700 dark:text-neutral-300 mb-10 leading-relaxed">
                <li>Be respectful, constructive, and considerate.</li>
                <li>Use welcoming and inclusive language.</li>
                <li>Respect different opinions and experiences.</li>
                <li>Act responsibly and professionally.</li>
            </ul>

            {/* SECTION 2 */}
            <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white mb-4">
                2. Unacceptable Behavior
            </h2>

            <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
                The following behaviors are not allowed anywhere within Cortlet’s
                services or community spaces:
            </p>

            <ul className="list-disc pl-6 text-neutral-700 dark:text-neutral-300 mb-10 leading-relaxed">
                <li>Harassment, discrimination, or hateful conduct.</li>
                <li>Threats, personal attacks, or intimidation.</li>
                <li>Uploading harmful code or intentionally breaking software.</li>
                <li>Abuse of APIs or unauthorized access attempts.</li>
                <li>Spam or disruptive behavior in discussions or contributions.</li>
            </ul>

            {/* SECTION 3 */}
            <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white mb-4">
                3. Reporting Issues
            </h2>

            <p className="text-neutral-700 dark:text-neutral-300 mb-10 leading-relaxed">
                If you experience or notice a violation of this Code of Conduct,
                you can report it directly to the project owner. All reports are
                handled privately and will not be shared.
            </p>

            <p className="text-neutral-700 dark:text-neutral-300 mb-10 leading-relaxed">
                To report a violation, email{" "}
                <a
                    href="mailto:support@cortlet.com"
                    className="underline text-blue-600 dark:text-blue-400"
                >
                    support@cortlet.com
                </a>.
            </p>

            {/* SECTION 4 */}
            <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white mb-4">
                4. Enforcement
            </h2>

            <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
                Actions taken for violations are decided by the project owner and may include:
            </p>

            <ul className="list-disc pl-6 text-neutral-700 dark:text-neutral-300 mb-10 leading-relaxed">
                <li>A warning.</li>
                <li>Temporary or permanent removal from discussions or projects.</li>
                <li>Restriction of access to Cortlet services or repositories.</li>
            </ul>

            {/* SECTION 5 */}
            <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white mb-4">
                5. Scope
            </h2>

            <p className="text-neutral-700 dark:text-neutral-300 mb-10 leading-relaxed">
                This Code applies to all Cortlet-related spaces, including the website,
                open-source repositories, issues, pull requests, and any interactions
                where Cortlet is represented.
            </p>

            {/* SECTION 6 */}
            <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white mb-4">
                6. Updates to This Code
            </h2>

            <p className="text-neutral-700 dark:text-neutral-300 mb-10 leading-relaxed">
                This Code of Conduct may be updated over time. Continued use of Cortlet
                services means you agree to the most recent version.
            </p>

            {/* FOOTER */}
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                For more information, also see our{" "}
                <Link
                    href="/legal/terms"
                    className="underline text-blue-600 dark:text-blue-400"
                >
                    Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                    href="/legal/privacy"
                    className="underline text-blue-600 dark:text-blue-400"
                >
                    Privacy Policy
                </Link>.
            </p>
        </main>
    );
}
