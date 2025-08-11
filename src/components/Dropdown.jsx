import styled, { css } from "styled-components";
import { convertPxToRem } from "@/styles/utils/convert.utils";
import globalTheme from "@/styles/theme";
import Icon from "./Icon";
import fontSize from "@/styles/utils/fontSize.utils";
import useToggle from "@/hooks/useToggle";
import useDeviceSize from "@/hooks/useDeviceSize";

const DropdownWrapper = styled.div`
  position: relative;
  min-width: ${({ isSmall }) => (isSmall ? `none` : `130px`)};
  z-index: 1;
`;
const DropdownButton = styled.button`
  position: relative;
  width: 100%;
  border: 1px solid ${globalTheme.colors.coolGray200};
  border-radius: ${convertPxToRem(12)};
  background-color: #fff;
  ${({ isSmall }) =>
    isSmall
      ? css`
          padding: ${convertPxToRem(9)};
        `
      : css`
          padding: ${convertPxToRem(9)} ${convertPxToRem(20)};
          padding-right: ${convertPxToRem(44)};
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
            css`
              & ${Icon} {
                transform: translateY(-50%) rotate(180deg);
              }
            `}
        `}
`;
const DropdownItems = styled.ul`
  width: 100%;
  min-width: 130px;
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
    text-align: center;
    &:not(:last-of-type) {
      border-bottom: 1px solid ${globalTheme.colors.coolGray200};
    }
  }
  @media all and (max-width: 480px) {
    left: auto;
    right: 0;
    transform: translateX(0);
  }
`;
/**
 * 제품 정렬 기준을 선택하는 Select 드롭다운 컴포넌트
 *
 * @param {{
 *   order: "recent" | "favorite", // 정렬 기준
 *   onChange: (value: "recent" | "favorite") => void, // 선택 값 변경 핸들러
 *   isLoading?: boolean // 비활성화 상태 여부
 * }} props
 * @returns {JSX.Element}
 */
const Dropdown = ({ order, onChange, isLoading, className }) => {
  const [isActive, onToggleActive] = useToggle(false);
  const { isSmall } = useDeviceSize();
  const handleSelect = ({ target }) => {
    const value = target.dataset.value;
    if (value) {
      onChange(value);
    }
  };
  return (
    <DropdownWrapper isSmall={isSmall} className={className}>
      <DropdownButton
        isActive={isActive}
        onClick={onToggleActive}
        disabled={isLoading}
        isSmall={isSmall}
      >
        {isSmall ? (
          <Icon iconName="sort" size="md"></Icon>
        ) : (
          <>
            {order === "recent" ? "최신순" : "좋아요순"}
            <Icon iconName="arrow_down" size="md"></Icon>
          </>
        )}

        {isActive && (
          <DropdownItems onClick={handleSelect}>
            <li data-value="recent">최신순</li>
            <li data-value="favorite">좋아요순</li>
          </DropdownItems>
        )}
      </DropdownButton>
    </DropdownWrapper>
  );
};
export default Dropdown;
