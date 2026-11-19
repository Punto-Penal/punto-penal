# Pendientes

Decisiones abiertas para cerrar en grupo. Cada una trae una recomendación para no arrancar de cero. Cuando se cierra una, se tilda acá y, si es importante, se escribe su ADR en [decisiones/](decisiones/README.md).

## Para la primera reunión

- [ ] **Horas por semana de cada uno.** Define si la Fase 1 dura 8 semanas o 16.
- [ ] **Confirmar los ADR 0001 a 0008** (hoy en estado Propuesta) o cambiarlos.
- [ ] **Idioma del código.** Recomendado: código en inglés, interfaz, URLs y docs en español ([ADR 0006](decisiones/0006-idioma-del-codigo.md)).
- [ ] **Esquema declarativo de Supabase.** Recomendado: sí ([ADR 0007](decisiones/0007-esquema-declarativo-supabase.md)). Lo decide Pela con el grupo.
- [ ] **¿Pela con el archivo y Teby con el simulador, o al revés?**
- [ ] **Usuarios de GitHub de Rama, Pela y Emi**, para invitarlos a la organización y completar `.github/CODEOWNERS`.
- [ ] **¿Repo público o privado?** Que el repo sea privado y de una organización bloquea dos tareas de la Fase 0 en los planes gratis:
  - **Proteger `main`:** GitHub Free no permite reglas de protección en repos privados de una organización.
  - **Conectar Vercel:** [Vercel Hobby no despliega repos privados de una organización](https://community.vercel.com/t/unable-to-deploy-from-organizational-private-repository/16334); pide Pro (USD 20 por mes o más).

  Opciones:
  - **Recomendado: hacer el repo público.** Destraba las dos cosas gratis y sin cambiar el stack. Las claves nunca están en el repo (regla 7 de `AGENTS.md`), así que lo único que se expone es el código y los docs (planes, costos, nombres de pila). Además sirve de portfolio.
  - **Seguir privado:** GitHub Team gratis por [GitHub Education](https://education.github.com/teachers) (lo pide un docente) para proteger `main`, y Cloudflare Workers en vez de Vercel para desplegar. Cambia el [ADR 0008](decisiones/0008-hosting.md) y suma la configuración de OpenNext.
  - **Pagar:** GitHub Team (USD 16 por mes para los 4) y Vercel Pro (USD 20 por mes o más).

  Mientras tanto, por acuerdo: nadie pushea a `main`; todo entra por PR con el CI en verde y 1 aprobación.

## Para antes de la Fase 1

- [ ] **Ligas de afuera en el MVP.** Recomendado: 3 o 4 (por ejemplo Inglaterra, España, Italia y Brasil), según [la cobertura](datos/cobertura.md) y el presupuesto de requests.
- [ ] **Primer juego.** Recomendado: Adiviná el futbolista, porque reutiliza los planteles de la ingesta.
- [ ] **Realismo del simulador v1.** Recomendado: fuerza de cada club con Elo, goles con distribución de Poisson y semilla para que sea reproducible.
- [ ] **Dominio.** Revisar disponibilidad de variantes de "puntopenal" en .com.ar y .com. El análisis de Rama cita ARS 8.500 por año para .com.ar en NIC Argentina; falta confirmarlo en nic.ar.
- [ ] **Precio de API-Football Pro.** costos.md dice USD 19 por mes y el análisis de Rama, USD 16. Lo confirma Rama al abrir la cuenta.
- [ ] **Meta de tráfico.** Rama propone 50.000 páginas vistas por mes como referencia para la puerta de la Fase 2. Con esa cifra se cubren los costos solo con el hosting más barato ([sostenibilidad](vision/sostenibilidad.md#punto-de-equilibrio-con-nuestro-stack)).
- [ ] **Cómo se reparten los gastos** hasta que haya ingresos. Desde el lanzamiento son ~USD 19 por mes más el dominio; con anuncios, entre USD 24 y 64. Los primeros meses con anuncios probablemente no cubran el costo ([sostenibilidad](vision/sostenibilidad.md#cuándo-llega-la-plata)).
- [ ] **Cuentas de servicios.** Recomendado: un mail del proyecto como dueño de GitHub, Vercel, Supabase y API-Football, con los 4 como miembros.

## Cerrados

Cuando se cierre un pendiente, movelo acá con la fecha y el enlace a su ADR o acta.

- [x] 2026-11-17 · **Nombre del repo:** se renombró de `punto-penal-` a `punto-penal`, antes de conectar Vercel y Supabase.
- [x] 2026-11-19 · **Versión de Node y pnpm:** Node 26 (la LTS actual y la que Vercel usa por defecto) y pnpm 12.21.0. Quedaron fijadas en `.nvmrc` y en `package.json` con el scaffold del monorepo. Si alguien necesita otra, se charla.
