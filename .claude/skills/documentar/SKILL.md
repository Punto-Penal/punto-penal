---
name: documentar
description: 'Mantiene al día la documentación de Punto Penal, que es el canal principal de comunicación del equipo. Usar al terminar cualquier cambio que afecte comportamiento, estructura, base de datos, fuentes de datos, decisiones o el plan; al tomar o descartar una decisión (ADR); al cerrar una tarea del checklist; al escribir el acta de una reunión; al agregar un término al glosario; o cuando alguien pregunte dónde está documentado algo o pida escribir o actualizar docs. Usala aunque nadie diga "documentación": si el cambio deja un doc desactualizado, corresponde.'
---

# Documentar

En un equipo de 4 personas a tiempo parcial, lo que no está escrito en el repo se pierde: nadie relee el chat de hace dos semanas. Por eso un cambio no está terminado hasta que su documentación lo refleja, en el mismo PR.

## 1. Qué actualizar

Mirá el diff (`git diff main...HEAD --stat` y el contenido) y decidí con esta tabla:

| Si el cambio... | Actualizá |
| --- | --- |
| Toma o cambia una decisión de arquitectura, stack, proceso o datos | ADR nuevo en `docs/decisiones/` (sección 2) |
| Cambia el esquema de la base | `docs/arquitectura/modelo-de-datos.md` |
| Suma o cambia una fuente de datos, o releva cobertura | `docs/datos/fuentes.md`, `docs/datos/cobertura.md` |
| Introduce o precisa un término o regla del fútbol | `docs/dominio/glosario.md` |
| Completa una tarea del plan | El checklist de la fase en `docs/plan/` (tildar) |
| Deja algo sin resolver para el grupo | `docs/pendientes.md` |
| Cierra un pendiente | Moverlo a "Cerrados" en `docs/pendientes.md`, con fecha y enlace |
| Agrega o mueve carpetas, paquetes o convenciones | `docs/arquitectura/estructura-del-repo.md` y `AGENTS.md` |
| Agrega un comando o cambia cómo se levanta el proyecto | `README.md` y la sección Comandos de `AGENTS.md` |
| Cambia costos o planes de servicios | `docs/costos.md` |
| Agrega un doc nuevo | El índice de `docs/README.md` |
| Cambia cómo se hace algo que describe una skill | Esa skill en `.claude/skills/` |

Si nada aplica, decilo explícitamente ("no hace falta tocar docs porque...") para que quede en el PR.

## 2. Escribir un ADR

1. Siguiente número libre en `docs/decisiones/` (cuatro dígitos).
2. Copiá `docs/decisiones/plantilla.md` a `NNNN-titulo-corto.md`.
3. Estado **Propuesta**, fecha de hoy (`AAAA-MM-DD`), quién propone.
4. Decisión primero, en una o dos oraciones; después contexto, consecuencias y alternativas. Una página como mucho.
5. Sumalo a la tabla de `docs/decisiones/README.md`.
6. Un ADR **Aceptado** no se edita: si la decisión cambia, se escribe uno nuevo que lo reemplaza y el viejo pasa a "Reemplazada por NNNN".

## 3. Escribir un acta

Archivo `docs/reuniones/AAAA-MM-DD-tema.md` a partir de `docs/reuniones/plantilla.md`: decisiones, tareas (quién, qué, issue) y lo que quedó abierto. Lo abierto también va a `docs/pendientes.md`; las decisiones importantes, a un ADR. Sumá el acta a la lista de `docs/reuniones/README.md`.

## 4. Estilo

Las reglas completas están en `docs/README.md`. Lo esencial:

- **Primero la respuesta:** la primera oración de cada doc y sección dice la conclusión.
- **Una sola fuente de verdad:** si el tema ya está en otro doc, enlazá; no copies. Duplicar es la forma más rápida de que dos docs se contradigan.
- Español, oraciones cortas, tablas para comparar, fechas `AAAA-MM-DD`, nombres de código en `monoespaciado`.
- Enlaces relativos entre docs.
- Lo que no se sabe se marca como no confirmado; no se rellena.

## 5. Antes de terminar

- Revisá que los enlaces relativos que agregaste apunten a archivos que existen.
- Mostrale a la persona un resumen de qué docs tocaste y por qué, para que lo revise antes del PR.
