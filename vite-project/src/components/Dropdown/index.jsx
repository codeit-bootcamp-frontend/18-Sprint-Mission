import { useRef, useEffect, useCallback } from "react";
import useToggle from "@/hooks/useToggle";
import styled from "styled-components";
import Icon from "../Icon";
import Button from "../Button";
import typography from "@/styles/utils/typography";

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;
const DropdownButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 130px;
  border-radius: 12px;
  padding: 7px 20px;
  text-align: left;
  ${typography["text-lg-regular"]};
  color: var(--color-gray-800);
  & img {
    margin-left: 4px;
  }
`;
const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin-top: 8px;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  background: var(--main-white);
  overflow: hidden;
  z-index: 10;
`;

const DropdownItem = styled.li`
  & + & {
    border-top: 1px solid var(--border-color);
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

const Dropdown = ({ options, label, initLabel, value, onChange }) => {
  const [isOpen, { toggle, setOff }] = useToggle(false);
  const ref = useRef();

  const handleClickOutside = useCallback(
    e => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOff();
      }
    },
    [setOff],
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const selected = options.find(option => option.value === value);
  const getSelectedLabel = () => {
    if (selected?.label) return selected.label;
    if (initLabel) return initLabel;
    return label;
  };

  return (
    <DropdownWrapper ref={ref}>
      <DropdownButton appearance="tertiary" shape="sm42" onClick={toggle} aria-label={getSelectedLabel() + ` 선택`}>
        {getSelectedLabel()}
        <Icon size="sm" icon="dropdown" />
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
