"use client";

import { useState } from "react";

export function useTheme() {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        const root = document.documentElement;

        if (root.classList.contains("dark")) {
            root.classList.remove("dark");
            setTheme("light");
        } else {
            root.classList.add("dark");
            setTheme("dark");
        }
    };

    return { theme, toggleTheme };
}
