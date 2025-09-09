import { useEffect, useState } from "react";

export default function useMediaQuery() {
  const [device, setDevice] = useState("mobile"); // 'desktop' | 'tablet' | 'mobile'

  useEffect(
    () => {
      const { matches: isTablet } = window.matchMedia(
        "screen and (min-width: 768px) and (max-width: 1023px)"
      );
      console.log(isTablet, "isTablet");
      const { matches: isDesktop } = window.matchMedia(
        "screen and (min-width: 1024px)"
      );
      console.log(isDesktop, "isDesktop");

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
