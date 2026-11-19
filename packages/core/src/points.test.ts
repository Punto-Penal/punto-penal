import { describe, expect, it } from "vitest";
import { outcomeFor, pointsFor, type PointsSystem } from "./points";

const threePoints: PointsSystem = { win: 3, draw: 1, loss: 0 };
const twoPoints: PointsSystem = { win: 2, draw: 1, loss: 0 };

describe("outcomeFor", () => {
  it("distingue victoria, empate y derrota", () => {
    expect(outcomeFor(2, 1)).toBe("win");
    expect(outcomeFor(0, 0)).toBe("draw");
    expect(outcomeFor(1, 3)).toBe("loss");
  });
});

describe("pointsFor", () => {
  it("usa el sistema de puntos que recibe", () => {
    expect(pointsFor(2, 1, threePoints)).toBe(3);
    expect(pointsFor(2, 1, twoPoints)).toBe(2);
  });

  it("da los puntos del empate y de la derrota", () => {
    expect(pointsFor(1, 1, threePoints)).toBe(1);
    expect(pointsFor(0, 2, threePoints)).toBe(0);
  });
});
