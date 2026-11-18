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

- **Next.js 16** es la línea estable actual (16.3 salió en agosto de 2026). `create-next-app` ya genera un `AGENTS.md` propio: al crear `apps/web`, revisarlo y fusionar lo útil con el `AGENTS.md` de la raíz.
- **Node y pnpm:** se fijan en la tarea de scaffold de la Fase 0 (`.nvmrc` y `packageManager` en `package.json`).
- **Supabase CLI:** cambia seguido. Ante la duda, `npx supabase <comando> --help` antes que la memoria.

## Hosting a futuro

Vercel Hobby es gratis pero **solo para uso no comercial**. Al poner anuncios hay que pasar a Vercel Pro o mudarse a Cloudflare Workers, que a escala sale unas 3 veces más barato. Por eso el código no usa nada exclusivo de Vercel. Ver [ADR 0008](../decisiones/0008-hosting.md) y [../costos.md](../costos.md).
