# Claude Code en Punto Penal

El repo trae su propio contexto para Claude Code: reglas en `AGENTS.md`, skills en `.claude/skills/` y configuración compartida en `.claude/settings.json`. Al clonar, los 4 trabajan con el mismo agente y las mismas reglas.

## Primera vez

1. Instalá Claude Code y abrilo en la **raíz del repo** (`claude`). Así lee `CLAUDE.md`, `AGENTS.md` y `.claude/settings.json`.
2. Aceptá el aviso de confianza del directorio: sin eso no se aplican los permisos compartidos ni el plugin del proyecto.
3. Cuando lo ofrezca, instalá el plugin `frontend-design` (está declarado en `.claude/settings.json`).
4. Escribí `/estado` para ver en qué está el proyecto y qué te toca.

## Uso diario

- **Al empezar:** `/estado`.
- **Durante:** pedí las cosas en lenguaje normal. Las skills se cargan solas cuando corresponde (por ejemplo, `migracion-db` cuando tocás la base). Para cambios grandes, pedile primero un plan.
- **Antes del PR:** `/pr-listo`.
- **Al terminar algo que cambia el proyecto:** la skill `documentar` actualiza los docs; revisá lo que escribió.

## Skills del repo

### Propias (las mantenemos nosotros)

| Skill | Cuándo se usa |
| --- | --- |
| `estado` | Al empezar una sesión o al preguntar "¿en qué estamos?" |
| `documentar` | Al terminar un cambio, tomar una decisión, cerrar una tarea o escribir un acta |
| `dominio-futbol` | Al tocar torneos, tablas, formatos, simulador, archivo o datos de clubes |
| `nueva-feature` | Al crear una sección, pantalla o ruta |
| `migracion-db` | Al cambiar tablas, permisos, seeds o tipos de la base |
| `proveedor-datos` | Al tocar la ingesta, sumar una liga o importar datos históricos |
| `pr-listo` | Antes de abrir un PR |

### Oficiales (copiadas de sus repos)

| Skill | Origen | Versión | Licencia |
| --- | --- | --- | --- |
| `supabase` | [supabase/agent-skills](https://github.com/supabase/agent-skills) `c9be0e9` (2026-10-02) | 0.1.2 | MIT |
| `supabase-postgres-best-practices` | [supabase/agent-skills](https://github.com/supabase/agent-skills) `c9be0e9` (2026-10-02) | 1.1.1 | MIT |
| `vercel-react-best-practices` | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) `1a2c79d` (2026-10-27), carpeta `react-best-practices` | 1.0.0 | MIT |
| `web-design-guidelines` | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) `1a2c79d` (2026-10-27) | 1.0.0 | MIT |

Se revisaron antes de copiarlas: son instrucciones y documentación, sin scripts. Dos cosas a saber:
- `supabase` pide consultar el changelog y la documentación actual de Supabase antes de implementar.
- `web-design-guidelines` descarga sus reglas actualizadas de GitHub cada vez que se usa.

**Actualizarlas:** clonar el repo de origen, copiar la carpeta de la skill encima de la nuestra, revisar el diff en un PR y actualizar la tabla de arriba con el commit nuevo. No editarlas a mano: los cambios propios van en nuestras skills.

## Escribir o cambiar una skill propia

- Una carpeta por skill en `.claude/skills/<nombre>/` con un `SKILL.md`.
- El encabezado lleva `name` y `description`. La descripción decide cuándo se carga: tiene que decir qué hace **y** en qué situaciones usarla, con las palabras que usaríamos al pedirlo.
- Menos de 500 líneas. Explicar el porqué de cada regla en vez de gritar "SIEMPRE".
- **No duplicar documentación:** la skill dice qué hacer y enlaza a `docs/` para el detalle. Si una regla cambia, se cambia en `docs/` y la skill sigue apuntando ahí.
- Se prueba pidiéndole a Claude algo realista ("agregá la tabla anual a la página de torneo") y viendo si la skill se cargó y si siguió los pasos.
- Los cambios en `.claude/` los revisa Teby.

## Configuración

- **`.claude/settings.json` (compartido):** deja correr lint, typecheck y tests sin preguntar; bloquea leer archivos `.env` y empujar migraciones a producción desde una máquina (eso lo hace el CI).
- **`.claude/settings.local.json` (personal, no se commitea):** tus excepciones.
- **Más adelante:** el servidor MCP de Supabase en modo solo lectura y apuntado al proyecto dev, nunca a prod.

## Otras herramientas de IA

Cursor, Codex y otras leen `AGENTS.md`, así que las reglas del repo valen igual. Las skills son de Claude Code, pero son Markdown: cualquiera puede leerlas como guía.
