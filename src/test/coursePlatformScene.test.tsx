// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { CoursePlatformScene } from "../components/CoursePlatformScene";

afterEach(() => cleanup());

describe("Slide 06 plataforma del curso", () => {
  it("muestra los tres modos principales", () => {
    render(<CoursePlatformScene />);

    expect(screen.getByRole("button", { name: /^Classroom$/i })).toBeTruthy();
    expect(screen.getByRole("button", { name: /^Asistencia$/i })).toBeTruthy();
    expect(
      screen.getByRole("button", { name: /^Recuperar clase$/i })
    ).toBeTruthy();
  });

  it("muestra el flujo de recuperación de clase", async () => {
    render(<CoursePlatformScene />);

    fireEvent.click(
      screen.getByRole("button", { name: /^Recuperar clase$/i })
    );

    expect(await screen.findByText("FALTASTE")).toBeTruthy();
    expect(screen.getByText("VER CLASE COMPLETA")).toBeTruthy();
    expect(screen.getByText("CUESTIONARIO")).toBeTruthy();
    expect(screen.getByText("CLASE RECUPERADA")).toBeTruthy();
  });
});
