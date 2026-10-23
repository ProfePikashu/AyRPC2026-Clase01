import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import styles from "./Ayrpc2025Flashback.module.css";
import { flashbackImages } from "./Ayrpc2025Flashback.images";

const BASE_DELAY = 2000;
const HOLD_DELAY = 3200;

function getDelay(index: number) {
  return index > 0 && index % 9 === 0
    ? HOLD_DELAY
    : BASE_DELAY;
}

interface Ayrpc2025FlashbackProps {
  embedded?: boolean;
}

export function Ayrpc2025Flashback({
  embedded = false,
}: Ayrpc2025FlashbackProps) {
  const images = useMemo(() => flashbackImages, []);

  const [index, setIndex] = useState(0);
  const [manualPaused, setManualPaused] = useState(false);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [glitch, setGlitch] = useState(false);

  const paused = manualPaused || hoverPaused;

  useEffect(() => {
    if (!images.length || paused) {
      return;
    }

    const timer = window.setTimeout(() => {
      setIndex((index + 1) % images.length);
    }, getDelay(index));

    return () => window.clearTimeout(timer);
  }, [images.length, index, paused]);

  useEffect(() => {
    if (!images.length || paused) {
      setGlitch(false);
      return;
    }

    let startTimer: number | undefined;
    let stopTimer: number | undefined;
    let cancelled = false;

    const scheduleGlitch = () => {
      const wait =
        1000 + Math.floor(Math.random() * 1001);

      startTimer = window.setTimeout(() => {
        if (cancelled) return;

        setGlitch(true);

        const duration =
          140 + Math.floor(Math.random() * 181);

        stopTimer = window.setTimeout(() => {
          if (cancelled) return;

          setGlitch(false);
          scheduleGlitch();
        }, duration);
      }, wait);
    };

    scheduleGlitch();

    return () => {
      cancelled = true;

      if (startTimer !== undefined) {
        window.clearTimeout(startTimer);
      }

      if (stopTimer !== undefined) {
        window.clearTimeout(stopTimer);
      }
    };
  }, [images.length, paused]);

  if (!images.length) {
    return null;
  }

  const current = images[index];

  return (
    <section
      className={`${styles.shell} ${
        embedded ? styles.embeddedShell : ""
      }`}
    >
      <div
        className={`${styles.stage} ${
          embedded ? styles.embeddedStage : ""
        }`}
        onMouseEnter={() => setHoverPaused(true)}
        onMouseLeave={() => setHoverPaused(false)}
      >
        <div
          className={`${styles.viewport} ${
            glitch ? styles.isGlitching : ""
          } ${
            embedded ? styles.embeddedViewport : ""
          }`}
        >
          <button
            type="button"
            className={styles.control}
            onClick={() =>
              setManualPaused((value) => !value)
            }
            aria-label={
              manualPaused
                ? "Reanudar flashback"
                : "Pausar flashback"
            }
            title={
              manualPaused
                ? "Reanudar"
                : "Pausar"
            }
          >
            {manualPaused ? "▶" : "❚❚"}
          </button>

          <AnimatePresence mode="wait">
            <motion.figure
              key={current.src}
              className={styles.frame}
              initial={{
                opacity: 0,
                scale: 1,
                rotate: -0.35,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                scale: 1,
                rotate: 0.35,
                filter: "blur(8px)",
              }}
              transition={{
                duration: 0.26,
                ease: "easeOut",
              }}
            >
              <img
                src={current.src}
                alt={current.alt}
                className={styles.image}
              />
            </motion.figure>
          </AnimatePresence>

          <div
            className={styles.ghostA}
            style={{
              backgroundImage: `url(${current.src})`,
            }}
          />

          <div
            className={styles.ghostB}
            style={{
              backgroundImage: `url(${current.src})`,
            }}
          />

          <div className={styles.scanlines} />
          <div className={styles.noise} />
          <div className={styles.crtStatic} />
          <div className={styles.crtSweep} />
          <div className={styles.crtFlicker} />
        </div>
      </div>
    </section>
  );
}
