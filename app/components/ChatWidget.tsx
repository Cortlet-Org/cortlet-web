"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import { HiX } from "react-icons/hi";

export default function ChatWidget() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<
        { role: "user" | "assistant"; content: string; error?: boolean }[]
    >([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    async function sendMessage() {
        if (!input.trim()) return;

        const userMsg = { role: "user" as const, content: input };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMsg.content }),
            });

            if (!res.ok) {
                return setMessages(prev => [
                    ...prev,
                    {
                        role: "assistant",
                        content:
                            "❌ **Server error**. Please try again later.",
                        error: true,
                    }
                ]);
            }

            const data = await res.json();

            setMessages(prev => [
                ...prev,
                {
                    role: "assistant",
                    content: data.reply,
                },
            ]);
        } catch (err) {
            console.log("Chat error:", err);

            setMessages(prev => [
                ...prev,
                {
                    role: "assistant",
                    content:
                        "APIFailedToReachError: **Unable to reach the Cortlet AI server.**\nCheck your connection or try again.",
                    error: true,
                }
            ]);
        } finally {
            setLoading(false);
        }
    }


    return (
        <>
            {/* SMALLER, MOBILE-SAFE FLOATING BUTTON */}
            {!open && (
                <button
                    onClick={() => setOpen(true)}
                    className="
                    fixed bottom-4 right-4 z-50
                    w-12 h-12 sm:w-16 sm:h-16
                    rounded-full shadow-xl
                    bg-black text-white
                    dark:bg-white dark:text-black
                    flex items-center justify-center
                    hover:opacity-80 transition
                "
                >
                    <ChatBubbleLeftRightIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>
            )}

            {/* CHAT WINDOW */}
            {open && (
                <div
                    className="
                    fixed bottom-4 right-4 z-50
                    w-[90vw] max-w-[26rem]
                    h-[70vh] max-h-[34rem]
                    rounded-2xl overflow-hidden
                    bg-white dark:bg-neutral-900
                    border border-neutral-300 dark:border-neutral-800
                    shadow-2xl flex flex-col
                    animate-[fadeIn_0.2s_ease-out]
                "
                >

                    {/* HEADER */}
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
                            className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                        >
                            <HiX className="w-6 h-6"/>
                        </button>
                    </div>

                    {/* MESSAGES */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3">
                        {messages.map((m, i) => (
                            <div
                                key={i}
                                className={`p-3 rounded-xl max-w-[80%] text-sm ${
                                    m.role === "user"
                                        ? "ml-auto bg-black text-white dark:bg-white dark:text-black"
                                        : m.error
                                            ? "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 border border-red-300 dark:border-red-700"
                                            : "bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
                                }`}
                            >
                            <div className="prose prose-neutral dark:prose-invert max-w-none text-sm">
                                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                                        {m.content}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        ))}

                        {loading && (
                            <div className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 w-16">
                                <div className="flex space-x-1">
                                    <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce [animation-delay:0.1s]"></div>
                                    <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* INPUT AREA */}
                    <div className="p-3 border-t border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                        <div className="flex items-center gap-2">
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                                className="
                                flex-1 px-3 py-2 rounded-xl
                                bg-white dark:bg-neutral-800
                                border border-neutral-300 dark:border-neutral-700
                                text-black dark:text-white
                                focus:outline-none focus:ring-2
                                focus:ring-black dark:focus:ring-white
                                text-sm
                            "
                                placeholder="Ask Cortlet anything..."
                            />

                            <button
                                onClick={sendMessage}
                                className="
                                px-4 py-2 text-sm rounded-xl font-medium
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
