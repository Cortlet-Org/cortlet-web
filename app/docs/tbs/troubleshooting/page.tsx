export default function TBSTroubleshootingPage() {
    return (
        <div className="max-w-3xl mx-auto space-y-14">

            <header>
                <h1 className="text-4xl font-bold tracking-tight mb-4">
                    Troubleshooting
                </h1>

                <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    This guide covers common errors and issues you may encounter when using
                    <strong> TBS (Teretalia Boot Set)</strong> by <strong>Cortlet</strong>.
                    Each section provides clear explanations and fixes to help you debug your
                    bootloader code and development environment.
                </p>
            </header>

            {/* SECTION — BIOS PRINT FAILURES */}
            <section>
                <h2 className="text-2xl font-semibold mb-3">Characters Not Printing</h2>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    If characters aren’t appearing when using <code>TBS.Print()</code>, check the following:
                </p>

                <ul className="list-disc ml-6 mt-3 text-neutral-700 dark:text-neutral-300 space-y-1">
                    <li><strong>AH must be set to 0x0E</strong> (BIOS teletype output)</li>
                    <li>AL must contain a valid ASCII value</li>
                    <li>Bootloader must not overwrite video memory unintentionally</li>
                    <li>Your emulator must support BIOS interrupts (QEMU recommended)</li>
                </ul>

                <pre className="bg-neutral-900 text-white p-4 rounded-xl mt-4 text-sm">
{`TBS.Ah(0x0E);
TBS.Al("A");
TBS.Print();`}
        </pre>
            </section>

            {/* SECTION — INTERRUPT NOT WORKING */}
            <section>
                <h2 className="text-2xl font-semibold mb-3">Interrupt 0x10 Not Working</h2>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    This usually means:
                </p>

                <ul className="list-disc ml-6 mt-3 text-neutral-700 dark:text-neutral-300 space-y-1">
                    <li>You’re running the bootloader in a UEFI-only environment</li>
                    <li>Your virtual machine is not configured for BIOS mode</li>
                    <li>You're using qemu-system-x86_64 WITHOUT enabling legacy BIOS</li>
                </ul>

                <pre className="bg-neutral-900 text-white p-4 rounded-xl mt-4 text-sm">
{`qemu-system-x86_64 -bios /usr/share/ovmf/OVMF_CODE.fd   # ❌ UEFI (interrupts disabled)
qemu-system-x86_64 -machine pc                           # ✅ Legacy BIOS`}
        </pre>
            </section>

            {/* SECTION — HALTING ISSUES */}
            <section>
                <h2 className="text-2xl font-semibold mb-3">Bootloader Keeps Running / Crashing</h2>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    If your bootloader doesn’t stop or crashes unexpectedly, ensure you ended
                    your program with <code>TBS.Halt()</code>.
                </p>

                <pre className="bg-neutral-900 text-white p-4 rounded-xl mt-4 text-sm">
{`TBS.Halt();   // Prevents undefined behavior`}
        </pre>
            </section>

            {/* SECTION — COMPILATION ISSUES */}
            <section>
                <h2 className="text-2xl font-semibold mb-3">Compilation Errors</h2>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    Common causes include:
                </p>

                <ul className="list-disc ml-6 mt-3 text-neutral-700 dark:text-neutral-300 space-y-1">
                    <li>Dart SDK not installed or missing PATH configuration</li>
                    <li>Incorrect TBS import path</li>
                    <li>Using unsupported characters in <code>TBS.Al()</code></li>
                    <li>Bootloader instructions placed outside <code>main()</code></li>
                    <li>Missing the <code className="font-mono">nasm</code> CLI/not added to path</li>
                </ul>
            </section>

            {/* SECTION — BAD ASCII */}
            <section>
                <h2 className="text-2xl font-semibold mb-3">Unexpected Characters Printing</h2>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    This happens when AL contains a number that does not correspond to ASCII text.
                </p>

                <pre className="bg-neutral-900 text-white p-4 rounded-xl mt-4 text-sm">
{`TBS.Al(300);   // ❌ Out of ASCII range
TBS.Al("A");   // ✅ Correct`}
        </pre>
            </section>

            {/* SECTION — ENVIRONMENT */}
            <section>
                <h2 className="text-2xl font-semibold mb-3">Environment Not Working</h2>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    Ensure your system meets the minimum requirements:
                </p>

                <ul className="list-disc ml-6 mt-3 text-neutral-700 dark:text-neutral-300 space-y-1">
                    <li>Dart SDK installed correctly</li>
                    <li>Emulator supports BIOS interrupts (QEMU recommended)</li>
                    <li>No conflicting PATH configurations</li>
                    <li><code className="font-mono">nasm</code> CLI installed and added to path</li>
                </ul>
            </section>

        </div>
    );
}
