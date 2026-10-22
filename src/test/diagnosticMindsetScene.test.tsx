// @vitest-environment jsdom

import {
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { DiagnosticMindsetScene } from "../components/DiagnosticMindsetScene";

afterEach(() => cleanup());

describe("DiagnosticMindsetScene", () => {
  it("muestra el enfoque de descarte progresivo", () => {
    render(<DiagnosticMindsetScene />);

    expect(
      screen.getByRole("heading", {
        name: /diagnosticar no es adivinar/i,
      })
    ).toBeTruthy();

    expect(
      screen.getByRole("button", {
        name: "NO ENCIENDE",
      })
    ).toBeTruthy();

    expect(
      screen.getByRole("button", {
        name: "NO DA VIDEO",
      })
    ).toBeTruthy();

    expect(
      screen.getByRole("button", {
        name: "SE CUELGA",
      })
    ).toBeTruthy();

    expect(
      screen.getByRole("button", {
        name: "NO HAY INTERNET",
      })
    ).toBeTruthy();
  });

  it("cambia el recorrido al seleccionar otro síntoma", () => {
    render(<DiagnosticMindsetScene />);

    fireEvent.click(
      screen.getByRole("button", {
        name: "NO DA VIDEO",
      })
    );

    let focus =
      screen.getByTestId("diagnostic-focus");

    expect(focus.textContent).toMatch(/cable/i);
    expect(focus.textContent).toMatch(/RAM/i);
    expect(focus.textContent).toMatch(/GPU|gráfica/i);

    fireEvent.click(
      screen.getByRole("button", {
        name: "NO HAY INTERNET",
      })
    );

    focus =
      screen.getByTestId("diagnostic-focus");

    expect(focus.textContent).toMatch(/IP/i);
    expect(focus.textContent).toMatch(
      /gateway|router/i
    );
    expect(focus.textContent).toMatch(/DNS/i);
  });

  it("muestra la ayuda con IA al abrir el copiloto", () => {
    render(<DiagnosticMindsetScene />);

    fireEvent.click(
      screen.getByRole("button", {
        name: /ia copiloto/i,
      })
    );

    expect(
      screen.getByRole("heading", {
        name: /la ia puede ayudarte a pensar/i,
      })
    ).toBeTruthy();

    expect(
      screen.getByText(
        /ordená las causas desde la más probable/i
      )
    ).toBeTruthy();
  });

  it("abre y cierra el copiloto de IA desde el lateral", () => {
    render(<DiagnosticMindsetScene />);

    const openButton =
      screen.getByRole("button", {
        name: /ia copiloto/i,
      });

    expect(
      openButton.getAttribute("aria-expanded")
    ).toBe("false");

    fireEvent.click(openButton);

    expect(
      openButton.getAttribute("aria-expanded")
    ).toBe("true");

    expect(
      screen
        .getByTestId("diagnostic-ai-drawer")
        .getAttribute("aria-hidden")
    ).toBe("false");

    fireEvent.click(
      screen.getByRole("button", {
        name: /cerrar copiloto/i,
      })
    );

    expect(
      openButton.getAttribute("aria-expanded")
    ).toBe("false");

    expect(
      screen
        .getByTestId("diagnostic-ai-drawer")
        .getAttribute("aria-hidden")
    ).toBe("true");
  });
});
