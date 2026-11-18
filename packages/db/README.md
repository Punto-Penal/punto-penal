# @punto-penal/db

Tipos generados de la base de Supabase y consultas que usan varias secciones. **Dueño: Pela.**

> Estado: vacío. Se crea en la Fase 0, semana 2.

## Qué va acá

- `src/types.ts`: tipos generados con `npx supabase gen types typescript --local`. **No se edita a mano**: se regenera en cada cambio de esquema.
- Clientes de Supabase para servidor y navegador, configurados una sola vez.
- Consultas compartidas por más de una feature (por ejemplo, buscar un club por slug).

## Qué no va

- El esquema: vive en `supabase/schemas/` ([ADR 0007](../../docs/decisiones/0007-esquema-declarativo-supabase.md)).
- Consultas de una sola pantalla: van en `features/<módulo>/queries` de la app.

## Reglas

- La clave de servicio (`service_role`) nunca se usa desde código que llega al navegador.
- Cambios en el esquema siguen la skill `migracion-db` y actualizan [modelo-de-datos.md](../../docs/arquitectura/modelo-de-datos.md).
