import { useEffect, useRef, useState } from "react";
import selectIcon from "../assets/ic-sort.svg";

const options = [
  { label: "최신순", value: "recent" },
  { label: "좋아요순", value: "favorite" },
];

export default function SelectDropdown({ onChange, value }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selected = options.find((opt) => opt.value === value);

  const handleSelect = (option) => {
    onChange({ target: { value: option.value } });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div ref={dropdownRef} className="select-dropdown">
        <div className="selected-option" onClick={() => setIsOpen(!isOpen)}>
          <img src={selectIcon} alt="드롭다운 아이콘" />
        </div>

        {isOpen && (
          <ul className="option-list">
            {options.map((option) => (
              <li key={option.value} onClick={() => handleSelect(option)}>
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
