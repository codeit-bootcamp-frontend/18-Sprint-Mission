import { useEffect, useState } from "react";
import { PIC_SIZES } from "../components/common/ProductGridTokens";

export const useResponsivePage = () => {
  const [pageSize, setPageSize] = useState(10);
  const [bestPageSize, setBestPageSize] = useState(4);
  const [isMobile, setIsMobile] = useState(false);
  const [normalPicSize, setNormalPicSize] = useState("normalPicSize");
  const [normalPicContainerSize, setNormalPicContainerSize] =
    useState("grid224");
  const [bestPicContainerSize, setBestPicContainerSize] = useState("grid228");
  const [bestPicSize, setBestPicSize] = useState("bestPicSize");

  useEffect(() => {
    function updatePageSize() {
      if (window.matchMedia("(min-width: 1200px)").matches) {
        setPageSize(10);
        setBestPageSize(4);
        setIsMobile(false);
        setNormalPicSize("normalPicSize");
        setNormalPicContainerSize("grid224");
        setBestPicContainerSize("grid228");
        setBestPicSize("bestPicSize");
      } else if (window.matchMedia("(min-width:680px)").matches) {
        setPageSize(6);
        setBestPageSize(2);
        setIsMobile(false);
        setNormalPicSize("normalPicSize");
        setNormalPicContainerSize("grid224");
        setBestPicContainerSize("grid343");
        setBestPicSize("bestPicTabletMobile");
      } else {
        setPageSize(4);
        setBestPageSize(1);
        setIsMobile(true);
        setNormalPicSize("normalPicMobile");
        setNormalPicContainerSize("grid168");
        setBestPicContainerSize("grid343");
        setBestPicSize("bestPicTabletMobile");
      }
    }
    updatePageSize();
    window.addEventListener("resize", updatePageSize);
    return () => window.removeEventListener("resize", updatePageSize);
  }, []);

  return {
    pageSize,
    bestPageSize,
    isMobile,
    normalPicSize,
    normalPicContainerSize,
    bestPicSize,
    bestPicContainerSize,
  };
};
