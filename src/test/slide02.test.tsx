// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import App from "../App";

afterEach(() => cleanup());

describe("Slide 02 AyRPC", () => {
  it("muestra ¿Qué es AyRPC? al avanzar desde la portada", async () => {
    render(<App />);

    fireEvent.ended(screen.getByTestId("opening-video"));

    fireEvent.keyDown(window, { key: "ArrowRight" });

    expect(
      await screen.findByRole("heading", { name: "¿Qué es AyRPC?" })
    ).toBeTruthy();

    expect(screen.getByText("Objetivo clave")).toBeTruthy();
  });
});

