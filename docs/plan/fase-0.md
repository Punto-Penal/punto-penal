# Fase 0: base

Dos semanas, los 4 en paralelo. **Puerta de salida:** una tabla real de Primera se ve en producción, leída desde nuestra base. Tildá cada tarea en el mismo PR que la cierra.

## Semana 1

- [x] Teby: organización `Punto-Penal` y repositorio en GitHub
- [x] Teby: estructura inicial, documentación y skills del repo (primera pasada)
- [ ] Teby: monorepo pnpm + Turborepo con `apps/web` (create-next-app) y `packages/core`; fijar versión de Node y pnpm
- [ ] Teby: CI en GitHub Actions (lint, typecheck, tests, build) en cada PR; `main` protegida con 1 aprobación
- [ ] Teby: Vercel conectado: `main` a producción y una URL de prueba por PR
- [ ] Pela: dos proyectos Supabase (dev y prod), `supabase init`, base local en Docker y primera migración
- [ ] Pela: esquema v0 (`clubs`, `club_names`, `competitions`, `editions`, `stages`, `matches`, `external_refs`) revisado por los 4. Ver [modelo-de-datos.md](../arquitectura/modelo-de-datos.md)
- [ ] Rama: cuenta free de API-Football y relevamiento de `coverage` de cada liga en [cobertura.md](../datos/cobertura.md)
- [ ] Emi: identidad base (paleta, tipografía, logo provisorio) con Tailwind y shadcn/ui en `packages/ui`
- [ ] Los 4: revisar y completar el [glosario](../dominio/glosario.md)
- [ ] Los 4: primera reunión para cerrar [pendientes.md](../pendientes.md) y confirmar los [ADR](../decisiones/README.md)

## Semana 2

- [ ] Teby: cálculo de tabla con desempates en `packages/core`, con tests
- [ ] Teby: completar comandos reales en `AGENTS.md` y `README.md`; actualizar las skills `nueva-feature` y `migracion-db` con el código real
- [ ] Rama: adaptador de API-Football en `packages/ingestion` y Edge Function que sincroniza fixtures y tabla de Primera
- [ ] Pela: `seed.sql` con datos de prueba y tipos generados en `packages/db`
- [ ] Emi: layout general (header, navegación, footer) y home con las 4 secciones
- [ ] Los 4: demo de cierre con la tabla real en producción

## Comandos de arranque

```bash
# Teby: app web dentro del monorepo
npx create-next-app@latest apps/web --ts --tailwind --eslint --app --src-dir

# Pela: Supabase
npx supabase init
npx supabase start          # base local, requiere Docker
npx supabase db reset       # recrea la base local con migraciones + seed
npx supabase gen types typescript --local > packages/db/src/types.ts
```

Antes de correr comandos del CLI de Supabase, revisá `npx supabase --help`: los comandos cambian entre versiones. El flujo de cambios de esquema está en la skill `migracion-db`.
