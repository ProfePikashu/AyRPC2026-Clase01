// @vitest-environment jsdom

import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { RootPresentation } from "../RootPresentation";

afterEach(() => {
  cleanup();
  window.history.replaceState({}, "", "/");
});

function setViewport(width: number, height: number) {
  Object.defineProperty(window, "innerWidth", {
    configurable: true,
    value: width,
  });

  Object.defineProperty(window, "innerHeight", {
    configurable: true,
    value: height,
  });
}

describe("RootPresentation resize", () => {
  it("cambia automáticamente de desktop a shell mobile al rotar", async () => {
    setViewport(1920, 1080);
    render(<RootPresentation />);

    expect(screen.getByTestId("opening-video")).toBeTruthy();

    setViewport(800, 360);
    window.dispatchEvent(new Event("resize"));

    await waitFor(() => {
      expect(screen.getByTestId("mobile-presentation-shell")).toBeTruthy();
    });
  });
});
