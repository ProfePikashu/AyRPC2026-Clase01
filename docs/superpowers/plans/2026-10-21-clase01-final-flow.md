# Clase 01 Final Flow Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convertir la Clase 01 de AyRPC 2026 al recorrido final de 13 slides navegables, agregando Homelab, Niveles de técnico, BuildCores y cierre, sin romper las escenas interactivas ya aprobadas.

**Architecture:** Mantener cada escena compleja como componente React independiente. `class01.ts` queda como fuente del orden y metadata de las 13 escenas; `App.tsx` resuelve cada ID semántico hacia su componente. Las nuevas escenas se desarrollan con TDD antes de migrar el orden global.

**Tech Stack:** React, TypeScript, Vite, Motion, Vitest, Testing Library, CSS.

**Spec:** `docs/superpowers/specs/2026-10-21-clase01-final-flow-design.md`

## Global Constraints

- Opening de video fuera de la numeración y progreso.
- Exactamente 13 slides navegables.
- Mínimo visual: 1280×650, 1280×672 y 1920×1080.
- Mantener `pointer-events: none` en `.hud`.
- Mantener visualmente intacta la evolución del técnico salvo cambios necesarios de integración.
- Mantener el embudo y drawer IA de diagnóstico.
- No profundizar contenidos reservados para clases posteriores.
- No reducir texto principal hasta volverlo ilegible a distancia.

## Review Focus

1. Los 13 IDs deben tener exactamente un destino visible en `App.tsx`.
2. Home y End deben llegar a primera y última slide después del opening.
3. La barra de progreso debe calcularse sobre 13 slides, no sobre el modelo heredado.
4. Los controles interactivos deben recibir clicks reales pese al HUD y overlays.
5. 1280×650 no debe cortar contenido crítico de Homelab, Niveles ni Diagnóstico.

---

### Task 1: Nueva escena Homelab

**Files:**
- Create: `src/components/HomelabScene.tsx`
- Create: `src/test/homelabScene.test.tsx`
- Modify later: `src/styles.css`

**Produces:** `HomelabScene`

- [ ] Escribir test RED que exija:
  - heading con `Homelab`
  - CASA
  - RED LOCAL
  - SERVIDOR / NAS
  - SERVICIOS
  - backups
  - virtualización
  - cloud
- [ ] Ejecutar test y confirmar fallo por componente inexistente.
- [ ] Implementar `HomelabScene`.
- [ ] Ejecutar test y dejarlo GREEN.
- [ ] Agregar CSS responsive específico.
- [ ] Revisar visualmente a 1280×672.

---

### Task 2: Nueva escena Niveles de técnico

**Files:**
- Create: `src/components/TechnicianLevelsScene.tsx`
- Create: `src/test/technicianLevelsScene.test.tsx`
- Modify later: `src/styles.css`

**Produces:** `TechnicianLevelsScene`

- [ ] Escribir test RED para los cinco niveles:
  - INICIAL
  - TÉCNICO
  - DIAGNÓSTICO
  - SISTEMAS
  - ESPECIALIZACIÓN
- [ ] Exigir texto que aclare que no son rangos oficiales.
- [ ] Ejecutar RED.
- [ ] Implementar escena con progresión visual de autonomía.
- [ ] Ejecutar GREEN.
- [ ] Agregar responsive y verificar visualmente.

---

### Task 3: Teaser BuildCores en formatos de computadora

**Files:**
- Modify: `src/components/ComputerTypesScene.tsx`
- Modify: `src/test/computerTypesScene.test.tsx`

**Produces:** teaser de BuildCores sin demo completa.

- [ ] Agregar test RED para texto `BuildCores`.
- [ ] Exigir referencia a Componentes / Compatibilidad / Armado.
- [ ] Implementar teaser pequeño y enlace externo:
  `https://www.buildcores.com/setup/x5lJIsl1A?view=setup`
- [ ] Ejecutar tests de Slide 09 actuales y nuevos.

---

### Task 4: Nueva escena de cierre

**Files:**
- Create: `src/components/ClosingScene.tsx`
- Create: `src/test/closingScene.test.tsx`
- Modify later: `src/styles.css`

**Produces:** `ClosingScene`

- [ ] Escribir test RED para:
  `No vinieron a memorizar piezas`
- [ ] Exigir:
  `empezar a pensar como técnicos`
- [ ] Exigir espacio/concepto de preguntas.
- [ ] Implementar cierre visual limpio.
- [ ] Ejecutar GREEN.

