# 0003 · API-Football detrás de un adaptador propio

- **Estado:** Propuesta
- **Fecha:** 2026-11-17
- **Propone:** Teby (dueño del área: Rama)

## Decisión

API-Football es el proveedor principal de la temporada actual. Todo dato externo entra a nuestra base a través de un adaptador en `packages/ingestion`, que lo traduce a nuestro modelo y guarda los ids del proveedor en `external_refs`. La historia se carga a mano con fuente citada. No se scrapea ningún sitio.

## Contexto

- Ninguna fuente cubre todo: API-Football cubre de Liga Profesional a Federal A (con menos detalle en el ascenso) y ninguna API tiene la historia profunda.
- Los precios y la cobertura pueden cambiar; no queremos que un cambio de proveedor obligue a tocar pantallas.
- Comparación completa en [fuentes.md](../datos/fuentes.md).

## Consecuencias

- Las features leen siempre de nuestra base, nunca de la API.
- Cambiar o sumar proveedor es escribir otro adaptador.
- La clave de la API vive solo en las Edge Functions.
- El costo de datos no crece con los usuarios: solo la ingesta llama a la API.
- Hay que relevar la cobertura real antes de prometer datos ([cobertura.md](../datos/cobertura.md)).

## Alternativas consideradas

- **Llamar a la API desde las pantallas:** cada visita gasta cuota, la clave queda expuesta y quedamos atados al formato del proveedor.
- **Sportmonks como principal:** precios a medida y menos transparentes; queda como plan B.
- **Scraping de Promiedos o Transfermarkt:** viola sus términos y se rompe con cada cambio de HTML.
