import Navbar from "@/app/components/Navbar";
import Image from "next/image";

export default function TbsPage() {
    return (
        <>
            <Navbar />

            <main className="pt-28 px-6 max-w-5xl mx-auto">

                {/* HERO */}
                <section className="text-center mb-20">
                    <Image
                        src="https://cdn.cortlet.com/images/sized-images/icon_light_512.png"
                        alt="TBS Logo"
                        width={140}
                        height={140}
                        className="mx-auto mb-8 drop-shadow-xl"
                    />

                    <h1 className="text-5xl font-bold mb-4">TBS — Teretalia Boot Set</h1>

                    <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
                        A Dart-based compiler that transforms simple DSL calls into{" "}
                        <strong>real 16-bit x86 BIOS bootloaders</strong>. Write boot sectors in Dart,
                        compile to binary, and run on QEMU or hardware.
                    </p>

                    <div className="mt-6 inline-block px-4 py-2 bg-indigo-600 text-white dark:bg-indigo-400 dark:text-black rounded-full text-sm font-medium shadow">
                        Available now on Pub.dev — TBS v1.0.0
                    </div>
                </section>

                {/* FEATURE GRID */}
                <section className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-24">
                    <FeatureCard
                        title="Bootloader DSL"
                        desc="TBS provides a minimal Dart-based DSL for generating bootable BIOS code."
                    />

                    <FeatureCard
                        title="Register Control"
                        desc="Supports low-level register operations like TBS.Ah(x) and TBS.Al(x)."
                    />

                    <FeatureCard
                        title="Real Bootable Output"
                        desc="Generates NASM assembly and produces a .bin image for QEMU or real hardware."
                    />

                    <FeatureCard
                        title="Simple & Lightweight"
                        desc="Designed to be extremely small, direct, and beginner-friendly for OSDev."
                    />
                </section>

                {/* INSTALLATION */}
                <section className="text-center pb-24">
                    <code
                        className="
              inline-block px-6 py-3 rounded-lg
              bg-neutral-900 dark:bg-neutral-100
              text-white dark:text-black
              font-mono text-lg shadow
              hover:opacity-90 transition
            "
                    >
                        dart pub add tbs
                    </code>

                    <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-3">
                        Requires Dart SDK ≥ 3.0.0 and NASM installed.
                    </p>
                </section>

                {/* USAGE EXAMPLE */}
                <section className="pb-32">
                    <h2 className="text-3xl font-bold mb-6">Quick Usage Example</h2>

                    <pre className="
            bg-neutral-900 dark:bg-neutral-800 text-neutral-100
            rounded-2xl p-6 overflow-x-auto text-sm font-mono shadow
          ">
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

                {/* GITHUB LINK */}
                <section className="items-center justify-center text-center pb-24">
                    <a
                        href="https://github.com/Cortlet-Org/tbs"
                        className="
                            inline-block px-10 py-4 rounded-full
                            bg-black dark:bg-white
                            text-white dark:text-black
                            font-semibold text-lg
                            hover:opacity-85 transition
                            justify-center
                            items-center
                        "
                    >
                        Visit TBS on GitHub
                    </a>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-3">
                        Source code, documentation, changelog, and issue tracking.
                    </p>
                </section>
            </main>
        </>
    );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
    return (
        <div
            className="
        p-6 rounded-2xl border
        border-neutral-300 dark:border-neutral-800
        bg-white dark:bg-neutral-900 shadow-sm
        hover:border-indigo-600 dark:hover:border-indigo-400
        transition-all
      "
        >
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-neutral-600 dark:text-neutral-400">{desc}</p>
        </div>
    );
}
