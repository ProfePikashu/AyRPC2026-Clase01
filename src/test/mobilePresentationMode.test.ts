import { describe, expect, it } from "vitest";
import { shouldUseMobilePresentationShell } from "../mobilePresentationMode";

describe("Modo de presentación mobile", () => {
  it("usa el visor 1280x720 en un teléfono horizontal", () => {
    expect(
      shouldUseMobilePresentationShell({
        width: 800,
        height: 360,
        embedded: false,
      }),
    ).toBe(true);
  });

  it("también funciona en un teléfono horizontal grande", () => {
    expect(
      shouldUseMobilePresentationShell({
        width: 915,
        height: 412,
        embedded: false,
      }),
    ).toBe(true);
  });

  it("no vuelve a envolver la presentación dentro del iframe", () => {
    expect(
      shouldUseMobilePresentationShell({
        width: 1280,
        height: 720,
        embedded: true,
      }),
    ).toBe(false);
  });

  it("no modifica desktop", () => {
    expect(
      shouldUseMobilePresentationShell({
        width: 1920,
        height: 1080,
        embedded: false,
      }),
    ).toBe(false);
  });

  it("portrait sigue usando la presentación normal con su aviso de rotación", () => {
    expect(
      shouldUseMobilePresentationShell({
        width: 360,
        height: 800,
        embedded: false,
      }),
    ).toBe(false);
  });
});
