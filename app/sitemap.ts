import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = "https://cortlet.com";

    const staticPages = [
        "",
        "/products",
        "/docs",
        "/contact",

        // Legal Pages
        "/legal/privacy",
        "/legal/tos",
        "/legal/cookie",
        "/legal/dmca",
        "/legal/impressum",
        "/legal/aup",
        "/legal/eula",
        "/legal/mit",
        "/legal/apache-2",
    ];

    return staticPages.map((path) => ({
        url: `${base}${path}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: path === "" ? 1 : 0.6,
    }));
}
