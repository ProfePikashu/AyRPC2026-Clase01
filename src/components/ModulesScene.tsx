import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type ModuleItem = {
  id: string;
  number: string;
  title: string;
  summary: string;
  outcomes: string[];
  mediaLabel: string;
};

const modules: ModuleItem[] = [
  {
    id: "intro",
    number: "01",
    title: "Introducción",
    summary:
      "Panorama general del curso, reglas de juego, alcance real del técnico y primeras bases para entender qué es una computadora.",
    outcomes: [
      "Qué es AyRPC y cómo se cursa",
      "Qué entendemos por computadora",
      "Áreas del recorrido técnico",
    ],
    mediaLabel: "PANORAMA GENERAL",
  },
  {
    id: "componentes",
    number: "02",
    title: "Componentes",
    summary:
      "Reconocimiento de las piezas principales de una PC, su función y cómo se relacionan entre sí dentro de un sistema.",
    outcomes: [
      "Motherboard, CPU, RAM y almacenamiento",
      "Fuente, GPU y refrigeración",
      "Factores de forma y compatibilidades básicas",
    ],
    mediaLabel: "HARDWARE CORE",
  },
  {
    id: "compatibilidad-armado",
    number: "03",
    title: "Compatibilidad y armado",
    summary:
      "Aprender a elegir piezas compatibles y ensamblar una computadora con criterio, orden y buenas prácticas.",
    outcomes: [
      "Compatibilidad entre partes",
      "Armado seguro y prolijo",
      "Checklist antes del primer encendido",
    ],
    mediaLabel: "BUILD LOGIC",
  },
  {
    id: "sistemas-operativos",
    number: "04",
    title: "Sistemas operativos",
    summary:
      "Instalación, nociones clave y diferencias entre entornos para que el equipo quede funcional y usable.",
    outcomes: [
      "Instalación base",
      "Configuraciones iniciales",
      "Entorno, particiones y nociones prácticas",
    ],
    mediaLabel: "SYSTEM LAYER",
  },
  {
    id: "bios-uefi",
    number: "05",
    title: "BIOS / UEFI",
    summary:
      "Firmware, arranque y configuraciones esenciales para entender qué pasa antes de que cargue el sistema operativo.",
    outcomes: [
      "POST y secuencia de arranque",
      "Secure Boot, CSM y prioridades",
      "Opciones clave y criterios de ajuste",
    ],
    mediaLabel: "FIRMWARE ZONE",
  },
  {
    id: "drivers-herramientas",
    number: "06",
    title: "Drivers y herramientas",
    summary:
      "Uso de utilidades y controladores para dejar equipos operativos, medir estado y agilizar tareas técnicas.",
    outcomes: [
      "Instalación y validación de drivers",
      "Herramientas de diagnóstico y monitoreo",
      "Orden y metodología de trabajo",
    ],
    mediaLabel: "TOOLKIT",
  },
  {
    id: "microsoldadura-1",
    number: "07",
    title: "Microsoldadura I",
    summary:
      "Primera aproximación al trabajo fino sobre placas, conceptos de seguridad, instrumental y práctica guiada.",
    outcomes: [
      "Seguridad y estación de trabajo",
      "Herramientas y consumibles",
      "Criterios básicos sobre placa",
    ],
    mediaLabel: "MICRO SOLDER I",
  },
  {
    id: "microsoldadura-2",
    number: "08",
    title: "Microsoldadura II",
    summary:
      "Continuación práctica y lógica de intervención sobre componentes, pads, pistas y fallas más complejas.",
    outcomes: [
      "Intervenciones más avanzadas",
      "Daños típicos y prevención",
      "Lectura técnica de la reparación",
    ],
    mediaLabel: "MICRO SOLDER II",
  },
  {
    id: "diagnostico",
    number: "09",
    title: "Diagnóstico",
    summary:
      "Aprender a pensar como técnico: observar, probar, aislar variables y construir hipótesis antes de tocar de más.",
    outcomes: [
      "Metodología de diagnóstico",
      "Síntomas, pruebas y descarte",
      "Criterio antes de reemplazar piezas",
    ],
    mediaLabel: "DIAGNOSTIC FLOW",
  },
  {
    id: "redes",
    number: "10",
    title: "Redes",
    summary:
      "Conceptos esenciales para conectar equipos, entender entornos locales y resolver problemas básicos de conectividad.",
    outcomes: [
      "Red local e internet",
      "Elementos y topologías básicas",
      "Problemas comunes de conexión",
    ],
    mediaLabel: "NETWORK BASICS",
  },
  {
    id: "ciberseguridad",
    number: "11",
    title: "Intro a ciberseguridad",
    summary:
      "Buenas prácticas, riesgos frecuentes y mentalidad preventiva aplicada a usuarios, técnicos y equipos.",
    outcomes: [
      "Higiene digital",
      "Riesgos comunes y prevención",
      "Rol del técnico frente a incidentes",
    ],
    mediaLabel: "SECURITY MINDSET",
  },
  {
    id: "malware",
    number: "12",
    title: "Malware",
    summary:
      "Tipos de amenazas, comportamientos típicos y formas iniciales de detección, contención y saneamiento.",
    outcomes: [
      "Qué es malware y cómo actúa",
      "Síntomas e indicadores de compromiso",
      "Contención y limpieza inicial",
    ],
    mediaLabel: "THREAT LAYER",
  },
];

