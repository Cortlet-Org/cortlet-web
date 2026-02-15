import Navbar from "@/app/components/Navbar";
import Image from "next/image";

export default function DeconstructPage() {
    return (
        <>
            {/* JSON-LD for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "MobileApplication",
                        name: "Cortlet Deconstruct",
                        operatingSystem: "iOS",
                        description:
                            "Deconstruct helps students and individuals break down overwhelming tasks, subjects, or exam material into simple, clear steps.",
                        applicationCategory: "EducationApplication",
                        offers: { "@type": "Offer", price: "0.00", priceCurrency: "USD" },
                    }),
                }}
            />

            <Navbar />

            <main className="pt-28 px-6 max-w-5xl mx-auto">

                {/* HERO */}
                <section className="text-center mb-20">
                    <Image
                        src="https://cdn.cortlet.com/images/sized-images/icon_light_512.png"
                        alt="Deconstruct Logo"
                        width={140}
                        height={140}
                        className="mx-auto mb-8 drop-shadow-xl"
                    />

                    <h1 className="text-5xl font-bold mb-4">
                        Deconstruct
                    </h1>

                    <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
                        Studying for exams? Overwhelmed by a subject?
                        Deconstruct helps you break down ANY topic, class, chapter, or stressful task
                        into simple, calm, easy-to-follow steps.
                    </p>

                    <div className="mt-6 inline-block px-4 py-2 bg-blue-600 text-white dark:bg-blue-400 dark:text-black rounded-full text-sm font-medium shadow">
                        Available on iOS Only
                    </div>
                </section>

                {/* FEATURES */}
                <section className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-24">

                    <FeatureCard
                        title="Break Down Stressful Subjects"
                        desc="Turn overwhelming school chapters, exam topics, or projects into a step-by-step structure you can actually finish."
                    />

                    <FeatureCard
                        title="Perfect for Exams & Studying"
                        desc="Deconstruct helps you revise faster by simplifying complex material into the smallest understandable pieces."
                    />

                    <FeatureCard
                        title="Reduce Anxiety & Overthinking"
                        desc="When your brain is full, Deconstruct gives clarity and order—removing confusion instantly."
                    />

                    <FeatureCard
                        title="For EVERY Topic, Not Just School"
                        desc="Use it for planning your day, solving problems, preparing for presentations, or calming your mind."
                    />

                </section>

                {/* CTA */}
                <section className="text-center pb-24">
                    <a
                        href="https://apps.apple.com/pk/app/cortlet-deconstruct/id6755674277"
                        className="
              inline-block px-10 py-4 rounded-full
              bg-black dark:bg-white
              text-white dark:text-black
              font-semibold text-lg
              hover:opacity-85 transition
            "
                        target="_blank"
                    >
                        Get Deconstruct for iOS
                    </a>

                    <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-3">
                        Requires iOS 15 or later.
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
        hover:border-blue-600 dark:hover:border-blue-400
        transition-all
      "
        >
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-neutral-600 dark:text-neutral-400">{desc}</p>
        </div>
    );
}
