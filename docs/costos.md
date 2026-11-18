# Costos

Desarrollar cuesta USD 0. Lanzar cuesta unos USD 19 por mes más el dominio. A escala considerable, entre USD 55 y 570 por mes según el hosting que elijamos. Precios de páginas oficiales a noviembre de 2026; los niveles de tráfico son supuestos.

## Por etapa

| Concepto | Desarrollo (Fases 0 y 1) | Lanzamiento sin anuncios | Con anuncios o donaciones |
| --- | --- | --- | --- |
| API-Football | USD 0 (Free, 100 requests/día) | USD 19/mes (Pro) | USD 19/mes |
| [Supabase](https://supabase.com/pricing) | USD 0 (2 proyectos gratis) | USD 0 (Free: 500 MB, 50.000 usuarios activos/mes) | USD 25/mes (Pro: sin pausas, 8 GB) |
| [Vercel](https://vercel.com/docs/accounts/plans/hobby) | USD 0 (Hobby) | USD 0 (Hobby) | USD 20 por desarrollador/mes (Pro) |
| Dominio | — | Pago anual (.com.ar o .com) | Igual |
| **Total** | **USD 0** | **USD 19/mes + dominio** | **~USD 64/mes + dominio** |

- Un proyecto Supabase Free se pausa tras 1 semana sin actividad. En producción la ingesta lo mantiene activo, pero conviene pasar a Pro al lanzar en serio.
- 500 MB alcanzan para mucho: los datos de fútbol son texto y números. El límite real del Free son las 200 conexiones de Realtime simultáneas; por eso el en vivo no usa conexiones abiertas.
- [Vercel Hobby es solo para uso personal no comercial](https://vercel.com/docs/limits/fair-use-guidelines). Anuncios, y probablemente donaciones, cuentan como comercial.

## A escala

Supuestos: unos 10 pedidos a la CDN por página vista, más el en vivo (15% de usuarios consultando cada 30 s, ~6 partidos por mes cada uno).

| | Mediana | Grande | Muy grande |
| --- | --- | --- | --- |
| Usuarios únicos por mes | 100.000 | 500.000 | 2.000.000 |
| Páginas vistas por mes | 1,5 M | 10 M | 50 M |
| Pedidos a la CDN por mes | ~25 M | ~150 M | ~700 M |

Costo mensual en USD:

| Servicio | Mediana | Grande | Muy grande |
| --- | --- | --- | --- |
| Vercel Pro (4 desarrolladores) + [CDN de tarifa fija](https://vercel.com/changelog/flat-rate-cdn-is-now-ga-for-pro-teams) + cómputo | ~190 | ~420 | Excede el plan Pro: Enterprise |
| *o bien* [Cloudflare Workers](https://developers.cloudflare.com/workers/platform/pricing/) | ~7 | ~30 | ~130 |
| Supabase Pro + [cómputo](https://supabase.com/docs/guides/platform/compute-and-disk) | 30 (Small) | 75 (Medium) | 125 (Large) |
| API-Football | 19 | 29 | 39 |
| Emails de cuentas ([Resend](https://resend.com/pricing)) | 0 | 20 | 35 |
| Errores ([Sentry](https://sentry.io/pricing/)) | 0 | 26 | 26 |
| **Total con Vercel** | **~240** | **~570** | **—** |
| **Total con Cloudflare** | **~55** | **~180** | **~355** |

- **Vercel cobra por persona y por pedidos:** USD 20 por desarrollador; la CDN de tarifa fija cuesta USD 100 hasta 50 M de pedidos y USD 300 hasta 150 M. Los picos por encima del plan no se cobran.
- **Cloudflare no cobra por persona ni por transferencia:** USD 5 fijos más USD 0,30 por millón de pedidos que ejecutan código; los estáticos son gratis. A escala sale unas 3 veces más barato, a cambio de usar Next.js con el adaptador OpenNext.
- **Supabase casi no crece con el tráfico:** con páginas cacheadas, la base solo recibe lo que no está en caché y lo que escriben los usuarios.
- **Los datos de fútbol no crecen con los usuarios:** el plan de API-Football sube por cobertura, no por visitas.

## Trampas que multiplican la factura

1. **Sesiones anónimas para todos.** Supabase cobra USD 0,00325 por usuario activo después de los 100.000, y cuenta a quien inicia sesión o renueva el token: las sesiones anónimas entrarían. Si el 40% de los visitantes juega y a todos se les crea sesión: +USD 325/mes en el escenario grande, +USD 2.275/mes en el muy grande. **Solución:** guardar la racha en el navegador y crear la sesión solo cuando el usuario quiere guardarla.
2. **Optimizar escudos con las imágenes de Vercel.** Cada lectura de caché de imagen cuesta USD 0,40 por millón: una tabla con 20 escudos a 10 M de páginas son ~USD 80/mes. **Solución:** escudos ya optimizados como archivos estáticos.
3. **En vivo con conexiones abiertas.** Con 15.000 personas a la vez, Realtime cobra USD 10 cada 1.000 conexiones por encima de 500 (~USD 145/mes). **Solución:** consultas cada 30 s a la CDN ([ADR 0005](decisiones/0005-en-vivo-por-consulta-cacheada.md)).
4. **Consultas del en vivo demasiado seguidas.** Son más de un tercio de los pedidos en el escenario grande. **Solución:** cada 60 s cuando no pasa nada y solo con la pestaña visible.

## Ingresos, como referencia

No hay un dato confiable de cuánto paga la publicidad web con público argentino. La cuenta: a 10 M de páginas, cada USD 1 cobrado por cada mil páginas son USD 10.000 por mes. Con cualquier valor razonable, a esa escala los anuncios cubren el costo; el problema es llegar al tráfico. AdSense no exige un mínimo de visitas, pero rechaza mucho a sitios nuevos con poco contenido: no contar con anuncios antes de la Fase 2. Para donaciones, Cafecito funciona con Mercado Pago y cobra 5% por aporte.
