// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { OpeningVideo } from "../components/OpeningVideo";

afterEach(() => cleanup());

describe("OpeningVideo", () => {
  it("espera un click antes de reproducir con sonido", async () => {
    const play = vi
      .spyOn(HTMLMediaElement.prototype, "play")
      .mockResolvedValue();

    render(<OpeningVideo onFinished={() => {}} />);

    expect(screen.getByText("INICIAR PRESENTACIÓN")).toBeTruthy();

    fireEvent.click(screen.getByText("INICIAR PRESENTACIÓN"));

    expect(play).toHaveBeenCalledOnce();

    play.mockRestore();
  });

  it("avisa cuando termina el video", () => {
    const onFinished = vi.fn();

    render(<OpeningVideo onFinished={onFinished} />);

    const video = screen.getByTestId("opening-video");
    fireEvent.ended(video);

    expect(onFinished).toHaveBeenCalledOnce();
  });
});

