import { useCallback, useState } from "react";

/**
 * 토글 커스텀 훅
 * @param {boolean} initialValue 초깃값
 * @returns {isOpen: boolean, onClickToggle: Function}
 */
const useToggle = (initialValue) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const onClickToggle = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, [isOpen]);

  const onClickClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return { isOpen, onClickToggle, onClickClose };
};

export default useToggle;
