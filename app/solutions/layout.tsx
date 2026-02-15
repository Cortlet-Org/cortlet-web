import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cortlet Solutions",
    description:
        "Explore Cortlet's solutions for developers, students, and teams — engineered for precision, clarity, and performance.",
    openGraph: {
        title: "Cortlet Solutions",
        description:
            "Cortlet provides powerful, structured solutions for developers, teams, and learners.",
        url: "https://cortlet.com/solutions",
        siteName: "Cortlet",
        images: [
            {
                url: "https://cdn.cortlet.com/images/sized-images/icon_light_512.png",
                width: 512,
                height: 512,
                alt: "Cortlet Logo",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    alternates: {
        canonical: "https://cortlet.com/solutions",
    },
};

export default function SolutionsLayout({
                                            children,
                                        }: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* Optional JSON-LD for Solutions Hub */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: "Cortlet Solutions",
                        url: "https://cortlet.com/solutions",
                        description:
                            "Developer and student-oriented solutions powered by Cortlet.",
                        isPartOf: {
                            "@type": "WebSite",
                            name: "Cortlet",
                            url: "https://cortlet.com",
                        },
                    }),
                }}
            />

            {/* Page Content */}
            <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
                {children}
            </div>
        </>
    );
}
