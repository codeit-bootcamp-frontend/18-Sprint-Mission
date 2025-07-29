import selectDownImgMobile from "../assets/ic-arrow-down-list.svg";
import selectDownImg from "../assets/ic-triangle-down.svg";
import "./OrderBySelect.css";

const BASE_CLASSNAMES = "OrderBySelect-border OrderBySelect-typography";

const ORDER_BY_TITLE = {
  recent: "최신순",
  favorite: "좋아요순",
};
const ORDER_BY_VALUES = Array.from(Object.keys(ORDER_BY_TITLE));
export const ORDER_BY_DEFAULT = "recent";

function SelectDropdown({ classNames, options, onOptionClick }) {
  return (
    <div className={`OrderBySelect-dropdown ${classNames}`}>
      {options.map((option, index) => {
        let direction = "";
        if (index === 0) {
          direction = "first";
        } else if (index === options.length - 1) {
          direction = "last";
        }

        return (
          <div
            key={option}
            className={`OrderBySelect-option ${direction}`}
            onClick={() => onOptionClick(option)}
          >
            {ORDER_BY_TITLE[option]}
          </div>
        );
      })}
    </div>
  );
}

function OrderBySelect({
  value,
  isOpen = false,
  isMobile,
  onClick,
  onOptionClick,
}) {
  const currentOption = value || ORDER_BY_DEFAULT;
  const selectImage = isMobile ? selectDownImgMobile : selectDownImg;

  return (
    <button className={`OrderBySelect ${BASE_CLASSNAMES}`} onClick={onClick}>
      {isMobile || <span>{ORDER_BY_TITLE[currentOption]}</span>}
      <img src={selectImage} alt="정렬 선택" />
      {isOpen && (
        <SelectDropdown
          classNames={BASE_CLASSNAMES}
          options={ORDER_BY_VALUES}
          onOptionClick={onOptionClick}
        />
      )}
    </button>
  );
}

export default OrderBySelect;
