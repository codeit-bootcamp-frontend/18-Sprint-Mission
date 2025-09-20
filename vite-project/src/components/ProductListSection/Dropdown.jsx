import { useState } from "react";
import arrow from "../../assets/arrow.svg";
import dropdown from "../../assets/dropdown.svg";

const Dropdown = ({ onChange, options, value }) => {
  const [open, setOpen] = useState(false);
  const selected =
    options.find((option) => option.value === value) ?? options[0];

  const handleClick = (val) => {
    onChange(val);
    setOpen(false);
  };

  return (
    <div className="relative order-3 cursor-pointer">
      <div
        onClick={() => setOpen(!open)}
        className="hidden w-32 gap-4 px-5 py-3 border xs:flex rounded-xl"
      >
        <span>{selected.label}</span>
        <img src={arrow} alt="드롭다운 화살표 아이콘" />
      </div>
      <div
        onClick={() => setOpen(!open)}
        className="p-3 border rounded-xl xs:hidden"
      >
        <img src={dropdown} alt="드롭다운 아이콘" />
      </div>
      {open && (
        <ul className="absolute flex flex-col items-center w-32 bg-white border top-16 right-[2px] rounded-xl">
          {options.map((option) => {
            return (
              <li
                key={option.value}
                className="w-full px-5 py-3 text-center hover:bg-gray-100"
                onClick={() => {
                  handleClick(option.value);
                  console.log("$", option.value);
                }}
              >
                {option.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
