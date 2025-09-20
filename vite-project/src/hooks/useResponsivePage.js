import { useEffect, useMemo, useState } from "react";
import { CONFIG } from "../constant/RESPONSIVE_CONFIG";

function getDevice() {
  if (window.matchMedia("(min-width: 1200px)").matches) return "desktop";
  if (window.matchMedia("(min-width:680px)").matches) return "tablet";
  return "mobile";
}

export const useResponsivePage = () => {
  const [device, setDevice] = useState(getDevice);

  useEffect(() => {
    const onResize = () => setDevice(getDevice());
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const values = useMemo(() => CONFIG[device], [device]);
  return values;
};
