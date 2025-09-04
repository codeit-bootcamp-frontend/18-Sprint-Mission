import { useEffect, useState } from "react";

let _matchesDesktop: MediaQueryList | null;
let _matchesTablet: MediaQueryList | null;
let _matchesMobile: MediaQueryList | null;

function useDevice() {
  const matchesDesktop = _matchesDesktop ?? matchMedia("(min-width: 1200px)");
  const matchesTablet =
    _matchesTablet ?? matchMedia("(min-width: 768px) and (max-width: 1199px)");
  const matchesMobile = _matchesMobile ?? matchMedia("(max-width: 767px)");

  const [deviceInfo, setDeviceInfo] = useState({
    isDesktop: matchesDesktop.matches,
    isTablet: matchesTablet.matches,
    isMobile: matchesMobile.matches,
  });

  useEffect(() => {
    const handleDesktopMatchesChange = (e: MediaQueryListEvent) => {
      if (!e.matches) return;
      setDeviceInfo({
        isDesktop: true,
        isTablet: false,
        isMobile: false,
      });
    };

    matchesDesktop.addEventListener("change", handleDesktopMatchesChange);

    return () => {
      matchesDesktop.removeEventListener("change", handleDesktopMatchesChange);
      _matchesDesktop = null;
    };
  }, [matchesDesktop]);

  useEffect(() => {
    const handleTabletMatchesChange = (e: MediaQueryListEvent) => {
      if (!e.matches) return;
      setDeviceInfo({
        isDesktop: false,
        isTablet: true,
        isMobile: false,
      });
    };
    matchesTablet.addEventListener("change", handleTabletMatchesChange);
    return () => {
      matchesTablet.removeEventListener("change", handleTabletMatchesChange);
      _matchesTablet = null;
    };
  }, [matchesTablet]);

  useEffect(() => {
    const handleMobileMatchesChange = (e: MediaQueryListEvent) => {
      if (!e.matches) return;
      setDeviceInfo({
        isDesktop: false,
        isTablet: false,
        isMobile: true,
      });
    };
    matchesMobile.addEventListener("change", handleMobileMatchesChange);
    return () => {
      matchesMobile.removeEventListener("change", handleMobileMatchesChange);
      _matchesMobile = null;
    };
  }, [matchesMobile]);

  return deviceInfo;
}

export { useDevice };
