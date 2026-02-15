/** @type {import("next").NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "Content-Security-Policy",
                        value: `
                            default-src 'self';
                            img-src 'self' https://cdn.cortlet.com https://developers.google.com https://github.githubassets.com data:;
                            script-src 'self' 'unsafe-inline' 'unsafe-eval' https:;
                            style-src 'self' 'unsafe-inline' https:;
                            connect-src 'self' https://api.openrouter.ai https://api.resend.com https://cdn.cortlet.com;
                            font-src 'self' https://cdn.cortlet.com data:;
                            frame-src 'self';
                        `.replace(/\s+/g, " "),
                    },
                ],
            }
        ];
    },

    images: {
        remotePatterns: [
            { protocol: "https", hostname: "cdn.cortlet.com" },
            { protocol: "https", hostname: "developers.google.com" },
            { protocol: "https", hostname: "github.githubassets.com" },
        ],
    },
};

export default nextConfig;
