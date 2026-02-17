import fs from "fs";
import OpenAI from "openai";

const VECTOR_DB = JSON.parse(fs.readFileSync("./data/vector-db.json", "utf-8"));

// cosine similarity
function cosineSimilarity(a, b) {
    let dot = 0, aMag = 0, bMag = 0;
    for (let i = 0; i < a.length; i++) {
        dot += a[i] * b[i];
        aMag += a[i] * a[i];
        bMag += b[i] * b[i];
    }
    return dot / (Math.sqrt(aMag) * Math.sqrt(bMag));
}

// Auto-extract product names from any chunk
function extractProductNames(text) {
    const matches = text.match(/###\s+([A-Za-z0-9\- ]+)/g) || [];
    return matches.map(m => m.replace("###", "").trim());
}

// Detect if a chunk is part of the product section
function isProductChunk(text) {
    return text.includes("# Explore Cortlet Products") ||
        /###\s+[A-Za-z0-9\- ]+/.test(text);
}

export async function search(query) {
    const client = new OpenAI({
        apiKey: process.env.OPENROUTER_API_KEY,
        baseURL: "https://openrouter.ai/api/v1",
    });

    let queryEmbedding;

    try {
        // Qwen 3 Embedding 8B (BEST OPEN SOURCE EMBEDDING AVAILABLE)
        const embeddingRes = await client.embeddings.create({
            model: "qwen/qwen3-embedding-8b",
            input: query,
        });

        queryEmbedding = embeddingRes.data[0].embedding;

    } catch (err) {
        console.error("Embedding error:", err);

        // FAIL-SAFE → return fallback generic message
        return `
Cortlet Assistant could not retrieve relevant documentation at this time.

Please try rephrasing your question or try again shortly.
        `.trim();
    }

    // Score similarity for all chunks
    const scored = VECTOR_DB.map((entry, idx) => ({
        idx,
        text: entry.text,
        score: cosineSimilarity(queryEmbedding, entry.embedding)
    }));

    scored.sort((a, b) => b.score - a.score);

    // Top 5
    const top = scored.slice(0, 5);

    // Related chunks
    const related = new Set();
    const foundProductNames = new Set();

    for (const hit of top) {
        const txt = hit.text;

        extractProductNames(txt).forEach(name => foundProductNames.add(name));

        if (isProductChunk(txt)) {
            VECTOR_DB.forEach(entry => {
                if (isProductChunk(entry.text)) {
                    related.add(entry.text);
                    extractProductNames(entry.text).forEach(name => foundProductNames.add(name));
                }
            });
        }

        related.add(txt);
    }

    if (foundProductNames.size > 0) {
        return Array.from(related).join("\n\n");
    }

    return top.map(t => t.text).join("\n\n");
}
