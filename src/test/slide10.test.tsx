// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import App from "../App";

afterEach(() => cleanup());

describe("Slide 10 evolución del técnico", () => {
  it("muestra la progresión del alumno a través de los 11 módulos restantes", async () => {
    render(<App />);

    fireEvent.ended(screen.getByTestId("opening-video"));

    for (let i = 0; i < 9; i += 1) {
      fireEvent.keyDown(window, { key: "ArrowRight" });
    }

    expect(
      await screen.findByRole("heading", {
        name: /pensar como técnico/i,
      })
    ).toBeTruthy();

    const modules = [
      "02 · COMPONENTES",
      "03 · COMPATIBILIDAD Y ARMADO",
      "04 · SISTEMAS OPERATIVOS",
      "05 · BIOS / UEFI",
      "06 · DRIVERS Y HERRAMIENTAS",
      "07 · MICROSOLDADURA I",
      "08 · MICROSOLDADURA II",
      "09 · DIAGNÓSTICO",
      "10 · REDES",
      "11 · INTRODUCCIÓN A CIBERSEGURIDAD",
      "12 · MALWARE",
    ];

    for (const module of modules) {
      expect(
        screen.getAllByText(module, { exact: true }).length
      ).toBeGreaterThan(0);
    }
  });
  it("muestra cómo cambia la forma de pensar del técnico", async () => {
    render(<App />);

    fireEvent.ended(screen.getByTestId("opening-video"));

    for (let i = 0; i < 9; i += 1) {
      fireEvent.keyDown(window, { key: "ArrowRight" });
    }

    await screen.findByRole("heading", {
      name: /pensar como técnico/i,
    });

    fireEvent.click(
      screen.getByRole("button", {
        name: /encontrar y demostrar fallas/i,
      })
    );

    const focus = screen.getByTestId("technician-evolution-focus");

    expect(
      focus.textContent
    ).toMatch(/¿Qué está fallando y qué evidencia tengo\?/i);

    expect(
      focus.textContent
    ).toMatch(/HIPÓTESIS.*MEDICIÓN.*EVIDENCIA/i);

    fireEvent.click(
      screen.getByRole("button", {
        name: /investigar lo que no se ve/i,
      })
    );

    expect(
      focus.textContent
    ).toMatch(/¿Qué ocurrió realmente dentro del sistema\?/i);

    expect(
      focus.textContent
    ).toMatch(/EVIDENCIA.*DECISIÓN/i);
  });
});



