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

script-src
  'self'
  'unsafe-inline'
  'unsafe-eval'
  https://www.gstatic.com
  https://*.gstatic.com
  https://apis.google.com
  https://accounts.google.com
  https://*.google.com
  https://*.googleusercontent.com;

style-src 'self' 'unsafe-inline' https:;

connect-src
  'self'
  blob:
  data:
  https://api.openrouter.ai
  https://api.resend.com
  https://identitytoolkit.googleapis.com
  https://securetoken.googleapis.com
  https://firebasestorage.googleapis.com
  https://firestore.googleapis.com
  https://firebase.googleapis.com
  https://www.googleapis.com
  https://apis.google.com
  https://accounts.google.com
  https://*.googleusercontent.com
  https://*.google.com
  https://github.com
  https://api.github.com
  https://cdn.cortlet.com;

font-src 'self' https://cdn.cortlet.com data:;

frame-src
  'self'
  https://accounts.google.com
  https://accounts.youtube.com
  https://*.google.com
  https://*.googleusercontent.com
  https://*.gstatic.com
  https://apis.google.com
  https://cortlet-web.firebaseapp.com
  https://cortlet-web.web.app
  https://*.firebaseapp.com;
`
                            .replace(/\s+/g, " "),
                    },
                ],
            },
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
