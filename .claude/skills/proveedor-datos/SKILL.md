---
name: proveedor-datos
description: 'Cómo integrar o modificar fuentes de datos de fútbol en Punto Penal: adaptadores de API-Football u otros proveedores en packages/ingestion, Edge Functions de ingesta, mapeo de ids externos, presupuesto de requests, pruebas sin gastar cuota e importación de datos históricos por CSV. Usar cuando se toque la ingesta, se sume una liga o competición, se llame a una API de fútbol, se importe o corrija un dato histórico, o se investigue un dato incorrecto que vino de afuera.'
---

# Proveedores de datos e ingesta

Los datos son el mayor riesgo del proyecto: cuestan plata por request, tienen huecos (sobre todo en el ascenso) y pueden cambiar de formato. La arquitectura aísla todo eso detrás de un adaptador (ADR 0003): las pantallas nunca hablan con un proveedor, solo leen nuestra base. Rama es el dueño del área.

## Antes de empezar

- `docs/datos/fuentes.md`: proveedores, licencias, estrategia y presupuesto de requests.
- `docs/datos/cobertura.md`: qué datos hay realmente por liga y temporada.
- `packages/ingestion/README.md`.

## Forma de un adaptador

Cada proveedor tiene un adaptador en `packages/ingestion/<proveedor>/` con tres pasos separados, para poder testear cada uno:

1. **Traer:** la llamada al proveedor. Única parte que usa red y clave.
2. **Normalizar:** función pura que convierte la respuesta cruda en nuestros tipos (`packages/core`). Acá se resuelven los ids externos.
3. **Guardar:** upsert idempotente en la base por `external_refs` (`entity_type`, `entity_id`, `provider`, `external_id`). Correr dos veces la misma sincronización no duplica nada.

Las Edge Functions de `supabase/functions/` son finas: las programa Supabase Cron y llaman al adaptador.

## Reglas

- **La clave del proveedor vive solo en las Edge Functions.** Nunca en el navegador, en `NEXT_PUBLIC_*` ni en el repo.
- **Respetá el presupuesto de requests.** Antes de agregar una llamada, estimá cuántas por día suma y comparalo con la tabla de `docs/datos/fuentes.md`. Preferí endpoints que traen muchos datos por llamada (`fixtures?live=all`) y consultá en vivo solo cuando hay partidos.
- **Todo dato guarda su `source`.**
- **Nunca scraping** (Promiedos, Transfermarkt): viola sus términos y se rompe con cada cambio.
- **Si un dato no tiene fuente, no entra.** Mejor un hueco que un dato inventado.

## Testear sin gastar cuota

- Grabá respuestas reales del proveedor una vez en `packages/ingestion/fixtures/<proveedor>/` (sin la clave ni encabezados sensibles) y testeá la normalización contra esos archivos.
- En desarrollo, el plan Free (100 requests/día) alcanza si no se repiten llamadas: cacheá respuestas en la base local.

## Sumar una liga o competición

1. Verificá su cobertura y anotala en `docs/datos/cobertura.md`.
2. Creá la competición y su edición en la base (o en el seed) y los `external_refs` del proveedor.
3. Configurá el formato de sus fases (skill `dominio-futbol`).
4. Agregala a la sincronización con una frecuencia acorde (en vivo solo si se muestra en vivo).
5. Si cambia el presupuesto de requests, actualizalo en `docs/datos/fuentes.md`.

## Datos históricos por CSV

- Un CSV por tipo de dato (campeones, tablas finales, ascensos y descensos), con columnas en inglés según el glosario y una columna `source` obligatoria (URL o referencia).
- El importador valida antes de escribir: clubes que no existen, temporadas inconsistentes, puntos que no cierran. Si algo no valida, no se importa nada de ese archivo y se informa qué fila falló.
- Wikidata (CC0) es la base más segura; Wikipedia se atribuye (CC BY-SA); RSSSF se usa para verificar y, para copiar compilaciones enteras, se pide permiso a sus autores.

## Si un dato está mal

1. Buscá su `source` en la base.
2. Si el error viene del proveedor: corregilo con una fuente verificable y dejá registro (issue con la plantilla Bug).
3. Si el error es nuestro (normalización): primero un test que lo reproduzca, después el arreglo.
