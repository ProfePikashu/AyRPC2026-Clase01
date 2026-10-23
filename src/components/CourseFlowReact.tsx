import {
  BaseEdge,
  EdgeLabelRenderer,
  Handle,
  MarkerType,
  Position,
  ReactFlow,
  getSmoothStepPath,
  type Edge,
  type EdgeProps,
  type Node,
  type NodeProps,
} from "@xyflow/react";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import "@xyflow/react/dist/style.css";
import "./CourseFlowReact.css";


type NodeKind =
  | "start"
  | "process"
  | "decision"
  | "terminal"
  | "certificate";

type NodeTone =
  | "cyan"
  | "green"
  | "violet"
  | "amber"
  | "red"
  | "certificate";

type NodeSize =
  | "sm"
  | "md"
  | "lg";

type HandleDefinition = {
  id: string;
  type: "source" | "target";
  position: Position;
};

export type CourseFlowNodeData = {
  kind: NodeKind;
  tone: NodeTone;
  size?: NodeSize;

  eyebrow?: string;
  title: string;
  subtitle?: string;
  extraText?: string;

  handles: HandleDefinition[];
} & Record<string, unknown>;

export type CourseFlowNode =
  Node<CourseFlowNodeData, "courseNode">;


type EdgeTone =
  | "cyan"
  | "red"
  | "amber"
  | "violet";

export type CourseFlowEdgeData = {
  label?: string;
  tone: EdgeTone;
} & Record<string, unknown>;

export type CourseFlowEdge =
  Edge<CourseFlowEdgeData>;


const edgeColors: Record<EdgeTone, string> = {
  cyan: "#00e5ff",
  red: "#ff4168",
  amber: "#f4a900",
  violet: "#9a70ff",
};


function CourseNode({
  data,
}: NodeProps<CourseFlowNode>) {
  const size = data.size ?? "md";

  return (
    <div
      className={[
        "course-rf-node",
        `kind-${data.kind}`,
        `tone-${data.tone}`,
        `size-${size}`,
      ].join(" ")}
    >
      {data.handles.map((handle) => (
        <Handle
          key={`${handle.type}-${handle.id}`}
          id={handle.id}
          type={handle.type}
          position={handle.position}
          isConnectable={false}
          className="course-rf-handle"
        />
      ))}

      <div className="course-rf-surface">
        {data.eyebrow && (
          <span className="course-rf-eyebrow">
            {data.eyebrow}
          </span>
        )}

        <strong className="course-rf-title">
          {data.title}
        </strong>

        {data.subtitle && (
          <small className="course-rf-subtitle">
            {data.subtitle}
          </small>
        )}

        {data.extraText && (
          <span className="course-rf-sr-only">
            {data.extraText}
          </span>
        )}
      </div>
    </div>
  );
}


