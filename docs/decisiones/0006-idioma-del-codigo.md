# 0006 · Código en inglés; interfaz, URLs y docs en español

- **Estado:** Propuesta
- **Fecha:** 2026-11-17
- **Propone:** Teby

## Decisión

- **Inglés:** identificadores, nombres de archivos y carpetas, paquetes, tablas y columnas de la base.
- **Español:** textos de la interfaz, URLs públicas (`/partidos`, `/torneos/primera-division`), documentación, commits, PRs e issues.
- La equivalencia de términos del dominio está en el [glosario](../dominio/glosario.md).

## Contexto

- Las librerías, la documentación técnica y los ejemplos están en inglés; mezclar idiomas en el código genera nombres como `getTablaPositions`.
- El producto y el equipo son argentinos: la interfaz y las URLs en español ayudan al SEO local, y los docs en español se leen más rápido.
- Algunos términos no tienen traducción exacta (promedios, reducido): el glosario fija el nombre en código.

## Consecuencias

- Hay que consultar el glosario al nombrar entidades del dominio.
- Las rutas de `app/` van en español y las carpetas de `features/` en inglés. Ver [estructura-del-repo.md](../arquitectura/estructura-del-repo.md).

## Alternativas consideradas

- **Todo en español:** choca con las APIs y librerías y produce nombres mixtos.
- **Todo en inglés, también la documentación:** más lento de leer y escribir para el equipo.
