// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { ComputerConceptScene } from "../components/ComputerConceptScene";

afterEach(() => cleanup());

describe("Slide 08 concepto de computadora", () => {
  it("presenta el flujo fundamental de una computadora", () => {
    render(<ComputerConceptScene />);

    expect(
      screen.getByRole("heading", {
        name: "¿Qué es una computadora?",
      })
    ).toBeTruthy();

    expect(
      screen.getByRole("button", { name: /^ENTRADA$/i })
    ).toBeTruthy();

    expect(
      screen.getByRole("button", { name: /^PROCESAMIENTO$/i })
    ).toBeTruthy();

    expect(
      screen.getByRole("button", { name: /^ALMACENAMIENTO$/i })
    ).toBeTruthy();

    expect(
      screen.getByRole("button", { name: /^SALIDA$/i })
    ).toBeTruthy();
  });

  it("permite ver el mismo proceso con distintos ejemplos", () => {
    render(<ComputerConceptScene />);

    expect(
      screen.getByRole("button", { name: /^TECLADO$/i })
    ).toBeTruthy();

    expect(
      screen.getByRole("button", { name: /^MOUSE$/i })
    ).toBeTruthy();

    expect(
      screen.getByRole("button", { name: /^JUEGO$/i })
    ).toBeTruthy();

    fireEvent.click(
      screen.getByRole("button", { name: /^MOUSE$/i })
    );

    expect(screen.getByText(/movimiento físico/i)).toBeTruthy();
    expect(screen.getByText(/coordenadas/i)).toBeTruthy();
    expect(screen.getByText(/^cursor$/i)).toBeTruthy();

    fireEvent.click(
      screen.getByRole("button", { name: /^JUEGO$/i })
    );

    expect(screen.getByText(/control del jugador/i)).toBeTruthy();
    expect(screen.getByText(/lógica.*render/i)).toBeTruthy();
    expect(screen.getByText(/frame.*sonido/i)).toBeTruthy();
  });

  it("Pelusita resume cada concepto en pocas palabras", () => {
    render(<ComputerConceptScene />);

    expect(
      screen.getByTestId("pelusita-guide")
    ).toBeTruthy();

    expect(
      screen.getByText(
        /información que le damos a la computadora/i
      )
    ).toBeTruthy();

    fireEvent.click(
      screen.getByRole("button", {
        name: /^PROCESAMIENTO$/i,
      })
    );

    expect(
      screen.getByText(
        /toma los datos y hace algo con ellos/i
      )
    ).toBeTruthy();

    fireEvent.click(
      screen.getByRole("button", {
        name: /^ALMACENAMIENTO$/i,
      })
    );

    expect(
      screen.getByText(
        /guarda información para usarla después/i
      )
    ).toBeTruthy();

    fireEvent.click(
      screen.getByRole("button", {
        name: /^SALIDA$/i,
      })
    );

    expect(
      screen.getByText(
        /resultado que la computadora nos devuelve/i
      )
    ).toBeTruthy();
  });
  it("usa la animación real de Pelusita al explicar un concepto", () => {
    render(<ComputerConceptScene />);

    const pelusita = screen.getByRole("img", {
      name: "Pelusita",
    });

    expect(
      pelusita.getAttribute("src")
    ).toContain("pelusita_standby_nobg.webp");

    fireEvent.click(
      screen.getByRole("button", {
        name: /^PROCESAMIENTO$/i,
      })
    );

    expect(
      pelusita.getAttribute("src")
    ).toContain("pelusita_expo_nobg.webp");
  });
});


