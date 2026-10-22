// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { CourseHonestyScene } from "../components/CourseHonestyScene";

afterEach(() => cleanup());

describe("Slide 07 honestidad profesional", () => {
  it("muestra los tres casos principales", () => {
    render(<CourseHonestyScene />);

    expect(
      screen.getByRole("button", { name: /^La PC no da video$/i })
    ).toBeTruthy();

    expect(
      screen.getByRole("button", { name: /^Hay que formatearla$/i })
    ).toBeTruthy();

    expect(
      screen.getByRole("button", { name: /^La fuente murió$/i })
    ).toBeTruthy();
  });

  it("permite cambiar de caso y mantiene el enfoque en diagnosticar primero", async () => {
    render(<CourseHonestyScene />);

    fireEvent.click(
      screen.getByRole("button", { name: /^Hay que formatearla$/i })
    );

    expect(
      await screen.findByText(/diagnosticar primero/i)
    ).toBeTruthy();

    expect(
      screen.getByText(/observar/i)
    ).toBeTruthy();

    expect(
      screen.getByText(/probar/i)
    ).toBeTruthy();

    expect(
      screen.getByText(/^AISLAR$/i)
    ).toBeTruthy();

    expect(
      screen.getByText(/medir/i)
    ).toBeTruthy();

    expect(
      screen.getByText(/explicar/i)
    ).toBeTruthy();
  });

  it("marca como incorrecto cambiar piezas sin comprobar", async () => {
    render(<CourseHonestyScene />);

    fireEvent.click(
      screen.getByRole("button", { name: /^La fuente murió$/i })
    );

    expect(
      await screen.findByText(/cambio sin justificación/i)
    ).toBeTruthy();

    expect(
      screen.getByText(/no seas deshonesto/i)
    ).toBeTruthy();
  });
});

