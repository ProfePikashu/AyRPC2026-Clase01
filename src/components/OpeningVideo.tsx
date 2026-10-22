import { useRef, useState } from "react";

type OpeningVideoProps = {
  onFinished: () => void;
};

export function OpeningVideo({ onFinished }: OpeningVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const startVideo = async () => {
    setStarted(true);

    if (videoRef.current) {
      videoRef.current.muted = false;
      await videoRef.current.play();
    }
  };

  return (
    <section className="opening-video">
      <video
        ref={videoRef}
        data-testid="opening-video"
        className="opening-video-media"
        src="/media/ayrpc2026-intro.mp4"
        playsInline
        preload="auto"
        onEnded={onFinished}
      />

      {!started && (
        <button
          type="button"
          className="opening-video-start"
          onClick={startVideo}
        >
          INICIAR PRESENTACIÓN
        </button>
      )}
    </section>
  );
}
