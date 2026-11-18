# 0007 · Esquema declarativo de Supabase

- **Estado:** Propuesta
- **Fecha:** 2026-11-17
- **Propone:** Teby (decide con el grupo: Pela, dueño de la base)

## Decisión

El esquema de la base se escribe en archivos SQL que describen el estado deseado, en `supabase/schemas/` (por ejemplo `football.sql`, `games.sql`, `users.sql`). Las migraciones se generan a partir de esos archivos con el CLI de Supabase y se revisan antes de commitear. Nadie edita una migración ya aplicada ni cambia la base remota desde el dashboard.

## Contexto

- Supabase soporta [esquemas declarativos](https://supabase.com/docs/guides/local-development/declarative-database-schemas): se edita cómo tiene que quedar la tabla y el CLI calcula la migración.
- Con migraciones a mano, para saber cómo es hoy una tabla hay que leer todas las migraciones en orden.
- Como el repo es nuestro canal de comunicación, que el esquema actual se lea en un solo lugar es documentación gratis.

## Consecuencias

- En un PR, el cambio de una tabla se ve como un diff legible del archivo de esquema.
- Hay que revisar siempre la migración generada: algunas operaciones (renombrar columnas, mover datos) necesitan ajustes a mano.
- El flujo paso a paso está en la skill `migracion-db`.

## Alternativas consideradas

- **Migraciones imperativas escritas a mano:** el estado actual queda disperso en muchos archivos; más difícil de revisar para 4 personas.
