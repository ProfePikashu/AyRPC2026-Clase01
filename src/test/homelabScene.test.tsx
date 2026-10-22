// @vitest-environment jsdom

import {
  cleanup,
  render,
  screen,
} from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { HomelabScene } from "../components/HomelabScene";

afterEach(() => cleanup());

describe("HomelabScene", () => {
  it("presenta el concepto de homelab y su recorrido", () => {
    render(<HomelabScene />);

    expect(
      screen.getByRole("heading", {
        name: /homelab/i,
      })
    ).toBeTruthy();

    expect(screen.getByText(/^CASA$/i)).toBeTruthy();
    expect(screen.getByText(/red local/i)).toBeTruthy();
    expect(screen.getByText(/servidor.*nas/i)).toBeTruthy();
    expect(screen.getByText(/servicios/i)).toBeTruthy();

    expect(screen.getByText(/backups/i)).toBeTruthy();
    expect(screen.getByText(/virtualización/i)).toBeTruthy();
    expect(screen.getByText(/cloud/i)).toBeTruthy();
  });
});

