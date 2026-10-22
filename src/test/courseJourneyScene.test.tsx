// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { CourseJourneyScene } from "../components/CourseJourneyScene";

afterEach(() => cleanup());

describe("Slide 05 recorrido del curso", () => {
  it("muestra las cinco etapas principales", () => {
    render(<CourseJourneyScene />);

    expect(screen.getByRole("button", { name: /Examen final/i })).toBeTruthy();
    expect(screen.getByRole("button", { name: /Recuperatorio/i })).toBeTruthy();
    expect(screen.getByRole("button", { name: /Aprobado/i })).toBeTruthy();
    expect(screen.getByRole("button", { name: /LinkedIn/i })).toBeTruthy();
    expect(screen.getByRole("button", { name: /Oportunidades/i })).toBeTruthy();
  });

  it("cambia el contenido al seleccionar otra etapa", async () => {
    render(<CourseJourneyScene />);

    fireEvent.click(
      screen.getByRole("button", { name: /LinkedIn/i })
    );

    expect(
      await screen.findByText(/recomendación profesional/i)
    ).toBeTruthy();
  });
});
