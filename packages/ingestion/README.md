# @punto-penal/ingestion

Trae datos de proveedores externos y los traduce a nuestro modelo. **Dueño: Rama.** Decisión en [ADR 0003](../../docs/decisiones/0003-api-football-detras-de-adaptador.md).

> Estado: vacío. Se crea en la Fase 0, semana 2.

## Qué va acá

- Un adaptador por proveedor (`api-football/`, más adelante otros), con la misma interfaz: traer → normalizar → guardar.
- El mapeo de ids externos a los nuestros (`external_refs`).
- El importador CSV de datos históricos.
- `fixtures/`: respuestas reales grabadas del proveedor, para testear sin gastar requests.

Las Edge Functions de `supabase/functions/` (ingest-live, ingest-daily) son finas: llaman a este paquete.

## Reglas

- La clave de API-Football solo existe en las Edge Functions. Nunca en el navegador ni en variables `NEXT_PUBLIC_`.
- Guardados idempotentes: correr dos veces la misma sincronización no duplica nada.
- Todo dato guarda su `source`.
- Respetar el [presupuesto de requests](../../docs/datos/fuentes.md#presupuesto-de-requests-plan-pro-7500día).
- Nada de scraping.
- Guía paso a paso en la skill `proveedor-datos`.
