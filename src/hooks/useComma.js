import { useMemo } from "react";

export const useComma = () => {
  const COMMA = useMemo(() => /\B(?=(\d{3})+(?!\d))/g, []);

  const setNumberComma = (number) => {
    if (typeof number !== "number") {
      number = Number(number);
    }
    return number.toString().replace(COMMA, ",");
  };

  return setNumberComma;
};
