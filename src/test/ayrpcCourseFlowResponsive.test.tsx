import { describe, expect, it } from "vitest";
import {
  createCourseFlowNodes,
} from "../components/CourseFlowReact";

describe("AyRPC flow responsive", () => {
  it("preserva la geometria FigJam en paneles desktop angostos", () => {
    const wide = createCourseFlowNodes(560);
    const narrow = createCourseFlowNodes(380);

    const wideAttendance =
      wide.find((node) => node.id === "attendance")!;

    const wideRecovery =
      wide.find((node) => node.id === "attendanceRecovery")!;

    const wideNoApto =
      wide.find((node) => node.id === "noApto")!;

    expect(wideRecovery.position.x)
      .toBeGreaterThan(wideAttendance.position.x);

    expect(wideNoApto.position.x)
      .toBeGreaterThan(wideRecovery.position.x);


    const narrowAttendance =
      narrow.find((node) => node.id === "attendance")!;

    const narrowRecovery =
      narrow.find((node) => node.id === "attendanceRecovery")!;

    const narrowNoApto =
      narrow.find((node) => node.id === "noApto")!;

    expect(narrowRecovery.position.x)
      .toBeGreaterThan(narrowAttendance.position.x);

    expect(narrowNoApto.position.x)
      .toBeGreaterThan(narrowRecovery.position.x);
  });
});
