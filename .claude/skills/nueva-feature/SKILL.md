---
name: nueva-feature
description: 'Guía para crear una sección, pantalla, ruta o funcionalidad nueva en apps/web de Punto Penal respetando la estructura por módulos, el caché y las fronteras entre features. Usar cuando se agregue una página o ruta, un componente de sección, una consulta de datos para una pantalla o una Server Action, o cuando alguien pregunte dónde va un archivo nuevo o cómo empezar una parte de la app.'
---

# Nueva feature

> Convenciones previstas antes de que exista el código (Fase 0). Cuando esté el scaffold de `apps/web`, esta skill se actualiza con ejemplos reales.

La app está partida en módulos con dueño para que 4 personas trabajen en paralelo sin pisarse. Las reglas de abajo sostienen esa separación; romperlas "una sola vez" es como se termina con un monolito enredado.

## 1. Ubicar el módulo y su dueño

Con `docs/arquitectura/estructura-del-repo.md` y `docs/plan/equipo.md`, decidí a qué feature pertenece (`matches`, `competitions`, `clubs`, `history`, `games`, `simulator`, `account`). Si no es tu módulo, avisale al dueño antes de empezar: es quien revisa el PR.

Si no encaja en ninguna, no crees una carpeta en silencio: proponela en el PR y actualizá la estructura en los docs.

## 2. Estructura

```text
apps/web/src/
├─ app/(site)/<ruta-en-español>/page.tsx   ← fina: arma la página
└─ features/<módulo>/
   ├─ components/   UI de esta sección
   ├─ queries/      lecturas (servidor, cacheadas)
   ├─ actions/      Server Actions (escrituras)
   ├─ lib/          utilidades de la sección
   └─ index.ts      lo que exporta para app/
```

- URLs en español (`/torneos/[slug]`), carpetas y código en inglés (ADR 0006).
- La página de `app/` importa desde `features/<módulo>`, nunca desde otra feature.

## 3. Datos

- **Leer en el servidor y cachear.** Las páginas públicas (clubes, torneos, historia) se renderizan en servidor con `"use cache"` y un tiempo de vida acorde: la historia casi nunca cambia, una tabla cambia después de cada fecha. Verificá en la documentación de Next.js la API de caché de la versión instalada (`cacheLife`, `cacheTag`, revalidación) antes de usarla.
- **El en vivo no se lee de la base desde el navegador:** se consulta `/api/en-vivo` (cacheado en la CDN) cada 30 s con TanStack Query (ADR 0005).
- **Las reglas de fútbol no se calculan en la pantalla:** pedíselas a `packages/core` (skill `dominio-futbol`).
- **Una consulta que usan varias features** va a `packages/db`; no se copia.
- **Escrituras del usuario** (rachas, simulaciones) por Server Actions o el cliente de Supabase con RLS; nunca con la clave de servicio en código que llega al navegador.
- **Sesiones anónimas solo cuando hacen falta:** no crear una por visita, porque cuenta como usuario activo y se paga a escala (ver `docs/costos.md`).

## 4. UI

- Componentes genéricos de `packages/ui`; si falta uno genérico, se agrega ahí (lo revisa Emi).
- Textos en español y accesibles (contraste, teclado, `alt`).
- Escudos e imágenes como archivos ya optimizados, no con la optimización de imágenes de Vercel.
- Para rendimiento, la skill `vercel-react-best-practices`; para revisar la pantalla, `web-design-guidelines`.

## 5. Antes del PR

- Tests de la lógica que agregaste (en `core`, `simulator` o el `lib/` de la feature).
- Verificá que no importás de otra feature: buscá `features/` en los imports de tu módulo.
- Documentación: skill `documentar`.
- `/pr-listo`.
