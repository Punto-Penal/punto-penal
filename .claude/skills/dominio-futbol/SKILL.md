---
name: dominio-futbol
description: 'Conocimiento del dominio de Punto Penal: cómo se organizan las competiciones del fútbol argentino (ediciones, fases, zonas, torneos cortos, tabla anual, promedios, ascensos, descensos, reducidos, desempates) y cómo se modelan en el código y en la base. Usar siempre que se trabaje con torneos, temporadas, tablas de posiciones, fixtures, formatos de competición, el simulador, el archivo histórico, datos de clubes o jugadores, o al nombrar una entidad del dominio, aunque el pedido no mencione "dominio".'
---

# Dominio del fútbol argentino

Punto Penal se diferencia por modelar bien formatos que otros sitios aplanan: zonas, Apertura y Clausura, tabla anual, promedios, Metropolitano y Nacional. Un error de modelo se arrastra a la vez a las tablas reales, al archivo y al simulador; por eso conviene frenar y pensar antes de escribir.

## Antes de empezar

Leé lo que aplique:
- `docs/dominio/glosario.md`: términos y su nombre en el código.
- `docs/arquitectura/modelo-de-datos.md`: tablas y el formato de una fase.
- `packages/core/README.md`: qué vive en el motor de reglas.

## Principios

1. **Los formatos son datos.** La diferencia entre la Primera 2026 y la B Metro está en la configuración de sus fases, no en un `if`. Si te encontrás escribiendo `if (competition.slug === "primera-division")`, al formato le falta un campo.
2. **Las reglas viven en `packages/core`.** Tablas, desempates, promedios, ascensos: una implementación con tests, usada por las pantallas, el archivo, la ingesta y el simulador. Una pantalla que calcula puntos es una segunda implementación que tarde o temprano va a diferir.
3. **Lo real y lo simulado comparten motor.** Si algo sirve para calcular la tabla de 2026, tiene que servir para una liga inventada de 4 divisiones.
4. **Las reglas cambian por temporada.** Cantidad de descensos, desempates, si hay tabla anual: todo depende de la edición. Se configura por edición o fase y se verifica con la fuente de esa temporada; no se asume la regla de hoy para 1995.
5. **Los clubes tienen historia.** Un club conserva su `clubs.id` aunque cambie de nombre (`club_names` con vigencia). En el archivo se muestra el nombre de la época; en el perfil, el actual.

## Trampas comunes

- **Dos campeones por temporada:** con torneos cortos, una temporada tiene campeón del Apertura y del Clausura. "Campeón" es de la edición, no del año.
- **Temporadas de calendario o partidas:** Argentina alternó entre año calendario y temporadas como 2014/15. No asumas que una edición es un año.
- **Promedios:** usan las temporadas anteriores en Primera (en general 3); un recién ascendido tiene menos temporadas en la cuenta.
- **Partidos suspendidos o por escritorio:** cuentan en la tabla aunque no se hayan terminado o jugado. El `status` del partido importa para el cálculo.
- **Desempates:** el orden de criterios (diferencia de gol, goles a favor, resultado entre ambos, partido desempate) cambia según competición y temporada. Va en `tiebreakers` del formato.
- **Interzonales:** hay formatos donde se juega contra rivales de otra zona pero se suma en la propia.
- **Cancha neutral:** existe, sobre todo en finales y copas.

## Si agregás un formato o una regla

1. Describila en la configuración del formato (esquema Zod de `core`). Si el esquema no alcanza, extendelo de forma general, no para un solo caso.
2. Escribí un test con una tabla real conocida como referencia: temporada, fuente y tabla final esperada.
3. Si es un término nuevo o una regla que se presta a confusión, sumalo al glosario.
4. Si cambia el modelo de datos, seguí la skill `migracion-db`.

## Si no sabés una regla

No la inventes. Decí qué falta saber, sugerí una fuente para verificarla (reglamento de la edición, RSSSF, Wikipedia) y dejala como pendiente en `docs/pendientes.md` o como pregunta en el PR.
