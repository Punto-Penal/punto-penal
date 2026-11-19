# Stack

TypeScript de punta a punta: front, back, simulador e ingesta comparten tipos y código. Cada elección es la opción estándar con mejor documentación, para que los 4 encuentren respuestas rápido. Decisión en [ADR 0002](../decisiones/0002-nextjs-y-supabase.md).

| Capa | Elección | Por qué | Descartado |
| --- | --- | --- | --- |
| Lenguaje | TypeScript en todo | Tipos del dominio compartidos entre todos los módulos | Backend en Python: dos lenguajes y tipos duplicados |
| Web | [Next.js 16](https://nextjs.org/blog/next-16) (App Router) + React | Miles de páginas de clubes y torneos renderizadas en servidor y cacheadas con `"use cache"` | SPA con Vite: SEO pobre para páginas públicas |
| UI | Tailwind CSS + shadcn/ui | Componentes copiados al repo, fáciles de adaptar a la identidad | Librerías cerradas tipo MUI |
| Base de datos | Supabase Postgres | Relacional, SQL para tablas históricas y rachas, permisos por fila (RLS) | MongoDB o Firebase: consultas históricas dolorosas |
| Cuentas | [Supabase Auth con sesión anónima](https://supabase.com/docs/guides/auth/auth-anonymous) | Se juega sin registrarse; al crear cuenta se conserva el mismo id y la racha | Auth propio |
| Jobs | [Supabase Cron](https://supabase.com/docs/guides/cron) + Edge Functions | Ingesta cada 30 s (Cron acepta intervalos en segundos) y desafío diario | GitHub Actions: mínimo 5 min e impreciso |
| Validación | Zod | Mismos esquemas para formularios, API y configuración del simulador | — |
| Datos en el cliente | TanStack Query | Polling del en vivo y caché en el navegador | — |
| Tests | Vitest + Playwright | El motor de torneos y el simulador necesitan tests sí o sí | — |
| Monorepo | pnpm workspaces + Turborepo | Paquetes separados y builds cacheados | Nx: más pesado de aprender |
| Hosting | Vercel | Integración nativa con Next.js y una URL de prueba por PR | Netlify Free: 300 créditos/mes, corto para 4 personas |
| Monitoreo | Sentry + PostHog (planes gratis) | Saber qué se rompe y qué se usa | — |

## Notas de versiones

- **Next.js 16.4** con React 19.3, Tailwind 4.3 y Cache Components (`"use cache"`) activado. `create-next-app` generó `apps/web/AGENTS.md`, que manda a leer la documentación de la versión instalada en `node_modules/next/dist/docs/`; `next dev` lo vuelve a escribir si se borra.
- **Node 26** (LTS, la que Vercel usa por defecto), fijado en `.nvmrc` y en `engines` del `package.json` de la raíz.
- **pnpm 12.21.0**, fijado en `packageManager`. Vercel lo soporta. Las dependencias con scripts de instalación se habilitan una por una en `pnpm-workspace.yaml`.
- **TypeScript 5**, el que instala `create-next-app` 16.4. TypeScript 7 ya salió; pasar a esa versión es una tarea aparte, después de probarla con Next.
- **Turborepo 2.11** y **Vitest 5**.
- **Supabase CLI:** cambia seguido. Ante la duda, `npx supabase <comando> --help` antes que la memoria.

## Hosting a futuro

Vercel Hobby es gratis pero **solo para uso no comercial**. Al poner anuncios hay que pasar a Vercel Pro o mudarse a Cloudflare Workers, que a escala sale unas 3 veces más barato. Por eso el código no usa nada exclusivo de Vercel. Ver [ADR 0008](../decisiones/0008-hosting.md) y [../costos.md](../costos.md).
