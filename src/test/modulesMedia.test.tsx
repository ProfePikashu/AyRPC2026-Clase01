// @vitest-environment jsdom

import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { ModulesScene } from "../components/ModulesScene";

afterEach(cleanup);

describe("Media de los módulos", () => {
  it("muestra el recurso visual correspondiente al módulo activo", async () => {
    render(<ModulesScene />);

    expect(screen.getByTestId("module-media").getAttribute("src")).toBe(
      "/media/modules/01-intro.png"
    );

    fireEvent.click(
      screen.getByRole("button", { name: /Sistemas operativos/i })
    );

    await waitFor(() => {
      expect(screen.getByTestId("module-media").getAttribute("src")).toBe(
        "/media/modules/04-sistemas-operativos.gif"
      );
    });
  });
});
