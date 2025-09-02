import { useEffect } from "react";

const useCloseDropdown = (ref, callback) => {
  useEffect(() => {
    const onClickDropdownOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", onClickDropdownOutside);

    return () => {
      document.removeEventListener("mousedown", onClickDropdownOutside);
    };
  }, []);
};

export default useCloseDropdown;
