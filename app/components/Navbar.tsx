"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
    const [openProducts, setOpenProducts] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [themeVersion, setThemeVersion] = useState(0); // forces re-render on theme change
    const [isClient, setIsClient] = useState(false);

    // GLOBAL THEME TOGGLE
    const handleThemeToggle = () => {
        const root = document.documentElement;
        root.classList.toggle("dark");

        // force ALL listeners (Navbar + mobile menu) to update
        window.dispatchEvent(new Event("theme-changed"));
    };

    useEffect(() => {
        setIsClient(true);

        // Listen for theme changes
        const listener = () => {
            setThemeVersion((v) => v + 1);
        };

        window.addEventListener("theme-changed", listener);
        return () => window.removeEventListener("theme-changed", listener);
    }, []);

    // pick icon based ONLY on client theme
    let logoSrc = "https://cdn.cortlet.com/images/sized-images/icon_light_512.png";

    if (isClient) {
        const dark = document.documentElement.classList.contains("dark");
        logoSrc = dark
            ? "https://cdn.cortlet.com/images/sized-images/icon_light_512.png"
            : "https://cdn.cortlet.com/images/sized-images/icon_dark_512.png";
    }

    return (
        <div key={themeVersion}>
            {/* NAVBAR */}
            <nav
                className="
                    w-full border-b border-neutral-300 dark:border-neutral-800
                    bg-white/70 dark:bg-black/70 backdrop-blur
                    fixed top-0 left-0 z-50 font-sans
                    transition-all duration-300
                "
            >
                <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

                    {/* LOGO */}
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
                        <Image
                            src={logoSrc}
                            alt="Cortlet Logo"
                            width={28}
                            height={28}
                            className="rounded transition-opacity duration-200"
                        />
                        <span className="text-lg font-semibold">Cortlet</span>
                    </Link>

                    {/* DESKTOP NAV */}
                    <div className="hidden md:flex items-center gap-6">

                        {/* PRODUCTS DROPDOWN */}
                        <div className="relative">
                            <div className="relative">
                                <button
                                    className="text-sm hover:text-neutral-700 dark:hover:text-neutral-300 transition flex items-center gap-1"
                                    onMouseEnter={() => setOpenProducts(true)}
                                >
                                    Products
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className={`transition-transform duration-200 ${openProducts ? "rotate-180" : ""}`}
                                    >
                                        <path d="M5 9.5L12 16l7-6.5" />
                                    </svg>
                                </button>

                                {/* DROPDOWN PANEL */}
                                <div
                                    onMouseEnter={() => setOpenProducts(true)}
                                    onMouseLeave={() => setOpenProducts(false)}
                                    className={`absolute left-0 top-full w-[600px] pt-2 z-50 ${
                                        openProducts ? "pointer-events-auto" : "pointer-events-none"
                                    }`}
                                >
                                    <div
                                        className={`
                                            bg-white dark:bg-black
                                            border border-neutral-300 dark:border-neutral-800
                                            rounded-xl shadow-xl p-6 grid grid-cols-2 gap-6
                                            transition-all duration-150
                                            ${
                                            openProducts
                                                ? "opacity-100 visible translate-y-0"
                                                : "opacity-0 invisible -translate-y-1"
                                        }
                                        `}
                                    >
                                        <div className="space-y-4">
                                            <h4 className="text-sm text-neutral-700 dark:text-neutral-300">Flagship</h4>

                                            <Link href="/products/deconstruct" className="block hover:translate-x-1 transition">
                                                <p className="font-medium">Deconstruct</p>
                                                <p className="text-xs text-neutral-600 dark:text-neutral-400">Logic breakdown automation.</p>
                                            </Link>

                                            <Link href="/products/seo4spa" className="block hover:translate-x-1 transition">
                                                <p className="font-medium">seo4spa</p>
                                                <p className="text-xs text-neutral-600 dark:text-neutral-400">Meta tag updater for SPAs.</p>
                                            </Link>

                                            <Link href="/products/quantpkg" className="block hover:translate-x-1 transition">
                                                <p className="font-medium">Quantpkg</p>
                                                <p className="text-xs text-neutral-600 dark:text-neutral-400">C++ package manager.</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link href="/docs" className="text-sm hover:-translate-y-0.5 transition">Resources</Link>
                        <Link href="/solutions" className="text-sm hover:-translate-y-0.5 transition">Solutions</Link>
                        <Link href="/dashboard" className="text-sm hover:-translate-y-0.5 transition">Developer Dashboard</Link>
                        <Link href="/legal" className="text-sm hover:-translate-y-0.5 transition">Legal Center</Link>
                    </div>

                    {/* RIGHT SIDE DESKTOP */}
                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={handleThemeToggle}
                            className="
                                px-3 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-700
                                hover:bg-neutral-200 dark:hover:bg-neutral-800 transition text-sm active:scale-95
                            "
                        >
                            Toggle
                        </button>

                        <Link
                            href="/login"
                            className="px-4 py-1.5 rounded-lg border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition text-sm"
                        >
                            Log In
                        </Link>

                        <Link
                            href="/dashboard/account-settings"
                            className="px-4 py-1.5 rounded-lg border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition text-sm"
                        >
                            Account Settings
                        </Link>
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        onClick={() => setMobileOpen(true)}
                        className="md:hidden px-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg active:scale-95"
                    >
                        <HiMenu className="w-7 h-7"/>
                    </button>
                </div>
            </nav>

            {/* FULLSCREEN MOBILE MENU */}
            {mobileOpen && (
                <div
                    key={themeVersion}
                    className={`
            fixed inset-0 z-[2147483647] flex flex-col p-8 pt-10 transition-all duration-300

            ${document.documentElement.classList.contains("dark")
                        ? "bg-black text-white"
                        : "bg-white text-black"}
        `}
                >
                    {/* CLOSE BUTTON */}
                    <button
                        onClick={() => setMobileOpen(false)}
                        className="mb-8 self-end active:scale-90 transition"
                    >
                        <HiX className="w-9 h-9" />
                    </button>

                    {/* LINKS */}
                    <div className="flex flex-col gap-10 text-3xl">

                        <div>
                            <h2 className="font-semibold mb-3 text-4xl">Products</h2>
                            <div className="ml-4 flex flex-col gap-6 text-2xl">
                                <Link href="/products/deconstruct">Deconstruct</Link>
                                <Link href="/products/seo4spa">seo4spa</Link>
                                <Link href="/products/quantpkg">Quantpkg</Link>
                                <Link href="/dashboard">Developer Dashboard</Link>
                            </div>
                        </div>

                        <Link href="/docs" className="font-semibold">Resources</Link>
                        <Link href="/solutions" className="font-semibold">Solutions</Link>
                        <Link href="/legal" className="font-semibold">Legal Center</Link>

                        {/* THEME BUTTON */}
                        <button
                            onClick={handleThemeToggle}
                            className={`
                    px-6 py-3 rounded-lg border transition active:scale-95 text-2xl
                    ${document.documentElement.classList.contains("dark")
                                ? "border-neutral-700 hover:bg-neutral-800"
                                : "border-neutral-300 hover:bg-neutral-200"}
                `}
                        >
                            Toggle Theme
                        </button>

                        <Link href="/login" className="text-2xl">Log In</Link>
                        <Link href="/dashboard/account-settings" className="text-2xl">Account Settings</Link>
                    </div>
                </div>
            )}

        </div>
    );
}
