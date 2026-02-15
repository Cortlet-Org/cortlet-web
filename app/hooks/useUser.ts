"use client";

import { useEffect, useState } from "react";
import { listenToUser } from "../lib/auth";

export default function useUser() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsub = listenToUser((u) => setUser(u));
        return () => unsub();
    }, []);

    return user;
}
