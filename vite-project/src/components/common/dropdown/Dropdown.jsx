import React, { useState, useRef, useEffect } from "react";
import useDeviceType from "../../../hooks/dom/useDeviceType";
import "./DropdownStyle.css";

const Dropdown = ({ onOrderByChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("최신순");
  const dropdownRef = useRef(null);
  const { isMobile } = useDeviceType();

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    onOrderByChange(option);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      {!isMobile ? (
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          {selected}
          <img src="/icons/dropdown.svg" alt="드롭다운 버튼" />
        </button>
      ) : (
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          <img src="/icons/filter.svg" alt="드롭다운 버튼" />
        </button>
      )}
      {isOpen && (
        <ul className="dropdown-menu">
          <li onClick={() => handleSelect("최신순")}>최신순</li>
          <li onClick={() => handleSelect("좋아요순")}>좋아요순</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
