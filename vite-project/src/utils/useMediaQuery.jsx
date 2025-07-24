import { useState } from "react";

let remove = null;

function useMediaQuery() {
  remove?.();

  const [mediaQuery, setMediaQuery] = useState({
    isTablet: false,
    isMobile: false,
  });

  const handleTabletMatchesChange = (e) =>
    setMediaQuery((prev) => ({
      ...prev,
      isTablet: e.target.matches,
    }));
  const handleMobileMatchesChange = (e) =>
    setMediaQuery((prev) => ({
      ...prev,
      isMobile: e.target.matches,
    }));

  const matchesTablet = matchMedia("(max-width: 1199px)");
  const matchesMobile = matchMedia("(max-width: 767px)");

  matchesTablet.addEventListener("change", handleTabletMatchesChange);
  matchesMobile.addEventListener("change", handleMobileMatchesChange);

  remove = () => {
    matchesTablet.removeEventListener("change", handleTabletMatchesChange);
    matchesMobile.removeEventListener("change", handleMobileMatchesChange);
  };

  return mediaQuery;
}

export { useMediaQuery };
