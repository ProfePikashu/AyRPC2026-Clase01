export const PRESENTATION_WIDTH = 1280;
export const PRESENTATION_HEIGHT = 720;

export function getPresentationFitScale(
  viewportWidth: number,
  viewportHeight: number,
): number {
  return Math.min(
    1,
    viewportWidth / PRESENTATION_WIDTH,
    viewportHeight / PRESENTATION_HEIGHT,
  );
}
