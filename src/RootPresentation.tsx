import { useEffect, useState } from "react";
import App from "./App";
import { MobilePresentationShell } from "./MobilePresentationShell";
import { shouldUseMobilePresentationShell } from "./mobilePresentationMode";

export function RootPresentation() {
  const [viewport, setViewport] = useState(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }));

  useEffect(() => {
    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const embedded =
    new URLSearchParams(window.location.search).get("embedded") === "1";

  const useMobileShell = shouldUseMobilePresentationShell({
    width: viewport.width,
    height: viewport.height,
    embedded,
  });

  if (useMobileShell) {
    return <MobilePresentationShell />;
  }

  return <App />;
}
