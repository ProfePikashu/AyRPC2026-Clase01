// @vitest-environment jsdom

import {
  cleanup,
  render,
  screen,
} from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import App from "../App";

afterEach(() => cleanup());

describe("Guard de orientación vertical", () => {
  it("incluye el aviso para girar el dispositivo", () => {
    render(<App />);

    expect(
      screen.getByText(
        "Girá el dispositivo para ver la presentación."
      )
    ).toBeTruthy();
  });
});
