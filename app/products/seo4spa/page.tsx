import Navbar from "@/app/components/Navbar";
import Image from "next/image";

export default function Seo4SpaPage() {
    return (
        <>
            {/* JSON-LD for npm library */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareSourceCode",
                        name: "seo4spa",
                        programmingLanguage: "JavaScript",
                        codeRepository: "https://npmjs.com/package/seo4spa",
                        description:
                            "seo4spa updates meta tags, title, description, and OpenGraph data dynamically inside Single Page Applications.",
                        license: "MIT",
                    }),
                }}
            />

            <Navbar />

            <main className="pt-28 px-6 max-w-5xl mx-auto">

                {/* HERO */}
                <section className="text-center mb-20">
                    <Image
                        src="https://cdn.cortlet.com/images/sized-images/icon_light_512.png"
                        alt="seo4spa Logo"
                        width={140}
                        height={140}
                        className="mx-auto mb-8 drop-shadow-xl"
                    />

                    <h1 className="text-5xl font-bold mb-4">seo4spa</h1>

                    <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
                        A lightweight NPM package that updates <strong>meta tags, title, description, and OpenGraph tags dynamically</strong> inside Single Page Applications — during client-side navigation.
                    </p>

                    <div className="mt-6 inline-block px-4 py-2 bg-emerald-600 text-white dark:bg-emerald-400 dark:text-black rounded-full text-sm font-medium shadow">
                        Available exclusively on NPM (Note that the package is deleted temporarily to fix some NPM-level issues.)
                    </div>
                </section>

                {/* FEATURE GRID */}
                <section className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-24">
                    <FeatureCard
                        title="Dynamic Title Updates"
                        desc="Automatically changes the <title> tag when navigating between SPA views."
                    />

                    <FeatureCard
                        title="Real-Time Meta Tags"
                        desc="Updates description, keywords, and any custom meta tags instantly."
                    />

                    <FeatureCard
                        title="Social Preview Control"
                        desc="Changes OpenGraph values (og:title, og:description, og:image) without reloading the page."
                    />

                    <FeatureCard
                        title="Framework-Agnostic"
                        desc="Works with React, Vue, Angular, Svelte, and custom SPA routers."
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
                        npm install seo4spa
                    </code>

                    <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-3">
                        Works with any SPA router.
                    </p>
                </section>

                {/* USAGE EXAMPLE */}
                <section className="pb-32">
                    <h2 className="text-3xl font-bold mb-6">Quick Usage Example</h2>

                    <pre className="
            bg-neutral-900 dark:bg-neutral-800 text-neutral-100
            rounded-2xl p-6 overflow-x-auto text-sm font-mono shadow
          ">
{`import { MetaTag } from "seo4spa";

MetaTag.Property({
    prop: "title",
    content: "Test Title"
});

MetaTag.Property({
    prop: "image",
    content: "https://example.com/test.png"
});

MetaTag.Name({
    name: "description",
    content: "This is a test description"
});

MetaTag.Name({
    name: "keywords",
    content: "seo, spa, test"
});`}
          </pre>
                </section>
                <section className="items-center justify-center text-center pb-24">
                    <a
                        href="https://github.com/Cortlet-Org/seo4spa/"
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
                        Visit seo4spa on GitHub
                    </a>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-3">
                        Source code, releases, documentation, and issue tracking.
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
        hover:border-emerald-600 dark:hover:border-emerald-400
        transition-all
      "
        >
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-neutral-600 dark:text-neutral-400">{desc}</p>
        </div>
    );
}
