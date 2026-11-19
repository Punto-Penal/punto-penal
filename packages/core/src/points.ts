/** Resultado de un partido desde el punto de vista de un equipo. */
export type Outcome = "win" | "draw" | "loss";

/**
 * Puntos que da cada resultado. No es una constante porque cambia entre
 * competiciones y temporadas: va en la configuración de cada fase.
 */
export interface PointsSystem {
  win: number;
  draw: number;
  loss: number;
}

export function outcomeFor(goalsFor: number, goalsAgainst: number): Outcome {
  if (goalsFor > goalsAgainst) return "win";
  if (goalsFor < goalsAgainst) return "loss";
  return "draw";
}

export function pointsFor(goalsFor: number, goalsAgainst: number, system: PointsSystem): number {
  return system[outcomeFor(goalsFor, goalsAgainst)];
}
