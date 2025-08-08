import styled from "styled-components";
import { convertPxToRem } from "@/styles/utils/convert.utils";
import globalTheme from "@/styles/theme";
import Icon from "./Icon";
import fontSize from "@/styles/utils/fontSize.utils";
import { useState } from "react";
import useToggle from "@/hooks/useToggle";
const Dropdown = styled.div`
  position: relative;
  min-width: 130px;
  z-index: 1;
`;
const DropdownButton = styled.button`
  position: relative;
  width: 100%;
  padding: ${convertPxToRem(9)} ${convertPxToRem(20)};
  padding-right: ${convertPxToRem(44)};
  border: 1px solid ${globalTheme.colors.coolGray200};
  background-color: #fff;
  border-radius: ${convertPxToRem(12)};
  text-align: left;
  ${fontSize("txt-lg")}
  & ${Icon} {
    position: absolute;
    top: 50%;
    right: 24px;
    transform: translateY(-50%);
  }
  ${({ isActive }) =>
    isActive &&
    `& ${Icon}{
     transform: translateY(-50%) rotate(180deg);
  }`}
`;
const DropdownItems = styled.ul`
  width: 100%;
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid ${globalTheme.colors.coolGray200};
  border-radius: ${convertPxToRem(12)};
  background-color: #fff;
  & li {
    ${fontSize("txt-lg")}
    padding: ${convertPxToRem(9)};
    cursor: pointer;
    &:not(:last-of-type) {
      border-bottom: 1px solid ${globalTheme.colors.coolGray200};
    }
  }
`;

const Select = ({ order, onChange, isLoading }) => {
  const [isActive, onToggleActive] = useToggle(false);
  const handleSelect = ({ target }) => {
    const value = target.dataset.value;
    if (value) {
      onChange(value);
    }
  };
  return (
    <>
      <Dropdown>
        <DropdownButton
          isActive={isActive}
          onClick={onToggleActive}
          disabled={isLoading}
        >
          {order === "recent" ? "최신순" : "좋아요순"}
          <Icon iconName="arrow_down" size="md"></Icon>
          {isActive && (
            <DropdownItems onClick={handleSelect}>
              <li data-value="recent">최신순</li>
              <li data-value="favorite">좋아요순</li>
            </DropdownItems>
          )}
        </DropdownButton>
      </Dropdown>
    </>
  );
};
export default Select;