const moduleMedia: Record<string, string> = {
  "intro": "/media/modules/01-intro.png",
  "componentes": "/media/modules/02-componentes.png",
  "compatibilidad-armado": "/media/modules/03-compatibilidad.png",
  "sistemas-operativos": "/media/modules/04-sistemas-operativos.gif",
  "bios-uefi": "/media/modules/05-bios-uefi.png",
  "drivers-herramientas": "/media/modules/06-drivers-herramientas.png",
  "microsoldadura-1": "/media/modules/07-microsoldadura-1.png",
  "microsoldadura-2": "/media/modules/08-microsoldadura-2.gif",
  "diagnostico": "/media/modules/09-diagnostico.png",
  "redes": "/media/modules/10-redes.png",
  "ciberseguridad": "/media/modules/11-ciberseguridad.png",
  "malware": "/media/modules/12-malware.gif",
};

function ModuleMedia({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const src = moduleMedia[id];

  if (!src) {
    return null;
  }

  const isVideo = /\.(mp4|webm)$/i.test(src);

  return (
    <div className="modules-media-visual">
      {isVideo ? (
        <video
          key={src}
          data-testid="module-media"
          src={src}
          className="modules-media-asset"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
      ) : (
        <img
          key={src}
          data-testid="module-media"
          src={src}
          alt={`Vista del módulo ${title}`}
          className="modules-media-asset"
        />
      )}
    </div>
  );
}
export function ModulesScene() {
  const [activeId, setActiveId] = useState(modules[0].id);
  const active = modules.find((item) => item.id === activeId) ?? modules[0];

  return (
    <motion.section
      className="scene modules-scene"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="modules-shell">
        <div className="modules-layout">
          <div className="modules-sidebar">
            <div className="modules-header">
              <h1>Módulos del curso</h1>
            </div>

            <div className="modules-menu">
              {modules.map((item) => {
                const selected = item.id === activeId;

                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    className={`modules-option ${selected ? "is-active" : ""}`}
                    onClick={() => setActiveId(item.id)}
                    animate={{
                      x: selected ? 8 : 0,
                      scale: selected ? 1.015 : 1,
                    }}
                    transition={{
                      duration: 0.22,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <span className="modules-option-number">
                      {selected ? "✓" : item.number}
                    </span>

                    <span className="modules-option-copy">
                      <strong>{item.title}</strong>
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div className="modules-media">
            <div className="modules-media-scan" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                className="modules-media-inner"
                initial={{
                  opacity: 0,
                  scale: 0.975,
                  x: 26,
                  filter: "blur(5px)",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  scale: 0.985,
                  x: -22,
                  filter: "blur(4px)",
                }}
                transition={{
                  duration: 0.28,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="modules-media-topline">
                  <span>MOD {active.number}</span>
                  <span className="modules-media-glitch">
                    {active.mediaLabel}
                  </span>
                </div>

                <h2>{active.title}</h2>

                <p data-testid="module-summary">
                  {active.summary}
                </p>
<ModuleMedia id={active.id} title={active.title} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
}



