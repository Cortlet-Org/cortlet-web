import "dotenv/config";
import { FirecrawlClient } from "@mendable/firecrawl-js";
import fs from "fs";

const client = new FirecrawlClient({
    apiKey: process.env.FIRECRAWL_API_KEY,
});

async function run() {

    // Add ALL pages you want the AI to know.
    const urls = [
        "https://cortlet.com",
        "https://cortlet.com/products",
        "https://cortlet.com/docs",
        "https://cortlet.com/legal"
    ];

    let combined = "";

    for (const url of urls) {
        console.log("🔥 Scraping:", url);

        const res = await client.scrape(url, {
            formats: ["markdown"],
            onlyMainContent: true,
        });

        if (!res.markdown) {
            console.error("❌ No markdown found for:", url);
            continue;
        }

        // Append page content into one file
        combined += `\n\n# PAGE: ${url}\n\n${res.markdown}\n`;
    }

    if (!fs.existsSync("./data")) {
        fs.mkdirSync("./data");
    }

    fs.writeFileSync("./data/cortlet.md", combined);

    console.log("🔥 ALL PAGES WRITTEN → data/cortlet.md");
}

run();
