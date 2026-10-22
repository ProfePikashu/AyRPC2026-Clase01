// @vitest-environment jsdom

import {
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { ComputerTypesScene } from "../components/ComputerTypesScene";

afterEach(() => cleanup());

describe("Slide 09 tipos de computadora", () => {
  it("muestra que una computadora puede adoptar muchos formatos", () => {
    render(<ComputerTypesScene />);

    expect(
      screen.getByRole("heading", {
        name: "No todas las computadoras parecen una PC",
      })
    ).toBeTruthy();

    expect(screen.getByRole("button", { name: /^ESCRITORIO$/i })).toBeTruthy();
    expect(screen.getByRole("button", { name: /^NOTEBOOK$/i })).toBeTruthy();
    expect(screen.getByRole("button", { name: /^ALL-IN-ONE$/i })).toBeTruthy();
    expect(screen.getByRole("button", { name: /^MINI PC$/i })).toBeTruthy();
    expect(screen.getByRole("button", { name: /^SERVIDOR$/i })).toBeTruthy();
    expect(screen.getByRole("button", { name: /^ARCADE$/i })).toBeTruthy();
    expect(screen.getByRole("button", { name: /^KIOSCO$/i })).toBeTruthy();
    expect(screen.getByRole("button", { name: /^INDUSTRIAL$/i })).toBeTruthy();
    expect(screen.getByRole("button", { name: /^EMBEBIDO$/i })).toBeTruthy();
  });

  it("explica cómo cambia la computadora según su función", () => {
    render(<ComputerTypesScene />);

    fireEvent.click(
      screen.getByRole("button", {
        name: /^SERVIDOR$/i,
      })
    );

    expect(screen.getByText(/^SERVICIOS Y RED$/i)).toBeTruthy();
    expect(
      screen.getByText(/^DISPONIBILIDAD Y ESTABILIDAD$/i)
    ).toBeTruthy();

    fireEvent.click(
      screen.getByRole("button", {
        name: /^ARCADE$/i,
      })
    );

    expect(screen.getByText(/^ENTRETENIMIENTO$/i)).toBeTruthy();
    expect(
      screen.getByText(/^RESPUESTA Y ROBUSTEZ$/i)
    ).toBeTruthy();

    fireEvent.click(
      screen.getByRole("button", {
        name: /^INDUSTRIAL$/i,
      })
    );

    expect(
      screen.getByText(/^CONTROL Y AUTOMATIZACIÓN$/i)
    ).toBeTruthy();

    expect(
      screen.getByText(/^CONFIABILIDAD Y RESISTENCIA$/i)
    ).toBeTruthy();
  });
  it("explica la nube como una computadora remota", () => {
    render(<ComputerTypesScene />);

    fireEvent.click(
      screen.getByRole("button", {
        name: /^¿Y LA NUBE\?$/i,
      })
    );

    expect(
      screen.getByText(
        /la nube es, esencialmente, la computadora de otro/i
      )
    ).toBeTruthy();

    expect(
      screen.getByText(/servidor remoto/i)
    ).toBeTruthy();
  });
});

