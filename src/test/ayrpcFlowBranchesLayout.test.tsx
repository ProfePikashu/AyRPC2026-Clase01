import { describe, expect, it } from "vitest";
import {
  courseFlowEdges,
} from "../components/CourseFlowReact";

describe("AyRPC result branches", () => {
  it("examen y recuperatorio comparten certificado", () => {
    const direct =
      courseFlowEdges.find(
        (edge) =>
          edge.id === "result-yes"
      );

    const recovered =
      courseFlowEdges.find(
        (edge) =>
          edge.id ===
          "recovery-result-yes"
      );

    expect(direct?.target)
      .toBe("certificate");

    expect(recovered?.target)
      .toBe("certificate");
  });

  it("los NO terminan en sus salidas negativas", () => {
    const attendanceFail =
      courseFlowEdges.find(
        (edge) =>
          edge.id ===
          "attendance-recovery-no"
      );

    const examFail =
      courseFlowEdges.find(
        (edge) =>
          edge.id ===
          "recovery-result-no"
      );

    expect(attendanceFail?.target)
      .toBe("noApto");

    expect(examFail?.target)
      .toBe("noCertificate");
  });
});
