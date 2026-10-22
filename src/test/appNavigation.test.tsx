// @vitest-environment jsdom

import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import App from "../App";

afterEach(() => cleanup());

describe("Navegación global de Clase 01", () => {
  it("Home vuelve a portada y End llega al cierre", async () => {
    render(<App />);

    fireEvent.ended(
      screen.getByTestId("opening-video")
    );

    fireEvent.keyDown(window, {
      key: "End",
    });

    expect(
      await screen.findByRole("heading", {
        name: /preguntas/i,
      })
    ).toBeTruthy();

    fireEvent.keyDown(window, {
      key: "Home",
    });

    expect(
      await screen.findByText(
        "CLASE 01 · INTRODUCCIÓN"
      )
    ).toBeTruthy();
  });

  it("el progreso llega al 100% en la slide 13", async () => {
    const { container } = render(<App />);

    fireEvent.ended(
      screen.getByTestId("opening-video")
    );

    fireEvent.keyDown(window, {
      key: "End",
    });

    await screen.findByRole("heading", {
      name: /preguntas/i,
    });

    const progress =
      container.querySelector(
        ".progress-value"
      ) as HTMLElement;

    expect(progress).toBeTruthy();

    await waitFor(() => {
      expect(
        progress.style.width
      ).toBe("100%");
    });
  });
});
