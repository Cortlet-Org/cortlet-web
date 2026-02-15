export const metadata = {
    title: "Contact Us — Cortlet",
    description:
        "Get help, ask questions, or request support. Our Cortlet team responds quickly — usually within 1–2 days.",

    openGraph: {
        title: "Contact Cortlet Support",
        description:
            "Need help? Reach out to the Cortlet team. Fast replies, real engineers, real support.",
        url: "https://cortlet.com/contact",
        siteName: "Cortlet",
        images: [
            {
                url: "https://cdn.cortlet.com/images/sized-images/icon_light_512.png",
                width: 512,
                height: 512,
                alt: "Cortlet Logo",
            }
        ],
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Contact Cortlet Support",
        description:
            "Have a question? Our support team is ready to help you with Cortlet products and tools.",
        images: [
            "https://cdn.cortlet.com/images/sized-images/icon_light_512.png"
        ],
    },

    alternates: {
        canonical: "https://cortlet.com/contact",
    },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
