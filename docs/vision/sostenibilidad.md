# Sostenibilidad: ingresos y punto de equilibrio

Con anuncios, Punto Penal se paga solo a partir de unas 20.000 a 130.000 páginas vistas por mes. La cifra depende del hosting que elijamos y de cuánto pague la publicidad. La meta inicial que propone Rama, 50.000 páginas vistas por mes, alcanza en el escenario más barato y se queda corta con Vercel Pro. Este doc sale del análisis que compartió Rama el 2026-11-19, adaptado a nuestro stack. El costo de cada servicio está en [costos.md](../costos.md); acá va lo que entra y cuánto tráfico hace falta para cubrirlo.

## Cuánto paga la publicidad

La métrica es el **RPM de página**: lo que se cobra cada 1.000 páginas vistas. Ingresos por mes = páginas vistas / 1.000 × RPM.

- **No hay un dato confiable para público argentino.** El análisis de Rama parte de un benchmark de PubMonitor (mayo de 2026) de unos USD 1,05 para sitios de deportes en América. Para planificar usa un rango de **USD 0,50 a 1,20**. Es un supuesto, no una tarifa.
- Con ese rango, 10.000 páginas vistas dan USD 5 a 12 y 100.000 dan USD 50 a 120.
- A escala la cuenta cambia: con 10 M de páginas, cada USD 1 de RPM son USD 10.000 por mes. Ahí los anuncios cubren cualquier costo de [costos.md](../costos.md). El problema es llegar a ese tráfico.

Escenarios supuestos del análisis de Rama:

| Escenario | Usuarios por mes | Páginas por usuario | Páginas vistas por mes | Ingresos por mes |
| --- | --- | --- | --- | --- |
| Lanzamiento con repercusión | 10.000 | 6 | 60.000 | USD 30–72 |
| Después de la caída | 3.000 | 5 | 15.000 | USD 8–18 |
| Comunidad estable | 8.000 | 7 | 56.000 | USD 28–67 |
| Proyecto bastante popular | 30.000 | 8 | 240.000 | USD 120–288 |

## Punto de equilibrio con nuestro stack

Lo que más mueve el costo es el hosting. [Vercel Hobby no permite anuncios](../decisiones/0008-hosting.md), así que al monetizar hay que pagar Vercel Pro o mudarse a Cloudflare Workers. El análisis original supone otra arquitectura (Django en Render, USD 29 a 35 por mes); la incluimos solo como referencia.

Páginas vistas por mes necesarias = costo mensual / RPM × 1.000:

| Escenario con anuncios | Costo por mes | RPM 0,50 | RPM 0,80 | RPM 1,20 |
| --- | --- | --- | --- | --- |
| Mínimo: Cloudflare Workers + Supabase Free + API-Football Pro | ~USD 24 | 48.000 | 30.000 | 20.000 |
| Cloudflare Workers + Supabase Pro + API-Football Pro | ~USD 49 | 98.000 | 61.250 | 40.833 |
| Vercel Pro (1 lugar) + Supabase Pro + API-Football Pro | ~USD 64 | 128.000 | 80.000 | 53.333 |
| Referencia del análisis de Rama (Django en Render; no es nuestro stack) | USD 35 | 70.000 | 43.750 | 29.167 |

Precios por mes: Cloudflare Workers USD 5, Supabase Pro USD 25, Vercel Pro USD 20 por lugar y API-Football Pro USD 19 (a confirmar, ver abajo). El dominio va aparte.

- **Con 50.000 páginas vistas** se cubre el escenario mínimo con cualquier RPM, el de Cloudflare con Supabase Pro solo con RPM alto y el de Vercel Pro con ninguno. Este dato pesa en la decisión de hosting que se toma en la puerta de la Fase 2 ([ADR 0008](../decisiones/0008-hosting.md)).
- **Vercel Pro cobra por lugar.** Si los 4 necesitan lugar para desplegar, el costo pasa a ~USD 124 por mes y el equilibrio, a ~155.000 páginas vistas con RPM 0,80.
- **Supabase Free en producción es posible, pero con riesgo.** El proyecto se pausa tras una semana sin actividad (la ingesta lo evita) y el plan no incluye backups diarios. Cuando el archivo histórico tenga datos cargados a mano, perderlos cuesta más que USD 25 por mes.

## Cuándo llega la plata

