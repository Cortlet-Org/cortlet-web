export default function TBSBootloadersPage() {
    return (
        <div className="max-w-3xl mx-auto space-y-12">

            {/* TITLE */}
            <header>
                <h1 className="text-4xl font-bold tracking-tight mb-4">
                    Writing Dart Bootloaders
                </h1>

                <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    TBS (Teretalia Boot Set) provides a compact DSL that allows you to write 16-bit
                    BIOS bootloaders using Dart. This guide introduces the core TBS functions,
                    register operations, BIOS interrupts, and how to compile your bootloader into a
                    real boot sector.
                </p>
            </header>

            {/* SECTION — REGISTERS */}
            <section>
                <h2 className="text-2xl font-semibold mb-3">CPU Registers</h2>

                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    TBS lets you assign values to <strong>AH</strong> and <strong>AL</strong> using simple Dart functions:
                </p>

                <pre className="bg-neutral-900 text-white p-4 rounded-xl text-sm overflow-x-auto mt-4">
{`TBS.Ah(0x0E);   // BIOS print interrupt
TBS.Al(0x41);    // 'A'
TBS.Print();`}
        </pre>
            </section>

            {/* SECTION — PRINTING */}
            <section>
                <h2 className="text-2xl font-semibold mb-3">Printing Characters</h2>

                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    To print characters using BIOS interrupt <code>0x10</code>, simply set AH/AL
                    and call <code>TBS.Print()</code>:
                </p>

                <pre className="bg-neutral-900 text-white p-4 rounded-xl text-sm overflow-x-auto mt-4">
{`TBS.Al("H");
TBS.Print();

TBS.Al("I");
TBS.Print();`}
        </pre>
            </section>

            {/* SECTION — HALT */}
            <section>
                <h2 className="text-2xl font-semibold mb-3">Halting the Bootloader</h2>

                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    Always end your bootloader with <code>TBS.Halt()</code> to prevent undefined
                    behavior:
                </p>

                <pre className="bg-neutral-900 text-white p-4 rounded-xl text-sm overflow-x-auto mt-4">
{`TBS.Halt();`}
        </pre>
            </section>

            {/* SECTION — FULL EXAMPLE */}
            <section>
                <h2 className="text-2xl font-semibold mb-3">Full Example Bootloader</h2>

                <pre className="bg-neutral-900 text-white p-4 rounded-xl text-sm overflow-x-auto mt-4">
{`import 'package:tbs/tbs.dart';

void main() {
  TBS.Al("H");
  TBS.Print();

  TBS.Al("I");
  TBS.Print();

  TBS.Halt();
}`}
        </pre>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-3">Running</h2>

                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    To run it, run the command given below. This will generate boot.asm and boot.bin, added to your project root. Replace <code className="font-mono">file.dart</code> with the real path of your .dart file.
                </p>

                <pre className="bg-neutral-900 text-white p-4 rounded-xl text-sm overflow-x-auto mt-4">
{`dart run tbs file.dart`}
        </pre>
            </section>
        </div>
    );
}
