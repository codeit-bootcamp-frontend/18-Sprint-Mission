import { useState, useCallback } from "react";

const useToggle = (initialValue = false) => {
  const [state, setState] = useState(initialValue);

  const toggle = useCallback(() => setState(prev => !prev), []);
  const setOn = useCallback(() => setState(true), []);
  const setOff = useCallback(() => setState(false), []);

  return [state, { toggle, setOn, setOff }];
};

export default useToggle;
