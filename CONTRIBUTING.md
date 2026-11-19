# Cómo trabajamos

Sprints de 2 semanas con una demo al final: cada dueño muestra algo andando en producción, no código en su rama. Todo pasa por PR y todo queda documentado en el repo.

## Flujo de una tarea

1. **Issue.** Cada tarea es un issue con la etiqueta de su módulo (`matches`, `history`, `games`, `simulator`, `platform`, `docs`). Usá las plantillas de `.github/ISSUE_TEMPLATE/`.
2. **Rama** desde `main`, corta y por tarea:
   - `feat/juego-adivina-jugador`
   - `fix/tabla-desempate`
   - `docs/glosario-promedios`
   - `chore/ci-cache`
3. **Commits** en español con prefijo convencional: `feat: agrega tabla de la zona B`, `fix: corrige desempate por gol de visitante`, `docs: actualiza modelo de datos`.
4. **PR** chico, idealmente de menos de 400 líneas. Completá la plantilla. Si tocás la base, la ingesta o `packages/core`, avisá en la descripción.
5. **Revisión.** CI en verde (`.github/workflows/ci.yml` corre lint, tipos, tests y build en cada PR) y 1 aprobación. CODEOWNERS pide la revisión al dueño del área. La URL de prueba de Vercel va en el PR para revisar funcionando.
6. **Merge** con squash. Se borra la rama.

Antes de abrir el PR, corré `/pr-listo` en Claude Code: revisa checks, fronteras entre módulos y documentación.

## Documentación en el mismo PR

Un cambio no está terminado hasta que su documentación está al día. La tabla de qué actualizar según qué cambiaste está en [AGENTS.md](AGENTS.md#la-documentación-es-parte-del-trabajo). Las reglas de estilo, en [docs/README.md](docs/README.md).

## Decisiones

- Las decisiones importantes (arquitectura, stack, proceso, datos) se escriben como ADR en [docs/decisiones/](docs/decisiones/README.md): una página con contexto, decisión y consecuencias.
- Un ADR nace en estado **Propuesta** en un PR. Se pasa a **Aceptada** cuando el grupo lo aprueba (en la reunión o en el PR con el OK de los 4).
- Lo que todavía no tiene respuesta va a [docs/pendientes.md](docs/pendientes.md).

## Reuniones

- **Planificación** (30 min) al empezar el sprint: se reparten issues.
- **Demo** al cerrar el sprint: cada uno muestra lo suyo funcionando.
- Cada reunión deja un acta corta en [docs/reuniones/](docs/reuniones/README.md). Lo demás es asincrónico, en issues y PRs.

## Reglas que no se negocian

- Nadie pushea directo a `main`. Hoy es un acuerdo: el plan gratis de GitHub no permite protegerla en un repo privado ([pendientes.md](docs/pendientes.md)).
- Nunca editar la base de producción desde el dashboard. Todo cambio es código y lo aplica el CI.
- Nunca commitear `.env*` ni claves. La clave de API-Football vive solo en las Edge Functions.
- Cuentas de servicios (GitHub, Vercel, Supabase, API-Football) a nombre del proyecto, con los 4 como miembros. Nadie queda como único dueño de algo.
