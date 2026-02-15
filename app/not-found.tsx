import Link from "next/link";
import Image from "next/image";

export default function NotFoundPage() {

    return (
        <main className="w-full min-h-screen bg-white text-black dark:bg-black dark:text-white font-sans flex flex-col items-center justify-center px-6 relative">

            {/* Glow background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,120,120,0.25),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)] transition-all duration-500" />

            <div className="absolute blur-[120px] w-[500px] h-[500px] bg-black/10 dark:bg-white/10 rounded-full top-40 left-20 transition-all duration-300" />
            <div className="absolute blur-[120px] w-[400px] h-[400px] bg-black/5 dark:bg-white/5 rounded-full bottom-20 right-20 transition-all duration-300" />

            {/* CONTENT */}
            <div className="relative z-10 text-center max-w-2xl">

                <Image
                    src="https://cdn.cortlet.com/images/sized-images/icon_light_512.png"
                    width={120}
                    height={120}
                    alt="Cortlet Logo"
                    className="mx-auto mb-8 drop-shadow-[0_0_40px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_0_40px_rgba(255,255,255,0.4)]"
                />

                <h1 className="text-6xl font-bold mb-4">404</h1>

                <p className="text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed mb-10">
                    The page you’re looking for doesn’t exist or has been moved.<br />
                    Let’s get you back on track.
                </p>

                {/* BUTTONS */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

                    <Link
                        href="/"
                        className="px-8 py-3 rounded-full font-medium bg-black text-white dark:bg-white dark:text-black transition hover:opacity-80"
                    >
                        Go Home
                    </Link>

                    <Link
                        href="/contact"
                        className="px-8 py-3 rounded-full border border-black dark:border-white font-medium transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                    >
                        Contact Support
                    </Link>

                </div>
            </div>
        </main>
    );
}
