import { describe, expect, it } from "vitest";
import { class01 } from "../data/class01";

describe("Clase 01 · recorrido final", () => {
  it("tiene exactamente 13 escenas navegables", () => {
    expect(class01).toHaveLength(13);
  });

  it("usa los IDs semánticos en el orden final", () => {
    expect(class01.map((scene) => scene.id)).toEqual([
      "portada",
      "que-es-ayrpc",
      "modulos",
      "recorrido",
      "plataforma",
      "honestidad",
      "computadora",
      "formatos",
      "homelab",
      "evolucion-tecnico",
      "niveles-tecnico",
      "diagnostico",
      "cierre",
    ]);
  });
});
