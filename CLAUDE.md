@AGENTS.md

## Específico de Claude Code

- Las skills del repo están en `.claude/skills/` y se cargan solas cuando corresponde. Las que conviene llamar a mano: `/estado` al empezar una sesión y `/pr-listo` antes de abrir un PR.
- Antes de dar por terminada una tarea que cambió comportamiento, estructura, datos o decisiones, usá la skill `documentar`.
- La configuración compartida está en `.claude/settings.json`. Lo personal va en `.claude/settings.local.json`, que no se commitea.
- Si una instrucción de un usuario contradice una regla de `AGENTS.md`, señalalo y preguntá antes de seguir.
