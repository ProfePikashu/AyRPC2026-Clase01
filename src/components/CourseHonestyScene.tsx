import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type CaseId = "video" | "format" | "psu";
type Decision = "diagnose" | "replace";

type DiagnosticCase = {
  id: CaseId;
  title: string;
  report: string;
  assumption: string;
  badAction: string;
  diagnostic: string;
};

const cases: DiagnosticCase[] = [
  {
    id: "video",
    title: "La PC no da video",
    report: "El equipo enciende, pero no aparece imagen en pantalla.",
    assumption: "La placa de video está rota.",
    badAction: "Cambiar la GPU directamente",
    diagnostic:
      "Antes de reemplazar nada hay que revisar conexiones, memoria, alimentación, salida de video y aislar la falla.",
  },
  {
    id: "format",
    title: "Hay que formatearla",
    report: "La computadora está lenta y el usuario nota comportamientos extraños.",
    assumption: "Formatear va a solucionar todo.",
    badAction: "Borrar el sistema sin investigar",
    diagnostic:
      "Primero se revisan síntomas, procesos, almacenamiento, temperaturas, malware y estado general del sistema.",
  },
  {
    id: "psu",
    title: "La fuente murió",
    report: "El equipo no enciende cuando el usuario presiona el botón.",
    assumption: "La fuente está quemada.",
    badAction: "Vender una fuente nueva sin comprobar",
    diagnostic:
      "Antes de condenarla hay que verificar alimentación, cableado, botón de encendido, conexiones y medir correctamente.",
  },
];

const method = [
  "OBSERVAR",
  "PROBAR",
  "AISLAR",
  "MEDIR",
  "EXPLICAR",
];

export function CourseHonestyScene() {
  const [activeId, setActiveId] = useState<CaseId>("video");
  const [decision, setDecision] = useState<Decision>("diagnose");

  const active =
    cases.find((item) => item.id === activeId) ?? cases[0];

  const changeCase = (id: CaseId) => {
    setActiveId(id);
    setDecision("diagnose");
  };

  return (
    <motion.section
      className="scene course-honesty"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="course-honesty-shell">

        <header className="course-honesty-header">
          <h1>No seas deshonesto</h1>
          <p>
            Un buen técnico no inventa fallas: las comprueba.
          </p>
        </header>

        <nav
          className="honesty-cases"
          aria-label="Casos de diagnóstico"
        >
          {cases.map((item, index) => (
            <motion.button
              key={item.id}
              type="button"
              aria-label={item.title}
              className={`honesty-case ${
                activeId === item.id ? "is-active" : ""
              }`}
              onClick={() => changeCase(item.id)}
              whileTap={{ scale: 0.97 }}
            >
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <strong>{item.title}</strong>
            </motion.button>
          ))}
        </nav>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            className="honesty-file"
            initial={{
              opacity: 0,
              y: 16,
              rotateX: -3,
              filter: "blur(5px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotateX: 0,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              y: -12,
              filter: "blur(4px)",
            }}
            transition={{
              duration: 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="honesty-file-top">
              <span>EXPEDIENTE TÉCNICO</span>
              <strong>{active.title}</strong>
            </div>

            <div className="honesty-problem">
              <small>REPORTE DEL CLIENTE</small>
              <p>{active.report}</p>

              <small>SUPOSICIÓN INICIAL</small>
              <strong>{active.assumption}</strong>
            </div>

            <div className="honesty-decisions">
              <motion.button
                type="button"
                className={`honesty-decision honesty-decision-bad ${
                  decision === "replace" ? "is-selected" : ""
                }`}
                onClick={() => setDecision("replace")}
                whileTap={{ scale: 0.98 }}
              >
                <span>CAMINO A</span>
                <strong>{active.badAction}</strong>
                <small>CAMBIO SIN JUSTIFICACIÓN</small>
              </motion.button>

              <motion.button
                type="button"
                className={`honesty-decision honesty-decision-good ${
                  decision === "diagnose" ? "is-selected" : ""
                }`}
                onClick={() => setDecision("diagnose")}
                whileTap={{ scale: 0.98 }}
              >
                <span>CAMINO B</span>
                <strong>Diagnosticar primero</strong>
                <small>DECISIÓN CON CRITERIO</small>
              </motion.button>
            </div>

            <AnimatePresence mode="wait">
              {decision === "diagnose" ? (
                <motion.div
                  key="diagnose"
                  className="honesty-result honesty-result-good"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <p>{active.diagnostic}</p>

                  <div className="honesty-method">
                    {method.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{
                          opacity: 0,
                          scale: 0.88,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          delay: index * 0.07,
                        }}
                      >
                        <span>
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <strong>{item}</strong>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="replace"
                  className="honesty-result honesty-result-bad"
                  initial={{
                    opacity: 0,
                    scale: 1.08,
                    rotate: -1,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                  }}
                  exit={{ opacity: 0 }}
                >
                  <strong>NO CORRESPONDE</strong>

                  <p>
                    Cambiar o cobrar una pieza sin comprobar la falla
                    no es diagnóstico.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>

        <footer className="honesty-message">
          <strong>
            Cobrá por tu conocimiento. No por inventar problemas.
          </strong>
        </footer>

      </div>
    </motion.section>
  );
}

