# @punto-penal/core

Las reglas del fútbol, en TypeScript puro: tipos del dominio, motor de formatos de competición, cálculo de tablas y desempates. Es el corazón técnico del proyecto. **Dueño: Teby.**

> Estado: creado en la Fase 0. Por ahora tiene una sola regla, `pointsFor` (puntos de un resultado según el sistema de puntos de la fase). Lo próximo es la tabla con desempates (ver [docs/plan/fase-0.md](../../docs/plan/fase-0.md)).

Tests: `pnpm --filter @punto-penal/core test` (o `test:watch`). Los tests van al lado del archivo que prueban (`points.ts` y `points.test.ts`).

## Qué va acá

- Tipos del dominio: competición, edición, fase, partido, tabla ([glosario](../../docs/dominio/glosario.md)).
- Esquemas Zod de los formatos de fase (zonas, rondas, puntos, desempates, quién avanza).
- Cálculo de tablas de posiciones, tabla anual y promedios.
- Resolución de ascensos, descensos y playoffs.
- Generación de fixtures (todos contra todos, ida y vuelta).

## Qué no va

- Nada de Supabase, React, Next.js ni llamadas de red. Si lo necesita, no va acá.
- Nada específico de una pantalla.

## Reglas

- **Sin dependencias del proyecto.** Solo librerías chicas y puras (por ejemplo Zod).
- **Todo con tests.** Los casos de prueba usan tablas históricas reales como referencia.
- **Los formatos son datos.** Nada de `if (competition === "primera")`: la diferencia entre competiciones está en su configuración.

## Quién lo usa

Las tablas de Rama, el archivo de Pela, el simulador (`packages/simulator`) y la ingesta.
