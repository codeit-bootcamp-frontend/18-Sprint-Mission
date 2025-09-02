import { memo, useRef } from "react";
import {
  KebabDropdownButton,
  KebabDropdownContainer,
} from "../../styles/components/kebab/kebabStyle";
import useCloseDropdown from "../../hooks/useCloseDropdown";

/**
 * 케밥 메뉴 클릭 시 보여지는 드롭다운
 * @param {object[]} menus
 * @param {Function} onclickClose
 */
const KebabDropdown = ({ menus, onClickClose }) => {
  const dropdownRef = useRef(null);
  useCloseDropdown(dropdownRef, onClickClose);

  return (
    <KebabDropdownContainer ref={dropdownRef}>
      {menus?.map((menu) => {
        return (
          <KebabDropdownButton type="button" key={menu.id}>
            {menu.name}
          </KebabDropdownButton>
        );
      })}
    </KebabDropdownContainer>
  );
};

export default memo(KebabDropdown);
