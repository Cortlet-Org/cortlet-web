import "dotenv/config";
import fs from "fs";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import OpenAI from "openai";

const md = fs.readFileSync("./data/cortlet.md", "utf-8");

// 1 — Split into chunks
const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 800,
    chunkOverlap: 100,
});

const chunks = await splitter.splitText(md);

// 2 — OpenRouter config
const client = new OpenAI({
    apiKey: process.env.OPENROUTER_API_KEY,
    baseURL: "https://openrouter.ai/api/v1",
});

const vectorDB = [];

// 3 — Embed each chunk using a real OpenRouter embedding model
for (const chunk of chunks) {
    console.log("Embedding chunk...");

    const response = await client.embeddings.create({
        model: "text-embedding-3-small", // ← FIXED MODEL
        input: chunk,
    });

    vectorDB.push({
        text: chunk,
        embedding: response.data[0].embedding,
    });
}

// 4 — Save to vector DB JSON
if (!fs.existsSync("./data")) fs.mkdirSync("./data");

fs.writeFileSync("./data/vector-db.json", JSON.stringify(vectorDB, null, 2));

console.log("🔥 Embeddings saved → data/vector-db.json");
