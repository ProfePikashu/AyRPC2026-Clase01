import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Ayrpc2025Flashback } from "./Ayrpc2025Flashback";

const sections = [
  {
    id: "que-es",
    label: "Qué es",
    detail:
      "Un curso virtual, gratuito y abierto a todas las edades, pensado para aprender desde cero qué es una computadora, qué tipos existen y cómo armarlas, diagnosticar problemas y repararlas. Año tras año incorporamos y actualizamos contenidos para cubrir más temas y ofrecer una capacitación cada vez más completa, acorde a la evolución tecnológica.",
    media: "flashback",
  },
  {
    id: "desde-cuando",
    label: "Desde cuándo",
    detail:
      "AyRPC nació en 2021 y fue creciendo, cambiando y aprendiendo edición tras edición. No fue una línea recta: hubo crecimiento, un golpe fuerte en 2024 y una reconstrucción clara en 2025 que nos trajo hasta esta nueva etapa en 2026.",
    media: "timeline-chart",
  },
  {
    id: "como",
    label: "Cómo",
    detail:
      "Clases en vivo, Classroom, Twitch, ExamPro, herramientas propias, seguimiento y comunidad.",
    media: "course-flow",
  },
  {
    id: "quienes",
    label: "Quiénes",
    detail:
      "Un profe obsesionado con enseñar lo que ama, un equipo de moderación súper leal y alumnos de años anteriores que ayudaron a divulgar el curso a puro boca en boca.",
    media: "ANDYAZHTEC × ITEC",
  },
  {
    id: "objetivo",
    label: "Objetivo clave",
    detail:
      "Que puedas entender una computadora, diagnosticar problemas y resolverlos con criterio técnico, sin convertirte en un cambia-piezas.",
    media: "ENTENDER · DIAGNOSTICAR · RESOLVER",
  },
] as const;

const evolution = [
  {
    year: "2021",
    value: 28,
    tone: "normal",
    title: "Primera edición",
    summary:
      "Primera emisión en Twitch, 5 módulos y muchísimo trabajo hecho totalmente a mano.",
  },
  {
    year: "2022",
    value: 40,
    tone: "normal",
    title: "Segunda edición",
    summary:
      "Se ordena mejor la cursada y mejora el sistema de certificados.",
  },
  {
    year: "2023",
    value: 68,
    tone: "up",
    title: "Tercera edición",
    summary:
      "Primer boom viral, 7 clases y se suman microsoldadura y programación de BIOS.",
  },
  {
    year: "2024",
    value: 22,
    tone: "down",
    title: "Cuarta edición",
    summary:
      "Primer gran bajón. Aproximadamente 60 alumnos lograron aprobar, dejando en claro que había que reconstruir mejor la cursada.",
  },
  {
    year: "2025",
    value: 88,
    tone: "up",
    title: "Quinta edición",
    summary:
      "Evolución absoluta: se plantea el ecosistema, aparecen verificadores y herramientas propias. 796 participaron y 261 obtuvieron certificado.",
  },
  {
    year: "2026",
    value: 100,
    tone: "highlight",
    title: "Sexta edición",
    summary:
      "Se expande a 12 módulos, mejora el temario y entra en marcha el ecosistema completo de cursada. Acá estamos hoy.",
  },
] as const;

