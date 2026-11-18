# 0005 · En vivo por consultas a la CDN, no conexiones abiertas

- **Estado:** Propuesta
- **Fecha:** 2026-11-17
- **Propone:** Teby (dueño del área: Rama)

## Decisión

La página de partidos en vivo consulta `/api/en-vivo` cada 30 segundos, solo con la pestaña visible. La respuesta se cachea en la CDN unos 15 segundos, así que todos los usuarios reciben la misma copia. Supabase Realtime queda para casos chicos (por ejemplo, predicciones), usando Broadcast.

## Contexto

- Supabase Realtime permite [200 conexiones simultáneas en Free y 500 en Pro](https://supabase.com/docs/guides/realtime/limits); pasarse cuesta USD 10 cada 1.000 conexiones pico.
- Un superclásico puede juntar miles de personas a la vez.
- Un resultado con 30 segundos de demora es aceptable para un sitio que no es de apuestas.

## Consecuencias

- La base recibe una consulta cada ~15 segundos por región, no una por usuario: mil o un millón de visitas le cuestan lo mismo.
- El costo pasa a ser pedidos a la CDN; se controla consultando cada 60 s cuando no pasa nada.
- No hay actualización instantánea: hasta ~30 s de demora.

## Alternativas consideradas

- **Supabase Realtime (Postgres Changes) para todos:** límites de conexiones bajos y costo creciente con la audiencia.
- **WebSockets propios:** un servidor más para mantener; contradice el [ADR 0001](0001-monolito-modular.md).
