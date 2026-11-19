import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig([
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    // core es TypeScript puro: no puede depender de React, Next.js ni Supabase.
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            { group: ["react", "react-dom", "next", "next/*"], message: "packages/core no depende de React ni de Next.js." },
            { group: ["@supabase/*"], message: "packages/core no depende de Supabase." },
          ],
        },
      ],
    },
  },
]);
