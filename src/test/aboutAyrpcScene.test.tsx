// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { AboutAyrpcScene } from "../components/AboutAyrpcScene";

afterEach(() => cleanup());

describe("Slide ¿Qué es AyRPC?", () => {
  it("muestra los cinco bloques principales", () => {
    render(<AboutAyrpcScene />);

    expect(screen.getByText("Qué es")).toBeTruthy();
    expect(screen.getByText("Desde cuándo")).toBeTruthy();
    expect(screen.getByText("Cómo")).toBeTruthy();
    expect(screen.getByText("Quiénes")).toBeTruthy();
    expect(screen.getByText("Objetivo clave")).toBeTruthy();
  });

  it("cambia el contenido al seleccionar un bloque", () => {
    render(<AboutAyrpcScene />);

    fireEvent.click(
      screen.getByRole("button", { name: /Desde cuándo/i })
    );

    expect(
      screen.getByText(/AyRPC nació en 2021/i)
    ).toBeTruthy();
  });
});

