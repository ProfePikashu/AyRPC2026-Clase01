// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import App from "../App";

afterEach(() => cleanup());

describe("Slide 06 plataforma", () => {
  it("aparece después del recorrido del curso", async () => {
    render(<App />);

    fireEvent.ended(screen.getByTestId("opening-video"));

    fireEvent.keyDown(window, { key: "ArrowRight" });
    fireEvent.keyDown(window, { key: "ArrowRight" });
    fireEvent.keyDown(window, { key: "ArrowRight" });
    fireEvent.keyDown(window, { key: "ArrowRight" });

    expect(
      await screen.findByRole("heading", {
        name: "Tu cursada vive acá",
      })
    ).toBeTruthy();

    expect(
      screen.getByRole("button", { name: /^Asistencia$/i })
    ).toBeTruthy();
  });
});
