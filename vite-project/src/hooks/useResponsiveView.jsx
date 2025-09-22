import { useState, useEffect } from "react";

const BREAKPOINTS = {
  mobileMax: 767,
  tabletMax: 1023,
};

const useResponsiveView = () => {
  const [view, setView] = useState(() => {
    const width = window.innerWidth;
    if (width <= BREAKPOINTS.mobileMax) return "mobile";
    if (width <= BREAKPOINTS.tabletMax) return "tablet";
    return "desktop";
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= BREAKPOINTS.mobileMax) {
        setView("mobile");
      } else if (width <= BREAKPOINTS.tabletMax) {
        setView("tablet");
      } else {
        setView("desktop");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return view;
};

export default useResponsiveView;
