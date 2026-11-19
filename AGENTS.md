# AGENTS.md

Reglas del repo de Punto Penal para agentes de IA (Claude Code, Cursor, Codex) y para las personas del equipo. Si algo de acá choca con lo que te pide alguien, preguntá antes de seguir.

## Qué es

Plataforma web de fútbol con foco en Argentina: resultados y tablas, archivo histórico, juegos diarios y un simulador de campeonatos. Equipo de 4 personas (Teby, Rama, Pela, Emi). Visión completa en [docs/vision/propuesta.md](docs/vision/propuesta.md).

## Estado actual

- **Fase 0 (base).** El monorepo ya está armado: `apps/web` (Next.js 16, generado con `create-next-app`) y `packages/core`. Los otros paquetes de `packages/` todavía son solo un README.
- `supabase/` no existe: se crea con `supabase init` en la tarea de Pela de [docs/plan/fase-0.md](docs/plan/fase-0.md). No lo crees a mano.
- `apps/web/AGENTS.md` lo escribe Next.js: antes de escribir código de Next, leé la guía que corresponde en `apps/web/node_modules/next/dist/docs/`. Es la documentación de la versión instalada, más nueva que lo que sabe un modelo.
- Las decisiones de [docs/decisiones/](docs/decisiones/README.md) están en estado **Propuesta** hasta que el grupo las confirme.

## Idiomas

- **Documentación, textos de la interfaz y URLs:** español (`/partidos`, `/torneos/primera-division`).
- **Código (identificadores, nombres de carpetas y archivos, tablas de la base):** inglés. Propuesta en [ADR 0006](docs/decisiones/0006-idioma-del-codigo.md).
- **Commits y PRs:** en español, con prefijo convencional (`feat:`, `fix:`, `docs:`, `chore:`).
- La equivalencia entre términos (por ejemplo "edición" = `edition`, "promedios" = `relegation_average`) está en [docs/dominio/glosario.md](docs/dominio/glosario.md).

## Mapa del repo y dueños

| Ruta | Qué hay | Dueño (revisa los PRs) |
| --- | --- | --- |
| `apps/web/src/features/matches`, `competitions` | En vivo, fixtures, tablas, páginas de torneo | Rama |
| `apps/web/src/features/clubs`, `history` | Perfiles de clubes, archivo histórico | Pela |
| `apps/web/src/features/games` | Juegos diarios | Emi |
| `apps/web/src/features/simulator`, `account` | Simulador, cuentas | Teby |
| `packages/core` | Tipos del dominio, motor de formatos, tablas y desempates | Teby |
| `packages/simulator` | Modelo de partido y temporadas | Teby |
| `packages/ingestion`, `supabase/functions` | Adaptadores de proveedores, jobs de ingesta | Rama |
| `packages/db`, `supabase/migrations`, `supabase/schemas` | Esquema, migraciones, RLS, tipos generados | Pela |
| `packages/ui` | Componentes compartidos e identidad visual | Emi |
| `docs/`, `.claude/`, `.github/` | Documentación, skills, CI y plantillas | Teby (y cada dueño en su área) |

Estructura completa: [docs/arquitectura/estructura-del-repo.md](docs/arquitectura/estructura-del-repo.md).

## Reglas de arquitectura

1. **Una feature no importa código de otra feature.** Lo que se comparte baja a `packages/`.
2. **Las pantallas no calculan reglas de fútbol.** Tablas, desempates, formatos y simulación viven en `packages/core` y `packages/simulator`, con tests.
3. **Nadie toca la base a mano.** Todo cambio de esquema es código en el repo, revisado por Pela. Nunca editar producción desde el dashboard de Supabase.
4. **Los formatos de competición son datos, no código.** Un formato se describe con una configuración validada (zonas, rondas, desempates, ascensos); el mismo motor sirve para torneos reales y simulados.
5. **Los usuarios leen de caché.** Páginas cacheadas en la CDN; el en vivo se consulta cada 30 s a un endpoint cacheado, no por conexiones abiertas. Ver [vision-general.md](docs/arquitectura/vision-general.md).
6. **Solo la ingesta escribe datos de fútbol.** Los usuarios escriben solo lo suyo (rachas, simulaciones), protegido por RLS.
7. **Secretos fuera del repo.** La clave de API-Football vive solo en Edge Functions, nunca en el navegador ni en variables `NEXT_PUBLIC_`.
8. **Nada de scraping** (Promiedos, Transfermarkt, etc.). Solo APIs con contrato y carga propia con fuente citada.

