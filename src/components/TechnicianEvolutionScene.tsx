import { motion } from "motion/react";
import { useState } from "react";

type StageId =
  | "machine"
  | "operation"
  | "diagnosis"
  | "systems"
  | "investigation";

type Stage = {
  id: StageId;
  number: string;
  title: string;
  question: string;
  modules: string[];
  mindset: string[];
  exampleTitle: string;
  exampleBody: string;
};

const stages: Stage[] = [
  {
    id: "machine",
    number: "01",
    title: "ENTENDER LA MÁQUINA",
    question: "¿Qué tengo delante mío y cómo encaja todo?",
    modules: [
      "02 · COMPONENTES",
      "03 · COMPATIBILIDAD Y ARMADO",
    ],
    mindset: [
      "OBSERVACIÓN",
      "IDENTIFICACIÓN",
      "PROCEDIMIENTO",
    ],
    exampleTitle: "Primera evolución",
    exampleBody:
      "Pasás de ver una caja con piezas a reconocer qué es cada cosa, cómo se conecta y qué función cumple dentro del equipo.",
  },
  {
    id: "operation",
    number: "02",
    title: "ENTENDER CÓMO FUNCIONA",
    question:
      "¿Qué ocurre desde que enciendo la PC hasta que puedo usarla?",
    modules: [
      "04 · SISTEMAS OPERATIVOS",
      "05 · BIOS / UEFI",
      "06 · DRIVERS Y HERRAMIENTAS",
    ],
    mindset: [
      "OBSERVACIÓN",
      "HIPÓTESIS",
      "COMPROBACIÓN",
    ],
    exampleTitle: "Ya no solo armás",
    exampleBody:
      "Empezás a entender por qué una PC bootea o no bootea, qué ocurre antes de Windows, qué carga el sistema y dónde puede romperse esa cadena.",
  },
  {
    id: "diagnosis",
    number: "03",
    title: "ENCONTRAR Y DEMOSTRAR FALLAS",
    question: "¿Qué está fallando y qué evidencia tengo?",
    modules: [
      "07 · MICROSOLDADURA I",
      "08 · MICROSOLDADURA II",
      "09 · DIAGNÓSTICO",
    ],
    mindset: [
      "HIPÓTESIS",
      "MEDICIÓN",
      "EVIDENCIA",
    ],
    exampleTitle: "Acá empezás a pensar como técnico",
    exampleBody:
      "Dejás de cambiar cosas por probar. Medís, comparás, aislás la falla y defendés tu diagnóstico con evidencia concreta.",
  },
  {
    id: "systems",
    number: "04",
    title: "PENSAR EN SISTEMAS",
    question:
      "¿Qué pasa cuando esta computadora depende de otras?",
    modules: [
      "10 · REDES",
    ],
    mindset: [
      "CONTEXTO",
      "DEPENDENCIAS",
      "TRAZA",
      "MEDICIÓN",
    ],
    exampleTitle: "La PC ya no está sola",
    exampleBody:
      "El problema puede estar en la máquina, en la red, en otro equipo o en un servicio. Acá aparecen servidores, nube y el concepto de homelab.",
  },
  {
    id: "investigation",
    number: "05",
    title: "INVESTIGAR LO QUE NO SE VE",
    question:
      "¿Qué ocurrió realmente dentro del sistema?",
    modules: [
      "11 · INTRODUCCIÓN A CIBERSEGURIDAD",
      "12 · MALWARE",
    ],
    mindset: [
      "EVIDENCIA",
      "CORRELACIÓN",
      "ANÁLISIS",
      "DECISIÓN",
    ],
    exampleTitle: "Del síntoma a la investigación",
    exampleBody:
      "Terminás rastreando comportamientos anómalos, procesos, cambios y señales de malware para reconstruir qué ocurrió realmente.",
  },
];

export function TechnicianEvolutionScene() {
  const [activeId, setActiveId] =
    useState<StageId>("machine");

  const active =
    stages.find((stage) => stage.id === activeId) ??
    stages[0];

  return (
    <section className="scene technician-evolution">
      <div className="technician-evolution-shell">
        <header className="technician-evolution-header">
          <span>TU RECORRIDO EN AyRPC 2026</span>

          <h1>
            De “quiero arreglar una PC” a pensar como técnico
          </h1>

          <p>
            Cada etapa suma conocimientos y cambia la forma
            en la que enfrentás un problema real.
          </p>
        </header>

        <div className="technician-evolution-layout">
          <div
            className="technician-evolution-demo"
            data-testid="technician-evolution-focus"
          >
            <motion.div
              key={active.id}
              className="technician-evolution-demo-card"
              initial={{
                opacity: 0,
                x: -34,
                scale: 0.975,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.36,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="technician-evolution-demo-top">
                <span>ETAPA {active.number}</span>
                <strong>{active.title}</strong>
              </div>

              <div className="technician-evolution-demo-question">
                <span>LA PREGUNTA DEL TÉCNICO</span>
                <h2>{active.question}</h2>
              </div>

              <div className="technician-evolution-demo-grid">
                <div className="technician-evolution-demo-block">
                  <span>FORMA DE PENSAR</span>

                  <div className="technician-evolution-mindset">
                    {active.mindset.map((step, index) => (
                      <div
                        key={step}
                        className="mindset-chip"
                      >
                        <strong>{step}</strong>

                        {index <
                          active.mindset.length - 1 && (
                          <small>→</small>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="technician-evolution-demo-block">
                  <span>MÓDULOS QUE LO CONSTRUYEN</span>

                  <div className="technician-evolution-module-list">
                    {active.modules.map((module) => (
                      <strong key={module}>
                        {module}
                      </strong>
                    ))}
                  </div>
                </div>
              </div>

              <div className="technician-evolution-demo-example">
                <span>DEMOSTRACIÓN</span>
                <strong>{active.exampleTitle}</strong>
                <p>{active.exampleBody}</p>
              </div>
            </motion.div>
          </div>

          <aside className="technician-evolution-roadmap">
            <div className="technician-evolution-roadmap-title">
              <span>ROADMAP</span>
              <strong>EVOLUCIÓN DEL TÉCNICO</strong>
            </div>

            <div className="technician-evolution-roadmap-list">
              {stages.map((stage) => (
                <button
                  key={stage.id}
                  type="button"
                  aria-label={stage.title}
                  className={`technician-roadmap-step ${
                    active.id === stage.id
                      ? "is-active"
                      : ""
                  }`}
                  onClick={() => setActiveId(stage.id)}
                >
                  <span className="technician-roadmap-step-number">
                    {stage.number}
                  </span>

                  <span className="technician-roadmap-step-copy">
                    <strong>{stage.title}</strong>

                    <span className="technician-roadmap-modules">
                      {stage.modules.map((module) => (
                        <small key={module}>
                          {module}
                        </small>
                      ))}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
