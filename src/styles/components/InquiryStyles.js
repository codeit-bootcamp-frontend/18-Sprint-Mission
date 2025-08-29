import styled from "styled-components";
import { palette, ProfileImg } from "../commonStyles";

export const InquiryTextArea = styled.textarea`
  background-color: ${palette.gray100};
  height: 104px;
  width: 100%;
  border: none;
  border-radius: 12px;
  resize: none;
  font-family: Pretendard-Reqular;
  padding: 20px;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 10px;
  &::placeholder {
    color: ${palette.gray400};
  }

  @media (min-width: 744px) {
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0%;
  }
`;

export const InquiryTitle = styled.p`
  color: ${palette.gray900};
  font-weight: 600;
  font-size: 16px;
  margin: 40px 0px 10px;
  text-align: left;
`;

export const InquirySubmitButton = styled.button`
  width: 74px;
  height: 42px;
  border: none;
  color: white;
  padding: 10px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  background-color: ${({ isActive }) =>
    isActive ? `${palette.blue}` : `${palette.gray400}`};

  &:hover {
    background-color: ${({ isActive }) =>
      isActive ? `#1967d6` : `${palette.gray400}`};
  }

  &:active {
    background-color: ${({ isActive }) =>
      isActive ? `#1251aa` : `${palette.gray400}`};
  }
`;

export const InquiryContent = styled.p`
  margin: 0;
  color: ${palette.gray800};
  font-size: 14px;
  font-weight: 400;
`;

export const InquiryProfileImg = styled(ProfileImg)`
  width: 32px;
  height: 32px;
`;

export const InquiryWriter = styled.p`
  margin: 0px 0px 5px;
  font-size: 12px;
  font-weight: 400;
`;

export const InquiryDate = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  color: ${palette.gray400};
`;

export const BackButton = styled.button`
  width: 240px;
  height: 48px;
  border: none;
  background-color: ${palette.blue};
  color: white;
  padding: 10px;
  border-radius: 40px;
  font-size: 18px;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 10px;

  &:hover {
    background-color: #1967d6;
  }

  &:active {
    background-color: #1251aa;
  }
`;
