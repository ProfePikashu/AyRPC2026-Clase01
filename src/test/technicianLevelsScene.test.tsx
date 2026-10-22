// @vitest-environment jsdom

import {
  cleanup,
  render,
  screen,
} from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { TechnicianLevelsScene } from "../components/TechnicianLevelsScene";

afterEach(() => cleanup());

describe("TechnicianLevelsScene", () => {
  it("presenta la progresión de autonomía técnica", () => {
    render(<TechnicianLevelsScene />);

    expect(
      screen.getByRole("heading", {
        name: /niveles de técnico/i,
      })
    ).toBeTruthy();

    expect(
      screen.getByText(/^INICIAL$/i)
    ).toBeTruthy();

    expect(
      screen.getByText(/^TÉCNICO$/i)
    ).toBeTruthy();

    expect(
      screen.getByText(/^DIAGNÓSTICO$/i)
    ).toBeTruthy();

    expect(
      screen.getByText(/^SISTEMAS$/i)
    ).toBeTruthy();

    expect(
      screen.getByText(/^ESPECIALIZACIÓN$/i)
    ).toBeTruthy();
  });

  it("aclara que no son rangos oficiales", () => {
    render(<TechnicianLevelsScene />);

    expect(
      screen.getByText(/no son rangos oficiales/i)
    ).toBeTruthy();

    expect(
      screen.getByText(/autonomía técnica/i)
    ).toBeTruthy();
  });
});
