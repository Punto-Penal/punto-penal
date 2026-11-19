import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

export default defineConfig([
  js.configs.recommended,
  ...tseslint.configs.recommended,
  reactHooks.configs.flat.recommended,
  {
    // ui no conoce el dominio: nada de partidos, clubes ni datos.
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            { group: ["@punto-penal/*", "!@punto-penal/ui", "!@punto-penal/ui/*"], message: "packages/ui no depende de otros paquetes del proyecto: no conoce el dominio." },
            { group: ["next", "next/*", "@supabase/*"], message: "packages/ui es React genérico: sin Next.js ni Supabase." },
          ],
        },
      ],
    },
  },
]);
