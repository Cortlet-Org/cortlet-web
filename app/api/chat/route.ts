import OpenAI from "openai";
import { search } from "@/lib/search";
export async function POST(req: Request) {
    const { message } = await req.json();

    const context = await search(message);

    const client = new OpenAI({
        apiKey: process.env.OPENROUTER_API_KEY,
        baseURL: "https://openrouter.ai/api/v1"
    });

    const completion = await client.chat.completions.create({
        model: "mistralai/mistral-7b-instruct",
        messages: [
            {
                role: "system",
                content: `
You are Cortlet Assistant.
ALWAYS base your answers ONLY on the Cortlet knowledge provided in context.
If the context does NOT contain the answer, reply with:
"I don’t have information about that yet."

Do NOT invent Cortlet products, features, APIs, tools, pages, or concepts.
If a user asks something NOT in the context, DO NOT guess.

Formatting:
- Newlines allowed.
- Use clean short paragraphs.
- Use Markdown for links.
- Never create lists unless the context contains a list.

Tone:
Professional, concise, and accurate.
Never introduce Cortlet with generic phrases like “Cortlet offers…” unless the context explicitly says so.
`

            },
            {
                role: "user",
                content: `
User question:
${message}

Cortlet knowledge (use ONLY this):
${context}
`
            }
        ]
    });

    return Response.json({
        reply: completion.choices[0].message.content
    });
}
