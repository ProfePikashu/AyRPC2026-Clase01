// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import App from "../App";

afterEach(() => cleanup());

describe("Slide 04 módulos", () => {
  it("llega a módulos del curso avanzando desde el opening", async () => {
    render(<App />);

    fireEvent.ended(screen.getByTestId("opening-video"));

    fireEvent.keyDown(window, { key: "ArrowRight" });
    fireEvent.keyDown(window, { key: "ArrowRight" });

    expect(
      await screen.findByRole("heading", { name: "Módulos del curso" })
    ).toBeTruthy();

    expect(screen.getByText("Malware")).toBeTruthy();
  });
});
