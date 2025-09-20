import { useRef, useCallback } from "react";
import useToggle from "@/hooks/useToggle";
import useIsMobileScreen from "@/hooks/useIsMobileScreen";
import useClickOutside from "../../hooks/useClickOutside";
import styled from "styled-components";
import typography from "@/styles/utils/typography";
import media from "@/styles/utils/media";
import Icon from "../Icon";
import Button from "../Button";

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
  --width: 130px !important;
`;

const DropdownButton = styled(Button)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: var(--width);
  border-radius: 12px;
  padding: 7px 20px;
  text-align: left;
  ${typography["text-lg-regular"]};
  color: var(--color-gray-800);
  & img {
    margin-left: 4px;
  }
  &.icon-btn {
    width: auto;
    min-width: 42px;
    justify-content: center;
    padding: 0;
    & img {
      margin: 0;
    }
  }
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  width: 100%;
  min-width: var(--width);
  margin-top: 8px;
  border: 1px solid var(--color-gray-200);
  border-radius: 12px;
  background: var(--main-white);
  overflow: hidden;
  animation: dropdownShow 0.3s ease-out forwards;
  @keyframes dropdownShow {
    from {
      opacity: 0;
      transform: translate3d(8px, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  z-index: 10;
`;

const DropdownItem = styled.li`
  & + & {
    border-top: 1px solid var(--color-gray-200);
  }
  & button {
    width: 100%;
    height: 42px;
    text-align: center;
    ${typography["text-lg-regular"]};
    color: var(--color-gray-800);
    &:hover {
      background: var(--color-gray-100);
      transition: background 0.2s;
    }
  }
`;

const Label = styled.span`
  ${media("sm")} {
    position: absolute;
    width: 1px !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0 0 0 0) !important;
  }
`;

const Dropdown = ({ options, label, initLabel, value, icon = "dropdown", mobileIcon, onChange }) => {
  const [isOpen, { toggle, setOff }] = useToggle(false);
  const ref = useRef(null);
  const isMobileScreen = useIsMobileScreen();
  const currentIcon = (isMobileScreen && mobileIcon) || icon;

  const handleClose = useCallback(() => {
    setOff();
  }, [setOff]);

  useClickOutside(ref, handleClose);

  const selected = options.find(option => option.value === value);
  const getSelectedLabel = () => {
    if (selected?.label) return selected.label;
    if (initLabel) return initLabel;
    return label;
  };

  return (
    <DropdownWrapper ref={ref}>
      <DropdownButton
        className={`${isOpen ? "open" : ""} ${!value ? "icon-btn" : ""} ${isMobileScreen ? "icon-btn" : ""}`}
        appearance="tertiary"
        shape="sm42"
        onClick={toggle}
        aria-label={getSelectedLabel() + ` 선택`}
      >
        {value && <Label>{getSelectedLabel()}</Label>}
        <Icon size="sm" icon={currentIcon} />
      </DropdownButton>
      {isOpen && (
        <DropdownList>
          {options.map(option => (
            <DropdownItem key={option.value}>
              <button
                onClick={() => {
                  onChange(option.value);
                  setOff();
                }}
              >
                {option.label}
              </button>
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
};

export default Dropdown;
