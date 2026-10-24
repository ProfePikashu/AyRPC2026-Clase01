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
      screen.getByRole("button", { name: /Recuperatorio/i })
    );

    expect(
      await screen.findByText(/Una segunda instancia/i)
    ).toBeTruthy();
  });
});

describe("Media del recorrido final", () => {
  it("usa la imagen correspondiente en cada etapa", async () => {
    render(<CourseJourneyScene />);

    expect(
      screen.getByRole("img", { name: /examen final/i })
    ).toBeTruthy();

    fireEvent.click(
      screen.getByRole("button", { name: /Recuperatorio/i })
    );

    expect(
      await screen.findByRole("img", { name: /recuperatorio/i })
    ).toBeTruthy();

    fireEvent.click(
      screen.getByRole("button", { name: /Aprobado/i })
    );

    expect(
      await screen.findByRole("img", { name: /aprobado/i })
    ).toBeTruthy();

    fireEvent.click(
      screen.getByRole("button", { name: /LinkedIn/i })
    );

    expect(
      await screen.findByRole("img", { name: /linkedin/i })
    ).toBeTruthy();

    expect(
      screen.queryByText(/Recomendación profesional/i)
    ).toBeNull();

    fireEvent.click(
      screen.getByRole("button", { name: /Oportunidades/i })
    );

    expect(
      await screen.findByRole("img", { name: /oportunidades/i })
    ).toBeTruthy();
  });
});

