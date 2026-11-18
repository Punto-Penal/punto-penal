# 0001 · Monolito modular, sin backend aparte

- **Estado:** Propuesta
- **Fecha:** 2026-11-17
- **Propone:** Teby

## Decisión

Una sola app web (Next.js) más Supabase, organizada en módulos con dueño y paquetes compartidos. No hay un servidor de backend separado (Express, NestJS) ni microservicios.

## Contexto

Somos 4 personas a tiempo parcial y queremos escalabilidad. Para un equipo así, escalar significa que el código crezca sin pisarnos y que el tráfico lo absorban la CDN y el navegador, no administrar muchos servicios.

## Consecuencias

- Un solo lenguaje y un solo deploy de la app. Menos cosas que se rompen.
- El backend es Supabase (datos, cuentas, permisos, cron) más la capa servidor de Next.js (Route Handlers, Server Actions) más las Edge Functions de ingesta.
- Las fronteras se cuidan con reglas: una feature no importa de otra; la lógica de fútbol vive en `packages/`. Ver [estructura-del-repo.md](../arquitectura/estructura-del-repo.md).
- Si algo necesita su propio servicio (por ejemplo, simular en servidor), se extrae sin reescribir, porque la lógica ya está en paquetes.

## Alternativas consideradas

- **Front y back separados (Next.js + API en NestJS/Express):** dos deploys, contratos de API duplicados y más trabajo de infraestructura sin un beneficio claro hoy.
- **Microservicios:** sobredimensionado para 4 personas; multiplica la operación.
