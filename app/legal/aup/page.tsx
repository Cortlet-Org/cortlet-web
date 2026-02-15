// /app/legal/aup/page.tsx

export default function AupPage() {
    return (
        <div className="text-neutral-800 dark:text-neutral-200 select-none">

            <h1 className="text-5xl font-bold mb-4">Acceptable Use Policy</h1>

            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-10">
                Last updated: {new Date().getFullYear()}
            </p>

            <p className="mb-8 text-neutral-700 dark:text-neutral-300">
                This Acceptable Use Policy (“AUP”) defines permitted and prohibited
                activities when using Cortlet services, SDKs, software, APIs, developer
                tools, authentication systems, and any related platform (“Services”).
                By accessing or using Cortlet Services, you agree to follow this AUP.
            </p>

            {/* SECTION 1 */}
            <h2 className="text-3xl font-semibold mb-4">1. Prohibited Activities</h2>

            <p className="mb-4 text-neutral-700 dark:text-neutral-300">
                You may <strong>not</strong> use Cortlet Services to engage in any harmful,
                abusive, or unlawful activities, including:
            </p>

            <ul className="list-disc pl-6 mb-10 space-y-3 text-neutral-700 dark:text-neutral-300">
                <li>Breaking into, probing, or disrupting systems or networks.</li>
                <li>Automating account creation or abusing authentication flows.</li>
                <li>Attempting to bypass rate limits, quotas, or security measures.</li>
                <li>Sending spam, phishing content, or malicious links.</li>
                <li>Uploading malware, exploits, or harmful software.</li>
                <li>Using Cortlet APIs for scraping, brute-forcing, or attack tooling.</li>
                <li>Reverse engineering Cortlet technology unless permitted by license.</li>
                <li>Harassing, threatening, or harming other users or developers.</li>
                <li>Misrepresenting your identity when accessing Cortlet services.</li>
            </ul>

            {/* SECTION 2 */}
            <h2 className="text-3xl font-semibold mb-4">2. Fair Use Requirements</h2>

            <p className="mb-4 text-neutral-700 dark:text-neutral-300">
                Your usage of Cortlet Services must remain reasonable and compliant with
                platform guidelines. You must not:
            </p>

            <ul className="list-disc pl-6 mb-10 space-y-3 text-neutral-700 dark:text-neutral-300">
                <li>Consume resources in a way that disrupts service for others.</li>
                <li>Trigger excessive API calls, auth attempts, or error traffic.</li>
                <li>Deploy automated bots without permission.</li>
                <li>Use Cortlet SDKs in environments designed for abuse or evasion.</li>
            </ul>

            {/* SECTION 3 */}
            <h2 className="text-3xl font-semibold mb-4">3. Security Responsibilities</h2>

            <p className="mb-4 text-neutral-700 dark:text-neutral-300">
                You must take reasonable steps to protect your account and data, including:
            </p>

            <ul className="list-disc pl-6 mb-10 space-y-3 text-neutral-700 dark:text-neutral-300">
                <li>Keeping authentication keys and API tokens private.</li>
                <li>Not sharing credentials or bypassing account protections.</li>
                <li>Reporting vulnerabilities to Cortlet responsibly.</li>
            </ul>

            {/* SECTION 4 */}
            <h2 className="text-3xl font-semibold mb-4">4. Enforcement</h2>

            <p className="mb-6 text-neutral-700 dark:text-neutral-300">
                Violations of this AUP may result in warnings, feature restrictions, API
                throttling, suspension, or termination of access to Cortlet Services.
            </p>

            {/* SECTION 5 */}
            <h2 className="text-3xl font-semibold mb-4">5. Reporting Abuse</h2>

            <p className="mb-10 text-neutral-700 dark:text-neutral-300">
                If you believe a user is violating this policy, please notify Cortlet
                through official support channels. We take abuse seriously and respond
                quickly to protect the platform and its developers.
            </p>

            {/* FOOTER */}
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
                © {new Date().getFullYear()} Cortlet — Acceptable Use Policy
            </p>
        </div>
    );
}