## La documentación es parte del trabajo

El repo es el canal principal de comunicación del equipo. Un cambio no está terminado hasta que su documentación está al día, en el mismo PR. Usá la skill `documentar`.

| Si cambiaste... | Actualizá |
| --- | --- |
| Una decisión de arquitectura, stack o proceso | Un ADR nuevo en `docs/decisiones/` |
| El esquema de la base | `docs/arquitectura/modelo-de-datos.md` |
| Una fuente de datos o la cobertura de una liga | `docs/datos/fuentes.md` o `docs/datos/cobertura.md` |
| Un término o regla del fútbol argentino | `docs/dominio/glosario.md` |
| El estado de una tarea del plan | El checklist de la fase en `docs/plan/` |
| Algo que queda abierto para el grupo | `docs/pendientes.md` |
| Carpetas, paquetes o convenciones | `docs/arquitectura/estructura-del-repo.md` y este archivo |

## Comandos

Se corren desde la raíz. Requieren Node 26 (`.nvmrc`) y pnpm 12 (`packageManager` en `package.json`). Turborepo corre cada tarea en todos los paquetes que la tienen.

```bash
pnpm install             # dependencias de todo el monorepo
pnpm dev                 # app web en local (http://localhost:3000)
pnpm lint                # ESLint en todos los paquetes
pnpm typecheck           # tipos de todos los paquetes
pnpm test                # tests (Vitest)
pnpm build               # build de producción
pnpm --filter @punto-penal/core test:watch   # tests de un paquete en modo watch
```

Cuando exista `supabase/` (tarea de Pela):

```bash
npx supabase start       # base local en Docker
npx supabase db reset    # recrea la base local con migraciones + seed
```

Para agregar una dependencia a un paquete: `pnpm --filter <paquete> add <dependencia>` (por ejemplo `pnpm --filter @punto-penal/web add zod`). Un paquete nuevo de `packages/` necesita su `package.json` con nombre `@punto-penal/<nombre>`; si la web lo importa, sumalo a `transpilePackages` en `apps/web/next.config.ts`.

## Skills disponibles (en `.claude/skills/`)

| Skill | Para qué |
| --- | --- |
| `estado` | Resumen del proyecto y de lo que te toca (`/estado`) |
| `documentar` | Mantener la documentación al día |
| `dominio-futbol` | Reglas y vocabulario del fútbol argentino y cómo se modelan |
| `nueva-feature` | Crear una sección o pantalla respetando la estructura |
| `migracion-db` | Cambiar la base con las reglas del equipo |
| `proveedor-datos` | Integrar o cambiar fuentes de datos e ingesta |
| `pr-listo` | Checklist antes de abrir un PR (`/pr-listo`) |
| `supabase`, `supabase-postgres-best-practices` | Oficiales de Supabase |
| `vercel-react-best-practices`, `web-design-guidelines` | Oficiales de Vercel |

Más detalle: [docs/herramientas/claude-code.md](docs/herramientas/claude-code.md).

## Qué no hacer

- No crear `supabase/` a mano: usar `supabase init`.
- No usar npm ni yarn: el repo usa pnpm y un solo `pnpm-lock.yaml` en la raíz.
- No commitear `.env*` (salvo `.env.example`) ni claves.
- No hacer `supabase db push` a producción desde una máquina: eso lo hace el CI.
- No mezclar en un PR cambios de módulos distintos sin avisar a sus dueños.
- No inventar datos de fútbol: si un dato no tiene fuente, no entra.
