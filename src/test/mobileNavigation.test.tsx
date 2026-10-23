// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import App from "../App";

afterEach(() => cleanup());

describe("Navegación mobile de Clase 01", () => {
  it("avanza deslizando hacia la izquierda y vuelve deslizando hacia la derecha", async () => {
    render(<App />);

    fireEvent.ended(screen.getByTestId("opening-video"));

    const presentation = document.querySelector(".presentation") as HTMLElement;
    expect(presentation).toBeTruthy();
    expect(document.querySelector(".intro-clean")).toBeTruthy();

    fireEvent.touchStart(presentation, {
      touches: [{ clientX: 320, clientY: 180 }],
    });

    fireEvent.touchEnd(presentation, {
      changedTouches: [{ clientX: 120, clientY: 180 }],
    });

    await waitFor(() => {
      expect(document.querySelector(".about-ayrpc")).toBeTruthy();
    });

    fireEvent.touchStart(presentation, {
      touches: [{ clientX: 120, clientY: 180 }],
    });

    fireEvent.touchEnd(presentation, {
      changedTouches: [{ clientX: 320, clientY: 180 }],
    });

    await waitFor(() => {
      expect(document.querySelector(".intro-clean")).toBeTruthy();
    });
  });
});
