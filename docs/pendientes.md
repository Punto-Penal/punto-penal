# Pendientes

Decisiones abiertas para cerrar en grupo. Cada una trae una recomendación para no arrancar de cero. Cuando se cierra una, se tilda acá y, si es importante, se escribe su ADR en [decisiones/](decisiones/README.md).

## Para la primera reunión

- [ ] **Horas por semana de cada uno.** Define si la Fase 1 dura 8 semanas o 16.
- [ ] **Confirmar los ADR 0001 a 0008** (hoy en estado Propuesta) o cambiarlos.
- [ ] **Idioma del código.** Recomendado: código en inglés, interfaz, URLs y docs en español ([ADR 0006](decisiones/0006-idioma-del-codigo.md)).
- [ ] **Esquema declarativo de Supabase.** Recomendado: sí ([ADR 0007](decisiones/0007-esquema-declarativo-supabase.md)). Lo decide Pela con el grupo.
- [ ] **¿Pela con el archivo y Teby con el simulador, o al revés?**
- [ ] **Usuarios de GitHub de Rama, Pela y Emi**, para invitarlos a la organización y completar `.github/CODEOWNERS`.

## Para antes de la Fase 1

- [ ] **Ligas de afuera en el MVP.** Recomendado: 3 o 4 (por ejemplo Inglaterra, España, Italia y Brasil), según [la cobertura](datos/cobertura.md) y el presupuesto de requests.
- [ ] **Primer juego.** Recomendado: Adiviná el futbolista, porque reutiliza los planteles de la ingesta.
- [ ] **Realismo del simulador v1.** Recomendado: fuerza de cada club con Elo, goles con distribución de Poisson y semilla para que sea reproducible.
- [ ] **Dominio.** Revisar disponibilidad de variantes de "puntopenal" en .com.ar y .com. El análisis de Rama cita ARS 8.500 por año para .com.ar en NIC Argentina; falta confirmarlo en nic.ar.
- [ ] **Precio de API-Football Pro.** costos.md dice USD 19 por mes y el análisis de Rama, USD 16. Lo confirma Rama al abrir la cuenta.
- [ ] **Meta de tráfico.** Rama propone 50.000 páginas vistas por mes como referencia para la puerta de la Fase 2. Con esa cifra se cubren los costos solo con el hosting más barato ([sostenibilidad](vision/sostenibilidad.md#punto-de-equilibrio-con-nuestro-stack)).
- [ ] **Cómo se reparten los gastos** hasta que haya ingresos. Desde el lanzamiento son ~USD 19 por mes más el dominio; con anuncios, entre USD 24 y 64. Los primeros meses con anuncios probablemente no cubran el costo ([sostenibilidad](vision/sostenibilidad.md#cuándo-llega-la-plata)).
- [ ] **Cuentas de servicios.** Recomendado: un mail del proyecto como dueño de GitHub, Vercel, Supabase y API-Football, con los 4 como miembros.
- [ ] **Versión de Node** para todo el equipo (se fija en `.nvmrc` con el scaffold).

## Cerrados

Cuando se cierre un pendiente, movelo acá con la fecha y el enlace a su ADR o acta.

- [x] 2026-11-17 · **Nombre del repo:** se renombró de `punto-penal-` a `punto-penal`, antes de conectar Vercel y Supabase.
