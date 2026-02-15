// /app/legal/eula/page.tsx

export default function EulaPage() {
    return (
        <div className="text-neutral-800 dark:text-neutral-200 select-none">

            <h1 className="text-5xl font-bold mb-4">End User License Agreement (EULA)</h1>

            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-10">
                Last updated: {new Date().getFullYear()}
            </p>

            <p className="mb-8 text-neutral-700 dark:text-neutral-300">
                This End User License Agreement (“Agreement”) governs your use of Cortlet
                software, applications, SDKs, command-line tools, libraries, and developer
                utilities (“Software”). By installing, accessing, or using any Cortlet
                Software, you agree to be bound by this Agreement.
            </p>

            {/* SECTION 1: LICENSE GRANT */}
            <h2 className="text-3xl font-semibold mb-4">1. License Grant</h2>
            <p className="mb-6 text-neutral-700 dark:text-neutral-300">
                Cortlet grants you a non-exclusive, non-transferable, revocable license to use
                the Software solely for personal or internal development purposes unless
                explicitly stated otherwise.
            </p>

            {/* SECTION 2: RESTRICTIONS */}
            <h2 className="text-3xl font-semibold mb-4">2. Restrictions</h2>

            <p className="mb-4 text-neutral-700 dark:text-neutral-300">
                You may not:
            </p>

            <ul className="list-disc pl-6 mb-8 space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>Reverse engineer, decompile, or attempt to extract source code.</li>
                <li>Redistribute, resell, sublicense, or modify the Software unless permitted.</li>
                <li>Use the Software for unlawful, abusive, or harmful activities.</li>
                <li>Remove or obscure Cortlet trademarks, notices, or attributions.</li>
            </ul>

            {/* SECTION 3: OWNERSHIP */}
            <h2 className="text-3xl font-semibold mb-4">3. Ownership</h2>

            <p className="mb-6 text-neutral-700 dark:text-neutral-300">
                The Software is licensed, not sold. Cortlet retains full ownership of all
                intellectual property, trademarks, and related assets contained within the
                Software.
            </p>

            {/* SECTION 4: UPDATES */}
            <h2 className="text-3xl font-semibold mb-4">4. Software Updates</h2>

            <p className="mb-6 text-neutral-700 dark:text-neutral-300">
                Cortlet may provide updates, bug fixes, or new versions of the Software.
                Updates may be installed automatically or require manual installation depending
                on the platform.
            </p>

            {/* SECTION 5: DATA & ANALYTICS */}
            <h2 className="text-3xl font-semibold mb-4">5. Data & Analytics</h2>

            <p className="mb-6 text-neutral-700 dark:text-neutral-300">
                Some Cortlet applications may collect analytics, performance data, crash
                reports, or usage insights to improve stability and user experience. We do
                not collect sensitive personal data through the Software. See our Privacy
                Policy for more details.
            </p>

            {/* SECTION 6: TERMINATION */}
            <h2 className="text-3xl font-semibold mb-4">6. Termination</h2>

            <p className="mb-6 text-neutral-700 dark:text-neutral-300">
                Cortlet reserves the right to terminate this Agreement at any time if you
                violate its terms. Upon termination, you must cease using the Software and
                delete all copies.
            </p>

            {/* SECTION 7: DISCLAIMER */}
            <h2 className="text-3xl font-semibold mb-4">7. Disclaimer of Warranties</h2>

            <p className="mb-6 text-neutral-700 dark:text-neutral-300">
                The Software is provided “as is” without warranties of any kind, express or
                implied, including but not limited to merchantability, fitness for a
                particular purpose, or non-infringement.
            </p>

            {/* SECTION 8: LIMITATION OF LIABILITY */}
            <h2 className="text-3xl font-semibold mb-4">8. Limitation of Liability</h2>

            <p className="mb-10 text-neutral-700 dark:text-neutral-300">
                To the maximum extent permitted by law, Cortlet shall not be liable for any
                indirect, incidental, consequential, or special damages, including data loss
                or system failures arising from the use of the Software.
            </p>

            {/* FOOTER */}
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
                © {new Date().getFullYear()} Cortlet — End User License Agreement
            </p>
        </div>
    );
}
