// /app/legal/cookie/page.tsx

export default function CookiePolicyPage() {
    return (
        <div className="text-neutral-800 dark:text-neutral-200 select-none">

            <h1 className="text-5xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-10">
                Last updated: {new Date().getFullYear()}
            </p>

            <p className="mb-8 text-neutral-700 dark:text-neutral-300">
                This Cookie Policy explains how <strong>Cortlet</strong> uses cookies, tracking
                technologies, analytics identifiers, and similar tools when you interact with our
                website, authentication system, products, and developer tools.
            </p>

            {/* 1 — WHAT ARE COOKIES */}
            <h2 className="text-3xl font-semibold mb-4">1. What Are Cookies?</h2>
            <p className="mb-6 text-neutral-700 dark:text-neutral-300">
                Cookies are small text files placed on your device to store data that helps improve
                your experience, enable secure login sessions, and provide analytics insights.
            </p>

            {/* 2 — COOKIES WE USE */}
            <h2 className="text-3xl font-semibold mb-4">2. Cookies We Use</h2>

            <h3 className="text-xl font-medium mb-2">Essential Cookies</h3>
            <p className="mb-6 text-neutral-700 dark:text-neutral-300">
                These cookies are required for Cortlet to function. They enable authentication,
                security checks, and core features of our developer dashboard.
            </p>

            <h3 className="text-xl font-medium mb-2">Analytics Cookies</h3>
            <p className="mb-6 text-neutral-700 dark:text-neutral-300">
                Cortlet uses <strong>Vercel Analytics</strong> to collect anonymized information
                about traffic patterns and performance, including:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>Approximate location (country & region)</li>
                <li>Pages visited and time spent</li>
                <li>Browser & device type</li>
                <li>Navigation flows</li>
            </ul>

            <p className="mb-6 text-neutral-700 dark:text-neutral-300">
                These analytics cookies do <strong>not</strong> identify you personally.
            </p>

            <h3 className="text-xl font-medium mb-2">Security & Logging Cookies</h3>
            <p className="mb-6 text-neutral-700 dark:text-neutral-300">
                Cortlet may store identifiers related to login attempts (success & failure)
                to prevent abuse, detect unusual patterns, and protect your account.
            </p>

            {/* 3 — THIRD-PARTY TECHNOLOGIES */}
            <h2 className="text-3xl font-semibold mb-4">
                3. Third-Party Tracking Technologies
            </h2>

            <p className="mb-6 text-neutral-700 dark:text-neutral-300">
                We may use additional third-party tools that set their own cookies or tracking identifiers,
                such as:
            </p>

            <ul className="list-disc pl-6 mb-8 space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>OAuth login providers (Google, GitHub)</li>
                <li>CloudWatch logging identifiers</li>
                <li>Performance monitoring tools</li>
            </ul>

            {/* 4 — MANAGING COOKIES */}
            <h2 className="text-3xl font-semibold mb-4">4. Managing Your Cookie Preferences</h2>

            <p className="mb-6 text-neutral-700 dark:text-neutral-300">
                You can disable cookies in your browser settings, but doing so may prevent certain
                features — such as login, dashboard access, and security checks — from working correctly.
            </p>

            {/* 5 — CHANGES */}
            <h2 className="text-3xl font-semibold mb-4">5. Changes to This Cookie Policy</h2>
            <p className="mb-10 text-neutral-700 dark:text-neutral-300">
                We may update this Cookie Policy to reflect new technologies, legal requirements,
                or improvements to our platform. Updates will be posted on this page with a revised date.
            </p>

            {/* FOOTER */}
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
                © {new Date().getFullYear()} Cortlet — Cookie Policy
            </p>
        </div>
    );
}
