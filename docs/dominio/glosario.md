# Glosario

Vocabulario del fútbol argentino tal como lo usamos en Punto Penal, con su nombre en el código. **Borrador:** lo revisan y completan los 4 en la Fase 0. Si un término o una regla cambia, se actualiza acá en el mismo PR.

Las reglas concretas (cuántos descienden, qué desempates) cambian entre temporadas. Por eso no se escriben en el código: van en la configuración de cada fase y se verifican con la fuente de cada temporada.

## Estructura de una competición

| Término | En el código | Qué es |
| --- | --- | --- |
| Competición | `competition` | Un torneo que se repite en el tiempo: Primera División, Primera Nacional, Copa Argentina |
| Categoría / división | `competition.level` | Nivel en la pirámide: 1 = Primera, 2 = Primera Nacional, 3 = B Metro y Federal A... |
| Edición / temporada | `edition` | Una vez concreta de una competición: "Primera 2026", "Apertura 1995". Puede ser de un año calendario o partida (2024/25) |
| Torneo corto | `edition` | Ediciones de media temporada: Apertura y Clausura (1990/91 a 2014), Inicial y Final. Una temporada puede tener dos campeones |
| Metropolitano / Nacional | `edition` | Los dos torneos de Primera por año entre 1967 y 1985 |
| Fase | `stage` | Una parte de una edición con su propio formato: fase de zonas, playoff, final |
| Zona / grupo | `group` | Subconjunto de equipos que juegan entre sí dentro de una fase |
| Interzonal | `stage.format` | Partidos entre equipos de zonas distintas dentro de la misma fase |
| Fecha / jornada | `matchday` | Una ronda del calendario: "fecha 7" |
| Partido | `match` | Un encuentro; puede ser de ida y vuelta (`leg`) |
| Fixture | `fixtures` | El calendario de partidos de una edición o fase |

## Tablas

| Término | En el código | Qué es |
| --- | --- | --- |
| Tabla de posiciones | `standings` | Clasificación de una fase o zona: puntos, PJ, PG, PE, PP, GF, GC, DG |
| Tabla anual | `standings` (tipo `annual`) | Suma de los puntos de todos los torneos de un año. Se usa para clasificar a copas y, en temporadas recientes, para un descenso |
| Promedios | `relegation_average` | Puntos divididos partidos jugados de las últimas temporadas (en general, 3). Define descensos en Primera |
| Desempate | `tiebreakers` | Criterios ordenados para separar empates en la tabla: diferencia de gol, goles a favor, resultado entre ambos, partido desempate... Cambian según la competición y la temporada |

## Ascensos, descensos y definiciones

| Término | En el código | Qué es |
| --- | --- | --- |
| Ascenso | `promotion` | Pasar a la categoría de arriba al terminar la temporada |
| Descenso | `relegation` | Bajar a la categoría de abajo |
| Reducido | `playoff` (tipo `promotion`) | Playoff por un ascenso entre equipos que no subieron directo; típico de la Primera Nacional y la B Metro |
| Promoción | `playoff` (tipo `promotion_relegation`) | Serie entre un equipo de arriba y uno de abajo para definir quién juega en la categoría superior. Existió en Primera hasta 2014 |
| Playoff / eliminación directa | `stage.type = knockout` | Fase de partidos únicos o ida y vuelta donde el perdedor queda afuera |
| Campeón | `edition.champion` | Ganador de una edición. Con torneos cortos, puede haber dos por temporada |

## Partidos y clubes

| Término | En el código | Qué es |
| --- | --- | --- |
| Local / visitante | `home` / `away` | Quién juega en su cancha. Puede haber cancha neutral |
| Suspendido | `status = suspended` | Partido que no terminó; puede reanudarse o resolverse por escritorio |
| Resultado por escritorio | `status = awarded` | Resultado definido por el tribunal, no en la cancha. Cuenta en la tabla aunque no se haya jugado |
| Clásico | `rivalry` | Partido entre rivales históricos. El superclásico es Boca–River |
| Club fusionado o renombrado | `club_names` | Un club conserva su identidad (`clubs.id`) aunque cambie de nombre |

## Simulador y juegos

| Término | En el código | Qué es |
| --- | --- | --- |
| Formato | `format` | Configuración de una fase: zonas, rondas, puntos, desempates, quién avanza |
| Semilla | `seed` | Número que hace reproducible una simulación: misma semilla + misma versión del motor = mismo resultado |
| Elo | `rating` | Puntaje de fuerza de un club que sube o baja según resultados; base del modelo de partido |
| Desafío diario | `daily_puzzle` | El juego del día, igual para todos, generado por adelantado |
| Racha | `streak` | Días seguidos acertando un juego |
