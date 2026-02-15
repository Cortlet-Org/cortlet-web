import Navbar from "@/app/components/Navbar";

export default function PrivacyPolicyPage() {
    return (
        <>

            <main className="pt-28 px-6 max-w-4xl mx-auto pb-32">

                {/* PAGE TITLE */}
                <h1 className="text-5xl font-bold mb-4">
                    Privacy Policy
                </h1>

                <p className="text-neutral-600 dark:text-neutral-300 mb-12">
                    Last updated: {new Date().getFullYear()}
                </p>

                {/* INTRO */}
                <section className="mb-16">
                    <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        This Privacy Policy explains how <strong>Cortlet</strong> collects,
                        uses, and protects your information when you use our website,
                        authentication system, developer tools, and related services.
                        By using Cortlet, you agree to the practices described here.
                    </p>
                </section>

                <hr className="border-neutral-300 dark:border-neutral-800 my-10" />

                {/* SECTION 1 */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4">
                        1. Information We Collect
                    </h2>

                    <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                        We collect information in three categories:
                    </p>

                    <ul className="list-disc pl-6 space-y-2 text-neutral-700 dark:text-neutral-300">
                        <li>Information you provide directly through OAuth</li>
                        <li>Information collected automatically through analytics</li>
                        <li>Security and operational data collected through logging systems</li>
                    </ul>
                </section>

                {/* SECTION 2 — OAUTH */}
                <section className="mb-16">
                    <h3 className="text-2xl font-semibold mb-3">
                        OAuth Login Information
                    </h3>

                    <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                        When signing in with <strong>Google</strong> or <strong>GitHub</strong>,
                        we collect:
                    </p>

                    <ul className="list-disc pl-6 space-y-2 text-neutral-700 dark:text-neutral-300">
                        <li>Your name (if provided)</li>
                        <li>Email address</li>
                        <li>Profile image</li>
                        <li>OAuth provider ID</li>
                        <li>Login timestamps (success & failure)</li>
                    </ul>
                </section>

                {/* SECTION 3 — ANALYTICS */}
                <section className="mb-16">
                    <h3 className="text-2xl font-semibold mb-3">
                        Analytics Information
                    </h3>

                    <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                        Cortlet uses <strong>Vercel Analytics</strong> to collect anonymized usage
                        information such as:
                    </p>

                    <ul className="list-disc pl-6 space-y-2 text-neutral-700 dark:text-neutral-300">
                        <li>Approximate location (country, region)</li>
                        <li>Device type & browser</li>
                        <li>Page views & session duration</li>
                        <li>Performance metrics (LCP, TTFB, etc.)</li>
                    </ul>
                </section>

                {/* SECTION 4 — CLOUDWATCH */}
                <section className="mb-16">
                    <h3 className="text-2xl font-semibold mb-3">
                        AWS CloudWatch Logs
                    </h3>

                    <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                        For security and operational integrity, Cortlet uses{" "}
                        <strong>AWS CloudWatch</strong> to log:
                    </p>

                    <ul className="list-disc pl-6 space-y-2 text-neutral-700 dark:text-neutral-300">
                        <li>IP address</li>
                        <li>Request paths & timestamps</li>
                        <li>Login success/failure</li>
                        <li>Error diagnostics</li>
                        <li>API request metadata</li>
                    </ul>

                    <p className="text-neutral-700 dark:text-neutral-300 mt-4">
                        These logs help detect abusive activity, bots, unusual authentication
                        behavior, and system errors.
                    </p>
                </section>

                <section className="mb-16">
                    <h3 className="text-2xl font-semibold mb-3">Bot Detection & Security Signals</h3>

                    <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                        To protect Cortlet from automated abuse, spam, and malicious traffic, we
                        perform limited, non-identifying security checks during user interactions.
                        This may include evaluation of:
                    </p>

                    <ul className="list-disc pl-6 space-y-2 text-neutral-700 dark:text-neutral-300">
                        <li>pointer movement patterns</li>
                        <li>interaction timing</li>
                        <li>pressure or touch sensitivity (when supported)</li>
                        <li>challenge–response verification</li>
                        <li>temporary, non-persistent session signals</li>
                    </ul>

                    <p className="text-neutral-700 dark:text-neutral-300 mt-4">
                        These signals are processed in real time, are not stored, are not used
                        for tracking or analytics, and do not identify users. They exist solely
                        to distinguish legitimate activity from automated systems.
                    </p>
                </section>

                <section className="mb-16">
                    <h3 className="text-2xl font-semibold mb-3">Cookies & Tracking</h3>

                    <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                        Cortlet does not use tracking cookies or advertising cookies. Any
                        temporary operational data used for security or system functionality does
                        not identify users and is not stored once the session ends. Because no
                        tracking cookies are used, no cookie consent banner is required.
                    </p>
                </section>


                {/* SECTION 5 — HOW DATA IS USED */}
                <hr className="border-neutral-300 dark:border-neutral-800 my-10" />

                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4">2. How We Use Your Data</h2>

                    <ul className="list-disc pl-6 space-y-3 text-neutral-700 dark:text-neutral-300">
                        <li>Authenticate users using OAuth providers</li>
                        <li>Secure accounts from unauthorized access</li>
                        <li>Improve platform performance and reliability</li>
                        <li>Monitor usage patterns using analytics</li>
                        <li>Audit login behavior for security</li>
                        <li>Comply with legal obligations</li>
                    </ul>
                </section>

                {/* SECTION 6 — SHARING */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4">3. How We Share Information</h2>

                    <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                        We do <strong>not sell</strong> your data.
                        We only share information with trusted processors:
                    </p>

                    <ul className="list-disc pl-6 space-y-2 text-neutral-700 dark:text-neutral-300">
                        <li>Google Firebase — authentication</li>
                        <li>Vercel Analytics — anonymized traffic metrics</li>
                        <li>AWS CloudWatch — server logs & security</li>
                    </ul>
                </section>

                {/* SECTION 7 — DELETION */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4">4. Data Retention & Deletion</h2>

                    <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                        You may request account deletion at any time through the dashboard.
                        When deleted, we remove:
                    </p>

                    <ul className="list-disc pl-6 space-y-2 text-neutral-700 dark:text-neutral-300">
                        <li>OAuth identity</li>
                        <li>Login history</li>
                        <li>User profile metadata</li>
                    </ul>

                    <p className="text-neutral-700 dark:text-neutral-300 mt-4">
                        CloudWatch logs may persist for up to 90–365 days for security auditing.
                    </p>
                </section>

                {/* SECTION 8 */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4">5. Your Rights</h2>

                    <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                        Depending on your region, you may request:
                    </p>

                    <ul className="list-disc pl-6 space-y-2 text-neutral-700 dark:text-neutral-300">
                        <li>Access to your data</li>
                        <li>Correction of inaccurate data</li>
                        <li>Deletion of your data</li>
                        <li>Restriction of processing</li>
                        <li>Data export (GDPR)</li>
                    </ul>
                </section>

                {/* SECTION 9 */}
                <hr className="border-neutral-300 dark:border-neutral-800 my-10" />

                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4">6. Contact Us</h2>

                    <p className="text-neutral-700 dark:text-neutral-300">
                        For privacy-related requests, contact us at:
                        <br />
                        <strong>support@cortlet.com</strong>
                    </p>
                </section>

                {/* FOOTER */}
                <footer className="text-neutral-500 dark:text-neutral-400 text-sm mt-20">
                    © {new Date().getFullYear()} Cortlet — Privacy Policy
                </footer>
            </main>
        </>
    );
}
