import { useEffect, useState } from "react";

let _matchesDesktop;
let _matchesTablet;
let _matchesMobile;

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
    const handleDesktopMatchesChange = (e) => {
      console.log("Desktop matches change:", e.matches);
      if (!e.matches) return;
      setDeviceInfo({
        isDesktop: true,
        isTablet: false,
        isMobile: false,
      });
    };

    console.log("Adding media query listeners");
    matchesDesktop.addEventListener("change", handleDesktopMatchesChange);

    return () => {
      console.log("Cleaning up media query listeners");
      matchesDesktop.removeEventListener("change", handleDesktopMatchesChange);
      _matchesDesktop = null;
    };
  }, []);

  useEffect(() => {
    const handleTabletMatchesChange = (e) => {
      console.log("Tablet matches change:", e.matches);
      if (!e.matches) return;
      setDeviceInfo({
        isDesktop: false,
        isTablet: true,
        isMobile: false,
      });
    };
    matchesTablet.addEventListener("change", handleTabletMatchesChange);
    return () => {
      console.log("Cleaning up media query listeners");
      matchesTablet.removeEventListener("change", handleTabletMatchesChange);
      _matchesTablet = null;
    };
  }, []);

  useEffect(() => {
    const handleMobileMatchesChange = (e) => {
      console.log("Mobile matches change:", e.matches);
      if (!e.matches) return;
      setDeviceInfo({
        isDesktop: false,
        isTablet: false,
        isMobile: true,
      });
    };
    matchesMobile.addEventListener("change", handleMobileMatchesChange);
    return () => {
      console.log("Cleaning up media query listeners");
      matchesMobile.removeEventListener("change", handleMobileMatchesChange);
      _matchesMobile = null;
    };
  }, []);

  return deviceInfo;
}

export { useDevice };
