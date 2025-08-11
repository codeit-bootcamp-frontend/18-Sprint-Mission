import { useState } from "react";

/**
 * 불리언 상태를 토글하는 커스텀 훅
 *
 * @param {boolean} [init=false] 초기값
 * @returns {[boolean, () => void]} [상태값, 토글 함수]
 */
const useToggle = (init = false) => {
  const [value, setValue] = useState(init);
  const toggle = () => setValue((prev) => !prev);
  return [value, toggle];
};

export default useToggle;
