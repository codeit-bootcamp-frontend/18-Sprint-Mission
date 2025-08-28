import { useMediaQuery } from "react-responsive";

export const useResponsiveQueries = () => {
  //반응형 사이즈
  const isTABLET = useMediaQuery({ maxWidth: 74.9375 + "rem" });
  const isMOBILE = useMediaQuery({ maxWidth: 47.9375 + "rem" });

   return { isTABLET, isMOBILE };
}

