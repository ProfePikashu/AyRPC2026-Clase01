# Mobile Presentation Shell Implementation Plan

> Implementar con TDD sobre el checkpoint estable de Clase 01.

**Goal:** Usar automáticamente un visor mobile con iframe 1280x720 manteniendo intacta la presentación desktop.

**Spec:** `docs/superpowers/specs/2026-10-23-mobile-presentation-shell-design.md`

## Task 1 - Root y detección mobile

- Probar mobile landscape, desktop, portrait y embedded.
- Crear el selector de raíz.
- Mobile landscape renderiza MobilePresentationShell.
- Embedded y desktop renderizan App.
- Recalcular al cambiar orientación o viewport.
- Ejecutar tests.

## Task 2 - MobilePresentationShell

- Crear componente del visor.
- iframe lógico fijo de 1280x720.
- Cargar la misma URL con `embedded=1`.
- Reutilizar getPresentationFitScale().
- Centrar y escalar con contain.
- Permitir pinch zoom.
- Probar 800x360, 844x390 y 915x412.

## Task 3 - Gestos de navegación

- Mantener swipe horizontal izquierda/derecha.
- Ignorar movimientos verticales.
- Ignorar gestos multitouch para reservar pinch zoom.
- Escuchar el gesto en captura para que funcione sobre componentes hijos.
- Ejecutar tests de navegación.

## Task 4 - React Flow táctil

- Habilitar pan vertical con un dedo.
- Mantener X fija.
- Mantener zoom fijo de React Flow.
- Horizontal sigue siendo cambio de slide.
- Vertical no cambia de slide.
- Pinch no debe disparar navegación.
- Agregar tests del control de viewport.

## Task 5 - Limpieza mobile

- Eliminar presentation-fit-viewport / presentation-fit-stage del App.
- Retirar reglas mobile de reflow y scroll de las slides.
- Dejar CSS únicamente para el shell mobile.
- Mantener mobile-preview.html temporalmente.

## Task 6 - Regresión final

- npx vitest run
- npm run build
- Verificar desktop 1920x1080.
- Verificar mobile 800x360.
- Verificar mobile 844x390.
- Verificar mobile 915x412.
- Verificar portrait.
- Verificar swipe horizontal.
- Verificar pinch zoom.
- Verificar drag vertical del diagrama.
- Crear checkpoint Git si todo queda verde.
