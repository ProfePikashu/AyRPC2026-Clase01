// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import App from "../App";

afterEach(() => cleanup());

describe("Slide 05 recorrido", () => {
  it("aparece después de la slide de módulos", async () => {
    render(<App />);

    fireEvent.ended(screen.getByTestId("opening-video"));

    fireEvent.keyDown(window, { key: "ArrowRight" });
    fireEvent.keyDown(window, { key: "ArrowRight" });
    fireEvent.keyDown(window, { key: "ArrowRight" });

    expect(
      await screen.findByRole("heading", {
        name: "El curso no termina en el examen",
      })
    ).toBeTruthy();
  });
});
