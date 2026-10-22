// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import App from "../App";

afterEach(() => cleanup());

describe("Opening de la presentación", () => {
  it("muestra el video antes de la portada y entra a AyRPC al terminar", () => {
    render(<App />);

    expect(screen.getByText("INICIAR PRESENTACIÓN")).toBeTruthy();
    expect(screen.queryByText("CLASE 01 · INTRODUCCIÓN")).toBeNull();

    fireEvent.ended(screen.getByTestId("opening-video"));

    expect(screen.queryByText("INICIAR PRESENTACIÓN")).toBeNull();
    expect(screen.getByText("CLASE 01 · INTRODUCCIÓN")).toBeTruthy();
  });
});

