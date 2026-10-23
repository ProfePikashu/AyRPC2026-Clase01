import { describe, expect, it } from "vitest";
import {
  getCourseFlowViewport,
} from "../components/CourseFlowReact";

describe("Course Flow viewport", () => {
  it("escala por ancho pero mantiene el diagrama pegado arriba", () => {
    const layout =
      getCourseFlowViewport(500, false);

    expect(layout.viewport.y)
      .toBe(8);

    expect(layout.viewport.zoom)
      .toBeGreaterThan(0.6);

    expect(layout.viewport.zoom)
      .toBeLessThan(0.7);

    expect(layout.canvasHeight)
      .toBeGreaterThan(700);

    expect(layout.canvasHeight)
      .toBeLessThan(800);
  });
});
