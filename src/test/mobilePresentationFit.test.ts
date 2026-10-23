import { describe, expect, it } from "vitest";
import { getPresentationFitScale } from "../mobileFit";

describe("Mobile presentation fit", () => {
  it("encaja una slide 1280x720 completa dentro de 800x360", () => {
    expect(getPresentationFitScale(800, 360)).toBeCloseTo(0.5, 5);
  });

  it("encaja una slide completa dentro de 844x390", () => {
    expect(getPresentationFitScale(844, 390)).toBeCloseTo(390 / 720, 5);
  });

  it("no agranda la presentación por encima de su tamaño lógico", () => {
    expect(getPresentationFitScale(1920, 1080)).toBe(1);
  });
});
