import { useEffect, useRef, useState } from "react";

type ExampleId = "keyboard" | "mouse" | "game";
type ConceptId = "input" | "process" | "storage" | "output";
type PelusitaMode = "standby" | "expo";

type Example = {
  id: ExampleId;
  label: string;
  input: string;
  process: string;
  storage: string;
  output: string;
};

const PELUSITA_ANIMATIONS = {
  standby: "/media/pelusita/pelusita_standby_nobg.webp",
  expo: "/media/pelusita/pelusita_expo_nobg.webp",
} as const;

const PELUSITA_EXPO_DURATION_MS = 6400;

const examples: Example[] = [
  {
    id: "keyboard",
    label: "TECLADO",
    input: "tecla A",
    process: "interpretar la entrada",
    storage: "dato temporal",
    output: "A",
  },
  {
    id: "mouse",
    label: "MOUSE",
    input: "movimiento físico",
    process: "coordenadas",
    storage: "posición actual",
    output: "cursor",
  },
  {
    id: "game",
    label: "JUEGO",
    input: "control del jugador",
    process: "lógica + render",
    storage: "estado de la partida",
    output: "frame + sonido",
  },
];

const concepts = {
  input: {
    label: "ENTRADA",
    summary: "Es la información que le damos a la computadora.",
  },
  process: {
    label: "PROCESAMIENTO",
    summary:
      "La computadora toma los datos y hace algo con ellos siguiendo instrucciones.",
  },
  storage: {
    label: "ALMACENAMIENTO",
    summary: "La computadora guarda información para usarla después.",
  },
  output: {
    label: "SALIDA",
    summary: "Es el resultado que la computadora nos devuelve.",
  },
} satisfies Record<ConceptId, { label: string; summary: string }>;

export function ComputerConceptScene() {
  const [activeId, setActiveId] = useState<ExampleId>("keyboard");
  const [activeConcept, setActiveConcept] = useState<ConceptId>("input");
  const [pelusitaMode, setPelusitaMode] =
    useState<PelusitaMode>("standby");

  const pelusitaTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (pelusitaTimer.current) {
        clearTimeout(pelusitaTimer.current);
      }
    };
  }, []);

  const active =
    examples.find((item) => item.id === activeId) ?? examples[0];

  const activeSummary = concepts[activeConcept];

  const flow = [
    {
      id: "input" as const,
      value: active.input,
    },
    {
      id: "process" as const,
      value: active.process,
    },
    {
      id: "storage" as const,
      value: active.storage,
    },
    {
      id: "output" as const,
      value: active.output,
    },
  ];

  const explainConcept = (id: ConceptId) => {
    setActiveConcept(id);
    setPelusitaMode("expo");

    if (pelusitaTimer.current) {
      clearTimeout(pelusitaTimer.current);
    }

    pelusitaTimer.current = setTimeout(() => {
      setPelusitaMode("standby");
      pelusitaTimer.current = null;
    }, PELUSITA_EXPO_DURATION_MS);
  };

  return (
    <section className="scene computer-concept">
      <div className="computer-concept-shell">
        <header className="computer-concept-header">
          <div className="computer-concept-titleblock">
            <span className="computer-concept-kicker">
              CONCEPTO BÁSICO
            </span>

            <h1>¿Qué es una computadora?</h1>

            <p className="computer-concept-definition">
              Una computadora es un{" "}
              <strong>dispositivo electrónico</strong> que{" "}
              <strong>recibe datos de entrada</strong>, los{" "}
              <strong>procesa</strong> y devuelve un{" "}
              <strong>resultado de salida</strong>.
            </p>
          </div>
        </header>

        <div className="computer-concept-core">
          <div className="computer-concept-core-item">
            <span>01</span>
            <strong>DISPOSITIVO ELECTRÓNICO</strong>
          </div>

          <div className="computer-concept-core-arrow">→</div>

          <div className="computer-concept-core-item">
            <span>02</span>
            <strong>ENTRADA</strong>
          </div>

          <div className="computer-concept-core-arrow">→</div>

          <div className="computer-concept-core-item">
            <span>03</span>
            <strong>PROCESO</strong>
          </div>

          <div className="computer-concept-core-arrow">→</div>

          <div className="computer-concept-core-item">
            <span>04</span>
            <strong>SALIDA</strong>
          </div>
        </div>

        <aside
          className="pelusita-guide"
          data-testid="pelusita-guide"
        >
          <img
            className="pelusita-guide-avatar"
            src={PELUSITA_ANIMATIONS[pelusitaMode]}
            alt="Pelusita"
          />

          <div
            className="pelusita-guide-dialog"
            aria-live="polite"
          >
            <span>
              PELUSITA · {activeSummary.label}
            </span>
            <p>{activeSummary.summary}</p>
          </div>
        </aside>

        <div className="computer-concept-divider">
          <span>AHORA VEAMOS ESE PROCESO EN LA PRÁCTICA</span>
        </div>

        <nav
          className="computer-example-selector"
          aria-label="Ejemplos de procesamiento"
        >
          {examples.map((item) => (
            <button
              key={item.id}
              type="button"
              className={activeId === item.id ? "is-active" : ""}
              onClick={() => setActiveId(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="computer-flow">
          {flow.map((item, index) => (
            <div
              key={item.id}
              className="computer-flow-group"
            >
              <button
                type="button"
                aria-label={concepts[item.id].label}
                className={`computer-flow-step ${
                  activeConcept === item.id ? "is-active" : ""
                }`}
                onClick={() => explainConcept(item.id)}
              >
                <strong>{concepts[item.id].label}</strong>
                <span>{item.value}</span>
              </button>

              {index < flow.length - 1 && (
                <span className="computer-flow-arrow">→</span>
              )}
            </div>
          ))}
        </div>

        <div className="computer-concept-note">
          <strong>Ejemplo seleccionado:</strong>{" "}
          {active.label} · cada bloque muestra qué entra, qué se hace,
          qué se guarda y qué se devuelve.
        </div>
      </div>
    </section>
  );
}

