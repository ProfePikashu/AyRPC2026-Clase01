// @vitest-environment jsdom

import {
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import App from "../App";

afterEach(() => cleanup());

describe("Slide 12 diagnóstico", () => {
  it("aparece después de los niveles de técnico", async () => {
    render(<App />);

    fireEvent.ended(
      screen.getByTestId("opening-video")
    );

    for (let i = 0; i < 11; i += 1) {
      fireEvent.keyDown(window, {
        key: "ArrowRight",
      });
    }

    expect(
      await screen.findByRole("heading", {
        name: /diagnosticar no es adivinar/i,
      })
    ).toBeTruthy();
  });
});

