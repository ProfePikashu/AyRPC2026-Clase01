import { describe, expect, it } from "vitest";
import { class01 } from "../data/class01";

describe("Clase 01", () => {
  it("empieza en portada y termina en cierre", () => {
    expect(class01[0].id).toBe("portada");
    expect(class01.at(-1)?.id).toBe("cierre");
  });

  it("tiene entre 10 y 16 escenas", () => {
    expect(class01.length).toBeGreaterThanOrEqual(10);
    expect(class01.length).toBeLessThanOrEqual(16);
  });

  it("todas las escenas tienen titulo", () => {
    for (const scene of class01) {
      expect(scene.title.trim().length).toBeGreaterThan(0);
    }
  });
});