function CourseEdge({
  sourceX,
  sourceY,
  sourcePosition,
  targetX,
  targetY,
  targetPosition,
  markerEnd,
  style,
  data,
}: EdgeProps<CourseFlowEdge>) {
  const tone = data?.tone ?? "cyan";
  const color = edgeColors[tone];

  const [
    edgePath,
    labelX,
    labelY,
  ] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
    borderRadius: 12,
    offset: 18,
  });

  return (
    <>
      <BaseEdge
        path={edgePath}
        markerEnd={markerEnd}
        style={{
          ...(style ?? {}),
          stroke: color,
          strokeWidth: 2,
        }}
      />

      {data?.label && (
        <EdgeLabelRenderer>
          <div
            className={[
              "course-rf-edge-label",
              `tone-${tone}`,
            ].join(" ")}
            style={{
              transform:
                `translate(-50%, -50%) ` +
                `translate(${labelX}px, ${labelY}px)`,
            }}
          >
            {data.label}
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
}


const nodeTypes = {
  courseNode: CourseNode,
};

const edgeTypes = {
  courseEdge: CourseEdge,
};


function node(
  id: string,
  x: number,
  y: number,
  data: CourseFlowNodeData,
): CourseFlowNode {
  return {
    id,
    type: "courseNode",
    position: { x, y },
    data,
    draggable: false,
    selectable: false,
  };
}


function edge(
  id: string,
  source: string,
  target: string,
  sourceHandle: string,
  targetHandle: string,
  tone: EdgeTone,
  label?: string,
): CourseFlowEdge {
  const color = edgeColors[tone];

  return {
    id,
    source,
    target,
    sourceHandle,
    targetHandle,

    type: "courseEdge",

    data: {
      tone,
      label,
    },

    markerEnd: {
      type: MarkerType.ArrowClosed,
      color,
      width: 14,
      height: 14,
    },

    selectable: false,
    focusable: false,
  };
}


export const courseFlowEdges: CourseFlowEdge[] = [

  edge(
    "start-course",
    "start",
    "course",
    "out",
    "in",
    "cyan",
  ),

  edge(
    "course-attendance",
    "course",
    "attendance",
    "out",
    "in",
    "cyan",
  ),


  // ASISTENCIA

  edge(
    "attendance-yes",
    "attendance",
    "apto",
    "yes",
    "direct",
    "cyan",
    "SÍ",
  ),

  edge(
    "attendance-no",
    "attendance",
    "attendanceRecovery",
    "no",
    "in",
    "red",
    "NO",
  ),

  edge(
    "attendance-recovery-yes",
    "attendanceRecovery",
    "apto",
    "yes",
    "recovery",
    "cyan",
    "SÍ",
  ),

  edge(
    "attendance-recovery-no",
    "attendanceRecovery",
    "noApto",
    "no",
    "in",
    "red",
    "NO",
  ),


  // CAMINO PRINCIPAL

  edge(
    "apto-exam",
    "apto",
    "exam",
    "out",
    "in",
    "cyan",
  ),

  edge(
    "exam-result",
    "exam",
    "result",
    "out",
    "in",
    "cyan",
  ),


  // EXAMEN

  edge(
    "result-yes",
    "result",
    "certificate",
    "yes",
    "direct",
    "cyan",
    "SÍ",
  ),

  edge(
    "result-no",
    "result",
    "recoveryExam",
    "no",
    "in",
    "red",
    "NO",
  ),

  edge(
    "recovery-exam-decision",
    "recoveryExam",
    "recoveryDecision",
    "out",
    "in",
    "amber",
  ),

  edge(
    "recovery-result-yes",
    "recoveryDecision",
    "certificate",
    "yes",
    "recovery",
    "cyan",
    "SÍ",
  ),

  edge(
    "recovery-result-no",
    "recoveryDecision",
    "noCertificate",
    "no",
    "in",
    "red",
    "NO",
  ),
];


export function createCourseFlowNodes(
  width: number,
): CourseFlowNode[] {
  const compact = width < 320;

  if (compact) {
    const x = Math.max(
      12,
      Math.round((width - 180) / 2),
    );

    return [
      node(
        "start",
        x + 42,
        0,
        {
          kind: "start",
          tone: "cyan",
          size: "sm",
          eyebrow: "INICIO",
          title: "Te inscribís",
          handles: [
            {
              id: "out",
              type: "source",
              position: Position.Bottom,
            },
          ],
        },
      ),

      node(
        "course",
        x + 12,
        135,
        {
          kind: "process",
          tone: "cyan",
          size: "sm",
          eyebrow: "CURSADA",
          title: "Cursás las 12 clases",
          handles: [
            {
              id: "in",
              type: "target",
              position: Position.Top,
            },
            {
              id: "out",
              type: "source",
              position: Position.Bottom,
            },
          ],
        },
      ),

      node(
        "attendance",
        x,
        285,
        {
          kind: "decision",
          tone: "violet",
          size: "lg",
          eyebrow: "ASISTENCIA",
          title:
            "¿11 clases principales presentes o recuperadas?",
          handles: [
            {
              id: "in",
              type: "target",
              position: Position.Top,
            },
            {
              id: "yes",
              type: "source",
              position: Position.Bottom,
            },
            {
              id: "no",
              type: "source",
              position: Position.Right,
            },
          ],
        },
      ),

      node(
        "attendanceRecovery",
        x + 8,
        490,
        {
          kind: "decision",
          tone: "amber",
          size: "md",
          eyebrow: "PENDIENTES",
          title: "¿Recuperás pendientes?",
          extraText: "Recuperás pendientes",
          handles: [
            {
              id: "in",
              type: "target",
              position: Position.Left,
            },
            {
              id: "yes",
              type: "source",
              position: Position.Bottom,
            },
            {
              id: "no",
              type: "source",
              position: Position.Right,
            },
          ],
        },
      ),

      node(
        "noApto",
        x + 10,
        675,
        {
          kind: "terminal",
          tone: "red",
          size: "sm",
          eyebrow: "SALIDA",
          title: "No apto para examen",
          handles: [
            {
              id: "in",
              type: "target",
              position: Position.Top,
            },
          ],
        },
      ),

      node(
        "apto",
        x + 10,
        835,
        {
          kind: "process",
          tone: "green",
          size: "sm",
          eyebrow: "HABILITADO",
          title: "Apto para examen final",
          handles: [
            {
              id: "direct",
              type: "target",
              position: Position.Top,
            },
            {
              id: "recovery",
              type: "target",
              position: Position.Right,
            },
            {
              id: "out",
              type: "source",
              position: Position.Bottom,
            },
          ],
        },
      ),

      node(
        "exam",
        x + 10,
        995,
        {
          kind: "process",
          tone: "cyan",
          size: "sm",
          eyebrow: "EXAMEN FINAL",
          title: "Rendís el examen final",
          handles: [
            {
              id: "in",
              type: "target",
              position: Position.Top,
            },
            {
              id: "out",
              type: "source",
              position: Position.Bottom,
            },
          ],
        },
      ),

      node(
        "result",
        x + 12,
        1150,
        {
          kind: "decision",
          tone: "violet",
          size: "sm",
          eyebrow: "RESULTADO",
          title: "¿Aprueba?",
          handles: [
            {
              id: "in",
              type: "target",
              position: Position.Top,
            },
            {
              id: "yes",
              type: "source",
              position: Position.Bottom,
            },
            {
              id: "no",
              type: "source",
              position: Position.Right,
            },
          ],
        },
      ),

      node(
        "recoveryExam",
        x + 10,
        1340,
        {
          kind: "process",
          tone: "amber",
          size: "sm",
          eyebrow: "SEGUNDA OPORTUNIDAD",
          title: "Recuperatorio",
          handles: [
            {
              id: "in",
              type: "target",
              position: Position.Left,
            },
            {
              id: "out",
              type: "source",
              position: Position.Bottom,
            },
          ],
        },
      ),

      node(
        "recoveryDecision",
        x + 8,
        1500,
        {
          kind: "decision",
          tone: "violet",
          size: "md",
          eyebrow: "RECUPERATORIO",
          title: "¿Aprueba recuperatorio?",
          handles: [
            {
              id: "in",
              type: "target",
              position: Position.Top,
            },
            {
              id: "yes",
              type: "source",
              position: Position.Left,
            },
            {
              id: "no",
              type: "source",
              position: Position.Right,
            },
          ],
        },
      ),

      node(
        "noCertificate",
        x + 5,
        1695,
        {
          kind: "terminal",
          tone: "red",
          size: "md",
          eyebrow: "FIN DEL RECORRIDO",
          title:
            "Sin certificado ni recomendación",
          handles: [
            {
              id: "in",
              type: "target",
              position: Position.Left,
            },
          ],
        },
      ),

      node(
        "certificate",
        x + 3,
        1870,
        {
          kind: "certificate",
          tone: "certificate",
          size: "md",
          eyebrow: "OBJETIVO CUMPLIDO",
          title: "Certificado",
          subtitle:
            "+ Recomendación en LinkedIn",
          handles: [
            {
              id: "direct",
              type: "target",
              position: Position.Top,
            },
            {
              id: "recovery",
              type: "target",
              position: Position.Right,
            },
          ],
        },
      ),
    ];
  }


  // =========================================================
  // DESKTOP · COORDENADAS BASADAS EN EL FIGJAM APROBADO
  // =========================================================

  // Coordenadas lógicas tomadas del FigJam aprobado.
  // NO dependen del ancho real del panel.
  const mainX = 20;
  const recoveryX = 300;
  const terminalX = 545;

  return [
    node(
      "start",
      mainX + 42,
      0,
      {
        kind: "start",
        tone: "cyan",
        size: "sm",
        eyebrow: "INICIO",
        title: "Te inscribís",
        handles: [
          {
            id: "out",
            type: "source",
            position: Position.Bottom,
          },
        ],
      },
    ),

    node(
      "course",
      mainX + 12,
      135,
      {
        kind: "process",
        tone: "cyan",
        size: "sm",
        eyebrow: "CURSADA",
        title: "Cursás las 12 clases",
        handles: [
          {
            id: "in",
            type: "target",
            position: Position.Top,
          },
          {
            id: "out",
            type: "source",
            position: Position.Bottom,
          },
        ],
      },
    ),

    node(
      "attendance",
      mainX,
      285,
      {
        kind: "decision",
        tone: "violet",
        size: "lg",
        eyebrow: "ASISTENCIA",
        title:
          "¿11 clases principales presentes o recuperadas?",
        handles: [
          {
            id: "in",
            type: "target",
            position: Position.Top,
          },
          {
            id: "yes",
            type: "source",
            position: Position.Bottom,
          },
          {
            id: "no",
            type: "source",
            position: Position.Right,
          },
        ],
      },
    ),

    node(
      "apto",
      mainX + 10,
      500,
      {
        kind: "process",
        tone: "green",
        size: "sm",
        eyebrow: "HABILITADO",
        title: "Apto para examen final",
        handles: [
          {
            id: "direct",
            type: "target",
            position: Position.Top,
          },
          {
            id: "recovery",
            type: "target",
            position: Position.Right,
          },
          {
            id: "out",
            type: "source",
            position: Position.Bottom,
          },
        ],
      },
    ),

    node(
      "attendanceRecovery",
      recoveryX,
      295,
      {
        kind: "decision",
        tone: "amber",
        size: "sm",
        eyebrow: "PENDIENTES",
        title: "¿Recuperás pendientes?",
        extraText: "Recuperás pendientes",
        handles: [
          {
            id: "in",
            type: "target",
            position: Position.Left,
          },
          {
            id: "yes",
            type: "source",
            position: Position.Bottom,
          },
          {
            id: "no",
            type: "source",
            position: Position.Right,
          },
        ],
      },
    ),

    node(
      "noApto",
      terminalX,
      500,
      {
        kind: "terminal",
        tone: "red",
        size: "sm",
        eyebrow: "SALIDA",
        title: "No apto para examen",
        handles: [
          {
            id: "in",
            type: "target",
            position: Position.Top,
          },
        ],
      },
    ),

    node(
      "exam",
      mainX + 10,
      655,
      {
        kind: "process",
        tone: "cyan",
        size: "sm",
        eyebrow: "EXAMEN FINAL",
        title: "Rendís el examen final",
        handles: [
          {
            id: "in",
            type: "target",
            position: Position.Top,
          },
          {
            id: "out",
            type: "source",
            position: Position.Bottom,
          },
        ],
      },
    ),

    node(
      "result",
      mainX + 12,
      810,
      {
        kind: "decision",
        tone: "violet",
        size: "sm",
        eyebrow: "RESULTADO",
        title: "¿Aprueba?",
        handles: [
          {
            id: "in",
            type: "target",
            position: Position.Top,
          },
          {
            id: "yes",
            type: "source",
            position: Position.Bottom,
          },
          {
            id: "no",
            type: "source",
            position: Position.Right,
          },
        ],
      },
    ),

    node(
      "certificate",
      mainX + 3,
      1010,
      {
        kind: "certificate",
        tone: "certificate",
        size: "md",
        eyebrow: "OBJETIVO CUMPLIDO",
        title: "Certificado",
        subtitle:
          "+ Recomendación en LinkedIn",
        handles: [
          {
            id: "direct",
            type: "target",
            position: Position.Top,
          },
          {
            id: "recovery",
            type: "target",
            position: Position.Right,
          },
        ],
      },
    ),

    node(
      "recoveryExam",
      recoveryX,
      820,
      {
        kind: "process",
        tone: "amber",
        size: "sm",
        eyebrow: "SEGUNDA OPORTUNIDAD",
        title: "Recuperatorio",
        handles: [
          {
            id: "in",
            type: "target",
            position: Position.Left,
          },
          {
            id: "out",
            type: "source",
            position: Position.Bottom,
          },
        ],
      },
    ),

    node(
      "recoveryDecision",
      recoveryX,
      980,
      {
        kind: "decision",
        tone: "violet",
        size: "md",
        eyebrow: "RECUPERATORIO",
        title: "¿Aprueba recuperatorio?",
        handles: [
          {
            id: "in",
            type: "target",
            position: Position.Top,
          },
          {
            id: "yes",
            type: "source",
            position: Position.Left,
          },
          {
            id: "no",
            type: "source",
            position: Position.Right,
          },
        ],
      },
    ),

    node(
      "noCertificate",
      terminalX,
      1010,
      {
        kind: "terminal",
        tone: "red",
        size: "md",
        eyebrow: "FIN DEL RECORRIDO",
        title:
          "Sin certificado ni recomendación",
        handles: [
          {
            id: "in",
            type: "target",
            position: Position.Left,
          },
        ],
      },
    ),
  ];
}


export type CourseFlowViewportLayout = {
  viewport: {
    x: number;
    y: number;
    zoom: number;
  };
  canvasHeight: number;
};

export function getCourseFlowViewport(
  width: number,
  compact = width < 320,
): CourseFlowViewportLayout {
  const padding = 16;

  const logicalWidth =
    compact ? 210 : 735;

  const logicalHeight =
    compact ? 2050 : 1140;

  const availableWidth =
    Math.max(
      200,
      width - padding * 2,
    );

  const minimumZoom =
    compact ? 0.85 : 0.36;

  const zoom =
    Math.min(
      1,
      Math.max(
        minimumZoom,
        availableWidth / logicalWidth,
      ),
    );

  const renderedWidth =
    logicalWidth * zoom;

  const x =
    Math.max(
      0,
      Math.round(
        (width - renderedWidth) / 2,
      ),
    );

  return {
    viewport: {
      x,
      y: 8,
      zoom,
    },

    canvasHeight:
      Math.ceil(
        logicalHeight * zoom + 16,
      ),
  };
}

export function CourseFlowReact() {
  const wrapperRef =
    useRef<HTMLDivElement>(null);

  const [width, setWidth] =
    useState(560);

  useEffect(() => {
    const element = wrapperRef.current;

    if (!element) {
      return;
    }

    const update = () => {
      setWidth(
        Math.max(
          300,
          Math.round(
            element.getBoundingClientRect().width,
          ),
        ),
      );
    };

    update();

    const observer =
      new ResizeObserver(update);

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const compact = width < 320;

  const layout = useMemo(
    () =>
      getCourseFlowViewport(
        width,
        compact,
      ),
    [width, compact],
  );

  const nodes = useMemo(
    () => createCourseFlowNodes(width),
    [width],
  );

  return (
    <div className="ayrpc-course-flow course-flow-react">

      <header className="ayrpc-course-flow-header">
        <span>
          RECORRIDO DE CURSADA
        </span>

        <strong>
          De la inscripción al certificado
        </strong>

        <small>
          Asistencia, examen final,
          recuperación y acompañamiento.
        </small>
      </header>


      <div className="flowchart-grid">
        <div className="flowchart-main">

          <div
            ref={wrapperRef}
            data-testid="ayrpc-reactflow"
            className={[
              "course-flow-react-canvas",
              compact
                ? "is-compact"
                : "is-desktop",
            ].join(" ")}
            style={{
              height:
                `${layout.canvasHeight}px`,
            }}
          >
            <ReactFlow
              nodes={nodes}
              edges={courseFlowEdges}

              nodeTypes={nodeTypes}
              edgeTypes={edgeTypes}

              viewport={layout.viewport}

              minZoom={
                layout.viewport.zoom
              }

              maxZoom={
                layout.viewport.zoom
              }

              nodesDraggable={false}
              nodesConnectable={false}
              nodesFocusable={false}

              edgesFocusable={false}

              elementsSelectable={false}

              panOnDrag={false}

              zoomOnScroll={false}
              zoomOnPinch={false}
              zoomOnDoubleClick={false}

              preventScrolling={false}

              proOptions={{
                hideAttribution: true,
              }}

              colorMode="dark"
            />
          </div>

        </div>
      </div>


      <footer className="flowchart-community">
        <div>
          <span>
            DISPONIBLE DURANTE TODA LA CURSADA
          </span>

          <strong>
            Comunidad y ayuda online
          </strong>
        </div>

        <p>
          WhatsApp · consultas ·
          acompañamiento · opcional
        </p>
      </footer>

    </div>
  );
}


