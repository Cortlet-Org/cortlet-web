// app/lib/auth.ts
import { firebaseApp } from "./firebaseConfig";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
    signOut,
    onAuthStateChanged,
    OAuthProvider
} from "firebase/auth";

export const auth = getAuth(firebaseApp);

// Providers
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
export const microsoftProvider = new OAuthProvider("microsoft.com");

// Login functions
export async function loginGoogle() {
    return await signInWithPopup(auth, googleProvider);
}

export async function loginGitHub() {
    return await signInWithPopup(auth, githubProvider);
}

export async function loginMicrosoft() {
    return await signInWithPopup(auth, microsoftProvider);
}

// Logout
export async function logout() {
    return await signOut(auth);
}

// Auth listener (used in hook)
export function listenToUser(callback: (user: any) => void) {
    return onAuthStateChanged(auth, callback);
}
