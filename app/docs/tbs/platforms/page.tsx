export default function TBSPlatformsPage() {
    return (
        <div className="max-w-3xl mx-auto space-y-12">

            <header>
                <h1 className="text-4xl font-bold tracking-tight mb-4">
                    Platform Support
                </h1>

                <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    TBS (Teretalia Boot Set) provides full cross-platform support for Dart
                    development environments. Whether you&#39;re using Linux, macOS, or Windows,
                    TBS can compile and run normally as long as the Dart SDK is available.
                    TBS also requires the <code className="font-mono">nasm</code> compiler CLI to make the .bin file from the .asm file as it takes your Dart code and outputs valid .asm and .bin files.
                    Make sure <code className="font-mono">nasm</code> is added to your SYSTEM Path (If Linux/macOS, add to ~/.bashrc, ~/.zshrc, or ~/.profile depending on your shell).
                </p>
            </header>

            {/* LINUX */}
            <section>
                <h2 className="text-2xl font-semibold mb-3">Linux</h2>

                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    TBS works flawlessly on Linux distributions such as Ubuntu, Arch, Fedora,
                    Pop!_OS, and others. Linux is recommended for advanced OS development due
                    to native tooling support and easier access to low-level utilities.
                </p>

                <ul className="list-disc ml-6 mt-3 text-neutral-700 dark:text-neutral-300 space-y-1">
                    <li>Fully supports Dart SDK</li>
                    <li>Compatible with all TBS commands</li>
                    <li>Recommended for QEMU bootloader testing</li>
                </ul>
            </section>

            {/* macOS */}
            <section>
                <h2 className="text-2xl font-semibold mb-3">macOS</h2>

                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    macOS users can run TBS without issues using the official Dart SDK.
                    It is well-suited for development but may require additional setup for
                    BIOS-level emulators.
                </p>

                <ul className="list-disc ml-6 mt-3 text-neutral-700 dark:text-neutral-300 space-y-1">
                    <li>Fully compatible with Dart</li>
                    <li>Works with TBS CLI and all functions</li>
                    <li>QEMU installation required for boot testing</li>
                </ul>
            </section>

            {/* WINDOWS */}
            <section>
                <h2 className="text-2xl font-semibold mb-3">Windows</h2>

                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    TBS works normally on Windows using the Dart SDK or Flutter environment.
                    BIOS emulation tools like QEMU or Bochs must be installed separately if
                    you plan to run your bootloader binaries.
                </p>

                <ul className="list-disc ml-6 mt-3 text-neutral-700 dark:text-neutral-300 space-y-1">
                    <li>Full Dart SDK support</li>
                    <li>TBS compiles bootloader binaries normally</li>
                    <li>Recommended: QEMU, Bochs, or VirtualBox</li>
                </ul>
            </section>

        </div>
    );
}
