// @vitest-environment jsdom

import {
  cleanup,
  render,
  screen,
} from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { ComputerTypesScene } from "../components/ComputerTypesScene";

afterEach(() => cleanup());

describe("BuildCores teaser", () => {
  it("adelanta BuildCores para las clases de armado", () => {
    render(<ComputerTypesScene />);

    expect(
      screen.getByRole("link", {
        name: /explorar buildcores/i,
      })
    ).toBeTruthy();

    expect(
      screen.getByText(
        /componentes, compatibilidad y armado/i
      )
    ).toBeTruthy();

    expect(
      screen
        .getByRole("link", {
          name: /explorar buildcores/i,
        })
        .getAttribute("href")
    ).toBe(
      "https://www.buildcores.com/setup/x5lJIsl1A?view=setup"
    );
  });
});
