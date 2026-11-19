# Estructura del repo

Una carpeta por módulo, con dueño, y la lógica compartida en paquetes. Así 4 personas trabajan en paralelo casi sin pisarse. Los nombres de carpetas van en inglés y las URLs en español ([ADR 0006](../decisiones/0006-idioma-del-codigo.md)).

```text
punto-penal/
├─ apps/
│  └─ web/                     Next.js: todas las pantallas
│     └─ src/
│        ├─ app/               rutas, en español:
│        │                     /partidos, /torneos/[slug], /clubes/[slug],
│        │                     /historia/[anio], /juegos, /simulador
│        └─ features/          un módulo por área
│           ├─ matches/        en vivo y partidos            Rama
│           ├─ competitions/   torneos, tablas, fixtures     Rama
│           ├─ clubs/          perfiles de clubes            Pela
│           ├─ history/        archivo histórico             Pela
│           ├─ games/          juegos diarios                Emi
│           ├─ simulator/      pantalla del simulador        Teby
│           └─ account/        cuenta y perfil               Teby
├─ packages/
│  ├─ core/                    dominio, motor de formatos, tablas, desempates   Teby
│  ├─ simulator/               modelo de partido y temporadas (usa core)        Teby
│  ├─ db/                      tipos generados de Supabase y consultas comunes  Pela
│  ├─ ingestion/               adaptadores de proveedores → modelo propio       Rama
│  └─ ui/                      componentes compartidos e identidad visual       Emi
├─ supabase/                                                         (Fase 0)
│  ├─ schemas/                 esquema declarativo, un archivo por área (ADR 0007)
│  ├─ migrations/              migraciones generadas, nunca se editan una vez aplicadas
│  ├─ functions/               Edge Functions: ingest-live, ingest-daily, daily-puzzle
│  └─ seed.sql                 datos de prueba
├─ docs/                       toda la documentación
├─ .claude/                    skills y settings compartidos de Claude Code
├─ .github/                    CODEOWNERS, plantillas de PR e issues, CI
├─ AGENTS.md                   reglas del repo para agentes y personas
├─ CLAUDE.md                   entrada de Claude Code
├─ package.json                scripts de la raíz (todos pasan por Turborepo), versión de pnpm y de Node
├─ pnpm-workspace.yaml         qué carpetas son paquetes (apps/*, packages/*) y config de pnpm
├─ turbo.json                  tareas del monorepo: build, dev, lint, typecheck, test
├─ tsconfig.base.json          config de TypeScript que extienden los paquetes
└─ .nvmrc                      versión de Node (26)
```

## Paquetes del monorepo

Cada carpeta con `package.json` dentro de `apps/` o `packages/` es un paquete. Se llaman `@punto-penal/<carpeta>` y se importan por ese nombre (`import { pointsFor } from "@punto-penal/core"`), nunca por ruta relativa entre paquetes.

- **Se importan como TypeScript sin compilar.** El `exports` de cada paquete apunta a `src/index.ts`; Next.js los compila porque están en `transpilePackages` (`apps/web/next.config.ts`).
- **Cada paquete define sus scripts** (`lint`, `typecheck`, `test`, `build` si corresponde). Turborepo los corre en todos los paquetes desde la raíz y guarda en caché lo que no cambió.
- **Hoy existen `@punto-penal/web` y `@punto-penal/core`.** `simulator`, `db`, `ingestion` y `ui` tienen solo su README hasta que su dueño los cree.

## Dentro de una feature

Cada carpeta de `features/` sigue la misma forma, para que cualquiera se ubique en el módulo de otro:

```text
features/competitions/
├─ components/     componentes de esta sección
├─ queries/        lecturas de datos para estas pantallas (servidor, cacheadas)
├─ actions/        Server Actions (escrituras), si las hay
├─ lib/            utilidades propias de la sección
└─ index.ts        lo que la ruta de app/ importa
```

La ruta en `app/` es fina: arma la página importando desde su feature. La guía paso a paso está en la skill `nueva-feature`.

## Reglas entre módulos

1. **Una feature no importa de otra feature.** Si dos secciones necesitan lo mismo, se mueve a `packages/`.
2. **Las pantallas no calculan reglas de fútbol.** Tablas, desempates, formatos y simulación viven en `packages/core` y `packages/simulator`.
3. **`packages/core` no depende de nada del proyecto** (ni de Supabase, ni de React). Es TypeScript puro y testeable.
4. **`packages/simulator` depende solo de `core`.** Corre en un Web Worker del navegador.
5. **`packages/ingestion` escribe en la base; las features leen.** Las features no llaman a proveedores externos.
6. **`packages/ui` no conoce el dominio.** Botones, tarjetas, tablas genéricas; nada de "partido" o "club".

## Dónde va cada cosa

| Necesito... | Va en |
| --- | --- |
| Una regla de fútbol (desempate, formato, promedio) | `packages/core` |
| Un componente visual genérico | `packages/ui` |
| Un componente de una sola sección | `apps/web/src/features/<módulo>/components` |
| Una consulta a la base para una pantalla | `apps/web/src/features/<módulo>/queries` |
| Una consulta que usan varias secciones | `packages/db` |
| Hablar con un proveedor de datos | `packages/ingestion` |
| Un job programado | `supabase/functions` + Supabase Cron |
| Un cambio de tablas o permisos | `supabase/schemas` (skill `migracion-db`) |
