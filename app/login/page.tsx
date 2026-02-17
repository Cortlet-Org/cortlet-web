"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/app/components/Navbar"; // ⬅ YES, add Navbar safely
import {
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup,
    getAuth,
    linkWithCredential,
    fetchSignInMethodsForEmail,
    signInWithRedirect
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { firebaseApp } from "@/app/lib/firebaseConfig";
import { useAuth } from "@/app/hooks/useAuth";

export default function LoginPage() {
    const auth = getAuth(firebaseApp);
    const router = useRouter();
    const { user, loading } = useAuth();

    const [doingLogin, setDoingLogin] = useState(false);
    const [lockUI, setLockUI] = useState(false);
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

    // Auto-redirect after login completes
    useEffect(() => {
        if (!loading && user && !doingLogin) {
            const t = setTimeout(() => {
                router.replace("/dashboard");
            }, 500);
            return () => clearTimeout(t);
        }
    }, [user, loading, doingLogin]);

    async function login(provider: "google" | "github") {
        setDoingLogin(true);
        setLockUI(true);
        setError("");

        const prov =
            provider === "google"
                ? new GoogleAuthProvider()
                : new GithubAuthProvider();

        try {
            // ---- TRY POPUP FIRST ----
            await signInWithPopup(auth, prov);

            // If popup worked → redirect
            router.replace("/dashboard");
            return;

        } catch (err: any) {
            console.error("Authentication failed:", err);

            // ----------------------------------------
            // CASE: User closed popup → UNLOCK UI
            // ----------------------------------------
            if (err.code === "auth/popup-closed-by-user") {
                setError("Login cancelled.");
                setLockUI(false);
                setDoingLogin(false);
                return;
            }

            if (err.code === "auth/cancelled-popup-request") {
                setError("Popup interrupted.");
                setLockUI(false);
                setDoingLogin(false);
                return;
            }

            // ----------------------------------------
            // SAFARI FALLBACK → REDIRECT MODE
            // ----------------------------------------
            if (
                err.code === "auth/operation-not-supported-in-this-environment" ||
                err.message?.includes("popup")
            ) {
                console.log("Falling back to redirect… (Safari)");

                setError("");
                setLockUI(true);

                // Use redirect fallback
                await signInWithRedirect(auth, prov);
                return;
            }

            // ----------------------------------------
            // ACCOUNT EXISTS WITH ANOTHER PROVIDER
            // (same as before)
            // ----------------------------------------
            if (err.code === "auth/account-exists-with-different-credential") {
                const email = err.customData?.email;
                const pendingCred =
                    provider === "google"
                        ? GoogleAuthProvider.credentialFromError(err)
                        : GithubAuthProvider.credentialFromError(err);

                if (!email) {
                    setError("Account conflict. Try another login method.");
                    setLockUI(false);
                    return;
                }

                const methods = await fetchSignInMethodsForEmail(auth, email);

                if (methods.includes("google.com")) {
                    const googleResult = await signInWithPopup(auth, new GoogleAuthProvider());
                    if (pendingCred) await linkWithCredential(googleResult.user, pendingCred);

                    router.replace("/dashboard");
                    return;
                }

                if (methods.includes("github.com")) {
                    const githubResult = await signInWithPopup(auth, new GithubAuthProvider());
                    if (pendingCred) await linkWithCredential(githubResult.user, pendingCred);

                    router.replace("/dashboard");
                    return;
                }

                setError("This email already exists with another provider.");
                setLockUI(false);
                return;
            }

            // ALL OTHER ERRORS
            setError("Login failed. Try again.");
            setLockUI(false);

        } finally {
            setDoingLogin(false);
        }
    }

    return (
        <>
            {/* NAVBAR — frozen if login started */}
            <Navbar locked={lockUI} />

            {/* FULLSCREEN FREEZE OVERLAY */}
            {lockUI && (
                <div className="
                    fixed inset-0 z-[9999]
                    bg-black/40 dark:bg-black/60
                    backdrop-blur-sm
                    flex items-center justify-center
                ">
                    <div className="text-white text-xl font-medium animate-pulse">
                        Authenticating…
                    </div>
                </div>
            )}

            <main className="min-h-screen flex items-center justify-center bg-white dark:bg-black p-6 relative overflow-hidden select-none">

                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute w-[600px] h-[600px] bg-black/5 dark:bg-white/10 blur-[140px] rounded-full top-[10%] left-[20%]"></div>
                    <div className="absolute w-[400px] h-[400px] bg-black/10 dark:bg-white/5 blur-[180px] rounded-full bottom-[5%] right-[10%]"></div>
                </div>

                <div className="relative z-10 w-full max-w-md bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 shadow-xl rounded-2xl p-10 backdrop-blur">

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

                    <h1 className="text-3xl font-bold text-center mb-3">
                        Welcome, Developer
                    </h1>

                    {error && (
                        <div className="bg-red-500/20 text-red-400 border border-red-500/40 rounded-lg p-3 text-sm mb-5 text-center">
                            {error}
                        </div>
                    )}

                    <div className="flex flex-col gap-4">
                        {/* GOOGLE */}
                        <button
                            disabled={doingLogin}
                            onClick={() => login("google")}
                            className={`
                                flex items-center justify-center gap-3 py-3 w-full rounded-lg border
                                bg-white hover:bg-neutral-100
                                dark:bg-neutral-800 dark:border-neutral-700 dark:hover:bg-neutral-700
                                transition-all font-medium
                                ${doingLogin ? "opacity-50 cursor-not-allowed" : ""}
                            `}
                        >
                            <img src="https://developers.google.com/identity/images/g-logo.png" className="w-6 h-6 rounded" />
                            Continue with Google
                        </button>

                        {/* GITHUB */}
                        <button
                            disabled={doingLogin}
                            onClick={() => login("github")}
                            className={`
                                flex items-center justify-center gap-3 py-3 w-full rounded-lg
                                bg-black text-white hover:bg-neutral-900
                                transition-all font-medium
                                ${doingLogin ? "opacity-50 cursor-not-allowed" : ""}
                            `}
                        >
                            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" className="w-6 h-6 rounded" />
                            Continue with GitHub
                        </button>
                    </div>

                    <p className="mt-10 text-center text-neutral-500 dark:text-neutral-400 text-xs">
                        By signing in, you agree to Cortlet Developer Terms.
                    </p>
                </div>
            </main>
        </>
    );
}
