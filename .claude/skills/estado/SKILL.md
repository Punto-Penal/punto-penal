---
name: estado
description: 'Resume en qué está Punto Penal y qué le toca a quien pregunta: fase actual, tareas abiertas con su dueño, PRs e issues abiertos, decisiones pendientes y cambios recientes del repo. Usar con /estado al empezar una sesión de trabajo, y también cuando alguien pregunte "¿en qué estamos?", "¿qué me toca?", "¿qué hay pendiente?", "¿qué cambió?" o esté por arrancar algo sin saber el contexto.'
---

# Estado del proyecto

El repo es el canal principal del equipo, así que el estado real está en `docs/` y en git, no en la memoria de nadie. Esta skill arma un resumen corto a partir de esas fuentes.

## Pasos

1. **Quién pregunta.** Mirá `git config user.name` y cruzalo con la tabla de `docs/plan/equipo.md` (Teby, Rama, Pela, Emi). Si no podés saberlo, preguntá el nombre antes de seguir: la parte personal del resumen depende de eso.
2. **Fase actual.** Leé `docs/plan/hoja-de-ruta.md` y el checklist de la fase en curso (hoy `docs/plan/fase-0.md`). Contá tareas hechas y abiertas, y separá las de la persona.
3. **Qué cambió.** Si hay red, `git fetch`; después `git log --since="7 days ago" --oneline origin/main` (o `main` local). Resumí por temas, no commit por commit.
4. **PRs e issues.** Si `gh` está disponible: `gh pr list` y `gh issue list`, filtrando por la persona. Señalá los PRs que esperan su revisión según `.github/CODEOWNERS` y `docs/plan/equipo.md`.
5. **Pendientes.** Leé `docs/pendientes.md` y el acta más reciente de `docs/reuniones/`. Marcá los pendientes que bloquean tareas de la persona.
6. **Dependencias.** Con la sección "Dependencias entre módulos" de `docs/plan/equipo.md`, decí si la persona espera a alguien o si alguien la espera a ella.

## Formato de respuesta

Corto, en español, sin relleno:

```
Fase actual: <fase> · <hechas>/<total> tareas (puerta: <criterio>)

Lo nuevo (últimos 7 días)
- ...

Lo tuyo
- [ ] <tarea abierta>  ← <bloqueo, si hay>
- PRs que esperan tu revisión: ...

Esperando / te esperan
- ...

Pendientes del grupo que te afectan
- ...

Próximo paso sugerido: <una acción concreta>
```

Si algo no se puede consultar (sin red, sin `gh`), decilo en una línea y seguí con lo que sí hay. No inventes estado. Si un doc parece desactualizado respecto de git (por ejemplo, una tarea abierta cuyo PR ya se mergeó), señalalo y sugerí actualizarlo con la skill `documentar`.
