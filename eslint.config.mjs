// eslint.config.mjs

import js from "@eslint/js";
import tseslint from "typescript-eslint";
import next from "eslint-config-next";
import prettier from "eslint-config-prettier";

export default [

    // 1️⃣ Ignores
    {
        ignores: [
            ".next/**",
            "out/**",
            "build/**",
            "dist/**",
            "next-env.d.ts",
        ],
    },

    // 2️⃣ JavaScript recommended
    js.configs.recommended,

    // 3️⃣ TypeScript recommended
    ...tseslint.configs.recommended,

    // 4️⃣ Next.js rules (contains react-hooks automatically)
    ...next,

    // 5️⃣ Custom rules
    {
        rules: {
            "@typescript-eslint/no-unused-vars": [
                "warn",
                { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
            ],

            "@typescript-eslint/no-explicit-any": "off",
            "@next/next/no-img-element": "off",
        },
    },

    // 6️⃣ Prettier — must be last
    {
        rules: {
            ...prettier.rules
        }
    }
];
