"use client";

import { useEffect, useState } from "react";
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { firebaseApp } from "@/app/lib/firebaseConfig";
import { useAuth } from "@/app/hooks/useAuth";
import Navbar from "@/app/components/Navbar";
export default function LoginPage() {
    const auth = getAuth(firebaseApp);
    const router = useRouter();
    const { user, loading } = useAuth();

    const [doingLogin, setDoingLogin] = useState(false);
    const [error, setError] = useState("");
    const [themeLogo, setThemeLogo] = useState<string | null>(null);

    useEffect(() => {
        const isDark = document.documentElement.classList.contains("dark");
        setThemeLogo(
            isDark
                ? "https://cdn.cortlet.com/images/sized-images/icon_light_512.png"
                : "https://cdn.cortlet.com/images/sized-images/icon_dark_512.png"
        );
    }, []);
    // Redirect if logged in
    useEffect(() => {
        if (!loading && user) {
            router.replace("/dashboard");
        }
    }, [user, loading, router]);

    async function login(provider: "google" | "github") {
        setDoingLogin(true);
        setError("");

        const prov =
            provider === "google"
                ? new GoogleAuthProvider()
                : new GithubAuthProvider();

        try {
            await signInWithPopup(auth, prov);
            router.push("/dashboard");

        } catch (err: any) {
            console.error(err);

            // 🔥 Handle popup-close without freezing buttons
            if (err.code === "auth/popup-closed-by-user") {
                setError("Login canceled.");
            }
            else if (err.code === "auth/cancelled-popup-request") {
                setError("Popup interrupted. Try again.");
            }
            else {
                setError("Login failed. Try again.");
            }

        } finally {
            // 🔥 ALWAYS RE-ENABLE BUTTONS EVEN IF POPUP DOESN'T RESOLVE
            setDoingLogin(false);
        }
    }

    return (
        <>
            <Navbar/>
            <main className="min-h-screen flex items-center justify-center bg-white dark:bg-black p-6 relative overflow-hidden select-none">

                {/* BACKGROUND GLOW EFFECTS */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute w-[600px] h-[600px] bg-black/5 dark:bg-white/10 blur-[140px] rounded-full top-[10%] left-[20%]"></div>
                    <div className="absolute w-[400px] h-[400px] bg-black/10 dark:bg-white/5 blur-[180px] rounded-full bottom-[5%] right-[10%]"></div>
                </div>

                {/* CARD */}
                <div className="
                relative z-10 w-full max-w-md
                bg-white dark:bg-neutral-900
                border border-neutral-300 dark:border-neutral-800
                shadow-xl rounded-2xl p-10
                backdrop-blur
            ">
                    <div className="flex justify-center mb-8">
                        {themeLogo && (
                            <img
                                src={themeLogo}
                                width={80}
                                height={80}
                                alt="Cortlet Logo"
                                className="rounded transition-all"
                            />
                        )}
                    </div>

                    {/* TITLE */}
                    <h1 className="text-3xl font-bold text-center mb-3">
                        Welcome, Developer
                    </h1>

                    <p className="text-center text-neutral-600 dark:text-neutral-300 mb-8">
                        API Keys, SDKs, and developer tools in one place. {" "}
                        <span className="text-yellow-300">
                        Coming soon.
                    </span>
                    </p>

                    {/* ERROR BANNER */}
                    {error && (
                        <div className="bg-red-500/20 text-red-400 border border-red-500/40 rounded-lg p-3 text-sm mb-5 text-center">
                            {error}
                        </div>
                    )}

                    {/* BUTTONS */}
                    <div className="flex flex-col gap-4">

                        {/* GOOGLE */}
                        <button
                            disabled={doingLogin}
                            onClick={() => login("google")}
                            className={`
                            flex items-center justify-center gap-3
                            py-3 w-full rounded-lg border
                            bg-white hover:bg-neutral-100
                            dark:bg-neutral-800 dark:border-neutral-700 dark:hover:bg-neutral-700
                            transition-all font-medium
                            ${doingLogin ? "opacity-50 cursor-not-allowed" : ""}
                        `}
                        >
                            <img
                                src="https://developers.google.com/identity/images/g-logo.png"
                                className="w-6 h-6 rounded"
                                alt=""
                            />
                            Continue with Google
                        </button>

                        {/* GITHUB */}
                        <button
                            disabled={doingLogin}
                            onClick={() => login("github")}
                            className={`
                            flex items-center justify-center gap-3
                            py-3 w-full rounded-lg
                            bg-black text-white hover:bg-neutral-900
                            transition-all font-medium
                            ${doingLogin ? "opacity-50 cursor-not-allowed" : ""}
                        `}
                        >
                            <img
                                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                                className="w-6 h-6 rounded"
                                alt=""
                            />
                            Continue with GitHub
                        </button>
                    </div>

                    {/* FOOTER */}
                    <p className="mt-10 text-center text-neutral-500 dark:text-neutral-400 text-xs">
                        By signing in, you agree to the Cortlet Developer Terms.
                    </p>
                </div>
            </main>
        </>
    );
}
