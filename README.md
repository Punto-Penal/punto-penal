# Punto Penal

Una plataforma para seguir, jugar y experimentar con el fútbol argentino: resultados y tablas, archivo histórico, juegos diarios y un simulador de campeonatos.

> **Estado: Fase 0 (base).** El monorepo ya está armado (`apps/web` y `packages/core`); el resto se crea en las tareas de [docs/plan/fase-0.md](docs/plan/fase-0.md).

## Este repo es el canal principal del equipo

Todo lo que decidimos, planeamos o aprendemos queda escrito acá, no en el chat. **Si no está en el repo, no está decidido.** Cada PR que cambia algo actualiza también su documentación.

| Si querés... | Andá a |
| --- | --- |
| Entender qué es el proyecto | [docs/vision/propuesta.md](docs/vision/propuesta.md) |
| Saber qué hay que hacer ahora | [docs/plan/fase-0.md](docs/plan/fase-0.md) |
| Ver quién es dueño de qué | [docs/plan/equipo.md](docs/plan/equipo.md) |
| Ver el plan completo por fases | [docs/plan/hoja-de-ruta.md](docs/plan/hoja-de-ruta.md) |
| Entender la arquitectura | [docs/arquitectura/vision-general.md](docs/arquitectura/vision-general.md) |
| Saber por qué se decidió algo | [docs/decisiones/](docs/decisiones/README.md) |
| Ver qué falta decidir | [docs/pendientes.md](docs/pendientes.md) |
| Aprender el vocabulario del dominio | [docs/dominio/glosario.md](docs/dominio/glosario.md) |
| Contribuir (ramas, PRs, commits) | [CONTRIBUTING.md](CONTRIBUTING.md) |
| Usar Claude Code en el repo | [docs/herramientas/claude-code.md](docs/herramientas/claude-code.md) |

Índice completo de la documentación: [docs/README.md](docs/README.md).

## Equipo

| Integrante | Módulo del que es dueño | Rol transversal |
| --- | --- | --- |
| Teby | Simulador y plataforma | Líder técnico (repo, CI, deploys, skills) |
| Rama | Fútbol actual y estadísticas | Dueño de datos (proveedor, ingesta) |
| Pela | Archivo histórico y clubes | Dueño de la base (migraciones, RLS) |
| Emi | Juegos diarios | Dueño de diseño (identidad, componentes) |

Detalle, dependencias y a quién pedirle revisión: [docs/plan/equipo.md](docs/plan/equipo.md).

## Stack

Next.js 16 · TypeScript · Supabase (Postgres, Auth, Cron, Edge Functions) · pnpm + Turborepo · Vercel. Motivos y alternativas descartadas en [docs/arquitectura/stack.md](docs/arquitectura/stack.md).

## Estructura

```text
punto-penal/
├─ apps/web/        Next.js: todas las pantallas
├─ packages/        lógica compartida: core, simulator, db, ingestion, ui
├─ supabase/        migraciones, esquema, Edge Functions    (se crea en Fase 0)
├─ docs/            toda la documentación del proyecto
├─ .claude/         skills y configuración compartida de Claude Code
├─ .github/         plantillas de PR e issues, CODEOWNERS
├─ AGENTS.md        reglas del repo para agentes de IA (y para humanos)
└─ CLAUDE.md        entrada de Claude Code (importa AGENTS.md)
```

Detalle de cada carpeta: [docs/arquitectura/estructura-del-repo.md](docs/arquitectura/estructura-del-repo.md).

## Primeros pasos

1. Leé este README, [la propuesta](docs/vision/propuesta.md) y [el equipo](docs/plan/equipo.md). Son 15 minutos.
2. Abrí Claude Code en la raíz del repo y escribí `/estado`: te resume en qué está el proyecto y qué te toca a vos.
3. Tomá una tarea de [docs/plan/fase-0.md](docs/plan/fase-0.md), creá una rama y abrí un PR siguiendo [CONTRIBUTING.md](CONTRIBUTING.md).

## Levantar el proyecto en local

Necesitás **Node 26** y **pnpm 12**.

1. **Node 26.** Con un gestor de versiones (`fnm`, `nvm`) alcanza con `fnm use` o `nvm use`: leen `.nvmrc`. Si no, bajá el instalador LTS de [nodejs.org](https://nodejs.org).
2. **pnpm 12.** `npm install -g pnpm@12`. Si ya tenés pnpm 10, en Windows su cambio automático de versión falla con pnpm 12; instalar pnpm 12 directo lo evita.
3. En la raíz del repo:

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

Antes de abrir un PR: `pnpm lint`, `pnpm typecheck`, `pnpm test` y `pnpm build`. Todos los comandos están en [AGENTS.md](AGENTS.md#comandos).
