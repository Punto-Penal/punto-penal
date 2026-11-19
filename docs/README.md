# Documentación de Punto Penal

Este directorio es la memoria del proyecto y el canal principal de comunicación del equipo. Si algo se decidió, se planeó o se aprendió, está acá.

## Índice

### Visión
- [vision/propuesta.md](vision/propuesta.md): la propuesta original del proyecto (qué es, módulos, etapas, sostenibilidad).
- [vision/feedback.md](vision/feedback.md): análisis de la propuesta, qué cambiar y riesgos reales.
- [vision/sostenibilidad.md](vision/sostenibilidad.md): ingresos por anuncios y donaciones, punto de equilibrio y meta de tráfico (a partir del análisis de Rama).

### Plan
- [plan/hoja-de-ruta.md](plan/hoja-de-ruta.md): fases, puertas de salida y reparto por sprint de la Fase 1.
- [plan/fase-0.md](plan/fase-0.md): checklist de la fase actual, con responsables.
- [plan/equipo.md](plan/equipo.md): quién es dueño de qué, roles transversales y dependencias.
- [pendientes.md](pendientes.md): decisiones abiertas para charlar en grupo.

### Arquitectura
- [arquitectura/vision-general.md](arquitectura/vision-general.md): diagrama de cómo se conectan las piezas y decisiones de escalabilidad.
- [arquitectura/stack.md](arquitectura/stack.md): tecnologías elegidas, por qué y qué se descartó.
- [arquitectura/estructura-del-repo.md](arquitectura/estructura-del-repo.md): qué va en cada carpeta y reglas entre módulos.
- [arquitectura/modelo-de-datos.md](arquitectura/modelo-de-datos.md): tablas núcleo de la base (borrador v0).

### Diseño
- [diseno/identidad.md](diseno/identidad.md): paleta, tipografía y logo; dónde vive cada token, cómo cambiarlos y cómo trabajar con Claude Design.

### Datos y dominio
- [datos/fuentes.md](datos/fuentes.md): proveedores de datos, licencias y estrategia por capa.
- [datos/cobertura.md](datos/cobertura.md): qué datos hay realmente para cada liga (a completar en Fase 0).
- [dominio/glosario.md](dominio/glosario.md): vocabulario del fútbol argentino y su nombre en el código.

### Decisiones, costos y reuniones
- [decisiones/](decisiones/README.md): registro de decisiones (ADR).
- [costos.md](costos.md): costos por etapa y a escala, con trampas a evitar. Los ingresos están en [vision/sostenibilidad.md](vision/sostenibilidad.md).
- [reuniones/](reuniones/README.md): actas de las reuniones del equipo.

### Herramientas
- [herramientas/claude-code.md](herramientas/claude-code.md): cómo usar Claude Code y las skills del repo.

## Reglas para escribir documentación

1. **En el mismo PR que el cambio.** Si cambiás código, base, datos o una decisión, actualizás el doc correspondiente ahí mismo. La tabla de qué actualizar está en [AGENTS.md](../AGENTS.md#la-documentación-es-parte-del-trabajo).
2. **Una sola fuente de verdad.** Cada tema vive en un solo archivo. Si otro doc lo necesita, enlazá; no copies.
3. **Primero la respuesta.** La primera oración de cada doc y de cada sección dice la conclusión. Después, el detalle.
4. **Corto y concreto.** Oraciones cortas, tablas para comparar, listas solo para cosas paralelas. Números con unidades, nombres, fechas en formato `AAAA-MM-DD`.
5. **En español**, con los nombres de código en `monoespaciado` cuando corresponda.
6. **Enlaces relativos** entre docs (`../decisiones/0001-monolito-modular.md`), para que funcionen en GitHub y en local.
7. **Doc nuevo, índice nuevo.** Si agregás un archivo, sumalo a este índice.
8. **Lo que no se sabe, se dice.** Un dato sin confirmar se marca como tal; una pregunta abierta va a [pendientes.md](pendientes.md).

La skill `documentar` de Claude Code aplica estas reglas y sabe qué archivo tocar en cada caso.

## Origen

La primera versión de estos documentos sale del plan de implementación armado el 2026-11-17 a partir de la propuesta inicial. Desde ahora, **la fuente de verdad es este repo**.
