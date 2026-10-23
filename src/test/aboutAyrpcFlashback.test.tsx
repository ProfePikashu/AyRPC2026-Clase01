// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { AboutAyrpcScene } from "../components/AboutAyrpcScene";

afterEach(() => cleanup());

describe("Slide 02 · Flashback AyRPC 2025", () => {
  it("muestra solo el visor CRT en Qué es", () => {
    render(<AboutAyrpcScene />);

    expect(
      screen.queryByText("FLASHBACK 2025")
    ).toBeNull();

    expect(
      screen.queryByText("VER LAS CLASES COMPLETAS")
    ).toBeNull();

    const firstImage = screen.getByAltText(
      "AyRPC 2025 - 01.png"
    );

    expect(firstImage).toBeTruthy();

    expect(
      firstImage.getAttribute("src")
    ).toBe("/ayrpc2025-flashback/01.png");
  });
});
