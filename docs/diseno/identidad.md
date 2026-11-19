# Identidad visual

La base técnica está lista; la paleta, la tipografía y el logo todavía son provisorios. Cambiar la identidad es editar un archivo de tokens y un componente de logo: ninguna pantalla tiene colores escritos a mano. Para ver cómo queda, corré `pnpm dev` y abrí http://localhost:3000/diseno (también está en cada URL de prueba de Vercel).

## Dónde vive cada cosa

| Qué | Dónde |
| --- | --- |
| Colores, radios, modo claro y oscuro | `packages/ui/src/styles/globals.css`: `:root` es el modo claro y `.dark`, el oscuro |
| Tipografías | `apps/web/src/app/layout.tsx` (con `next/font`) |
| Logo | `packages/ui/src/brand/logo.tsx`: el componente `<Logo />` |
| Favicon e íconos | `apps/web/src/app/`, con los nombres que usa Next.js: `icon.svg`, `apple-icon.png`, `opengraph-image.png` |
| Componentes de shadcn/ui | `packages/ui/src/components/` |
| Muestrario | `apps/web/src/app/diseno/page.tsx`, en la ruta `/diseno` |

## Tokens de color

Son los nombres de shadcn/ui, más `success` y `warning`. Cada token tiene un `-foreground`, que es el color del texto que va encima. En el código se usan como clases de Tailwind: `bg-primary`, `text-muted-foreground`, `border-border`.

| Token | Para qué se usa |
| --- | --- |
| `background`, `foreground` | Fondo de la página y texto principal |
| `card`, `popover` | Superficies elevadas: tarjetas y menús |
| `primary` | Color de la marca: botón principal, enlaces, lo que se destaca |
| `secondary` | Acciones secundarias |
| `muted` | Fondos suaves; `muted-foreground` es el texto secundario |
| `accent` | Hover y elementos seleccionados |
| `destructive` | Errores y acciones peligrosas. En fútbol: derrota |
| `success` | Confirmaciones. En fútbol: victoria |
| `warning` | Avisos. En fútbol: partido suspendido o demorado |
| `border`, `input`, `ring` | Bordes, campos de formulario y el foco del teclado |
| `chart-1` a `chart-5` | Series de gráficos |
| `sidebar-*` | Barra lateral, si alguna pantalla la usa |
| `--radius` | Redondeo base; los demás tamaños se calculan a partir de él |

**Regla:** en los componentes no se escriben colores sueltos, ni hex ni de la paleta de Tailwind (`bg-blue-600`). Si un diseño necesita un color que no existe, se agrega un token acá. Por ejemplo, las zonas de la tabla (copa, ascenso, descenso) entran como tokens cuando se diseñe la tabla.

## Cómo cargar la paleta

1. Definí el color de la marca y sus variantes para claro y oscuro. Sirve cualquier formato de CSS: hex (`#0b6e4f`) u `oklch(...)`. shadcn/ui usa `oklch` porque mantiene parejo el brillo percibido entre colores.
2. Reemplazá los valores en `:root` y en `.dark`. Lo mínimo es `primary`, `primary-foreground` y `ring`. Lo demás puede quedar neutro.
3. Revisá `/diseno` en claro y en oscuro. El texto sobre cada color tiene que tener contraste de al menos 4,5:1 (WCAG AA).
4. Sacá la palabra PROVISORIO del comentario de cada bloque que quede definitivo.

## Logo

Archivos que hacen falta:

| Archivo | Formato | Para qué |
| --- | --- | --- |
| Logo horizontal (isotipo + nombre) | SVG | Header y lugares anchos |
| Isotipo solo | SVG | Favicon, avatar en redes, espacios chicos |
| `icon.svg` o `icon.png` (512 × 512) | SVG o PNG | Favicon de la pestaña |
| `apple-icon.png` | PNG 180 × 180 | Ícono al guardar el sitio en el celular |
| `opengraph-image.png` | PNG 1200 × 630 | Imagen que aparece al compartir un enlace |

- Si el logo es de un solo color, el SVG va dentro de `logo.tsx` con `fill="currentColor"`. Así toma el color del texto y sirve en claro y oscuro sin dos versiones.
- Si tiene varios colores, conviene un SVG por modo o colores con los tokens (`fill="var(--primary)"`).
- Los íconos van en `apps/web/src/app/` y reemplazan el `favicon.ico` que trae Next.js.

## Tipografía

Hoy es Geist, la que trae `create-next-app`. Para cambiarla, en `layout.tsx` se cambia el import de `next/font/google` y se mantiene la variable `--font-body` (cuerpo) o `--font-code` (números y código). Para títulos con otra tipografía, se suma una tercera con la variable `--font-display`: la clase `font-heading` la toma sola. `next/font` sirve las fuentes desde nuestro dominio, sin pedidos a Google desde el navegador.

## Modo oscuro

Lo maneja `next-themes`: por defecto sigue al sistema y pone la clase `.dark` en `<html>`. El botón para cambiarlo está en `apps/web/src/components/theme-toggle.tsx`; hoy solo se usa en `/diseno`, y dónde va en el sitio se decide con el diseño del header.

## Componentes de shadcn/ui

Se agregan desde `apps/web`, y el CLI los instala en `packages/ui/src/components/`:

```bash
cd apps/web
pnpm dlx shadcn@latest add card
```

- El estilo es `base-nova`, el que shadcn/ui usa hoy por defecto. Está construido sobre **Base UI**, no sobre Radix: al copiar ejemplos de la documentación, elegí la variante de Base UI.
- Los componentes de `packages/ui` no conocen el dominio (nada de "partido" ni "club"). Lo de una sola sección va en su feature ([estructura del repo](../arquitectura/estructura-del-repo.md)).

## Trabajar con Claude Design

Claude Design ahora está dentro de Claude: la versión independiente de claude.ai/design cierra el 2026-12-14. El flujo que proponemos:

1. **Primero la paleta y el logo, acá.** `globals.css` y `logo.tsx` son la fuente de verdad. Lo que se defina en otro lado se pasa a estos archivos.
2. **Diseñar las pantallas con estos tokens.** Al pedirle a Claude una pantalla, pasale los valores de `globals.css` y la lista de tokens de arriba, para que use `primary`, `muted`, etc. y no colores sueltos.
3. **Bajarlo a código.** Las piezas genéricas van a `packages/ui` (primero ver si shadcn/ui ya la tiene); lo de cada sección, a su feature en `apps/web/src/features/`.
4. **Un color nuevo es un token nuevo.** Se agrega en `globals.css` y en la tabla de este doc, en el mismo PR.
