import { useState } from "react";
import arrow from "../../assets/arrow.svg";
import dropdown from "../../assets/dropdown.svg";

const VALUES = {
  recent: "최신순",
  favorite: "좋아요순",
};

const Dropdown = ({ handleSelect, orderBy }) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [dropdownValue, setDropdownValue] = useState(VALUES[orderBy]);

  const handleClick = (e) => {
    handleSelect(e);
    setDropdownValue(VALUES[e.target.dataset.value]);
  };

  return (
    <div className="relative order-3 cursor-pointer">
      <div
        onClick={() => setIsDropdown(!isDropdown)}
        className="hidden w-32 gap-4 px-5 py-3 border md:flex rounded-xl"
      >
        <span>{dropdownValue}</span>
        <img src={arrow} alt="드롭다운 화살표 아이콘" />
      </div>
      <div
        onClick={() => setIsDropdown(!isDropdown)}
        className="p-3 border rounded-xl md:hidden"
      >
        <img src={dropdown} alt="드롭다운 아이콘" />
      </div>
      {isDropdown && (
        <div
          className="absolute flex flex-col items-center w-32 bg-white border top-16 right-[2px] rounded-xl"
          onClick={(e) => {
            handleClick(e);
            setIsDropdown(!isDropdown);
          }}
        >
          <div className="flex justify-center w-full border-b ">
            <span className="px-5 py-3" data-value="recent">
              최신순
            </span>
          </div>
          <span className="px-5 py-3" data-value="favorite">
            좋아요순
          </span>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
