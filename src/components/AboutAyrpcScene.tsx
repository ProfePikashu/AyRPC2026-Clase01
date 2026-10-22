import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const sections = [
  {
    id: "que-es",
    label: "Qué es",
    detail:
      "AyRPC es una formación técnica gratuita de Armado y Reparación de PC, pensada para aprender desde cero y avanzar con práctica real.",
    media: "FORMACIÓN TÉCNICA",
  },
  {
    id: "desde-cuando",
    label: "Desde cuándo",
    detail:
      "AyRPC nació en 2021 y fue creciendo edición tras edición hasta convertirse en un ecosistema completo de formación técnica.",
    media: "2021 → 2026",
  },
  {
    id: "como",
    label: "Cómo",
    detail:
      "Clases en vivo, Classroom, Twitch, ExamPro, herramientas propias, práctica, seguimiento y comunidad.",
    media: "ECOSISTEMA AYRPC",
  },
  {
    id: "quienes",
    label: "Quiénes",
    detail:
      "Una iniciativa impulsada por AndyAzhTEC junto a iTEC, con docentes, moderadores y una comunidad técnica acompañando el recorrido.",
    media: "ANDYAZHTEC × ITEC",
  },
  {
    id: "objetivo",
    label: "Objetivo clave",
    detail:
      "Que puedas entender una computadora, diagnosticar problemas y resolverlos con criterio técnico, sin convertirte en un cambia-piezas.",
    media: "ENTENDER · DIAGNOSTICAR · RESOLVER",
  },
];

export function AboutAyrpcScene() {
  const [activeId, setActiveId] = useState(sections[0].id);

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
          <span>AYRPC 2026</span>
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

          <div className="about-ayrpc-media">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                className="about-ayrpc-media-inner"
                initial={{ opacity: 0, scale: 0.96, x: 18 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.96, x: -18 }}
                transition={{ duration: 0.3 }}
              >
                <span>VISUAL / MEDIA</span>
                <strong>{active.media}</strong>
                <small>
                  Acá después ponemos imagen, GIF, video o animación.
                </small>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