- **AdSense paga recién cuando el saldo llega a USD 100** (cuentas en dólares). Con USD 10 por mes, eso tarda 10 meses; con USD 50, 2 meses.
- **AdSense tiene que aprobar el sitio.** No exige un mínimo de visitas, pero rechaza mucho a sitios nuevos con poco contenido. No contamos con anuncios antes de la puerta de la Fase 2 ([hoja de ruta](../plan/hoja-de-ruta.md)).

Primer año imaginado por Rama. No es una predicción y supone que los anuncios ya están aprobados:

| Meses | Qué pasa | Ingresos por mes |
| --- | --- | --- |
| 1–2 | Lanzamiento y difusión en redes | USD 30–70 |
| 3–6 | Se va parte del público inicial; quedan los que usan juegos, resultados y estadísticas | USD 10–30 |
| 7–12 | Crecimiento orgánico, si el sitio sigue mejorando | USD 20–70 |

Con estos números, los meses 3 a 6 no cubren ni el escenario mínimo. Los primeros meses vamos a poner plata nosotros: cómo se reparte es un [pendiente](../pendientes.md).

## Donaciones y otros ingresos

- **Las donaciones son un extra:** no se cuentan en el presupuesto. Cafecito funciona con Mercado Pago y cobra 5% por aporte.
- **Ninguna función se bloquea para quien no dona.** La gente colabora porque le gusta el sitio. Un texto posible: "¿Te gusta Punto Penal? Ayudanos a mantenerlo".
- **Las donaciones probablemente cuentan como uso comercial** para Vercel Hobby, igual que los anuncios ([costos.md](../costos.md)).
- **A largo plazo, publicidad directa** con negocios futboleros: tiendas deportivas o comercios locales. No entra en las proyecciones.

## Qué implica para el producto

1. **Las páginas por visita importan tanto como las visitas.** Quien entra a ver un resultado mira una o dos páginas. Quien juega, consulta estadísticas y avanza una simulación mira muchas más: los tres módulos se potencian. Enlazar mucho entre secciones (partido → torneo → club → historia) suma páginas y ayuda al SEO.
2. **Lo que se comparte trae gente.** La difusión es orgánica: X, Reddit y comunidades del fútbol argentino, sin pagar publicidad. Compartir el resultado del juego diario (Fase 1, sprint 3) y las simulaciones por enlace (Fase 2) son la forma natural de crecer.
3. **Medir desde el día uno.** Sin las páginas vistas por mes no sabemos si llegamos al equilibrio. PostHog (ya en el [stack](../arquitectura/stack.md)) tiene que estar andando el día del lanzamiento.
4. **Los anuncios no tapan lo importante.** Pocos, sin perjudicar los resultados ni los juegos ([propuesta](propuesta.md#7-sostenibilidad-anuncios-y-donaciones)), y con su espacio reservado en el diseño para que la página no salte al cargarlos.

## Objetivos

En el orden que propone Rama:

1. Que el sitio se pague solo.
2. Recuperar lo invertido.
3. Si crece lo suficiente, sumar un ingreso chico.

Apuntar a USD 500 por mes al principio no tiene sentido: hace falta mucho más tráfico del que consigue un sitio nuevo.

**Meta de tráfico propuesta: 50.000 páginas vistas por mes**, unos 7.000 a 10.000 usuarios que naveguen varias páginas. Falta confirmarla en grupo como referencia para la puerta de la Fase 2 ([pendientes.md](../pendientes.md)).

## Datos a confirmar

| Dato | Análisis de Rama | Nuestros docs | Quién lo confirma |
| --- | --- | --- | --- |
| API-Football Pro | USD 16 por mes | USD 19 por mes ([costos.md](../costos.md)) | Rama, al abrir la cuenta en la Fase 0 |
| Dominio .com.ar en NIC Argentina | ARS 8.500 por año | Sin dato | Quien revise el dominio ([pendientes.md](../pendientes.md)) |
| RPM con público argentino | USD 0,50–1,20 (supuesto) | Sin dato | Se sabe recién con anuncios andando |

## Origen

Análisis "Proyecto fútbol argentino" que compartió Rama el 2026-11-19, armado con ChatGPT. Se tomaron los números de ingresos, el punto de equilibrio, las donaciones y los objetivos. La parte de arquitectura (Django en Render) quedó afuera: el stack está decidido en el [ADR 0002](../decisiones/0002-nextjs-y-supabase.md) y el hosting en el [ADR 0008](../decisiones/0008-hosting.md).
