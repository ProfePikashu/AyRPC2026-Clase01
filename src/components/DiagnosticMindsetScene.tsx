import { useState } from "react";

type DiagnosticId =
  | "power"
  | "video"
  | "freeze"
  | "network";

type DiagnosticCase = {
  id: DiagnosticId;
  label: string;
  question: string;
  steps: string[];
};

const cases: DiagnosticCase[] = [
  {
    id: "power",
    label: "NO ENCIENDE",
    question: "¿En qué punto deja de aparecer la energía?",
    steps: [
      "Toma eléctrica y zapatilla",
      "Cable de alimentación",
      "Interruptor de la fuente",
      "Conectores ATX / CPU",
      "Botón de encendido",
      "Configuración mínima",
      "Fuente conocida buena",
      "Motherboard y electrónica",
    ],
  },
  {
    id: "video",
    label: "NO DA VIDEO",
    question:
      "¿La computadora no arranca o simplemente no entrega imagen?",
    steps: [
      "Monitor, entrada seleccionada y cable",
      "Puerto de video correcto",
      "RAM asentada y prueba por módulo",
      "Alimentación de GPU",
      "Configuración mínima",
      "iGPU u otra GPU conocida buena",
      "Fuente y alimentación",
      "Motherboard / CPU / electrónica",
    ],
  },
  {
    id: "freeze",
    label: "SE CUELGA",
    question:
      "¿Podemos reproducir el bloqueo y encontrar qué cambia antes?",
    steps: [
      "Reproducir el síntoma",
      "Temperaturas",
      "Visor de eventos y logs",
      "Memoria RAM",
      "SMART y almacenamiento",
      "Drivers y cambios recientes",
      "Fuente / alimentación",
      "Hardware específico o falla intermitente",
    ],
  },
  {
    id: "network",
    label: "NO HAY INTERNET",
    question:
      "¿Hasta dónde llega realmente la comunicación?",
    steps: [
      "Adaptador de red",
      "Dirección IP",
      "Gateway / router",
      "Cable o enlace Wi-Fi",
      "Ping dentro de la red",
      "DNS",
      "Router / switch",
      "Proveedor o servicio externo",
    ],
  },
];

export function DiagnosticMindsetScene() {
  const [activeId, setActiveId] =
    useState<DiagnosticId>("power");

  const [aiOpen, setAiOpen] =
    useState(false);

  const active =
    cases.find((item) => item.id === activeId) ??
    cases[0];

  return (
    <section className="scene diagnostic-mindset">
      <div className="diagnostic-mindset-shell">

        <nav
          className="diagnostic-case-selector"
          aria-label="Síntoma a diagnosticar"
        >
          {cases.map((item) => (
            <button
              key={item.id}
              type="button"
              className={
                active.id === item.id
                  ? "is-active"
                  : ""
              }
              onClick={() => setActiveId(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <header className="diagnostic-mindset-header">
          <span>MÉTODO DE DIAGNÓSTICO</span>

          <h1>
            Diagnosticar no es adivinar
          </h1>

          <p>
            Primero lo común, barato y fácil.
            Lo raro viene después.
          </p>
        </header>

        <div className="diagnostic-mindset-layout">

          <div
            className="diagnostic-focus"
            data-testid="diagnostic-focus"
            key={active.id}
          >
            <div className="diagnostic-focus-heading">
              <span>SÍNTOMA</span>

              <strong>
                {active.label}
              </strong>

              <p>
                {active.question}
              </p>
            </div>

            <div className="diagnostic-funnel">
              {active.steps.map((step, index) => {
                const stage =
                  index < 2
                    ? "RÁPIDO"
                    : index < 5
                      ? "DESCARTAR"
                      : "ESCALAR";

                return (
                  <div
                    className="diagnostic-step"
                    key={`${active.id}-${step}`}
                  >
                    <span>
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <strong>
                      {step}
                    </strong>

                    <small>
                      {stage}
                    </small>
                  </div>
                );
              })}
            </div>

            <div className="diagnostic-rule">
              <strong>
                UNA VARIABLE POR VEZ
              </strong>

              <span>
                Cambiá piezas solamente cuando
                una prueba lo justifique.
              </span>
            </div>
          </div>
        </div>

        <button
          type="button"
          className={
            aiOpen
              ? "diagnostic-ai-tab is-open"
              : "diagnostic-ai-tab"
          }
          aria-label="IA copiloto"
          aria-expanded={aiOpen}
          onClick={() =>
            setAiOpen((current) => !current)
          }
        >
          <span>IA</span>
          <strong>COPILOTO</strong>
        </button>

        <aside
          className={
            aiOpen
              ? "diagnostic-ai-drawer is-open"
              : "diagnostic-ai-drawer"
          }
          data-testid="diagnostic-ai-drawer"
          aria-hidden={!aiOpen}
        >
          <button
            type="button"
            className="diagnostic-ai-close"
            aria-label="Cerrar copiloto"
            onClick={() => setAiOpen(false)}
          >
            ×
          </button>

          <span>IA COMO COPILOTO</span>

          <h2>
            La IA puede ayudarte a pensar
          </h2>

          <p>
            Dale síntomas, contexto y mediciones.
            No le pidas que adivine qué comprar.
          </p>

          <div className="diagnostic-ai-prompt">
            <span>PROMPT ÚTIL</span>

            <strong>
              Ordená las causas desde la más
              probable y barata de comprobar
              hasta la menos probable.
            </strong>

            <p>
              Dame una sola prueba para hacer
              ahora y decime qué resultado
              confirmaría o descartaría cada
              hipótesis.
            </p>
          </div>

          <div className="diagnostic-ai-flow">
            <strong>HIPÓTESIS</strong>
            <small>→</small>
            <strong>PRUEBA</strong>
            <small>→</small>
            <strong>RESULTADO</strong>
          </div>

          <footer>
            <strong>
              La IA ordena posibilidades.
            </strong>

            <span>
              LA EVIDENCIA DECIDE.
            </span>
          </footer>
        </aside>

      </div>
    </section>
  );
}
