# 0004 · El simulador corre en el navegador, con semilla

- **Estado:** Propuesta
- **Fecha:** 2026-11-17
- **Propone:** Teby

## Decisión

El simulador es un paquete TypeScript puro (`packages/simulator`, que usa `packages/core`) y corre en un Web Worker del navegador. Cada simulación usa una semilla: misma semilla + misma configuración + misma versión del motor = mismo resultado. Una simulación guardada o compartida es solo su configuración, su semilla y la versión del motor.

## Contexto

- El ejemplo de la propuesta (4 divisiones de 20 equipos, 30 temporadas) son 45.600 partidos: menos de un segundo de cálculo.
- Correrlo en servidor costaría por cada usuario que simula; en el navegador cuesta cero.
- Las simulaciones compartidas por enlace son una función de la Fase 2.

## Consecuencias

- Costo de servidor cero para el simulador, sin importar cuánta gente lo use.
- Guardar una simulación ocupa unos pocos KB en `simulations`.
- **Cambiar el motor cambia los resultados** de simulaciones viejas: por eso se guarda la versión del motor y hay que poder correr versiones anteriores o avisar al usuario.
- El motor de formatos se comparte con las tablas reales: una sola implementación con tests.

## Alternativas consideradas

- **Simular en el servidor:** costo por uso y más carga sin beneficio para el usuario.
- **Guardar los resultados completos:** ocupa mucho más y no aporta, si el motor es determinístico.
