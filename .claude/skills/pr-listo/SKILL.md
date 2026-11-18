---
name: pr-listo
description: 'Checklist para dejar un cambio listo antes de abrir un Pull Request en Punto Penal: verificaciones, fronteras entre módulos, secretos, base de datos, documentación y descripción del PR. Usar con /pr-listo, y también cuando alguien diga que terminó una tarea, quiera abrir un PR, pida revisar sus cambios antes de subirlos o pregunte si algo está listo para merge.'
---

# PR listo

Un PR que llega prolijo se revisa en minutos; uno que llega con checks rotos o docs desactualizados va y viene durante días. Esta skill hace la revisión previa que de otro modo haría el revisor.

## Pasos

1. **Qué cambió.** `git status`, `git diff main...HEAD --stat` y el diff completo. Si estás en `main`, frená: hay que crear una rama (`feat/...`, `fix/...`, `docs/...`, `chore/...`) antes de commitear.
2. **Checks.** Corré los que existan: `pnpm lint`, `pnpm typecheck`, `pnpm test`. Si todavía no hay código (Fase 0), decilo y seguí.
3. **Fronteras entre módulos.** Ningún archivo de `apps/web/src/features/<a>/` importa de `features/<b>/`. Ninguna pantalla recalcula reglas de fútbol que existen en `packages/core`. `packages/core` no importa Supabase, React ni Next.
4. **Secretos.** Nada de `.env*` (salvo `.env.example`), claves, tokens ni datos personales en el diff. La clave de API-Football no aparece fuera de `supabase/functions/`.
5. **Base de datos.** Si el diff toca `supabase/`: cambio en el esquema, migración generada y revisada, tipos regenerados y `docs/arquitectura/modelo-de-datos.md` actualizado. Lo aprueba Pela.
6. **Ingesta.** Si toca `packages/ingestion` o `supabase/functions`: ¿cuántos requests por día suma?
7. **Documentación.** Aplicá la skill `documentar` sobre el diff. Si hubo una decisión importante, ¿hay ADR?
8. **Dueños.** Con `.github/CODEOWNERS` y `docs/plan/equipo.md`, decí quién tiene que revisar.
9. **Descripción del PR.** Armala con `.github/pull_request_template.md`, completando lo que se pueda deducir del diff.

## Formato de respuesta

```
PR listo: sí | no (faltan N cosas)

OK    lint, typecheck, tests
FALTA docs: el cambio en <archivo> no está reflejado en <doc>
OK    sin secretos
...

Revisa: <dueño(s)>
Título sugerido: <tipo>: <descripción en español>

<descripción del PR con la plantilla>
```

No commitees ni abras el PR por tu cuenta: proponé los comandos y esperá el OK de la persona.
