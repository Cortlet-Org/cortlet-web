// app/lib/firebase.ts
import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBfJkOic88z4hz2r7DYRhnAPKUKvzvHMrI",
    authDomain: "cortlet-web.firebaseapp.com",
    projectId: "cortlet-web",
    storageBucket: "cortlet-web.firebasestorage.app",
    messagingSenderId: "686399667891",
    appId: "1:686399667891:web:1aac491d24a6179b4b3ac6",
};

// Prevent double initialization in Next.js
export const firebaseApp = getApps().length
    ? getApps()[0]
    : initializeApp(firebaseConfig);
