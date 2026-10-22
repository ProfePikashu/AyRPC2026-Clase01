// @vitest-environment jsdom

import {
  cleanup,
  render,
  screen,
} from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { ClosingScene } from "../components/ClosingScene";

afterEach(() => cleanup());

describe("ClosingScene", () => {
  it("cierra la clase con la idea central", () => {
    render(<ClosingScene />);

    expect(
      screen.getByText(/no vinieron a memorizar piezas/i)
    ).toBeTruthy();

    expect(
      screen.getByText(/empezar a pensar como técnicos/i)
    ).toBeTruthy();
  });

  it("deja espacio para preguntas", () => {
    render(<ClosingScene />);

    expect(
      screen.getByRole("heading", {
        name: /preguntas/i,
      })
    ).toBeTruthy();
  });
});
