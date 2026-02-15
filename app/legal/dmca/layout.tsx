import Navbar from "@/app/components/Navbar";

export const metadata = {
    title: "DMCA Takedown Policy — Cortlet",
    description:
        "Official DMCA Takedown Policy for Cortlet Software. Learn how to report copyright infringement and how Cortlet responds to valid DMCA notices.",
    keywords: [
        "Cortlet",
        "DMCA",
        "Copyright",
        "Takedown Policy",
        "Intellectual Property",
        "Legal Policy",
        "Cortlet Software",
    ],

    openGraph: {
        title: "DMCA Takedown Policy — Cortlet",
        description:
            "Learn how to submit DMCA notices to Cortlet Software and how we handle copyright claims under the DMCA.",
        url: "https://cortlet.com/legal/dmca",
        siteName: "Cortlet",
        type: "article",
        locale: "en_US",
        images: [
            {
                url: "https://cdn.cortlet.com/images/opengraph-images/og_light_1200x630.png",
                width: 1200,
                height: 630,
                alt: "Cortlet DMCA Policy",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "DMCA Takedown Policy — Cortlet",
        description:
            "Official DMCA takedown procedure for Cortlet Software. Copyright owners can report infringement following our DMCA guidelines.",
        images: [
            "https://cdn.cortlet.com/images/opengraph-images/og_light_1200x630.png",
        ],
        creator: "@cortlet",
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function DMCALayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />

            <main className="w-full min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
                {children}
            </main>
        </>
    );
}
