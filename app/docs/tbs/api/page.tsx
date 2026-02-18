export default function TBSApiPage() {
    return (
        <div className="max-w-3xl mx-auto space-y-14">

            <header>
                <h1 className="text-4xl font-bold tracking-tight mb-4">
                    API Reference
                </h1>

                <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    This page documents every public function available in TBS (Teretalia Boot Set).
                    These functions allow you to control CPU registers, print characters, execute BIOS
                    interrupts, and finalize 16-bit bootloader programs written in Dart.
                </p>
            </header>

            {/* REGISTER FUNCTIONS */}
            <section>
                <h2 className="text-2xl font-semibold mb-3">Register Functions</h2>

                <div className="space-y-8">

                    {/* Ah() */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">TBS.Ah(value)</h3>
                        <p className="text-neutral-700 dark:text-neutral-300">
                            Sets the <strong>AH</strong> CPU register to the given integer value.
                            Commonly used to select BIOS interrupt functions.
                        </p>
                        <pre className="bg-neutral-900 text-white p-4 rounded-xl mt-3 text-sm">
{`TBS.Ah(0x0E);   // BIOS print interrupt`}
            </pre>
                    </div>

                    {/* Al() */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">TBS.Al(value)</h3>
                        <p className="text-neutral-700 dark:text-neutral-300">
                            Sets the <strong>AL</strong> CPU register.
                            Can be used for ASCII characters (strings) or raw values.
                        </p>
                        <pre className="bg-neutral-900 text-white p-4 rounded-xl mt-3 text-sm">
{`TBS.Al("A");   // ASCII letter
TBS.Al(65);   // Hexadecimal number`}
            </pre>
                    </div>

                </div>
            </section>

            {/* PRINT */}
            <section>
                <h2 className="text-2xl font-semibold mb-3">TBS.Print()</h2>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    Prints the character stored in the AL register using BIOS interrupt 0x10.
                    This prints one character at a time and automatically moves the cursor.
                </p>
                <pre className="bg-neutral-900 text-white p-4 rounded-xl mt-3 text-sm">
{`TBS.Al("H");
TBS.Print();`}
        </pre>
            </section>

            {/* HALT */}
            <section>
                <h2 className="text-2xl font-semibold mb-3">TBS.Halt()</h2>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    Halts execution of the bootloader.
                    Required to prevent undefined behavior after your program finishes.
                </p>
                <pre className="bg-neutral-900 text-white p-4 rounded-xl mt-3 text-sm">
{`TBS.Halt();`}
        </pre>
            </section>

            {/* FULL EXAMPLE */}
            <section>
                <h2 className="text-2xl font-semibold mb-3">Combined Example</h2>

                <pre className="bg-neutral-900 text-white p-4 rounded-xl mt-3 text-sm overflow-x-auto">
{`import 'package:tbs/tbs.dart';

void main() {
  TBS.Ah(0x0E); // BIOS text interrupt

  TBS.Al("H");
  TBS.Print();

  TBS.Al("I");
  TBS.Print();

  TBS.Halt();
}`}
        </pre>
            </section>

        </div>
    );
}
