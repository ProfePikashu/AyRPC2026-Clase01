export type SceneType =
  | "hero"
  | "profile"
  | "timeline"
  | "story"
  | "system"
  | "promise"
  | "course-map"
  | "ethics"
  | "concept"
  | "resources"
  | "outro"
  | "questions";

export interface ClassScene {
  id: string;
  type: SceneType;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  body?: string;
  items?: string[];
  note?: string;
  duration?: number;
}

export const class01: ClassScene[] = [
  {
    id: "portada",
    type: "hero",
    eyebrow: "FORMACIÓN TÉCNICA · EDICIÓN 2026",
    title: "AyRPC 2026",
    subtitle: "Armado y Reparación de PC",
    body: "Curso 100% gratuito, en vivo, con Twitch, Classroom, ExamPro, comunidad y herramientas propias.",
    items: [
      "100% gratuito",
      "Inicio 24 OCT 2026",
      "Sábados · 19:30",
      "12 módulos · en vivo",
      "AndyAzhTEC × ITEC",
    ],
    duration: 7,
  },

  {
    id: "que-es-ayrpc",
    type: "profile",
    eyebrow: "AYRPC 2026",
    title: "¿Qué es AyRPC?",
    subtitle: "Mucho más que mirar una clase.",
    duration: 8,
  },

  {
    id: "modulos",
    type: "course-map",
    eyebrow: "RUTA 2026",
    title: "Los 12 módulos",
    subtitle: "De los fundamentos al diagnóstico y la seguridad.",
    duration: 8,
  },

  {
    id: "recorrido",
    type: "timeline",
    eyebrow: "EL RECORRIDO",
    title: "La cursada no termina cuando termina el stream",
    subtitle: "Examen, recuperatorio, LinkedIn y oportunidades.",
    duration: 8,
  },

  {
    id: "plataforma",
    type: "system",
    eyebrow: "ECOSISTEMA AYRPC",
    title: "Classroom, asistencia y recuperación",
    subtitle: "Herramientas para acompañar toda la cursada.",
    duration: 8,
  },

  {
    id: "honestidad",
    type: "ethics",
    eyebrow: "PROFESIONALISMO",
    title: "No seas deshonesto",
    subtitle: "Saber más también implica más responsabilidad.",
    duration: 6,
  },

  {
    id: "computadora",
    type: "concept",
    eyebrow: "CONCEPTO BÁSICO",
    title: "¿Qué es una computadora?",
    subtitle: "Entrada → Procesamiento → Salida",
    duration: 6,
  },

  {
    id: "formatos",
    type: "concept",
    eyebrow: "FORMATOS Y USOS",
    title: "No todas las computadoras parecen una PC",
    subtitle: "El formato cambia según lo que necesitamos resolver.",
    duration: 8,
  },

  {
    id: "homelab",
    type: "system",
    eyebrow: "TU PROPIO LABORATORIO",
    title: "Homelab",
    subtitle: "Casa → Red → Servidor → Servicios",
    duration: 7,
  },

  {
    id: "evolucion-tecnico",
    type: "course-map",
    eyebrow: "EVOLUCIÓN",
    title: "De querer arreglar una PC a pensar como técnico",
    subtitle: "Cada módulo cambia la forma en la que mirás un problema.",
    duration: 8,
  },

  {
    id: "niveles-tecnico",
    type: "concept",
    eyebrow: "AUTONOMÍA Y CRITERIO",
    title: "Niveles de técnico",
    subtitle: "No son rangos oficiales: representan crecimiento técnico.",
    duration: 7,
  },

  {
    id: "diagnostico",
    type: "concept",
    eyebrow: "MÉTODO DE DIAGNÓSTICO",
    title: "Diagnosticar no es adivinar",
    subtitle: "La evidencia decide.",
    duration: 10,
  },

  {
    id: "cierre",
    type: "questions",
    eyebrow: "CLASE 01 · CIERRE",
    title: "Preguntas",
    subtitle: "No vinieron a memorizar piezas. Vinieron a empezar a pensar como técnicos.",
    duration: 15,
  },
];
