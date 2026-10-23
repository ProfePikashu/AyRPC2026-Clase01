export type MobilePresentationModeInput = {
  width: number;
  height: number;
  embedded: boolean;
};

export function shouldUseMobilePresentationShell(
  input: MobilePresentationModeInput,
): boolean {
  const { width, height, embedded } = input;

  if (embedded) return false;

  const isLandscape = width > height;
  const isMobileSized = width <= 1100 && height <= 500;

  return isLandscape && isMobileSized;
}
