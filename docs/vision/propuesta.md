# Propuesta inicial

Punto Penal es una página web de fútbol que reúne en un mismo lugar partidos y competiciones, estadísticas e historia, juegos diarios y un simulador de campeonatos, con foco en el fútbol argentino. Versión en Markdown de la propuesta del grupo de noviembre de 2026; el PDF original quedó como documento de trabajo.

> La intención no es hacer solamente otra página de resultados. La propuesta busca combinar una plataforma informativa con entretenimiento y herramientas para que los propios usuarios puedan explorar cómo podría organizarse el fútbol.

La idea nace como un proyecto personal, por interés en el fútbol y en el desarrollo web. No está planteado principalmente como un negocio, aunque se contempla generar ingresos modestos para cubrir los costos de mantenerlo.

| Área | Peso conceptual | Enfoque |
| --- | --- | --- |
| Fútbol | 50% | Resultados, competiciones, clubes e historia |
| Simulador | 30% | Simular temporadas y crear formatos propios |
| Juegos | 20% | Desafíos diarios y estadísticas personales |

## 1. Fútbol: resultados, competiciones y estadísticas

El módulo principal y la base informativa. Partidos en vivo, resultados anteriores, próximos encuentros, tablas de posiciones y calendarios. Prioriza Argentina y, en una primera etapa, suma algunas ligas internacionales.

**Cobertura argentina prevista**
- Primera División y Primera Nacional.
- Primera B Metropolitana y Primera C.
- Torneo Federal A.
- Torneo Regional Federal Amateur, si la disponibilidad y calidad de los datos lo permiten.
- A futuro, otras competiciones regionales y provinciales.

**Cobertura internacional inicial:** una selección de ligas de Europa y América (por ejemplo Inglaterra, España, Italia, Alemania, Francia, México y Estados Unidos), según fuentes de datos disponibles y costos.

**Información de clubes y torneos**
- Perfiles de clubes y competiciones.
- Calendarios, resultados y tablas de posiciones.
- Campeones por temporada y cantidad de títulos.
- Ascensos, descensos y participaciones por categoría.
- Tablas históricas e historiales entre equipos.
- Récords, rachas y estadísticas de temporadas.

> La profundidad histórica es uno de los diferenciales buscados, especialmente para el fútbol argentino. Recopilar y verificar datos antiguos, sobre todo del ascenso y torneos regionales, puede ser extenso. Por eso el archivo se construye gradualmente.

## 2. Archivo histórico del fútbol argentino

Recorrer temporadas anteriores: elegir un año y consultar campeones, tablas, equipos participantes, ascensos y descensos, según la información disponible.

**Primera aproximación**
- Campeones históricos de Primera División.
- Campeones por temporada y tabla de máximos campeones.
- Ascensos y descensos de las principales categorías.
- Temporadas anteriores y sus posiciones finales.

**Ampliaciones posteriores**
- Más temporadas y categorías del ascenso.
- Historiales completos entre clubes.
- Récords y estadísticas históricas.
- Evolución de los formatos de los torneos.
- Clubes desaparecidos, fusionados o con cambios de nombre.

## 3. Juegos diarios

Desafíos futboleros breves que se renuevan cada día, para generar motivos para volver. Con modalidad argentina e internacional cuando corresponda.

| Juego | Dinámica |
| --- | --- |
| Adiviná el futbolista | Descubrir un jugador a partir de pistas sobre nacionalidad, posición, edad o trayectoria |
| Adiviná el club | Identificar un equipo por escudo, colores, historia o pistas |
| Estadísticas o trayectoria | Desafíos sobre números, equipos de un futbolista o datos históricos |

**Funciones asociadas**
- Jugar sin registrarse; la cuenta es opcional.
- Con cuenta: guardar partidas, aciertos, rachas y estadísticas personales.
- Compartir resultados para comparar con amigos.
- Más juegos, rankings y desafíos especiales con el tiempo.

## 4. Simulador de fútbol

El módulo más distintivo. Representar el fútbol argentino actual y, más adelante, crear estructuras de competición propias. Avanzar temporadas y ver campeones, ascensos, descensos, tablas y evolución de los clubes. Los resultados los genera el simulador, no son reales.

