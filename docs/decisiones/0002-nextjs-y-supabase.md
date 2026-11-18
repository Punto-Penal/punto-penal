# 0002 · Next.js + Supabase en TypeScript

- **Estado:** Propuesta
- **Fecha:** 2026-11-17
- **Propone:** Teby

## Decisión

La app web se hace con Next.js 16 (App Router) en TypeScript. Base de datos, cuentas, permisos y jobs programados con Supabase (Postgres, Auth, RLS, Cron, Edge Functions). Monorepo con pnpm + Turborepo.

## Contexto

- Miles de páginas públicas (clubes, torneos, temporadas) que tienen que posicionar en buscadores y cargar rápido.
- Datos muy relacionales: competiciones, ediciones, fases, partidos, tablas históricas.
- Jugar sin registrarse, con la opción de crear cuenta después sin perder la racha.
- Ingesta cada 30 segundos durante los partidos.

## Consecuencias

- Páginas renderizadas en servidor y cacheadas (`"use cache"`): buen SEO y bajo costo por visita.
- Postgres permite tablas históricas y rachas con SQL, y RLS da permisos por fila.
- Supabase Auth soporta sesiones anónimas que se convierten en cuenta conservando el mismo id.
- Supabase Cron acepta intervalos en segundos para la ingesta.
- Un solo lenguaje para front, back, simulador e ingesta.
- Detalle y alternativas por capa en [stack.md](../arquitectura/stack.md).

## Alternativas consideradas

- **SPA con Vite + API propia:** SEO pobre para páginas públicas y más infraestructura.
- **Firebase o MongoDB:** las consultas históricas y relacionales se vuelven dolorosas.
- **Backend en Python:** dos lenguajes y tipos duplicados.
