import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            // ✅ GOOD BOTS (FULL ACCESS)
            {
                userAgent: [
                    "Googlebot",
                    "Googlebot-Image",
                    "Googlebot-Mobile",
                    "Bingbot",
                    "Applebot",
                    "DuckDuckBot",
                    "Twitterbot",
                    "facebookexternalhit",
                    "LinkedInBot",
                    "GrapeshotCrawler",
                    "CCBot",              // CommonCrawl
                    "GPTBot",            // OpenAI crawler
                    "AhrefsBot",
                ],
                allow: "/",
            },

            // ❌ BLOCK EVERYTHING ELSE
            {
                userAgent: "*",
                disallow: [
                    "/",                // No access for unknown bots
                ],
            },
        ],

        sitemap: "https://cortlet.com/sitemap.xml",
        host: "https://cortlet.com",
    };
}
