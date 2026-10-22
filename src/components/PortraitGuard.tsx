export function PortraitGuard() {
  return (
    <div
      className="portrait-guard"
      role="status"
      aria-live="polite"
    >
      <div className="portrait-guard-device" aria-hidden="true">
        <div />
      </div>

      <strong>
        Girá el dispositivo para ver la presentación.
      </strong>

      <span>
        AyRPC está diseñada para verse en horizontal.
      </span>
    </div>
  );
}
