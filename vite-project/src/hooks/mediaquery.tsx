import { useEffect, useState } from "react";

export default function useMediaQuery() {
  const [device, setDevice] = useState<string>("mobile"); // 'desktop' | 'tablet' | 'mobile'

  useEffect(
    () => {
      const { matches: isTablet } = window.matchMedia(
        "screen and (min-width: 768px) and (max-width: 1023px)"
      );

      const { matches: isDesktop } = window.matchMedia(
        "screen and (min-width: 1024px)"
      );

      if (isTablet) {
        setDevice("tablet");

        return;
      }

      if (isDesktop) {
        setDevice("desktop");

        return;
      }
    },
    [
      // document width
    ]
  );

  return { device };
}
