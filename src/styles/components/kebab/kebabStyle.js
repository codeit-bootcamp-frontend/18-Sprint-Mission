import styled from "styled-components";
import { palette } from "../../commonStyles";

export const KebabMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: relative;
`;

export const KebabIcon = styled.div`
  width: 3px;
  height: 3px;
  background-color: ${palette.gray400};
  border-radius: 99px;
`;

export const KebabDropdownContainer = styled.div`
  width: 139px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  right: 7%;
  margin-top: 5px;
  border: 1px solid ${palette.coolGray300};
  border-radius: 8px;
  z-index: 50;

  & > :first-child {
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }

  & > :last-child {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`;

export const KebabDropdownButton = styled.button`
  background-color: white;
  border: none;
  font-weight: 400;
  font-size: 16px;
  color: ${palette.secondary.gray500};
  padding: 16px 0px 12px;

  &:hover {
    background-color: ${palette.gray100};
  }
`;
