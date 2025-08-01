import { useEffect, useState, useRef } from "react";

const getDeviceType = () => {
  const width = window.innerWidth;
  if (width <= 600) return "mobile";
  if (width <= 1024) return "tablet";
  return "desktop";
};

// 디바이스 타입을 반환하는 커스텀 훅
const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState(getDeviceType());
  const deviceTypeRef = useRef(deviceType); // 이전 값을 저장해서 비교

  useEffect(() => {
    let resizeTimeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const newType = getDeviceType();
        if (newType !== deviceTypeRef.current) {
          deviceTypeRef.current = newType;
          setDeviceType(newType);
        }
      }, 150); // 디바운싱 150ms
    };

    window.addEventListener("resize", handleResize);
    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    isMobile: deviceType === "mobile",
    isTablet: deviceType === "tablet",
    isDesktop: deviceType === "desktop",
  };
};

export default useDeviceType;
