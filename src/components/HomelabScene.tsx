export function HomelabScene() {
  return (
    <section className="scene homelab-scene">
      <div className="homelab-shell">

        <header className="homelab-header">
          <span className="eyebrow">
            TU PROPIO LABORATORIO
          </span>

          <h1>Homelab</h1>

          <p>
            Una infraestructura real, pero en casa, donde podés
            experimentar, romper, reconstruir y aprender sin depender
            de un entorno de producción.
          </p>
        </header>

        <div
          className="homelab-path"
          aria-label="Recorrido de un homelab"
        >
          <div className="homelab-node">
            <span>01</span>
            <strong>CASA</strong>
            <small>Tu espacio físico</small>
          </div>

          <div className="homelab-arrow" aria-hidden="true">
            →
          </div>

          <div className="homelab-node">
            <span>02</span>
            <strong>RED LOCAL</strong>
            <small>Los equipos se conectan</small>
          </div>

          <div className="homelab-arrow" aria-hidden="true">
            →
          </div>

          <div className="homelab-node">
            <span>03</span>
            <strong>SERVIDOR / NAS</strong>
            <small>Procesamiento y almacenamiento</small>
          </div>

          <div className="homelab-arrow" aria-hidden="true">
            →
          </div>

          <div className="homelab-node">
            <span>04</span>
            <strong>SERVICIOS</strong>
            <small>Lo que finalmente usás</small>
          </div>
        </div>

        <div className="homelab-bottom">

          <div className="homelab-learning">
            <span className="homelab-label">
              ¿QUÉ PODÉS PRACTICAR?
            </span>

            <div className="homelab-learning-grid">
              <div>
                <strong>Backups</strong>
                <small>
                  Copias, redundancia y recuperación.
                </small>
              </div>

              <div>
                <strong>Virtualización</strong>
                <small>
                  Varias máquinas dentro de una sola.
                </small>
              </div>

              <div>
                <strong>Redes</strong>
                <small>
                  Direcciones, rutas y comunicación.
                </small>
              </div>

              <div>
                <strong>Infraestructura</strong>
                <small>
                  Entender qué depende de qué.
                </small>
              </div>
            </div>
          </div>

          <aside className="homelab-cloud">
            <span>LOCAL ↔ REMOTO</span>

            <strong>
              ¿Y el cloud?
            </strong>

            <p>
              No es el enemigo ni lo contrario.
              Un laboratorio propio te ayuda a entender
              qué ocurre detrás de aquello que después
              podés ejecutar en infraestructura de terceros.
            </p>

            <div className="homelab-cloud-flow">
              APRENDER → ENTENDER → ELEGIR
            </div>
          </aside>

        </div>

      </div>
    </section>
  );
}
