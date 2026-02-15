"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";

export default function ChatWidget() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<
        { role: "user" | "assistant"; content: string }[]
    >([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    async function sendMessage() {
        if (!input.trim()) return;

        const userMsg = { role: "user" as const, content: input };
        setMessages((prev) => [...prev, userMsg]);
        setInput("");
        setLoading(true);

        const res = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: userMsg.content }),
        });

        const data = await res.json();

        const assistantMsg = {
            role: "assistant" as const,
            content: data.reply,
        };

        setMessages((prev) => [...prev, assistantMsg]);
        setLoading(false);
    }

    return (
        <>
            {/* Floating Chat Button */}
            {!open && (
                <button
                    onClick={() => setOpen(true)}
                    className="
    fixed bottom-6 right-6 z-50
    w-16 h-16 rounded-full
    bg-black text-white dark:bg-white dark:text-black
    shadow-xl flex items-center justify-center
    hover:opacity-80 transition
  "
                >
                    <ChatBubbleLeftRightIcon className="w-8 h-8" />
                </button>
            )}

            {/* Chat Window */}
            {open && (
                <div
                    className="
    fixed bottom-6 right-6 z-50
    w-[28rem] h-[36rem] rounded-2xl
    bg-white dark:bg-neutral-900
    border border-neutral-300 dark:border-neutral-800
    shadow-2xl flex flex-col overflow-hidden
  "
                >

                {/* Header */}
                    <div
                        className="
              p-4 font-semibold text-lg
              flex justify-between items-center
              bg-neutral-100 dark:bg-neutral-800
              border-b border-neutral-300 dark:border-neutral-700
            "
                    >
                        Cortlet Assistant
                        <button
                            onClick={() => setOpen(false)}
                            className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white text-xl"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3">
                        {messages.map((m, i) => (
                            <div
                                key={i}
                                className={`p-3 rounded-xl max-w-[80%] ${
                                    m.role === "user"
                                        ? "ml-auto bg-black text-white dark:bg-white dark:text-black"
                                        : "bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
                                }`}
                            >
                                {/* Markdown + HTML Renderer */}
                                <div className="prose prose-neutral dark:prose-invert max-w-none break-words">
                                    <ReactMarkdown
                                        rehypePlugins={[rehypeRaw]}
                                        components={{
                                            a: ({ href, children }) => (
                                                <a
                                                    href={href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 dark:text-blue-400 underline"
                                                >
                                                    {children}
                                                </a>
                                            ),
                                            p: ({ children }) => (
                                                <p className="mb-2 leading-relaxed">{children}</p>
                                            ),
                                            strong: ({ children }) => (
                                                <strong className="font-semibold">{children}</strong>
                                            ),
                                        }}
                                    >
                                        {m.content}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        ))}

                        {/* Typing Animation */}
                        {loading && (
                            <div className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 w-20 text-neutral-500 dark:text-neutral-400">
                                <div className="flex space-x-1">
                                    <div className="w-2 h-2 bg-neutral-400 dark:bg-neutral-500 rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-neutral-400 dark:bg-neutral-500 rounded-full animate-bounce [animation-delay:0.1s]"></div>
                                    <div className="w-2 h-2 bg-neutral-400 dark:bg-neutral-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input */}
                    <div
                        className="
              p-3 border-t border-neutral-300 dark:border-neutral-800
              bg-neutral-100 dark:bg-neutral-900
            "
                    >
                        <div className="flex items-center gap-2">
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                                className="
                  flex-1 px-3 py-2 rounded-xl
                  bg-white dark:bg-neutral-800
                  border border-neutral-300 dark:border-neutral-700
                  text-black dark:text-white
                  focus:outline-none focus:ring-2
                  focus:ring-black dark:focus:ring-white
                "
                                placeholder="Ask Cortlet anything..."
                            />

                            <button
                                onClick={sendMessage}
                                className="
                  px-4 py-2 rounded-xl font-medium
                  bg-black text-white dark:bg-white dark:text-black
                  hover:opacity-80 transition
                "
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
