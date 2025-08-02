import { useMediaQuery } from "react-responsive";

const useDeviceSize = () => {
  const isExtraSmall = useMediaQuery({ maxWidth: 375 });
  const isSmall = useMediaQuery({ maxWidth: 768 });
  const isMedium = useMediaQuery({ maxWidth: 1024 });
  const isLarge = useMediaQuery({ maxWidth: 1200 });
  const isExtraLarge = useMediaQuery({ minWidth: 1201 });

  return { isExtraSmall, isSmall, isMedium, isLarge, isExtraLarge };
};
export default useDeviceSize;
