const levels = [
  {
    id: "initial",
    label: "INICIAL",
    subtitle: "Sigue procedimientos",
    body:
      "Reconoce componentes, síntomas básicos y aprende a trabajar con orden.",
  },
  {
    id: "technician",
    label: "TÉCNICO",
    subtitle: "Trabaja con autonomía",
    body:
      "Comprende qué está haciendo y puede resolver tareas habituales por sí mismo.",
  },
  {
    id: "diagnosis",
    label: "DIAGNÓSTICO",
    subtitle: "Formula hipótesis",
    body:
      "Mide, compara evidencia y deja de cambiar piezas al azar.",
  },
  {
    id: "systems",
    label: "SISTEMAS",
    subtitle: "Entiende dependencias",
    body:
      "Relaciona hardware, software, red, servicios e infraestructura.",
  },
  {
    id: "specialization",
    label: "ESPECIALIZACIÓN",
    subtitle: "Profundiza",
    body:
      "Avanza en áreas concretas como microsoldadura, redes, seguridad o servidores.",
  },
];

export function TechnicianLevelsScene() {
  return (
    <section className="scene technician-levels">
      <div className="technician-levels-shell">

        <header className="technician-levels-header">
          <span className="eyebrow">
            AUTONOMÍA Y CRITERIO
          </span>

          <h1>Niveles de técnico</h1>

          <p>
            No son rangos oficiales. Es una forma de visualizar
            cómo crece tu autonomía técnica.
          </p>
        </header>

        <div
          className="technician-levels-path"
          aria-label="Progresión de autonomía técnica"
        >
          {levels.map((level, index) => (
            <div
              className="technician-level"
              key={level.id}
            >
              <div className="technician-level-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="technician-level-copy">
                <strong>{level.label}</strong>
                <span>{level.subtitle}</span>
                <p>{level.body}</p>
              </div>
            </div>
          ))}
        </div>

        <footer className="technician-levels-footer">
          <span>MENOS AUTONOMÍA</span>

          <strong>
            APRENDER → ENTENDER → JUSTIFICAR → RESOLVER
          </strong>

          <span>MÁS AUTONOMÍA</span>
        </footer>

      </div>
    </section>
  );
}
