import { describe, expect, it } from "vitest";
import {
  courseFlowEdges,
  createCourseFlowNodes,
} from "../components/CourseFlowReact";

describe("AyRPC course flow", () => {
  it("mantiene todos los pasos principales", () => {
    const nodes =
      createCourseFlowNodes(560);

    const titles =
      nodes.map(
        (item) => item.data.title
      );

    expect(titles).toContain(
      "Te inscribís"
    );

    expect(titles).toContain(
      "Cursás las 12 clases"
    );

    expect(titles).toContain(
      "¿11 clases principales presentes o recuperadas?"
    );

    expect(titles).toContain(
      "Apto para examen final"
    );

    expect(titles).toContain(
      "¿Recuperás pendientes?"
    );

    expect(titles).toContain(
      "No apto para examen"
    );

    expect(titles).toContain(
      "Rendís el examen final"
    );

    expect(titles).toContain(
      "¿Aprueba?"
    );

    expect(titles).toContain(
      "Recuperatorio"
    );

    expect(titles).toContain(
      "¿Aprueba recuperatorio?"
    );

    expect(titles).toContain(
      "Certificado"
    );

    expect(titles).toContain(
      "Sin certificado ni recomendación"
    );

    expect(courseFlowEdges.length)
      .toBe(13);
  });
});
