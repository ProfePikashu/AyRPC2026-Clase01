import { describe, expect, it } from "vitest";
import {
  courseFlowEdges,
} from "../components/CourseFlowReact";

describe("AyRPC attendance merge", () => {
  it("los dos caminos positivos terminan en APTO", () => {
    const direct =
      courseFlowEdges.find(
        (edge) =>
          edge.id === "attendance-yes"
      );

    const recovered =
      courseFlowEdges.find(
        (edge) =>
          edge.id ===
          "attendance-recovery-yes"
      );

    expect(direct?.target)
      .toBe("apto");

    expect(recovered?.target)
      .toBe("apto");

    expect(direct?.data?.label)
      .toBe("SÍ");

    expect(recovered?.data?.label)
      .toBe("SÍ");
  });
});
