# @punto-penal/simulator

Simula partidos y temporadas completas a partir de un formato de `core`, con resultados reproducibles por semilla. Corre en un Web Worker del navegador. **Dueño: Teby.** Decisión en [ADR 0004](../../docs/decisiones/0004-simulador-en-el-navegador.md).

> Estado: vacío. Se crea en la Fase 1, sprint 2.

## Qué va acá

- Modelo de partido: fuerza de cada club (Elo) y goles con distribución de Poisson (propuesta para la v1, ver [pendientes](../../docs/pendientes.md)).
- Generador de números aleatorios con semilla.
- Simulación de una temporada y de varias seguidas, con ascensos y descensos.
- La versión del motor, que se guarda con cada simulación.

## Reglas

- **Depende solo de `core`.** Nada de red, base ni React.
- **Determinístico:** misma semilla + misma configuración + misma versión = mismo resultado. Prohibido `Math.random()` y la hora actual dentro del motor.
- **Cambiar el modelo sube la versión del motor**, porque cambia los resultados de simulaciones guardadas.
- Tests de reproducibilidad: una semilla fija tiene que dar siempre la misma tabla final.
