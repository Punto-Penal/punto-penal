# Decisiones (ADR)

Cada decisión importante del proyecto queda escrita en una página: contexto, decisión, consecuencias y alternativas. Sirve para no discutir lo mismo dos veces y para que quien llegue después entienda el porqué.

## Registro

| N.º | Decisión | Estado | Fecha |
| --- | --- | --- | --- |
| [0001](0001-monolito-modular.md) | Monolito modular, sin backend aparte | Propuesta | 2026-11-17 |
| [0002](0002-nextjs-y-supabase.md) | Next.js + Supabase en TypeScript | Propuesta | 2026-11-17 |
| [0003](0003-api-football-detras-de-adaptador.md) | API-Football detrás de un adaptador propio | Propuesta | 2026-11-17 |
| [0004](0004-simulador-en-el-navegador.md) | El simulador corre en el navegador, con semilla | Propuesta | 2026-11-17 |
| [0005](0005-en-vivo-por-consulta-cacheada.md) | En vivo por consultas a la CDN, no conexiones abiertas | Propuesta | 2026-11-17 |
| [0006](0006-idioma-del-codigo.md) | Código en inglés; interfaz, URLs y docs en español | Propuesta | 2026-11-17 |
| [0007](0007-esquema-declarativo-supabase.md) | Esquema declarativo de Supabase | Propuesta | 2026-11-17 |
| [0008](0008-hosting.md) | Vercel ahora; revisar al monetizar | Propuesta | 2026-11-17 |

## Estados

- **Propuesta:** escrita, falta que el grupo la apruebe.
- **Aceptada:** aprobada; es la regla vigente.
- **Reemplazada por NNNN:** dejó de valer; se enlaza la que la reemplaza.
- **Rechazada:** se discutió y no se adoptó; queda como registro.

## Cómo escribir una

1. Copiá [plantilla.md](plantilla.md) como `NNNN-titulo-corto.md`, con el número siguiente.
2. Completala en una página como mucho. Primero la decisión, después el porqué.
3. Sumala a la tabla de arriba y abrí un PR. Se aprueba con el OK de los 4, en el PR o en la reunión.
4. Un ADR aceptado no se edita: si la decisión cambia, se escribe uno nuevo que lo reemplaza.
