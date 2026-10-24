import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { publicPath } from "../lib/publicPath";

type JourneyStep = {
  id: string;
  number: string;
  title: string;
  headline: string;
  body: string;
  badge: string;
  imageAlt: string;
};

const steps: JourneyStep[] = [
  {
    id: "exam",
    number: "01",
    title: "Examen final",
    headline: "La última prueba",
    body:
      "Al terminar el recorrido vas a rendir una evaluación final sobre los contenidos trabajados durante la cursada.",
    badge: "EVALUACIÓN FINAL",
    imageAlt: "Examen final",
  },
  {
    id: "recovery",
    number: "02",
    title: "Recuperatorio",
    headline: "Una segunda instancia",
    body:
      "Si no alcanzaste los objetivos en el examen final, vas a tener una nueva oportunidad para demostrar lo aprendido.",
    badge: "RECUPERATORIO",
    imageAlt: "Recuperatorio",
  },
  {
    id: "approved",
    number: "03",
    title: "Aprobado",
    headline: "APTO",
    body:
      "Aprobar significa haber completado correctamente el recorrido y demostrar los conocimientos fundamentales del curso.",
    badge: "APTO ✓",
    imageAlt: "Aprobado",
  },
  {
    id: "linkedin",
    number: "04",
    title: "LinkedIn",
    headline: "Recomendación profesional",
    body:
      "Quienes aprueben podrán fortalecer su perfil profesional y mostrar públicamente el recorrido técnico realizado.",
    badge: "LINKEDIN",
    imageAlt: "LinkedIn",
  },
  {
    id: "opportunities",
    number: "05",
    title: "Oportunidades",
    headline: "Esto puede seguir",
    body:
      "El conocimiento puede abrir puertas a soporte, reparación, infraestructura, proyectos, comunidad y nuevas experiencias profesionales.",
    badge: "PROYECCIÓN",
    imageAlt: "Oportunidades",
  },
];

export function CourseJourneyScene() {
  const [activeId, setActiveId] = useState(steps[0].id);

  const active =
    steps.find((step) => step.id === activeId) ?? steps[0];

  const activeIndex = steps.findIndex(
    (step) => step.id === activeId
  );

  const imageSrc = publicPath(
    `/media/course-journey/${active.number}.webp`
  );

  const contentTop = (
    <div className="course-journey-content-top">
      <span>ETAPA {active.number}</span>
      <strong>{active.badge}</strong>
    </div>
  );

  const copy = (
    <div className="course-journey-copy">
      {contentTop}

      <motion.h2
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.08 }}
      >
        {active.headline}
      </motion.h2>

      <motion.p
        data-testid="journey-body"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.14 }}
      >
        {active.body}
      </motion.p>
    </div>
  );

  const image = (
    <div className={`course-journey-visual visual-${active.id}`}>
      <img
        src={imageSrc}
        alt={active.imageAlt}
      />
    </div>
  );

  return (
    <motion.section
      className="scene course-journey"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="course-journey-shell">

        <div className="course-journey-header">
          <h1>El curso no termina en el examen</h1>
        </div>

        <div className="course-journey-track">

          <div className="course-journey-line" />

          <motion.div
            className="course-journey-line-active"
            animate={{
              width: `${(activeIndex / (steps.length - 1)) * 100}%`,
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          <div className="course-journey-steps">
            {steps.map((step, index) => {
              const selected = step.id === activeId;
              const reached = index <= activeIndex;

              return (
                <motion.button
                  key={step.id}
                  type="button"
                  className={[
                    "course-journey-step",
                    selected ? "is-active" : "",
                    reached ? "is-reached" : "",
                  ].join(" ")}
                  onClick={() => setActiveId(step.id)}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <span className="course-journey-dot">
                    {step.number}
                  </span>

                  <strong>{step.title}</strong>
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className="course-journey-stage">

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              className={`course-journey-content journey-${active.id}`}
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.985,
                filter: "blur(6px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                y: -14,
                scale: 0.99,
                filter: "blur(4px)",
              }}
              transition={{
                duration: 0.28,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              {active.id === "exam" && (
                <div className="journey-layout journey-layout-exam">
                  {image}
                  {copy}
                </div>
              )}

              {active.id === "recovery" && (
                <div className="journey-layout journey-layout-recovery">
                  {image}
                  {copy}
                </div>
              )}

              {active.id === "approved" && (
                <div className="journey-layout journey-layout-approved">
                  {copy}
                  {image}
                </div>
              )}

              {active.id === "linkedin" && (
                <div className="journey-layout journey-layout-linkedin">
                  {image}
                </div>
              )}

              {active.id === "opportunities" && (
                <div className="journey-layout journey-layout-opportunities">
                  {copy}

                  <div className="course-journey-branches">
                    {[
                      "SOPORTE",
                      "REPARACIÓN",
                      "INFRAESTRUCTURA",
                      "PROYECTOS",
                      "COMUNIDAD",
                    ].map((item, index) => (
                      <motion.span
                        key={item}
                        initial={{
                          opacity: 0,
                          y: 14,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: 0.12 + index * 0.06,
                        }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>

                  <div className="course-journey-media journey-footer-media">
                    <img
                      src={imageSrc}
                      alt={active.imageAlt}
                    />
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </motion.section>
  );
}
