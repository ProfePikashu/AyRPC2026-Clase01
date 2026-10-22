import { motion } from "motion/react";
import { AndyLogo } from "./AndyLogo";
import type { ClassScene } from "../data/class01";

export function HeroIntro({ scene }: { scene: ClassScene }) {
  return (
    <motion.section
      className="scene intro-clean"
      data-scene-id={scene.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="intro-bg-grid" />
      <div className="intro-glow intro-glow-cyan" />
      <div className="intro-glow intro-glow-magenta" />

      <div className="intro-layout">

        <motion.div
          className="intro-logo-wrap"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <AndyLogo />
        </motion.div>

        <motion.div
          className="intro-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.55 }}
        >
          <div className="intro-kicker">
            FORMACIÓN TÉCNICA · EDICIÓN 2026
          </div>

          <div className="intro-title glitch-title" data-text="AyRPC 2026">
            <span>AyRPC</span>
            <strong>2026</strong>
          </div>

          <div className="intro-subtitle">
            Armado y Reparación de PC
          </div>

          <div className="intro-line" />

          <div className="intro-info">
            <span>24 OCT 2026</span>
            <span>SÁBADOS · 19:30</span>
            <span>12 MÓDULOS</span>
            <span>100% GRATUITO</span>
          </div>
        </motion.div>

        <motion.div
          className="intro-itec"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.55 }}
        >
          <span>ACOMPAÑA</span>
          <img src="/brands/itec-logo.png" alt="iTEC" />
        </motion.div>

      </div>

      <div className="intro-bottom">
        <span>ANDYAZHTEC</span>
        <span className="intro-bottom-dot">×</span>
        <span>ITEC</span>
      </div>
    </motion.section>
  );
}





