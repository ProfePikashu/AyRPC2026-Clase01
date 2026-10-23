# AyRPC Clase 01 - Mobile Presentation Shell

## Objetivo

Mostrar en teléfonos horizontales exactamente la presentación desktop 1280x720, completa y sin reflow de las slides.

## Arquitectura

### Desktop

- La presentación se renderiza normalmente.
- No usa iframe.
- No cambia el layout existente.
- Se mantienen teclado, fullscreen y comportamiento actual.

### Mobile landscape

- Se activa cuando el viewport es horizontal, ancho <= 1100px y alto <= 500px.
- La página exterior funciona como visor mobile.
- Dentro se carga la presentación mediante un iframe real de 1280x720.
- El iframe usa `?embedded=1` para impedir recursión.
- El iframe conserva las media queries desktop porque su viewport interno es 1280x720.
- El iframe completo se escala con contain y se centra en la pantalla.
- Se permiten bandas laterales cuando la relación de aspecto del teléfono no sea 16:9.

### Portrait

- No activa el visor mobile.
- Se conserva PortraitGuard y el mensaje para girar el dispositivo.

## Gestos

- Swipe horizontal hacia la izquierda: siguiente slide.
- Swipe horizontal hacia la derecha: slide anterior.
- Movimiento vertical no cambia de slide.
- Pinch con dos dedos queda reservado para zoom.

### Diagrama de flujo

- Dentro del diagrama, arrastrar verticalmente debe permitir recorrerlo arriba y abajo.
- Un gesto predominantemente horizontal debe seguir cambiando de slide.
- El diagrama no debe bloquear el pinch zoom.
- React Flow conserva su geometría desktop.

## Implementación

- `mobilePresentationMode.ts` decide si se usa el visor.
- `MobilePresentationShell.tsx` será el visor oficial.
- El shell carga `/?embedded=1` dentro de un iframe 1280x720.
- `main.tsx` decide entre `MobilePresentationShell` y `App`.
- La instancia embedded siempre renderiza `App` directamente.
- Se reutiliza `getPresentationFitScale()` para calcular la escala contain.

## Limpieza

- Eliminar del App normal el experimento `presentation-fit-viewport` / `presentation-fit-stage`.
- Retirar los parches mobile de reflow y scroll que ya no sean necesarios.
- `mobile-preview.html` puede mantenerse temporalmente como herramienta de prueba hasta verificar el modo oficial.

## Criterios de aceptación

- 800x360 muestra la slide desktop completa.
- 844x390 muestra la slide desktop completa.
- 915x412 muestra la slide desktop completa.
- Desktop 1920x1080 permanece sin cambios.
- Portrait conserva el aviso de rotación.
- Swipe horizontal funciona en mobile.
- Pinch zoom sigue disponible.
- En el diagrama: vertical desplaza el contenido y horizontal cambia de slide.
- Todos los tests existentes siguen verdes.
- `npm run build` finaliza correctamente.
