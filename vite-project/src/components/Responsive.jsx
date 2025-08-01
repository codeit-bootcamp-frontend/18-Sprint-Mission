import { useMediaQuery } from "react-responsive";

export const useResponsive = () => {
  const isTablet = useMediaQuery({ maxWidth: 1199 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return isMobile ? [1, 4] : isTablet ? [2, 6] : [4, 10];
};
