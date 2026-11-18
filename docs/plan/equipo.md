# Equipo

Cada integrante es dueño de un módulo completo (de la base a la pantalla) y además tiene un rol transversal: revisa los PRs de todos en esa área. Archivo y simulador pueden intercambiarse entre Pela y Teby si lo prefieren (ver [pendientes.md](../pendientes.md)).

| Integrante | Módulo del que es dueño | Incluye | Rol transversal | Revisa siempre |
| --- | --- | --- | --- | --- |
| Teby | Simulador y plataforma | `packages/core` (motor de formatos y tablas), `packages/simulator`, pantalla del simulador, cuentas, home | Líder técnico: repo, CI, deploys, skills | `packages/core`, `.github/`, `.claude/` |
| Rama | Fútbol actual y estadísticas | Ingesta de API-Football, en vivo, fixtures, tablas, páginas de torneo, estadísticas de temporada | Dueño de datos: proveedor, presupuesto de requests, monitoreo de la ingesta | `packages/ingestion`, `supabase/functions/` |
| Pela | Archivo histórico y clubes | Clubes e historia en la base, importador CSV, perfiles de clubes, campeones, ascensos y descensos, historiales | Dueño de la base: aprueba toda migración y política RLS | `supabase/migrations/`, `supabase/schemas/`, `packages/db` |
| Emi | Juegos diarios | Motor de desafíos, juegos, desafío del día, rachas, estadísticas personales, compartir resultado | Dueño de diseño: identidad visual y componentes compartidos | `packages/ui` |

`.github/CODEOWNERS` pide estas revisiones solo. **Falta completar los usuarios de GitHub de Rama, Pela y Emi** (ver [pendientes.md](../pendientes.md)).

## Dependencias entre módulos

- El **esquema v0 de Pela** lo necesitan todos: es lo primero de la Fase 0.
- El **cálculo de tablas de `core`** (Teby) lo usan las tablas de Rama, el archivo de Pela y el simulador. Tiene que estar en la semana 2.
- Los **juegos de Emi** necesitan jugadores reales de la ingesta de Rama. Mientras tanto, Emi trabaja con un seed de unos 50 jugadores cargados a mano.
- Las **rachas de Emi** necesitan las cuentas de Teby. Mientras tanto, se guardan en el navegador.

El módulo de Rama es el más grande al principio. Si alguien termina antes, ayuda ahí (páginas de torneo, estadísticas).

## Cómo pedir ayuda o avisar algo

- **Algo bloquea tu tarea:** comentalo en el issue y mencioná al dueño de lo que te bloquea.
- **Querés cambiar algo de otro módulo:** abrí un issue o un PR chico y pedile revisión al dueño. No lo cambies de costado.
- **Hay que decidir algo entre todos:** sumalo a [pendientes.md](../pendientes.md) o abrí un issue con la plantilla "Decisión".
