import { useState } from "react";

//이미지 깨짐 방지
export const ImageFallback=({ src, alt, fallbackSrc })=> {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(fallbackSrc);
  };

  return <img src={imgSrc} alt={alt} onError={handleError} />;
}