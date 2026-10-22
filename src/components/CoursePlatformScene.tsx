import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type PlatformMode = "classroom" | "attendance" | "recovery";

const modes: { id: PlatformMode; label: string }[] = [
  { id: "classroom", label: "Classroom" },
  { id: "attendance", label: "Asistencia" },
  { id: "recovery", label: "Recuperar clase" },
];

export function CoursePlatformScene() {
  const [activeMode, setActiveMode] =
    useState<PlatformMode>("classroom");

  return (
    <motion.section
      className="scene course-platform"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="course-platform-shell">
        <header className="course-platform-header">
          <h1>Tu cursada vive acá</h1>
        </header>

        <div className="course-platform-window">
          <div className="course-platform-window-bar">
            <div className="course-platform-window-lights">
              <span />
              <span />
              <span />
            </div>

            <span className="course-platform-address">
              classroom.andyazhtec.com
            </span>

            <span className="course-platform-status">
              ● ONLINE
            </span>
          </div>

          <nav
            className="course-platform-tabs"
            aria-label="Secciones de la plataforma"
          >
            {modes.map((mode) => (
              <motion.button
                key={mode.id}
                type="button"
                className={`course-platform-tab ${
                  activeMode === mode.id ? "is-active" : ""
                }`}
                onClick={() => setActiveMode(mode.id)}
                whileTap={{ scale: 0.97 }}
              >
                {mode.label}
              </motion.button>
            ))}
          </nav>

          <div className="course-platform-screen">
            <AnimatePresence mode="wait">
              {activeMode === "classroom" && (
                <motion.div
                  key="classroom"
                  className="platform-view platform-classroom"
                  initial={{
                    opacity: 0,
                    y: 16,
                    filter: "blur(5px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    y: -12,
                    filter: "blur(4px)",
                  }}
                >
                  <div className="platform-view-heading">
                    <span>AYRPC / CLASSROOM</span>
                    <h2>Todo el curso en un solo lugar.</h2>
                  </div>

                  <div className="platform-classroom-grid">
                    {[
                      ["01", "CLASES"],
                      ["02", "MATERIALES"],
                      ["03", "GRABACIONES"],
                      ["04", "NOTIFICACIONES"],
                    ].map(([number, label], index) => (
                      <motion.div
                        key={label}
                        className="platform-classroom-item"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.08 + index * 0.06,
                        }}
                      >
                        <span>{number}</span>
                        <strong>{label}</strong>
                        <small>SISTEMA DISPONIBLE</small>
                      </motion.div>
                    ))}
                  </div>

                  <div className="platform-system-line">
                    <span>CLASSROOM_CORE</span>
                    <motion.strong
                      animate={{ opacity: [0.45, 1, 0.45] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.8,
                      }}
                    >
                      SINCRONIZADO
                    </motion.strong>
                  </div>
                </motion.div>
              )}

              {activeMode === "attendance" && (
                <motion.div
                  key="attendance"
                  className="platform-view platform-attendance"
                  initial={{
                    opacity: 0,
                    scale: 0.985,
                    filter: "blur(5px)",
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.99,
                    filter: "blur(4px)",
                  }}
                >
                  <div className="platform-view-heading">
                    <span>SEGUIMIENTO EN VIVO</span>
                    <h2>La asistencia también es parte del sistema.</h2>
                  </div>

                  <div className="attendance-console">
                    <div className="attendance-console-header">
                      <span>STREAM ACTIVO</span>
                      <strong>CLASE 01</strong>
                    </div>

                    {[
                      "conexión detectada",
                      "participación registrada",
                      "estado sincronizado",
                    ].map((item, index) => (
                      <motion.div
                        key={item}
                        className="attendance-event"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.12 + index * 0.12,
                        }}
                      >
                        <motion.span
                          animate={{
                            scale: [0.8, 1.2, 0.8],
                            opacity: [0.55, 1, 0.55],
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 2,
                            delay: index * 0.25,
                          }}
                        />

                        <strong>{item}</strong>
                      </motion.div>
                    ))}
                  </div>

                  <div className="attendance-scanner">
                    <motion.div
                      className="attendance-scanner-line"
                      animate={{ y: [0, 130, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 3.2,
                        ease: "linear",
                      }}
                    />
                    <span>SESSION TRACKING</span>
                  </div>
                </motion.div>
              )}

              {activeMode === "recovery" && (
                <motion.div
                  key="recovery"
                  className="platform-view platform-recovery"
                  initial={{
                    opacity: 0,
                    y: 18,
                    filter: "blur(5px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    y: -14,
                    filter: "blur(4px)",
                  }}
                >
                  <div className="platform-view-heading">
                    <span>SISTEMA DE RECUPERACIÓN</span>
                    <h2>Faltar no significa perder la clase.</h2>
                  </div>

                  <div className="recovery-flow">
                    {[
                      "FALTASTE",
                      "VER CLASE COMPLETA",
                      "CUESTIONARIO",
                      "CLASE RECUPERADA",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className={`recovery-step recovery-step-${index + 1}`}
                      >
                        <motion.div
                          className="recovery-node"
                          initial={{
                            opacity: 0,
                            scale: 0.7,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                          }}
                          transition={{
                            delay: index * 0.16,
                            type: "spring",
                            stiffness: 240,
                            damping: 18,
                          }}
                        >
                          <span>
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <strong>{item}</strong>

                          {index === 3 && (
                            <motion.b
                              initial={{
                                opacity: 0,
                                scale: 1.8,
                              }}
                              animate={{
                                opacity: 1,
                                scale: 1,
                              }}
                              transition={{
                                delay: 0.72,
                                type: "spring",
                                stiffness: 300,
                                damping: 14,
                              }}
                            >
                              ✓
                            </motion.b>
                          )}
                        </motion.div>

                        {index < 3 && (
                          <motion.div
                            className="recovery-connector"
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{
                              delay: 0.12 + index * 0.16,
                              duration: 0.26,
                            }}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
