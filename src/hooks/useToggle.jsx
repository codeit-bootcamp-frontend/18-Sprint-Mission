import { useState } from "react";

// 초기값 false , 토글 시 상태값 변경
const useToggle = (init = false) => {
  const [value, setValue] = useState(init);
  const toggle = () => setValue((prev) => !prev);
  return [value, toggle];
};

export default useToggle;
