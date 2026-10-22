import { useState } from "react";

type ComputerTypeId =
  | "desktop"
  | "notebook"
  | "aio"
  | "mini"
  | "server"
  | "arcade"
  | "kiosk"
  | "industrial"
  | "embedded";

type ComputerType = {
  id: ComputerTypeId;
  label: string;
  use: string;
  priority: string;
  description: string;
};

const computerTypes: ComputerType[] = [
  {
    id: "desktop",
    label: "ESCRITORIO",
    use: "USO GENERAL Y ESPECIALIZADO",
    priority: "POTENCIA Y PERSONALIZACIÓN",
    description:
      "Puede adaptarse para oficina, gaming, diseño, programación, reparación y muchas otras tareas.",
  },
  {
    id: "notebook",
    label: "NOTEBOOK",
    use: "TRABAJO Y MOVILIDAD",
    priority: "PORTABILIDAD Y AUTONOMÍA",
    description:
      "Integra pantalla, teclado, batería y computadora en un único equipo transportable.",
  },
  {
    id: "aio",
    label: "ALL-IN-ONE",
    use: "OFICINA Y ESPACIOS REDUCIDOS",
    priority: "INTEGRACIÓN Y SIMPLICIDAD",
    description:
      "La computadora se integra detrás de la pantalla para ocupar menos espacio y reducir cableado.",
  },
  {
    id: "mini",
    label: "MINI PC",
    use: "OFICINA Y TAREAS ESPECÍFICAS",
    priority: "TAMAÑO Y EFICIENCIA",
    description:
      "Concentra una computadora completa en un gabinete extremadamente pequeño.",
  },
  {
    id: "server",
    label: "SERVIDOR",
    use: "SERVICIOS Y RED",
    priority: "DISPONIBILIDAD Y ESTABILIDAD",
    description:
      "Está pensado para brindar servicios, almacenar información o atender otros equipos a través de una red.",
  },
  {
    id: "arcade",
    label: "ARCADE",
    use: "ENTRETENIMIENTO",
    priority: "RESPUESTA Y ROBUSTEZ",
    description:
      "Es una computadora dedicada a ejecutar juegos y trabajar con controles, pantalla y hardware específicos.",
  },
  {
    id: "kiosk",
    label: "KIOSCO",
    use: "AUTOSERVICIO E INFORMACIÓN",
    priority: "SIMPLICIDAD Y CONTINUIDAD",
    description:
      "Realiza una tarea específica para el público y suele funcionar durante muchas horas con mínima intervención.",
  },
  {
    id: "industrial",
    label: "INDUSTRIAL",
    use: "CONTROL Y AUTOMATIZACIÓN",
    priority: "CONFIABILIDAD Y RESISTENCIA",
    description:
      "Controla procesos, máquinas o instalaciones y puede trabajar en ambientes mucho más exigentes que una PC común.",
  },
  {
    id: "embedded",
    label: "EMBEBIDO",
    use: "FUNCIÓN ESPECÍFICA",
    priority: "EFICIENCIA E INTEGRACIÓN",
    description:
      "Forma parte de otro dispositivo y suele estar diseñada para cumplir una función concreta.",
  },
];

export function ComputerTypesScene() {
  const [activeId, setActiveId] =
    useState<ComputerTypeId>("desktop");

  const [cloudMode, setCloudMode] = useState(false);

  const active =
    computerTypes.find((item) => item.id === activeId) ??
    computerTypes[0];

  const selectType = (id: ComputerTypeId) => {
    setActiveId(id);
    setCloudMode(false);
  };

  return (
    <section className="scene computer-types">
      <div className="computer-types-shell">
        <header className="computer-types-header">
          <span>FORMATOS Y USOS</span>

          <h1>No todas las computadoras parecen una PC</h1>

          <p>
            La forma cambia según lo que necesitamos que la
            computadora haga.
          </p>
        </header>

        <div className="computer-types-layout">
          <nav
            className="computer-types-list"
            aria-label="Tipos de computadora"
          >
            {computerTypes.map((item, index) => (
              <button
                key={item.id}
                type="button"
                aria-label={item.label}
                className={`computer-type-item ${
                  !cloudMode && activeId === item.id
                    ? "is-active"
                    : ""
                }`}
                onClick={() => selectType(item.id)}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{item.label}</strong>
              </button>
            ))}

            <button
              type="button"
              className={`computer-type-cloud ${
                cloudMode ? "is-active" : ""
              }`}
              onClick={() => setCloudMode(true)}
            >
              ¿Y LA NUBE?
            </button>
          </nav>

          <div className="computer-types-stage">
            {cloudMode ? (
              <div className="computer-cloud">
                <div className="computer-cloud-flow">
                  <div>
                    <span>01</span>
                    <strong>TU EQUIPO</strong>
                  </div>

                  <span>→</span>

                  <div>
                    <span>02</span>
                    <strong>INTERNET</strong>
                  </div>

                  <span>→</span>

                  <div>
                    <span>03</span>
                    <strong>SERVIDOR REMOTO</strong>
                  </div>
                </div>

                <div className="computer-cloud-message">
                  <span>¿QUÉ ES LA NUBE?</span>

                  <strong>
                    La nube es, esencialmente, la computadora de otro.
                  </strong>

                  <p>
                    Tus datos o aplicaciones pueden ejecutarse en una
                    computadora ubicada en otro lugar y llegar hasta
                    vos a través de una red.
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="computer-type-visual">
                  <span>FORMATO</span>
                  <strong>{active.label}</strong>
                </div>

                <div className="computer-type-info">
                  <div>
                    <span>USO</span>
                    <strong>{active.use}</strong>
                  </div>

                  <div>
                    <span>PRIORIDAD</span>
                    <strong>{active.priority}</strong>
                  </div>

                  <p>{active.description}</p>
                </div>
              </>
            )}

            <aside className="computer-types-buildcores">
              <div>
                <span>PRÓXIMAMENTE EN EL CURSO</span>

                <strong>BuildCores</strong>

                <p>
                  Lo vamos a usar en Componentes, Compatibilidad y Armado
                  para explorar configuraciones y entender mejor cómo
                  encajan las piezas entre sí.
                </p>
              </div>

              <a
                href="https://www.buildcores.com/setup/x5lJIsl1A?view=setup"
                target="_blank"
                rel="noreferrer"
              >
                Explorar BuildCores
              </a>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

