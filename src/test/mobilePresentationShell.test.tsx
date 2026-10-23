// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { MobilePresentationShell } from "../MobilePresentationShell";

afterEach(() => {
  cleanup();
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

describe("MobilePresentationShell", () => {
  it("carga la presentación embedded dentro de un iframe 1280x720", () => {
    setViewport(800, 360);

    render(<MobilePresentationShell />);

    const frame = screen.getByTitle("AyRPC 2026");

    expect(frame.getAttribute("src")).toBe("/?embedded=1");
    expect(frame.getAttribute("width")).toBe("1280");
    expect(frame.getAttribute("height")).toBe("720");
  });

  it("escala 1280x720 a 0.5 en 800x360", () => {
    setViewport(800, 360);

    render(<MobilePresentationShell />);

    const stage = screen.getByTestId("mobile-presentation-stage");

    expect(stage.style.transform).toBe("scale(0.5)");
  });
});
