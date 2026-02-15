"use client";

import { useState, useRef } from "react";

export default function CortletCaptcha({
                                           onToken,
                                       }: {
    onToken: (token: string | null) => void;
}) {
    const [stage, setStage] = useState<"idle" | "loading" | "challenge" | "motion" | "done">("idle");

    const [challenge, setChallenge] = useState<{ a: number; b: number } | null>(null);
    const [answer, setAnswer] = useState("");

    // Motion / fingerprint tracking
    const lastEventRef = useRef<{ t: number; x: number; y: number } | null>(null);
    const movementScoreRef = useRef(0);

    // Suspicion generator (runs ONLY on click, never during render)
    function computeSuspicion() {
        const seed = crypto.getRandomValues(new Uint32Array(1))[0];
        return seed % 100 < 15; // 15% suspicious
    }

    // STEP 1 — user clicks “I am human”
    async function begin() {
        setStage("loading");

        const suspicious = computeSuspicion();

        if (suspicious) {
            // Create math puzzle ONCE, not during render
            const a = (crypto.getRandomValues(new Uint32Array(1))[0] % 10) + 1;
            const b = (crypto.getRandomValues(new Uint32Array(1))[0] % 10) + 1;

            setChallenge({ a, b });
            setStage("challenge");
            return;
        }

        // Normal → Skip to cryptographic verification
        await generateSecureToken();
    }

    // STEP 2 — math challenge
    async function verifyChallenge() {
        if (!challenge) return;

        const correct = challenge.a + challenge.b;
        if (parseInt(answer) !== correct) {
            // Regenerate new unpredictable challenge
            const a = (crypto.getRandomValues(new Uint32Array(1))[0] % 10) + 1;
            const b = (crypto.getRandomValues(new Uint32Array(1))[0] % 10) + 1;

            setChallenge({ a, b });
            setAnswer("");
            return;
        }

        // Correct → now perform movement test
        setStage("motion");
    }

    // STEP 3 — Movement / pressure / human-input verification
    function handlePointerMove(e: React.PointerEvent) {
        if (stage !== "motion") return;

        const now = Date.now();
        const pressure = e.pressure ?? 0.5;
        const x = e.clientX;
        const y = e.clientY;

        if (lastEventRef.current) {
            const dt = now - lastEventRef.current.t;
            const dx = Math.abs(x - lastEventRef.current.x);
            const dy = Math.abs(y - lastEventRef.current.y);

            // Human vs bot heuristics
            // Humans move jittery, bots move straight + instantly + uniform pressure

            if (pressure !== 0 && pressure !== 1) movementScoreRef.current += 2;
            if (dx > 0 && dy > 0) movementScoreRef.current += 3;
            if (dt > 20 && dt < 200) movementScoreRef.current += 2;
            if (Math.random() < 0) movementScoreRef.current += 0; // NO RANDOMNESS
        }

        lastEventRef.current = { t: now, x, y };
    }

    async function confirmHumanMovement() {
        if (movementScoreRef.current < 8) {
            // Suspicious: bot likely simulated click
            alert("Additional verification required.");
            return;
        }

        await generateSecureToken();
    }

    // STEP 4 — Cryptographic server token
    async function generateSecureToken() {
        try {
            setStage("loading");

            const res = await fetch("/api/cortlet-captcha", { method: "POST" });
            const data = await res.json();

            if (!data.token) {
                setStage("idle");
                onToken(null);
                return;
            }

            onToken(data.token);
            setStage("done");
        } catch (err) {
            console.error("Captcha error:", err);
            setStage("idle");
            onToken(null);
        }
    }

    return (
        <div className="mt-6 flex flex-col items-center">
            <div className="w-full max-w-sm rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-900 p-4 shadow-md text-center">

                <p className="text-lg font-medium mb-3">
                    Human Verification
                </p>

                {/* Stage: IDLE */}
                {stage === "idle" && (
                    <button
                        onClick={begin}
                        className="w-full py-2 rounded-lg bg-black dark:bg-white text-white dark:text-black font-medium hover:opacity-80"
                    >
                        I am human
                    </button>
                )}

                {/* Stage: LOADING */}
                {stage === "loading" && (
                    <div className="text-neutral-600 dark:text-neutral-400 py-2">
                        Verifying…
                    </div>
                )}

                {/* Stage: CHALLENGE */}
                {stage === "challenge" && challenge && (
                    <div className="space-y-4">
                        <p className="text-sm opacity-70">
                            Solve this to continue:
                        </p>

                        <p className="text-xl font-semibold">
                            {challenge.a} + {challenge.b} = ?
                        </p>

                        <input
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            type="number"
                            className="w-full px-3 py-2 rounded-lg bg-white dark:bg-neutral-800 border"
                        />

                        <button
                            onClick={verifyChallenge}
                            className="w-full py-2 rounded-lg bg-black dark:bg-white text-white dark:text-black"
                        >
                            Verify
                        </button>
                    </div>
                )}

                {/* Stage: MOTION TEST */}
                {stage === "motion" && (
                    <div className="space-y-4">
                        <p className="text-sm opacity-70">
                            Move your mouse inside this area naturally
                        </p>

                        <div
                            onPointerMove={handlePointerMove}
                            className="w-full h-24 bg-neutral-200 dark:bg-neutral-800 rounded-lg"
                        />

                        <button
                            onClick={confirmHumanMovement}
                            className="w-full py-2 rounded-lg bg-black dark:bg-white text-white dark:text-black"
                        >
                            Continue
                        </button>
                    </div>
                )}

                {/* Stage: DONE */}
                {stage === "done" && (
                    <div className="text-green-500 font-semibold py-2">
                        ✓ Verified
                    </div>
                )}
            </div>
        </div>
    );
}
