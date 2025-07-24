import selectDownImg from "../assets/ic-triangle-down.svg";
import "./Select.css";

const SELECT_CLASSNAMES = "Select-border Select-typography";

function SelectDropdown({ classNames, options }) {
  return (
    <div className={`SelectDropdown ${classNames}`}>
      {options.map((option, index) => {
        let direction = "";
        if (index === 0) {
          direction = "first";
        } else if (index === options.length - 1) {
          direction = "last";
        }
        return (
          <div key={option} className={`SelectDropdown-option ${direction}`}>
            {option}
          </div>
        );
      })}
    </div>
  );
}

function Select({ value, options, isOpen = false, onClick }) {
  return (
    <button className={`Select ${SELECT_CLASSNAMES}`} onClick={onClick}>
      <span>{value}</span>
      <img src={selectDownImg} alt="정렬 선택" />
      {options && isOpen && (
        <SelectDropdown classNames={SELECT_CLASSNAMES} options={options} />
      )}
    </button>
  );
}

export default Select;