**Primera versión: simular una estructura existente**
- Elegir una estructura inicial de divisiones y equipos.
- Generar calendarios y simular partidos.
- Calcular tablas y definir campeones.
- Resolver ascensos y descensos.
- Avanzar varias temporadas seguidas y consultar resultados.

**Versión ampliada: crear un sistema propio**
- Definir cantidad de divisiones y equipos por división.
- Elegir los clubes participantes.
- Configurar ascensos y descensos.
- Elegir formatos: todos contra todos, grupos, torneos cortos, playoffs y promociones.
- Guardar configuraciones y simular muchas temporadas.
- Consultar la historia generada: campeones, récords y evolución de cada club.

> Ejemplo: cuatro divisiones de 20 equipos, dos ascensos y dos descensos por categoría, y 30 temporadas simuladas para ver cómo evoluciona ese fútbol ficticio.

## 5. Funcionalidades complementarias (después de la primera versión)

- **Comparador de clubes:** títulos, participaciones, ascensos, descensos, posiciones históricas, enfrentamientos y estadísticas.
- **Predicciones de partidos:** resultado exacto o 1X2; al cerrar, porcentajes de la comunidad, participantes y, eventualmente, rankings de aciertos.
- **Simulaciones compartidas:** compartir por enlace, copiar configuraciones, descubrir sistemas de otros usuarios.
- **Foro o comunidad:** a largo plazo; requiere moderación, denuncias, bloqueos y antispam. No es prioridad inicial.
- **Propuestas para reorganizar el fútbol argentino:** publicar, comparar y votar formatos alternativos y probarlos en el simulador.

## 6. Desarrollo por etapas

| Etapa | Contenido principal |
| --- | --- |
| Primera versión | Resultados y competiciones principales; perfiles básicos; archivo histórico inicial; uno a tres juegos; cuentas opcionales; simulador básico |
| Versiones cercanas | Comparador de clubes; predicciones; ampliación del archivo; simulador personalizado; simulaciones compartidas |
| Largo plazo | Foro/comunidad; archivo más completo; más ligas internacionales; propuestas de formatos; nuevos juegos y torneos comunitarios |

> El orden es orientativo, no un compromiso de fechas. Es preferible lanzar una base útil y seguir mejorándola antes que intentar completar todo antes de mostrarla.

La versión detallada y actualizada de las etapas está en [../plan/hoja-de-ruta.md](../plan/hoja-de-ruta.md).

## 7. Sostenibilidad: anuncios y donaciones

El proyecto no es principalmente comercial, pero busca cubrir sus costos (dominio, alojamiento, servicios, APIs de datos).

- **Anuncios:** principal vía potencial de ingresos, cuando haya versión publicada y tráfico. Ubicados de forma moderada, sin perjudicar la navegación, los resultados ni los juegos.
- **Donaciones voluntarias:** opcionales, sin condicionar el uso de las funciones principales; quizás algún reconocimiento a quienes colaboren.

Análisis de costos y de la conveniencia de cada vía en [../costos.md](../costos.md).

## 8. Aspectos a definir cuando el proyecto avance

- Identidad visual: colores, tipografía, logo y diseño.
- Fuentes de datos: disponibilidad, calidad, actualización, permisos y costos.
- Alcance inicial: ligas y divisiones que realmente se puedan mantener.
- Funcionamiento del simulador: criterios para generar resultados y nivel de realismo.
- Cuentas de usuario: qué se guarda y qué requiere iniciar sesión.
- Infraestructura: dominio, alojamiento, base de datos y servicios externos.
- Publicidad y donaciones: proveedores, formatos, condiciones y costos.

Las respuestas que ya hay están en [../decisiones/](../decisiones/README.md); las que faltan, en [../pendientes.md](../pendientes.md).

## En pocas palabras

Punto Penal busca ser un lugar para vivir el fútbol más allá de los partidos: consultar resultados, explorar la historia de los clubes, jugar desafíos diarios y crear distintas versiones posibles del fútbol argentino. Se construye por etapas, con identidad propia y margen para crecer según el tiempo, los recursos y el interés que genere.
