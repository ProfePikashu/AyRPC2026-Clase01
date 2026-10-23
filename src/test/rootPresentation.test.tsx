// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
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

describe("RootPresentation", () => {
  it("usa el shell mobile en un teléfono horizontal", () => {
    setViewport(800, 360);

    render(<RootPresentation />);

    expect(screen.getByTestId("mobile-presentation-shell")).toBeTruthy();
  });

  it("renderiza App directamente cuando está embedded", () => {
    setViewport(1280, 720);
    window.history.replaceState({}, "", "/?embedded=1");

    render(<RootPresentation />);

    expect(screen.getByTestId("opening-video")).toBeTruthy();
    expect(screen.queryByTestId("mobile-presentation-shell")).toBeNull();
  });

  it("renderiza App directamente en desktop", () => {
    setViewport(1920, 1080);

    render(<RootPresentation />);

    expect(screen.getByTestId("opening-video")).toBeTruthy();
    expect(screen.queryByTestId("mobile-presentation-shell")).toBeNull();
  });
});