---

### Task 5: Migrar de 16 escenas heredadas a 13 semánticas

**Files:**
- Modify: `src/data/class01.ts`
- Modify: `src/App.tsx`
- Modify: `src/test/class01.test.ts`
- Modify: tests de integración `slide*.test.tsx`

**IDs finales y orden:**

1. `portada`
2. `que-es-ayrpc`
3. `modulos`
4. `recorrido`
5. `plataforma`
6. `honestidad`
7. `computadora`
8. `formatos`
9. `homelab`
10. `evolucion-tecnico`
11. `niveles-tecnico`
12. `diagnostico`
13. `cierre`

- [ ] Escribir RED que exija exactamente 13 escenas.
- [ ] Exigir los 13 IDs en el orden anterior.
- [ ] Migrar `class01.ts`.
- [ ] Actualizar mappings de `App.tsx`.
- [ ] Integrar `HomelabScene`.
- [ ] Integrar `TechnicianLevelsScene`.
- [ ] Integrar `ClosingScene`.
- [ ] Actualizar tests de navegación por índice.
- [ ] Confirmar que Slide 10 conserva `TechnicianEvolutionScene`.
- [ ] Confirmar que Slide 12 conserva `DiagnosticMindsetScene`.

---

### Task 6: Navegación y progreso global

**Files:**
- Modify: `src/App.tsx`
- Modify/Create tests de navegación según estructura existente.

- [ ] Test RED: Home lleva a `portada`.
- [ ] Test RED: End lleva a `cierre`.
- [ ] Test RED: progreso final representa 13/13.
- [ ] Ajustar navegación únicamente si los tests lo requieren.
- [ ] Confirmar que opening no incrementa el total.

---

### Task 7: Portrait guard

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/styles.css`
- Create: `src/test/portraitGuard.test.tsx`

- [ ] Test RED que exija el texto:
  `Girá el dispositivo para ver la presentación.`
- [ ] Agregar overlay global.
- [ ] Mostrarlo únicamente mediante media query portrait.
- [ ] Mantener landscape sin interferencias.

---

### Task 8: Corrección editorial

**Files:**
- Search/Modify: `src/**/*.tsx`
- Search/Modify: `src/data/class01.ts`

- [ ] Buscar `EDICION`.
- [ ] Corregir a `EDICIÓN`.
- [ ] Buscar `Reparacion`.
- [ ] Corregir a `Reparación`.
- [ ] Buscar textos visibles sin tildes heredados.
- [ ] No cambiar identificadores técnicos por correcciones editoriales.

---

### Task 9: Responsive y controles reales

**Files:**
- Modify: `src/styles.css`

- [ ] Mantener `.hud { pointer-events: none; }`.
- [ ] Revisar módulos.
- [ ] Revisar recorrido.
- [ ] Revisar Classroom.
- [ ] Revisar computadora.
- [ ] Revisar formatos.
- [ ] Revisar Homelab.
- [ ] Revisar evolución.
- [ ] Revisar niveles.
- [ ] Revisar diagnóstico y drawer IA.
- [ ] Verificar 1280×650.
- [ ] Verificar 1280×672.
- [ ] Verificar 1920×1080.

Prioridad responsive:
1. preservar contenido
2. reducir decoración
3. reducir texto secundario
4. recién al final reducir tipografía principal

---

### Task 10: Verificación final

- [ ] Ejecutar tests de cada componente nuevo.
- [ ] Ejecutar integraciones de slides.
- [ ] Ejecutar:

`npx vitest run`

Expected:
- 0 archivos fallidos
- 0 tests fallidos

- [ ] Ejecutar:

`npm run build`

Expected:
- TypeScript sin errores
- Vite build exitoso

- [ ] Hacer recorrido manual:
  - opening
  - ArrowRight / ArrowLeft
  - Home
  - End
  - B
  - H
  - F
  - botones interactivos
  - drawer IA
  - progreso vertical
  - portrait guard

---

## Self-review del plan

Cobertura contra la spec:

- Homelab: Task 1
- Niveles: Task 2
- BuildCores: Task 3
- Cierre: Task 4
- 13 escenas e IDs: Task 5
- Home/End/progreso: Task 6
- Portrait: Task 7
- Tildes: Task 8
- Responsive e interacción: Task 9
- Suite/build: Task 10

No quedan requisitos de la spec sin tarea asignada.

La implementación se hará de forma secuencial con TDD, comenzando por Homelab.
