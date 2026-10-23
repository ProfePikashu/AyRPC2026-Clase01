# Convención para diagramas de flujo

## Regla principal

Para diagramas de flujo con ramas, convergencias o retornos:

**FigJam/Figma define la geometría -> React Flow implementa conexiones -> CSS define la estética.**

## Procedimiento

1. Definir primero la lógica del flujo.
2. Acordar visualmente la geometría en FigJam/Figma.
3. Tomar ese FigJam como fuente de verdad y no reinterpretar después las ramas.
4. Implementar el diagrama con `@xyflow/react`.
5. Usar `Handle`, `sourceHandle`, `targetHandle`, `getSmoothStepPath` y `MarkerType.ArrowClosed` para las conexiones.
6. Usar CSS solamente para colores, tipografía, bordes, glow y apariencia de los nodos.
7. Los nodos deben adaptarse al texto y las conexiones deben salir de handles reales.
8. En presentaciones, no asumir que un panel angosto significa mobile.
9. Mantener coordenadas lógicas del diagrama y ajustar viewport/zoom al contenedor.
10. Probar responsive y crear un checkpoint Git antes de continuar.

## Evitar

- Construir conexiones complejas con `::before` y `::after`.
- Calcular codos con porcentajes o `calc()`.
- Posicionar manualmente cada flecha con CSS absoluto.
- Reordenar automáticamente el grafo sólo porque el panel tenga menos de 500 px.
- Seguir agregando overrides CSS cuando la arquitectura del diagrama ya está fallando.

## Lección de AyRPC 2026 - Clase 01

El primer enfoque con Grid/Flex y pseudo-elementos CSS produjo conectores desplazados, ramas demasiado largas, líneas atravesando etiquetas y muchos overrides acumulados.

La solución estable fue:

FigJam aprobado -> coordenadas lógicas -> React Flow -> handles reales -> CSS AyRPC.

React Flow debe resolver el routing. CSS no debe convertirse nuevamente en un motor de diagramas.
