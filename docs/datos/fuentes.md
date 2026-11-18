# Fuentes de datos

Ninguna fuente cubre todo. Usamos API-Football para la temporada actual, carga propia para la historia, y todo entra a nuestra base por un adaptador: nunca dependemos del formato de un proveedor. Dueño: Rama. Decisión en [ADR 0003](../decisiones/0003-api-football-detras-de-adaptador.md).

| Fuente | Qué aporta para Argentina | Costo y licencia | Uso en Punto Penal |
| --- | --- | --- | --- |
| [API-Football](https://www.api-football.com/pricing) | Liga Profesional, Primera Nacional, B Metro, C, Federal A y Copa Argentina. El detalle varía por liga: el ascenso trae menos | Free: 100 requests/día. Pro: USD 19/mes, 7.500/día. Ultra: USD 29/mes, 75.000/día. Mega: USD 39/mes, 150.000/día | Proveedor principal: en vivo, fixtures, tablas, planteles |
| [Sportmonks](https://www.sportmonks.com/football-api/plans-pricing) | Primera y ascenso (fixtures, tablas) | Planes a medida; terceros reportan desde €29/mes por 5 ligas | Plan B si API-Football falla |
| [football-data.org](https://www.football-data.org/) | Free con 12 competiciones, casi todas europeas | Gratis o pago | Opcional, solo internacional |
| [Wikidata](https://www.wikidata.org/) | Clubes, estadios, fundación, nombres, títulos | Gratis, CC0 (uso libre) | Base de clubes e historia |
| Wikipedia | Campeones y tablas históricas | Gratis, CC BY-SA (atribuir y compartir igual) | Referencia para cargar y verificar |
| [RSSSF](https://rsssf.org/tablesa/arghist.html) | Tablas finales de Argentina desde 1891, incluido el ascenso | Gratis, pero con copyright de sus autores | Para verificar. Pedir permiso antes de copiar en bloque |
| [openfootball](https://github.com/openfootball/football.json) | Ligas abiertas, sobre todo Europa | Dominio público (CC0) | Datos de prueba e internacionales históricos |
| Promiedos, Transfermarkt | Todo, pero sin API | Sus términos lo prohíben | **No usar** |

Los precios y la cobertura de API-Football salen de búsquedas de noviembre de 2026 (su sitio bloquea la lectura automática): **confirmarlos al crear la cuenta**. La cobertura real se releva en [cobertura.md](cobertura.md).

## Estrategia por capa

- **Temporada actual y en vivo:** una Edge Function consulta `fixtures?live=all` cada 30 a 60 segundos, solo cuando hay partidos en juego. Fixtures y tablas se sincronizan 1 o 2 veces por día. Una llamada por minuto son 1.440 requests diarios: entra holgado en el plan Pro.
- **Ascenso:** lo que API-Football tenga, y nada más al principio. Mejor una tabla correcta que una ficha incompleta.
- **Histórico:** carga curada por nosotros con un importador CSV. Cada fila guarda su fuente para poder rastrearla y corregirla.
- **Desarrollo:** el plan Free alcanza si guardamos las respuestas en la base y en archivos de prueba (`packages/ingestion/fixtures/`). Se paga Pro recién al lanzar.

## Presupuesto de requests (plan Pro, 7.500/día)

| Uso | Requests por día (aprox.) |
| --- | --- |
| En vivo: `fixtures?live=all` cada 30 s durante partidos | hasta 2.880 en un día con partidos todo el día |
| Fixtures y tablas de ~10 ligas, 2 veces por día | ~40 |
| Planteles y jugadores (semanal, repartido) | ~50 |
| Margen para detalle por partido (formaciones, estadísticas) | el resto |

Si se suma detalle por partido para muchas ligas, el salto es a Ultra (USD 29). El costo crece con la cobertura, no con los usuarios: ningún usuario llama a la API.

## Licencias e imágenes

- Wikidata (CC0) es la base más segura para datos de clubes.
- Lo que venga de Wikipedia se atribuye (CC BY-SA).
- RSSSF se usa para verificar; para copiar compilaciones enteras, pedir permiso a sus autores.
- Escudos y fotos son marcas o tienen derechos de terceros. Usar los que provee la API, guardados en nuestro almacenamiento, y revisar el tema antes de monetizar.
