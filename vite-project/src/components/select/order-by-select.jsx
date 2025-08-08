import styled, { css } from "styled-components";
import selectDownImgMobile from "../../assets/ic-arrow-down-list.svg";
import selectDownImg from "../../assets/ic-triangle-down.svg";

const ORDER_BY_TITLE = {
  recent: "최신순",
  favorite: "좋아요순",
};
const ORDER_BY_VALUES = Array.from(Object.keys(ORDER_BY_TITLE));
export const ORDER_BY_DEFAULT = "recent";

const baseStyle = css`
  /* typography */
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: var(--color-secondary-800);

  /* border style */
  border: 1px solid var(--color-cool-gray-200);
  border-radius: 12px;
`;

const StyledOrderBySelect = styled.button`
  ${baseStyle}
  background-color: white;
  padding: 8px 20px;
  display: flex;
  gap: 24px;
  outline: none;
  cursor: pointer;
  position: relative;
`;

const DropdownOption = styled.div`
  height: 42px;
  padding: 7px 0;
  background-color: white;
`;

const StyledSelectDropdown = styled.div`
  ${baseStyle}
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
  background-color: var(--color-cool-gray-200);
  width: 130px;
  overflow: hidden;

  ${DropdownOption}:first {
    padding-top: 9px;
  }
  ${DropdownOption}:last-child {
    padding-bottom: 9px;
  }
`;

function SelectDropdown({ options, onOptionClick }) {
  return (
    <StyledSelectDropdown>
      {options.map((option, index) => {
        return (
          <DropdownOption key={option} onClick={() => onOptionClick(option)}>
            {ORDER_BY_TITLE[option]}
          </DropdownOption>
        );
      })}
    </StyledSelectDropdown>
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
    <StyledOrderBySelect onClick={onClick}>
      {isMobile || <span>{ORDER_BY_TITLE[currentOption]}</span>}
      <img src={selectImage} alt="정렬 선택" />
      {isOpen && (
        <SelectDropdown
          options={ORDER_BY_VALUES}
          onOptionClick={onOptionClick}
        />
      )}
    </StyledOrderBySelect>
  );
}

export default OrderBySelect;
