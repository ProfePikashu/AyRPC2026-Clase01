/// <reference types="node" />

import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";

describe("Course Flow touch gestures", () => {
  it("permite pan vertical y pinch sobre la capa interactiva de React Flow", () => {
    const css = fs.readFileSync(
      path.resolve(process.cwd(), "src/components/CourseFlowReact.css"),
      "utf8",
    );

    expect(css).toContain(".course-flow-react-canvas .react-flow__pane");
    expect(css).toContain("touch-action: pan-y pinch-zoom");
  });
});
