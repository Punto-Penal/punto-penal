# 0008 · Vercel ahora; revisar al monetizar

- **Estado:** Propuesta
- **Fecha:** 2026-11-17
- **Propone:** Teby

## Decisión

Durante el desarrollo y el lanzamiento sin anuncios, la app se publica en Vercel con el plan Hobby (gratis). El código no usa nada exclusivo de Vercel, para poder mudarse. Antes de poner anuncios o donaciones se elige entre Vercel Pro y Cloudflare Workers, según el tráfico que haya.

## Contexto

- Vercel tiene la integración más simple con Next.js y una URL de prueba por PR.
- [Vercel Hobby es solo para uso personal no comercial](https://vercel.com/docs/limits/fair-use-guidelines): con anuncios hay que pagar.
- A escala, Cloudflare sale unas 3 veces más barato (sin cobro por persona ni por transferencia). Números en [costos.md](../costos.md).

## Consecuencias

- Costo de hosting cero hasta monetizar.
- Hay que evitar funciones atadas a Vercel (por ejemplo, su optimización de imágenes para los escudos, que además es cara a escala).
- La decisión final de hosting pago se toma en la puerta de la Fase 2, con datos reales de tráfico.

## Alternativas consideradas

- **Cloudflare desde el día uno:** más barato a escala, pero Next.js corre con un adaptador (OpenNext) y la configuración inicial es menos directa.
- **Netlify:** el plan gratis (300 créditos por mes) se queda corto para 4 personas desplegando seguido.
