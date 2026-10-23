import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { class01, type ClassScene } from "./data/class01";
import "./styles.css";
import "./components/CourseFlowDiagram.css";
import { HeroIntro } from "./components/HeroIntro";
import { OpeningVideo } from "./components/OpeningVideo";
import { AboutAyrpcScene } from "./components/AboutAyrpcScene";
import { ModulesScene } from "./components/ModulesScene";
import { CourseJourneyScene } from "./components/CourseJourneyScene";
import { CoursePlatformScene } from "./components/CoursePlatformScene";
import { CourseHonestyScene } from "./components/CourseHonestyScene";
import { ComputerConceptScene } from "./components/ComputerConceptScene";
import { ComputerTypesScene } from "./components/ComputerTypesScene";
import { TechnicianEvolutionScene } from "./components/TechnicianEvolutionScene";
import { DiagnosticMindsetScene } from "./components/DiagnosticMindsetScene";
import { HomelabScene } from "./components/HomelabScene";
import { TechnicianLevelsScene } from "./components/TechnicianLevelsScene";
import { ClosingScene } from "./components/ClosingScene";
import { PortraitGuard } from "./components/PortraitGuard";

function DefaultScene({ scene }: { scene: ClassScene }) {
  return (
    <motion.section
      className={`scene scene-${scene.type}`}
      initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -18, filter: "blur(8px)" }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="scene-content">
        {scene.eyebrow && (
          <motion.div
            className="eyebrow"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            {scene.eyebrow}
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14 }}
        >
          {scene.title}
        </motion.h1>

        {scene.subtitle && (
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {scene.subtitle}
          </motion.h2>
        )}

        {scene.body && (
          <motion.p
            className="body"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.26 }}
          >
            {scene.body}
          </motion.p>
        )}

        {scene.items && (
          <div className={`items items-${scene.type}`}>
            {scene.items.map((item, index) => (
              <motion.div
                className="item"
                key={`${scene.id}-${index}`}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.28 + index * 0.05 }}
              >
                <span className="item-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        )}

        {scene.note && (
          <div className="presenter-note">
            NOTA PROFESOR · {scene.note}
          </div>
        )}
      </div>
    </motion.section>
  );
}

function Scene({ scene }: { scene: ClassScene }) {
  if (scene.id === "portada") {
    return <HeroIntro scene={scene} />;
  }

  if (scene.id === "que-es-ayrpc") {
    return <AboutAyrpcScene />;
  }

  if (scene.id === "modulos") {
    return <ModulesScene />;
  }

  if (scene.id === "recorrido") {
    return <CourseJourneyScene />;
  }

  if (scene.id === "plataforma") {
    return <CoursePlatformScene />;
  }

  if (scene.id === "honestidad") {
    return <CourseHonestyScene />;
  }

  if (scene.id === "computadora") {
    return <ComputerConceptScene />;
  }

  if (scene.id === "formatos") {
    return <ComputerTypesScene />;
  }

  if (scene.id === "homelab") {
    return <HomelabScene />;
  }

  if (scene.id === "evolucion-tecnico") {
    return <TechnicianEvolutionScene />;
  }

  if (scene.id === "niveles-tecnico") {
    return <TechnicianLevelsScene />;
  }

  if (scene.id === "diagnostico") {
    return <DiagnosticMindsetScene />;
  }

  if (scene.id === "cierre") {
    return <ClosingScene />;
  }

  return <DefaultScene scene={scene} />;
}
function App() {
  const [current, setCurrent] = useState(0);
  const [openingFinished, setOpeningFinished] = useState(false);
  const [blackout, setBlackout] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const scene = class01[current];
const goNext = () => {
    setCurrent((value) => Math.min(value + 1, class01.length - 1));
  };

  const goPrevious = () => {
    setCurrent((value) => Math.max(value - 1, 0));
  };

  const handleTouchStart = (
    event: React.TouchEvent<HTMLElement>,
  ) => {
    const touch = event.touches[0];

    if (!touch) return;

    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
  };

  const handleTouchEnd = (
    event: React.TouchEvent<HTMLElement>,
  ) => {
    if (
      touchStartX.current === null ||
      touchStartY.current === null
    ) {
      return;
    }

    const touch = event.changedTouches[0];

    if (!touch) return;

    const deltaX = touch.clientX - touchStartX.current;
    const deltaY = touch.clientY - touchStartY.current;

    touchStartX.current = null;
    touchStartY.current = null;

    const horizontalDistance = Math.abs(deltaX);
    const verticalDistance = Math.abs(deltaY);

    const isHorizontalSwipe =
      horizontalDistance >= 60 &&
      horizontalDistance > verticalDistance * 1.2;

    if (!isHorizontalSwipe) return;

    if (deltaX < 0) {
      goNext();
    } else {
      goPrevious();
    }
  };


useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (!openingFinished) return;
      if (event.key === "ArrowRight" || event.key === " ") {
        event.preventDefault();
        goNext();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrevious();
      }

      if (event.key === "Home") {
        setCurrent(0);
      }

      if (event.key === "End") {
        setCurrent(class01.length - 1);
      }

      if (event.key.toLowerCase() === "b") {
        setBlackout((value) => !value);
      }

      if (event.key.toLowerCase() === "h") {
        setShowHelp((value) => !value);
      }

      if (event.key.toLowerCase() === "f") {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen?.();
        } else {
          document.exitFullscreen?.();
        }
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [openingFinished]);

  if (!openingFinished) {
    return (
      <>
        <OpeningVideo
          onFinished={() => setOpeningFinished(true)}
        />
        <PortraitGuard />
      </>
    );
  }

  return (
    <main
      className="presentation"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <PortraitGuard />
      <div className="background-grid" />
      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />

      <header className="hud">
        <div className="hud-brand">
          <strong>AyRPC 2026</strong>
          <span>CLASE 01 · INTRODUCCIÓN</span>
        </div>
      </header>

      <AnimatePresence mode="wait">
        <Scene key={scene.id} scene={scene} />
      </AnimatePresence>

      <footer className="footer">
        <div className="progress">
          <motion.div
            className="progress-value"
            animate={{
              width: `${((current + 1) / class01.length) * 100}%`,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </footer>

      <AnimatePresence>
        {blackout && (
          <motion.div
            className="blackout"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showHelp && (
          <motion.div
            className="help"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
          >
            <h3>CONTROLES</h3>
            <p>→ / SPACE · siguiente</p>
            <p>← · anterior</p>
            <p>HOME · inicio</p>
            <p>END · cierre</p>
            <p>F · fullscreen</p>
            <p>B · blackout</p>
            <p>H · ayuda</p>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

















export default App;







