export default function TBSIntroPage() {
    return (
        <div className="max-w-3xl mx-auto space-y-10">

            <header>
                <h1 className="text-4xl font-bold tracking-tight mb-4">
                    TBS Documentation
                </h1>

                <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    Welcome to the official documentation for <strong>TBS (Teretalia Boot Set)</strong>,
                    a Dart-based DSL created by <strong>Cortlet</strong> for building BIOS-level
                    bootloaders. This guide will show you how to install TBS, write bootloader
                    programs in Dart, understand supported platforms, use the TBS API, and
                    troubleshoot common issues.
                </p>
            </header>

            <section>
                <h2 className="text-2xl font-semibold mb-3">What is TBS?</h2>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    <strong>TBS</strong> is a lightweight, real-mode bootloader toolkit written in Dart.
                    It allows developers to write programs that run at BIOS boot time, using a clean
                    Dart-based syntax. TBS compiles this DSL into a real 16-bit boot sector binary that
                    can be executed by emulators or hardware.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-3">Who is it for?</h2>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    TBS is ideal for:
                </p>

                <ul className="list-disc ml-6 mt-2 text-neutral-700 dark:text-neutral-300 space-y-1">
                    <li>OS developers experimenting with boot sequences</li>
                    <li>Dart developers learning about low-level hardware</li>
                    <li>Students studying BIOS interrupts and real-mode execution</li>
                    <li>Hobbyists building fun or educational bootloaders</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-3">What you’ll learn</h2>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    This documentation will teach you how to:
                </p>

                <ul className="list-disc ml-6 mt-2 text-neutral-700 dark:text-neutral-300 space-y-1">
                    <li>Install TBS using Dart’s package manager</li>
                    <li>Write bootloader programs using the TBS DSL</li>
                    <li>Understand BIOS registers like AH and AL</li>
                    <li>Use TBS functions like <code>TBS.Al()</code>, <code>TBS.Print()</code>, and <code>TBS.Halt()</code></li>
                    <li>Compile and run TBS boot sectors</li>
                    <li>Troubleshoot issues and debug real-mode programs</li>
                </ul>
            </section>

        </div>
    );
}
