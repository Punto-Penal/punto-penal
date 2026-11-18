# Feedback sobre la propuesta

La idea es buena y la decisión más importante ya está tomada: lanzar algo acotado y crecer por etapas. Lo que cambiaría es dónde ponemos el esfuerzo y qué definimos antes de escribir pantallas.

## Lo que está muy bien

- **El diferencial es real:** historia del ascenso + simulador + juegos, todo sobre fútbol argentino. Nadie junta las tres cosas.
- **Jugar sin cuenta baja la fricción.** La cuenta aparece cuando el usuario ya tiene una racha que no quiere perder.
- **El archivo histórico se plantea gradual.** Es lento de construir y así hay que encararlo.

## Lo que cambiaría

1. **Invertir dónde va el esfuerzo.** El 50% "Fútbol" (resultados en vivo) es lo que más se parece a lo que ya existe y lo único que cuesta plata por mes. Promiedos y SofaScore ya lo hacen muy bien. El MVP necesita resultados y tablas, pero la gente va a volver por lo que no hay en otro lado: archivo, simulador y juegos.
2. **Achicar más la primera versión.** En vivo solo Primera y Nacional, 3 o 4 ligas de afuera, un solo juego, simulador de la estructura real y campeones de Primera como archivo. B Metro, C y Federal A entran en Fase 2, cuando sepamos qué datos hay.
3. **Diseñar el modelo de torneos antes que las pantallas.** El fútbol argentino tiene formatos raros: zonas, Apertura y Clausura, tabla anual, promedios para el descenso, Metropolitano y Nacional, Copa de la Liga. Si el modelo no los soporta desde el día uno, se rehace todo. Ver [../arquitectura/modelo-de-datos.md](../arquitectura/modelo-de-datos.md).
4. **Un solo motor de formatos para lo real y lo simulado.** La misma definición de "torneo de 2 zonas de 15 con playoff" sirve para calcular la tabla real y para simular 30 temporadas. Ese motor (`packages/core`) es el corazón técnico del proyecto.
5. **Entender bien "escalabilidad".** Para 4 personas no significa microservicios ni Kubernetes. Significa que el código escale con el equipo (módulos con dueño y fronteras claras) y que el tráfico lo absorban la CDN y el navegador, no un servidor propio. Así un domingo de superclásico no cuesta más que un martes. Ver [../arquitectura/vision-general.md](../arquitectura/vision-general.md).

## Riesgos reales

| Riesgo | Qué pasa si ocurre | Cómo lo bajamos |
| --- | --- | --- |
| Datos del ascenso incompletos | B Metro o C sin formaciones, goleadores ni eventos | Relevar la cobertura en la semana 1 ([../datos/cobertura.md](../datos/cobertura.md)) y mostrar solo lo que existe |
| Carga histórica eterna | El archivo queda vacío meses | Empezar por campeones de Primera, importador CSV, cada dato con su fuente |
| Derechos de datos e imágenes | Reclamos por copiar compilaciones (RSSSF) o usar escudos y fotos | Wikidata (CC0) como base, citar fuentes, pedir permiso antes de copiar en bloque |
| Construir sobre scraping | Las páginas cambian el HTML y se cae todo; además viola sus términos | No scrapear: API con contrato + carga propia |
| Alcance gigante | Nunca se lanza | Corte de MVP y una puerta de salida por fase ([../plan/hoja-de-ruta.md](../plan/hoja-de-ruta.md)) |
| Carga desigual en el grupo | Uno hace todo, los demás se desenganchan | Dueños claros, tareas chicas, demo cada 2 semanas |
| Anuncios en un plan gratuito de hosting | Vercel Hobby es solo para uso no comercial | Pasar a plan pago antes de monetizar ([../costos.md](../costos.md)) |
