---
name: migracion-db
description: 'Reglas y pasos del equipo para cambiar la base de datos de Punto Penal (Supabase/Postgres): tablas, columnas, índices, funciones, políticas RLS, seeds y tipos generados. Usar antes de tocar cualquier archivo de supabase/, escribir SQL, crear o modificar una tabla o columna, cambiar permisos, cargar datos semilla o regenerar tipos. Complementa a las skills oficiales supabase y supabase-postgres-best-practices con las convenciones y la revisión propias del equipo.'
---

# Cambios en la base

> Convenciones previstas antes de que exista `supabase/` (Fase 0). Cuando Pela cree el esquema v0, esta skill se actualiza con los nombres y comandos reales.

La base es lo más caro de arreglar: un error de esquema o de permisos llega a producción y a los datos de todos. Por eso todo cambio pasa por código revisado, y Pela (dueño de la base) aprueba cada PR que la toca.

## Reglas que no se negocian

- **Nunca cambiar la base remota desde el dashboard de Supabase.** Rompe la historia de migraciones y el `db push` del CI empieza a fallar.
- **Nunca editar una migración ya aplicada** (mergeada a `main`). Se corrige con otra migración.
- **Nunca `supabase db push` a producción desde una máquina.** Lo hace el CI, y está bloqueado en `.claude/settings.json`.
- **RLS activado en toda tabla** del esquema `public`, con políticas explícitas.

## Flujo (esquema declarativo, ADR 0007, en estado Propuesta)

1. **Leé** `docs/arquitectura/modelo-de-datos.md` y cargá las skills `supabase` y `supabase-postgres-best-practices`: tienen las reglas de Postgres y los avisos de seguridad que esta skill no repite.
2. **Editá el estado deseado** en `supabase/schemas/*.sql` (el archivo del área: fútbol, juegos, usuarios).
3. **Generá la migración** con el CLI. Revisá `npx supabase db diff --help` para la forma exacta en tu versión; el patrón es generar un archivo con nombre descriptivo en `supabase/migrations/`.
4. **Leé la migración generada línea por línea.** Renombres y movimientos de datos suelen necesitar ajuste a mano: el diff puede interpretar un renombre como borrar y crear, y perder datos.
5. **Probá desde cero:** `npx supabase db reset` (aplica migraciones y `seed.sql`).
6. **Corré los advisors** del CLI o del MCP (`supabase db advisors`, según la versión) y resolvé lo que marquen.
7. **Regenerá los tipos:** `npx supabase gen types typescript --local > packages/db/src/types.ts`.
8. **Actualizá** `docs/arquitectura/modelo-de-datos.md` en el mismo PR.
9. **PR** con revisión de Pela.

Si el grupo rechaza el ADR 0007, se usa el flujo imperativo que describe la skill `supabase` y esta sección se actualiza.

## Convenciones

- Tablas en inglés, plural, `snake_case`; términos según `docs/dominio/glosario.md`.
- `created_at` y `updated_at` en todas las tablas.
- Todo dato de fútbol con columna `source`.
- Índice en cada clave foránea y en los filtros que usan las pantallas.
- Tipo de clave primaria: lo fija el esquema v0; seguí lo que ya exista.

## Permisos por tipo de dato

| Datos | Lectura | Escritura |
| --- | --- | --- |
| Fútbol (clubes, partidos, tablas, ediciones) | Pública (`anon` y `authenticated`) | Solo rol de servicio (ingesta y carga histórica) |
| Del usuario (`profiles`, `game_results`, `simulations`) | El dueño (y lo que publique) | Solo el dueño: `using` y `with check` con `(select auth.uid()) = user_id` |
| `daily_puzzles` | La pregunta, nunca la respuesta | Solo el cron |

Ojo: los usuarios anónimos tienen el rol `authenticated`. `TO authenticated` sin condición de dueño deja ver filas ajenas.

## Datos semilla

`supabase/seed.sql` tiene datos de prueba chicos y realistas (un par de competiciones, una edición, algunos clubes y partidos) para que cualquiera levante la base local y vea pantallas con contenido. Nada de datos personales reales.
