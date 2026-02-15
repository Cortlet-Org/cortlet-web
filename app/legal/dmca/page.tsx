export default function DMCAPage() {
    return (
        <main className="max-w-4xl mx-auto pt-24 pb-32 px-6 text-left">

            {/* TITLE */}
            <h1 className="text-5xl font-bold text-neutral-900 dark:text-white mb-4">
                DMCA Takedown Policy
            </h1>

            <p className="text-neutral-600 dark:text-neutral-400 mb-12">
                Last updated: {new Date().getFullYear()}
            </p>

            {/* INTRO */}
            <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-10">
                Cortlet Software respects intellectual property rights and complies with
                the Digital Millennium Copyright Act (DMCA). This page explains how
                copyright owners may report alleged infringement and how we respond
                to such notices.
            </p>

            <hr className="border-neutral-300 dark:border-neutral-800 mb-12" />

            {/* SECTION 1 */}
            <h2 className="text-3xl font-semibold mb-4">
                1. Reporting Copyright Infringement
            </h2>

            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
                If you believe that content available through Cortlet products or
                systems infringes on your copyright, you may submit a formal DMCA
                takedown request. We will promptly review all valid notices.
            </p>

            <h3 className="text-xl font-semibold mb-3">Your DMCA notice must include:</h3>

            <ul className="list-disc pl-6 space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>A description of the copyrighted work you believe is infringed</li>
                <li>Identification of the infringing material (URL if applicable)</li>
                <li>Your contact information (email required)</li>
                <li>A statement of good-faith belief that the use is unauthorized</li>
                <li>A statement under penalty of perjury that your claim is accurate</li>
                <li>Your physical or electronic signature</li>
            </ul>

            <p className="text-neutral-700 dark:text-neutral-300 mt-6">
                Submit all notices to our official copyright address:
                <br />
                <strong>support@cortlet.com</strong>
            </p>

            {/* SECTION 2 */}
            <h2 className="text-3xl font-semibold mt-16 mb-4">
                2. How Cortlet Responds
            </h2>

            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
                Once we receive a complete and valid DMCA notice, Cortlet may:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>Remove or disable access to the allegedly infringing material</li>
                <li>Notify the affected user (if user content is involved)</li>
                <li>Log the incident for security and compliance</li>
            </ul>

            {/* SECTION 3 */}
            <h2 className="text-3xl font-semibold mt-16 mb-4">
                3. Counter-Notification
            </h2>

            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
                If a user believes content was removed in error, they may submit a
                counter-notification. Cortlet will review all valid counter-notices
                and may restore content unless the original complainant initiates
                legal action.
            </p>

            {/* SECTION 4 */}
            <h2 className="text-3xl font-semibold mt-16 mb-4">
                4. Repeat Infringers
            </h2>

            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-10">
                Cortlet may restrict or terminate access for users who repeatedly submit,
                upload, or distribute infringing content, in accordance with the DMCA.
            </p>

            {/* FOOTER */}
            <footer className="text-neutral-500 dark:text-neutral-400 text-sm mt-20">
                © {new Date().getFullYear()} Cortlet Software — DMCA Policy
            </footer>
        </main>
    );
}
