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

describe("Slide 11 niveles de técnico", () => {
  it("aparece después de la evolución del técnico", async () => {
    render(<App />);

    fireEvent.ended(
      screen.getByTestId("opening-video")
    );

    for (let i = 0; i < 10; i += 1) {
      fireEvent.keyDown(window, {
        key: "ArrowRight",
      });
    }

    expect(
      await screen.findByRole("heading", {
        name: /niveles de técnico/i,
      })
    ).toBeTruthy();

    expect(
      screen.getByText(/^INICIAL$/i)
    ).toBeTruthy();

    expect(
      screen.getByText(/^ESPECIALIZACIÓN$/i)
    ).toBeTruthy();
  });
});