function EvolutionChart() {
  return (
    <div className="ayrpc-evolution">
      <div className="ayrpc-evolution-header">
        <span>2021 → 2026</span>
        <strong>Evolución del curso</strong>
        <small>
          Crecimiento, tropiezos, reconstrucción y expansión.
        </small>
      </div>

      <div className="ayrpc-evolution-layout">
        <div className="ayrpc-evolution-chart">
          {evolution.map((item) => (
            <div
              key={item.year}
              className={`ayrpc-bar ayrpc-bar-${item.tone}`}
            >
              <span className="ayrpc-bar-value">
                {item.year === "2024"
                  ? "BAJÓN"
                  : item.year === "2025"
                    ? "EVOLUCIÓN"
                    : item.year === "2026"
                      ? "HOY"
                      : ""}
              </span>

              <div className="ayrpc-bar-track">
                <motion.div
                  className="ayrpc-bar-fill"
                  initial={{ height: 0 }}
                  animate={{ height: `${item.value}%` }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </div>

              <strong>{item.year}</strong>
            </div>
          ))}
        </div>

        <div className="ayrpc-evolution-notes">
          {evolution.map((item) => (
            <div
              key={item.year}
              className={`ayrpc-evolution-note is-${item.tone}`}
            >
              <span>{item.year}</span>
              <strong>{item.title}</strong>
              <p>{item.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CourseFlowDiagram() {
  return (
    <div className="ayrpc-course-flow course-flow-v2">
      <header className="ayrpc-course-flow-header">
        <span>RECORRIDO DE CURSADA</span>
        <strong>De la inscripción al certificado</strong>
        <small>
          Asistencia, examen final, recuperación y acompañamiento.
        </small>
      </header>

      <div className="flowchart-grid">
        <div className="flowchart-main">

          <div className="flowgrid-node flowgrid-terminal is-start">
            <span>INICIO</span>
            <strong>Te inscribís</strong>
          </div>

          <div className="flowgrid-arrow">↓</div>

          <div className="flowgrid-node flowgrid-process">
            <span>CURSADA</span>
            <strong>Cursás las 12 clases</strong>
          </div>

          <div className="flowgrid-arrow">↓</div>

          <div className="flowgrid-decision is-attendance">
            <span>ASISTENCIA</span>
            <strong>
              ¿11 clases principales presentes o recuperadas?
            </strong>
          </div>


          {/* =================================================
              ASISTENCIA

              SI -> APTO

              NO -> ¿RECUPERA? -> NO -> NO APTO
                              |
                              SI
                              |
                    <--------- APTO
             ================================================= */}

          <div className="flowchart-attendance-branch flow-v2-branch flow-v2-attendance">

            <div className="flowgrid-direct-path attendance-primary-yes">
              <span className="flowgrid-chip is-yes">
                SÍ
              </span>

              <span className="flow-v2-down" aria-hidden="true">
                ↓
              </span>

              <div className="flowgrid-node flowgrid-process is-approved">
                <span>HABILITADO</span>
                <strong>Apto para examen final</strong>
              </div>
            </div>


            <div className="attendance-primary-no flow-v2-no-entry">
              <span className="flowgrid-chip is-no">
                NO
              </span>

              <span className="flow-v2-right is-danger" aria-hidden="true">
                →
              </span>
            </div>


            <div className="flowgrid-decision is-recovery attendance-recovery-decision">
              <span>PENDIENTES</span>
              <strong>¿Recuperás pendientes?</strong>

              <span className="flow-v2-sr-only">
                Recuperás pendientes
              </span>
            </div>


            <div className="attendance-recovery-no flow-v2-no-exit">
              <span className="flowgrid-chip is-no">
                NO
              </span>

              <span className="flow-v2-right is-danger" aria-hidden="true">
                →
              </span>

              <div className="flowgrid-node flowgrid-terminal is-danger">
                <span>⚠ SALIDA</span>
                <strong>No apto para examen</strong>
              </div>
            </div>


            <div className="attendance-recovery-yes flow-v2-return">
              <span
                className="flowgrid-recovery-to-apto flow-v2-return-line"
                aria-hidden="true"
              />

              <span className="flowgrid-chip is-yes">
                SÍ
              </span>
            </div>

          </div>


          {/* CAMINO PRINCIPAL CONTINUA DEBAJO DE APTO */}

          <div className="flow-v2-happy-track">

            <div className="flowgrid-arrow">
              ↓
            </div>

            <div className="flowgrid-node flowgrid-process">
              <span>EXAMEN FINAL</span>
              <strong>Rendís el examen final</strong>
            </div>

            <div className="flowgrid-arrow">
              ↓
            </div>

            <div className="flowgrid-decision is-result">
              <span>RESULTADO</span>
              <strong>¿Aprueba?</strong>
            </div>

          </div>


          {/* =================================================
              EXAMEN

              SI -> CERTIFICADO

              NO -> RECUPERATORIO -> ¿APRUEBA? -> NO -> SIN CERT.
                                           |
                                           SI
                                           |
                              <--------- CERTIFICADO
             ================================================= */}

          <div className="flowchart-exam-branch flow-v2-branch flow-v2-exam">

            <div className="exam-primary-yes">
              <span className="flowgrid-chip is-yes">
                SÍ
              </span>

              <span className="flow-v2-down" aria-hidden="true">
                ↓
              </span>

              <div className="flowgrid-node flowgrid-certificate">
                <span>✦ OBJETIVO CUMPLIDO ✦</span>
                <strong>Certificado</strong>
                <small>+ Recomendación en LinkedIn</small>
              </div>
            </div>


            <div className="exam-primary-no flow-v2-no-entry">
              <span className="flowgrid-chip is-no">
                NO
              </span>

              <span className="flow-v2-right is-danger" aria-hidden="true">
                →
              </span>
            </div>


            <div className="exam-recovery">

              <div className="flowgrid-node flowgrid-process is-hope">
                <span>SEGUNDA OPORTUNIDAD</span>
                <strong>Recuperatorio</strong>
              </div>

              <span className="flow-v2-right" aria-hidden="true">
                →
              </span>

              <div className="flowgrid-decision is-recovery">
                <span>RECUPERATORIO</span>
                <strong>¿Aprueba recuperatorio?</strong>
              </div>

            </div>


            <div className="exam-recovery-no flow-v2-no-exit">
              <span className="flowgrid-chip is-no">
                NO
              </span>

              <span className="flow-v2-right is-danger" aria-hidden="true">
                →
              </span>

              <div className="flowgrid-node flowgrid-terminal is-failed">
                <span>FIN DEL RECORRIDO</span>
                <strong>
                  Sin certificado ni recomendación
                </strong>
              </div>
            </div>


            <div className="exam-recovery-yes flow-v2-return">
              <span
                className="flow-v2-return-line"
                aria-hidden="true"
              />

              <span className="flowgrid-chip is-yes">
                SÍ
              </span>
            </div>

          </div>

        </div>
      </div>


      <footer className="flowchart-community">
        <div>
          <span>DISPONIBLE DURANTE TODA LA CURSADA</span>
          <strong>Comunidad y ayuda online</strong>
        </div>

        <p>
          WhatsApp · consultas · acompañamiento · opcional
        </p>
      </footer>
    </div>
  );
}

export function AboutAyrpcScene() {
  const [activeId, setActiveId] =
    useState<(typeof sections)[number]["id"]>(sections[0].id);

  const active =
    sections.find((section) => section.id === activeId) ?? sections[0];

  return (
    <motion.section
      className="scene about-ayrpc"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="about-ayrpc-shell">
        <div className="about-ayrpc-header">
          <span>PANORAMA GENERAL</span>
          <h1>¿Qué es AyRPC?</h1>
        </div>

        <div className="about-ayrpc-layout">
          <div className="about-ayrpc-menu">
            {sections.map((section, index) => {
              const selected = section.id === activeId;

              return (
                <motion.button
                  key={section.id}
                  type="button"
                  className={`about-ayrpc-option ${
                    selected ? "is-active" : ""
                  }`}
                  onClick={() => setActiveId(section.id)}
                  animate={{
                    scale: selected ? 1.035 : 1,
                    x: selected ? 8 : 0,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <span className="about-ayrpc-check">
                    {selected ? "✓" : String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="about-ayrpc-option-copy">
                    <strong>{section.label}</strong>

                    <AnimatePresence initial={false}>
                      {selected && (
                        <motion.span
                          className="about-ayrpc-detail"
                          data-testid="ayrpc-detail"
                          initial={{ opacity: 0, height: 0, y: -6 }}
                          animate={{ opacity: 1, height: "auto", y: 0 }}
                          exit={{ opacity: 0, height: 0, y: -6 }}
                        >
                          {section.detail}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </span>
                </motion.button>
              );
            })}
          </div>

          <div
            className={`about-ayrpc-media ${
              active.id === "que-es" ? "is-flashback" : ""
            } ${
              active.id === "desde-cuando" ? "is-timeline-chart" : ""
            } ${
              active.id === "como" ? "is-course-flow" : ""
            }`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                className={`about-ayrpc-media-inner ${
                  active.id === "que-es" ? "is-flashback" : ""
                } ${
                  active.id === "desde-cuando" ? "is-timeline-chart" : ""
                } ${
                  active.id === "como" ? "is-course-flow" : ""
                }`}
                initial={{ opacity: 0, scale: 0.96, x: 18 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.96, x: -18 }}
                transition={{ duration: 0.3 }}
              >
                {active.id === "que-es" ? (
                  <Ayrpc2025Flashback embedded />
                ) : active.id === "desde-cuando" ? (
                  <EvolutionChart />
                ) : active.id === "como" ? (
                  <CourseFlowDiagram />
                ) : (
                  <>
                    <span>VISUAL / MEDIA</span>
                    <strong>{active.media}</strong>
                    <small>
                      Acá después ponemos imagen, GIF, video o animación.
                    </small>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
}











