// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { AboutAyrpcScene } from "../components/AboutAyrpcScene";

class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

globalThis.ResizeObserver =
  ResizeObserverMock as unknown as typeof ResizeObserver;

Object.defineProperty(window, "ResizeObserver", {
  writable: true,
  value: ResizeObserverMock,
});

window.scrollTo = vi.fn();

afterEach(() => cleanup());

describe("AyRPC course flow · React Flow migration", () => {
  it("renderiza el recorrido mediante React Flow", async () => {
    render(<AboutAyrpcScene />);

    fireEvent.click(
      screen.getByText("Cómo").closest("button")!
    );

    await screen.findByText("Apto para examen final");

    expect(
      screen.queryByTestId("ayrpc-reactflow")
    ).toBeTruthy();

    expect(
      document.querySelector(".react-flow")
    ).toBeTruthy();
  });
});
