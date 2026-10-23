import { getPresentationFitScale } from "./mobileFit";
import "./MobilePresentationShell.css";

export function MobilePresentationShell() {
  const scale = getPresentationFitScale(
    window.innerWidth,
    window.innerHeight,
  );

  return (
    <main
      className="mobile-presentation-shell"
      data-testid="mobile-presentation-shell"
    >
      <div
        className="mobile-presentation-shell-stage"
        data-testid="mobile-presentation-stage"
        style={{ transform: `scale(${scale})` }}
      >
        <iframe
          className="mobile-presentation-shell-frame"
          src="/?embedded=1"
          title="AyRPC 2026"
          width={1280}
          height={720}
        />
      </div>
    </main>
  );
}
