// /app/products/tbs/layout.tsx
import Navbar from "@/app/components/Navbar";

export const metadata = {
    title: "TBS — Teretalia Boot Set",
    description:
        "TBS is a Dart-based compiler that generates real 16-bit x86 BIOS bootloaders from a simple DSL. Build real boot sectors in Dart.",
    openGraph: {
        title: "TBS — Teretalia Boot Set",
        description:
            "A Dart-based compiler that generates real BIOS bootloaders. Write boot sectors in Dart, compile to ASM, output to bootable .bin.",
        url: "https://cortlet.com/products/tbs",
        siteName: "Cortlet",
        type: "article",
        images: [
            {
                url: "https://cdn.cortlet.com/images/sized-images/icon_light_512.png",
                width: 512,
                height: 512,
                alt: "TBS Logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "TBS — Teretalia Boot Set",
        description:
            "A Dart-based 16-bit bootloader compiler. Generates BIOS boot binaries using a simple developer-friendly DSL.",
        images: ["https://cdn.cortlet.com/images/sized-images/icon_light_512.png"],
    },
};

export default function TbsLayout({
                                      children,
                                  }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />

            <main className="pt-28 pb-24 px-6 max-w-5xl mx-auto">
                {children}
            </main>
        </>
    );
}
