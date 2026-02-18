export default function TBSInstallPage() {
    return (
        <div className="max-w-3xl mx-auto space-y-10">

            <header>
                <h1 className="text-4xl font-bold tracking-tight mb-6">
                    Installation
                </h1>

                <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    Follow this guide to install <strong>TBS (Teretalia Boot Set)</strong> into your Dart
                    or Flutter environment. TBS is published on pub.dev and can be added like any
                    standard Dart dependency.
                </p>
            </header>

            <section>
                <h2 className="text-2xl font-semibold mb-3">1. Add TBS to pubspec.yaml</h2>
                <pre className="bg-neutral-900 text-white p-4 rounded-xl text-sm overflow-x-auto">
{`dependencies:
  tbs: ^1.0.1`}
        </pre>

                <p className="text-neutral-700 dark:text-neutral-300 mt-3">
                    Replace <code>^1.0.1</code> with the newest version if needed.
                    You can check updates on pub.dev.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-3">2. Fetch dependencies</h2>

                <pre className="bg-neutral-900 text-white p-4 rounded-xl text-sm overflow-x-auto">
{`dart pub get`}
        </pre>

                <p className="text-neutral-700 dark:text-neutral-300 mt-3">
                    This downloads TBS into your project so you can start importing it.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-3">3. Import TBS into your project</h2>

                <pre className="bg-neutral-900 text-white p-4 rounded-xl text-sm overflow-x-auto">
{`import 'package:tbs/tbs.dart';`}
        </pre>

                <p className="text-neutral-700 dark:text-neutral-300 mt-3">
                    You&#39;re now ready to write Dart bootloaders using the TBS DSL.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-3">4. Verify your environment</h2>

                <ul className="list-disc ml-6 text-neutral-700 dark:text-neutral-300 space-y-1">
                    <li>Ensure Dart SDK is installed and accessible</li>
                    <li>Run <code>dart --version</code> to confirm capability</li>
                    <li>Make sure your editor supports Dart (VS Code recommended)</li>
                </ul>
            </section>

        </div>
    );
}
