import { useState, useRef, useEffect } from "react";
import select from "../assets/scss/selectBox.module.scss";

function SelectBox({ onNewest, onFavorite }) {
  const [optionOpen, setOptionOpen] = useState(false);
  const [selectButton, setSelectButton] = useState("최신순");
  const selectRef = useRef(null);

  const handleSelectClick = () => {
    setOptionOpen(!optionOpen);
  };

  const handleOptionClick = (option) => {
    if (option === "최신순") {
      setSelectButton("최신순");
      onNewest();
    } else if (option === "종아요순") {
      setSelectButton("종아요순");
      onFavorite();
    }
    setOptionOpen(!optionOpen);
  };

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setOptionOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("scroll", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown scroll", handleClickOutside);
    };
  }, []);

  return (
    <div className={select.selectBoxGroup}>
      <button className={select.selectButton} onClick={handleSelectClick}>
        <span>{selectButton}</span>
      </button>
      {optionOpen && (
        <ul
          className={`${select.selectOption} ${
            optionOpen ? select.active : ""
          }`}
          ref={selectRef}
        >
          <li onClick={() => handleOptionClick("최신순")} tabIndex={0}>
            최신순
          </li>
          <li onClick={() => handleOptionClick("종아요순")} tabIndex={0}>
            좋아요순
          </li>
        </ul>
      )}
    </div>
  );
}

export default SelectBox;
