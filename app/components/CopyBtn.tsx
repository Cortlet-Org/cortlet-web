"use client";

import { useState } from "react";

function CopyButton({ text }: { text: string }) {
    const [copied, setCopied] = useState(false);

    const copy = async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);

        // Hide popup after 1.5 seconds
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div className="relative inline-block">
            <button
                onClick={copy}
                className="
                    ml-3 p-1.5 rounded
                    hover:bg-neutral-300 dark:hover:bg-neutral-700
                    transition inline-flex items-center
                "
                title="Copy to clipboard"
            >
                {/* SVG COPY ICON */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
            </button>

            {/* POPUP */}
            {copied && (
                <div
                    className="
                        absolute -top-10 left-1/2 -translate-x-1/2
                        bg-black text-white dark:bg-white dark:text-black
                        text-xs px-3 py-1 rounded-full
                        shadow-lg border border-neutral-700 dark:border-neutral-300

                        animate-copypopup
                    "
                >
                    Copied to clipboard!
                </div>
            )}
        </div>
    );
}

export default CopyButton;
