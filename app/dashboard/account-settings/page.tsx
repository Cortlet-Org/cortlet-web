"use client";

import { useAuth } from "@/app/hooks/useAuth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import { getAuth, signOut, updateProfile, deleteUser } from "firebase/auth";
import { firebaseApp } from "@/app/lib/firebaseConfig";

export default function AccountSettingsPage() {
    const { user, loading } = useAuth();
    const router = useRouter();
    const auth = getAuth(firebaseApp);

    const [editingName, setEditingName] = useState(false);
    const [newName, setNewName] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // redirect if logged out
    useEffect(() => {
        if (!loading && !user) router.replace("/login");
    }, [loading, user, router]);

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center text-neutral-500 dark:text-neutral-300">
                Loading settings…
            </div>
        );
    }

    if (!user) return null;

    async function saveName() {
        try {
            setError("");
            setSuccess("");

            if (!newName.trim()) {
                setError("Name cannot be empty.");
                return;
            }

            await updateProfile(auth.currentUser!, { displayName: newName });
            setSuccess("Name updated successfully!");
            setEditingName(false);
        } catch (err: any) {
            console.error(err);
            setError("Failed to update name.");
        }
    }

    async function removeAccount() {
        try {
            setError("");
            setSuccess("");

            await deleteUser(auth.currentUser!);
            router.replace("/login");
        } catch (err: any) {
            console.error(err);
            setError("Account deletion failed.");
        }
    }

    async function logout() {
        await signOut(auth);
        router.replace("/login");
    }

    return (
        <>
            <Navbar />

            <main className="pt-32 px-6 max-w-5xl mx-auto">

                <h1 className="text-5xl font-bold mb-6">Account Settings</h1>

                {/* SUCCESS BANNER */}
                {success && (
                    <div className="mb-6 bg-green-500/20 text-green-400 p-3 border border-green-500/40 rounded-lg">
                        {success}
                    </div>
                )}

                {/* ERROR BANNER */}
                {error && (
                    <div className="mb-6 bg-red-500/20 text-red-400 p-3 border border-red-500/40 rounded-lg">
                        {error}
                    </div>
                )}

                {/* ACCOUNT CARD */}
                <div
                    className="
                    p-8 mb-10 rounded-2xl
                    border border-neutral-300 dark:border-neutral-800
                    bg-white dark:bg-neutral-900
                    shadow-sm
                "
                >
                    <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>

                    <div className="space-y-4 text-neutral-700 dark:text-neutral-300">

                        <p>
                            <strong>Name:</strong>{" "}
                            {editingName ? (
                                <input
                                    value={newName}
                                    onChange={(e) => setNewName(e.target.value)}
                                    className="px-3 py-2 rounded-md bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 outline-none"
                                />
                            ) : (
                                user.displayName || "No name"
                            )}
                        </p>

                        <p>
                            <strong>Email:</strong> {user.email}
                        </p>

                        <p>
                            <strong>Provider:</strong>{" "}
                            {user.providerData?.[0]?.providerId || "Unknown"}
                        </p>

                        {/* ACTION BUTTONS */}
                        <div className="mt-6 flex gap-3">

                            {!editingName ? (
                                <button
                                    onClick={() => {
                                        setEditingName(true);
                                        setNewName(user.displayName || "");
                                    }}
                                    className="
                                        px-4 py-2 rounded-lg bg-neutral-200 dark:bg-neutral-800
                                        text-black dark:text-white border border-neutral-400 dark:border-neutral-700
                                        hover:bg-neutral-300 dark:hover:bg-neutral-700 transition
                                    "
                                >
                                    Change Name
                                </button>
                            ) : (
                                <>
                                    <button
                                        onClick={saveName}
                                        className="
                                            px-4 py-2 rounded-lg bg-blue-600 text-white
                                            hover:bg-blue-700 transition
                                        "
                                    >
                                        Save
                                    </button>

                                    <button
                                        onClick={() => setEditingName(false)}
                                        className="
                                            px-4 py-2 rounded-lg bg-neutral-300 dark:bg-neutral-700
                                            text-black dark:text-white
                                            hover:opacity-80 transition
                                        "
                                    >
                                        Cancel
                                    </button>
                                </>
                            )}

                            <button
                                onClick={logout}
                                className="
                                    px-4 py-2 rounded-lg bg-black dark:bg-white
                                    text-white dark:text-black border border-neutral-400 dark:border-neutral-700
                                    hover:opacity-80 transition
                                "
                            >
                                Log Out
                            </button>

                        </div>
                    </div>
                </div>

                {/* DELETE ACCOUNT */}
                <div
                    className="
                    p-8 rounded-2xl
                    border border-red-500/40
                    bg-red-500/10 dark:bg-red-900/20
                "
                >
                    <h2 className="text-2xl font-semibold text-red-400 mb-3">
                        Dangerous Zone
                    </h2>

                    <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                        Deleting your account is permanent and cannot be undone.
                    </p>

                    <button
                        onClick={removeAccount}
                        className="
                            px-5 py-3 rounded-lg bg-red-600 text-white
                            hover:bg-red-700 transition
                        "
                    >
                        Delete Account
                    </button>
                </div>

            </main>
        </>
    );
}
