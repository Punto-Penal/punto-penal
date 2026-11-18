# Cobertura de datos por liga

**A completar por Rama en la Fase 0, semana 1.** Este relevamiento decide qué muestra el MVP: una liga sin formaciones no tiene ficha de formaciones, y así.

API-Football devuelve un objeto `coverage` **por temporada** de cada liga, que dice qué tipos de datos hay. Se consulta con la cuenta free:

```bash
curl -s "https://v3.football.api-sports.io/leagues?country=Argentina" \
  -H "x-apisports-key: $API_FOOTBALL_KEY"
```

Para cada liga, mirar la temporada actual (`seasons[]` con `current: true`) y anotar sus flags. Cargar la clave en una variable de entorno local; nunca pegarla en el repo.

## Argentina

Marcar `sí` o `no` según el `coverage` de la temporada actual.

| Liga | Id API | Temporada | Eventos | Formaciones | Estadísticas de partido | Estadísticas de jugador | Tablas | Jugadores | Goleadores | Notas |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Liga Profesional | | | | | | | | | | |
| Primera Nacional | | | | | | | | | | |
| Primera B Metropolitana | | | | | | | | | | |
| Primera C | | | | | | | | | | |
| Torneo Federal A | | | | | | | | | | |
| Copa Argentina | | | | | | | | | | |

## Internacionales candidatas para el MVP (elegir 3 o 4)

| Liga | Id API | Temporada | Eventos | Formaciones | Estadísticas de partido | Tablas | Jugadores | Notas |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Premier League (Inglaterra) | | | | | | | | |
| La Liga (España) | | | | | | | | |
| Serie A (Italia) | | | | | | | | |
| Brasileirão (Brasil) | | | | | | | | |
| Bundesliga (Alemania) | | | | | | | | |
| Liga MX (México) | | | | | | | | |

## Conclusiones

Completar cuando estén las tablas: qué ligas entran al MVP, qué datos mostramos de cada una y qué queda para la Fase 2. Si alguna decisión es importante, va como ADR.
