// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import App from "../App";

afterEach(() => cleanup());

describe("Slide 09", () => {
  it("aparece después del concepto de computadora", async () => {
    render(<App />);

    fireEvent.ended(screen.getByTestId("opening-video"));

    for (let i = 0; i < 7; i += 1) {
      fireEvent.keyDown(window, { key: "ArrowRight" });
    }

    expect(
      await screen.findByRole("heading", {
        name: "No todas las computadoras parecen una PC",
      })
    ).toBeTruthy();
  });
});
