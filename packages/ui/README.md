# @punto-penal/ui

Identidad visual y componentes compartidos: colores, tipografía, y piezas genéricas (botones, tarjetas, tablas, pestañas). **Dueño: Emi.**

> Estado: base lista con Tailwind CSS 4 y shadcn/ui (estilo `base-nova`, sobre Base UI). La paleta, la tipografía y el logo son provisorios. Cómo cambiarlos: [docs/diseno/identidad.md](../../docs/diseno/identidad.md).

## Qué hay

| Ruta | Qué es | Se importa como |
| --- | --- | --- |
| `src/styles/globals.css` | Tokens de color, radios y modo oscuro | `@punto-penal/ui/globals.css` (en el layout de la app) |
| `src/components/` | Componentes de shadcn/ui | `@punto-penal/ui/components/button` |
| `src/brand/logo.tsx` | Logo (provisorio) | `@punto-penal/ui/brand/logo` |
| `src/lib/utils.ts` | `cn()` para combinar clases | `@punto-penal/ui/lib/utils` |

Componentes nuevos: `pnpm dlx shadcn@latest add <componente>` desde `apps/web`; el CLI los instala acá.

## Qué va acá

- Tokens de diseño: paleta, tipografía, espaciados, modo claro y oscuro.
- Componentes de shadcn/ui adaptados a la identidad.
- Componentes genéricos reutilizables por todas las secciones.

## Qué no va

- Nada que conozca el dominio: un componente "TablaDePosiciones" va en la feature `competitions`; acá va la tabla genérica que usa.

## Reglas

- Accesible: contraste suficiente, navegable con teclado, textos alternativos.
- Sin colores sueltos: todo usa los tokens (`bg-primary`, `text-muted-foreground`). Un color nuevo es un token nuevo en `globals.css`.
- Sin imports de otros paquetes del proyecto, de Next.js ni de Supabase: ESLint lo bloquea.
- Escudos y otras imágenes se sirven como archivos ya optimizados, no con la optimización de imágenes de Vercel (ver [costos.md](../../docs/costos.md#trampas-que-multiplican-la-factura)).
- Para revisar una pantalla, usar la skill `web-design-guidelines`.
