# AyRPC 2026 · Clase 01 · Diseño final

## Objetivo

Convertir la Clase 01 en una introducción completa al curso y a la forma de pensar de un técnico, sin adelantar en profundidad contenidos que pertenecen a las clases siguientes.

El opening de video queda fuera de la numeración de slides.

La presentación final tendrá 13 slides navegables después del opening.

---

## Recorrido final

### Slide 01 · Portada
AyRPC 2026 · Clase 01 · Introducción.

### Slide 02 · ¿Qué es AyRPC?
Presentación del curso, propósito y propuesta.

### Slide 03 · Los 12 módulos
Vista general del programa completo.

### Slide 04 · El recorrido del curso
Examen final, recuperatorio, LinkedIn y oportunidades posteriores.

### Slide 05 · Classroom y asistencia
Classroom, asistencia, recuperación de clases y funcionamiento general de la cursada.

### Slide 06 · Honestidad profesional
Ética, responsabilidad, transparencia y relación con el cliente.

### Slide 07 · ¿Qué es una computadora?
Modelo básico:

ENTRADA → PROCESAMIENTO → SALIDA

Debe seguir siendo conceptual y accesible.

### Slide 08 · Las computadoras adoptan muchos formatos
Desktop, notebook, AIO, mini PC, servidor, arcade, kiosco, industrial y sistemas embebidos.

También introduce:

- servidor
- nube
- idea de que la nube es infraestructura informática de terceros
- teaser de BuildCores

BuildCores debe mostrarse únicamente como adelanto de una herramienta que será utilizada en Componentes, Compatibilidad y Armado.

No desarrollar todavía una demostración completa.

### Slide 09 · Homelab
Nueva slide.

Objetivo: presentar el concepto de homelab sin convertir esta clase en una clase de Redes o Servidores.

Visual principal:

CASA
  ↓
RED LOCAL
  ↓
SERVIDOR / NAS
  ↓
SERVICIOS

Debe explicar brevemente:

- qué es un homelab
- para qué puede servir
- almacenamiento y backups
- servicios propios
- experimentación
- virtualización
- aprendizaje de redes y servidores
- relación entre infraestructura local y cloud

No presentar cloud como algo negativo.

La idea central es que el técnico moderno puede aprender construyendo infraestructura propia y entender mejor qué ocurre detrás de los servicios que usa.

### Slide 10 · Evolución del técnico
Mantener visualmente la slide actual.

Cinco etapas:

1. Entender la máquina
2. Entender cómo funciona
3. Encontrar y demostrar fallas
4. Pensar en sistemas
5. Investigar lo que no se ve

Debe seguir vinculada a los 11 módulos restantes.

### Slide 11 · Niveles de técnico
Nueva slide.

No presentar estos niveles como títulos, certificaciones oficiales ni categorías laborales rígidas.

Son una escala pedagógica de autonomía técnica.

Secuencia:

INICIAL
  ↓
TÉCNICO
  ↓
DIAGNÓSTICO
  ↓
SISTEMAS
  ↓
ESPECIALIZACIÓN

Concepto de cada etapa:

#### Inicial
Sigue procedimientos y reconoce componentes y síntomas básicos.

#### Técnico
Puede realizar tareas de forma autónoma y comprender qué está haciendo.

#### Diagnóstico
Formula hipótesis, mide, compara evidencia y evita cambiar piezas al azar.

#### Sistemas
Entiende dependencias entre hardware, software, red, servicios e infraestructura.

#### Especialización
Profundiza en áreas concretas como microsoldadura, redes, seguridad, servidores o análisis avanzado.

La evolución no depende solamente de cuánto conocimiento memoriza una persona, sino de cuánto puede investigar, justificar y resolver por sí misma.

### Slide 12 · Diagnosticar no es adivinar
Mantener el embudo interactivo actual.

Síntomas:

- NO ENCIENDE
- NO DA VIDEO
- SE CUELGA
- NO HAY INTERNET

Método:

OBSERVAR
→ HIPÓTESIS
→ PROBAR
→ DESCARTAR
→ MEDIR
→ DECIDIR

Regla:

UNA VARIABLE POR VEZ

No comprar ni reemplazar piezas sin una prueba que justifique la decisión.

La IA permanece como drawer lateral y copiloto de diagnóstico.

La IA puede:

- ordenar hipótesis
- proponer la próxima prueba
- ayudar a interpretar evidencia
- detectar información faltante

La evidencia decide.

### Slide 13 · Cierre / preguntas
No debe ser únicamente una pantalla de "¿Preguntas?".

Debe cerrar la idea central de la clase:

No vinieron a memorizar piezas.
Vinieron a empezar a pensar como técnicos.

Debe dejar espacio visual para preguntas y conversación con los alumnos.

---

## Arquitectura de escenas

Eliminar el modelo heredado de 16 escenas.

Después de la migración deben existir exactamente 13 escenas navegables.

Los IDs deben ser semánticos y reflejar el contenido actual.

El opening de video no cuenta como escena dentro del progreso.

Home debe navegar a la primera slide.

End debe navegar a la última slide.

La barra vertical de progreso debe representar correctamente las 13 slides.

---

## Interactividad

Todos los controles interactivos deben recibir eventos reales de mouse.

El HUD superior es informativo y debe mantener:

pointer-events: none

Revisar especialmente:

- módulos
- recorrido del curso
- Classroom
- concepto de computadora
- formatos
- evolución del técnico
- diagnóstico
- drawer de IA

---

## Responsive

Objetivo mínimo:

1280×650
1280×672
1920×1080

El contenido importante no puede:

- cortarse
- quedar debajo del HUD
- quedar debajo de controles globales
- requerir zoom para leerse

En pantallas angostas se pueden reducir textos secundarios antes de reducir excesivamente la tipografía principal.

En orientación portrait debe aparecer un overlay:

"Girá el dispositivo para ver la presentación."

---

## Correcciones editoriales

Corregir:

"EDICION" → "EDICIÓN"

"Reparacion" → "Reparación"

Revisar otros textos visibles para asegurar tildes y Ñ correctas.

---

## Fuera de alcance de Clase 01

No desarrollar en profundidad:

- ESD
- seguridad eléctrica
- herramientas
- mediciones eléctricas
- compatibilidad detallada
- BIOS/UEFI avanzada
- drivers
- microsoldadura
- redes profundas
- malware
- ciberseguridad profunda

Estos contenidos pertenecen a clases posteriores.

---

## Criterios de aceptación

La implementación se considera completa cuando:

1. El opening funciona como actualmente.
2. Existen exactamente 13 slides navegables.
3. Homelab tiene su propia slide.
4. Niveles de técnico tiene su propia slide.
5. BuildCores aparece como teaser.
6. La evolución del técnico conserva su diseño aprobado.
7. Diagnóstico conserva su diseño e interacción aprobados.
8. El drawer de IA funciona.
9. Todos los controles responden al mouse.
10. Home y End funcionan correctamente.
11. El progreso vertical refleja el nuevo total.
12. La presentación es legible a 1280×650.
13. Existe overlay para portrait.
14. No quedan escenas heredadas visibles.
15. La suite completa de Vitest pasa.
16. `npm run build` termina sin errores.
