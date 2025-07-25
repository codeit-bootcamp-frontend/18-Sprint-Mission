import { useState } from "react";

let remove = null;

function useMediaQuery() {
  remove?.();

  const matchesTablet = matchMedia("(max-width: 1199px)");
  const matchesMobile = matchMedia("(max-width: 767px)");

  const [mediaQuery, setMediaQuery] = useState({
    isTablet: matchesTablet.matches,
    isMobile: matchesMobile.matches,
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

  matchesTablet.addEventListener("change", handleTabletMatchesChange);
  matchesMobile.addEventListener("change", handleMobileMatchesChange);

  remove = () => {
    matchesTablet.removeEventListener("change", handleTabletMatchesChange);
    matchesMobile.removeEventListener("change", handleMobileMatchesChange);
  };

  return mediaQuery;
}

export { useMediaQuery };
