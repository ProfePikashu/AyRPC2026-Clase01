// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { ModulesScene } from "../components/ModulesScene";

afterEach(() => cleanup());

describe("Slide módulos", () => {
  it("muestra los 12 módulos", () => {
    render(<ModulesScene />);

    const modules = [
      "Introducción",
      "Componentes",
      "Compatibilidad y armado",
      "Sistemas operativos",
      "BIOS / UEFI",
      "Drivers y herramientas",
      "Microsoldadura I",
      "Microsoldadura II",
      "Diagnóstico",
      "Redes",
      "Intro a ciberseguridad",
      "Malware",
    ];

    for (const module of modules) {
      expect(
        screen.getByText(module, {
          selector: "strong",
          exact: true,
        })
      ).toBeTruthy();
    }
  });

  it("cambia el detalle al seleccionar otro módulo", async () => {
    render(<ModulesScene />);

    fireEvent.click(
      screen.getByRole("button", { name: /BIOS \/ UEFI/i })
    );

    expect(
      await screen.findByText(/Secure Boot, CSM y prioridades/i)
    ).toBeTruthy();
  });

  it("mantiene la columna izquierda compacta y sin texto redundante", () => {
    render(<ModulesScene />);

    expect(
      screen.queryByText("AYRPC 2026 · PROGRAMA FORMATIVO")
    ).toBeNull();

    expect(
      screen.queryByText(/Un vistazo completo del recorrido/i)
    ).toBeNull();

    const introButton = screen.getByRole("button", {
      name: /^✓\s*Introducción$/i,
    });

    expect(
      within(introButton).queryByText(/Panorama general del curso/i)
    ).toBeNull();
  });
});
