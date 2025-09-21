// hooks/useResponsiveCount.js - 모바일도 2열로 수정
import { useState, useEffect } from "react";

const useResponsiveCount = () => {
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setScreenSize("mobile");
      } else if (width < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    // 초기 설정
    updateScreenSize();

    // 윈도우 리사이즈 이벤트 리스너
    window.addEventListener("resize", updateScreenSize);

    // 클린업
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  // 베스트 상품 개수
  const getBestProductCount = () => {
    switch (screenSize) {
      case "mobile":
        return 1; // 모바일: 1개
      case "tablet":
        return 2; // 태블릿: 2개
      case "desktop":
        return 4; // 데스크톱: 4개
      default:
        return 4;
    }
  };

  // 전체 상품 개수 (한 페이지당)
  const getAllProductCount = () => {
    switch (screenSize) {
      case "mobile":
        return 4; // 모바일: 4개
      case "tablet":
        return 6; // 태블릿: 6개
      case "desktop":
        return 10; // 데스크톱: 10개
      default:
        return 10;
    }
  };

  const getGridClass = (type = "all") => {
    if (type === "best") {
      switch (screenSize) {
        case "mobile":
          return "grid grid-cols-1 gap-4";
        case "tablet":
          return "grid grid-cols-2 gap-4";
        case "desktop":
          return "grid grid-cols-4 gap-4 lg:gap-6";
        default:
          return "grid grid-cols-4 gap-4 lg:gap-6";
      }
    } else {
      switch (screenSize) {
        case "mobile":
          return "grid grid-cols-2 gap-4"; // 4개: 2열×2행
        case "tablet":
          return "grid grid-cols-3 gap-4"; // 6개: 3열×2행
        case "desktop":
          return "grid grid-cols-5 gap-4"; // 10개: 5열×2행
        default:
          return "grid grid-cols-5 gap-4";
      }
    }
  };

  return {
    screenSize,
    getBestProductCount,
    getAllProductCount,
    getGridClass,
  };
};

export default useResponsiveCount;
