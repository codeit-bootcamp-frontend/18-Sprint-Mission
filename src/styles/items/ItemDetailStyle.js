import styled from "styled-components";
import { ItemsTag, palette } from "../commonStyles";

export const ProductDetailContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  padding: 16px 16px 0px 16px;

  @media (min-width: 744px) {
    padding: 24px 24px 0px 24px;
  }
`;

export const ProductInfoBox = styled.div`
  display: flex;
  margin-top: 20px;
  border-bottom: 1px solid ${palette.gray200};
  padding-bottom: 40px;
  flex-direction: column;

  @media (min-width: 744px) {
    flex-direction: row;
  }
`;

export const ProductTextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ProductImg = styled.img`
  border-radius: 16px;
  border: none;

  @media (min-width: 375px) {
    width: 343px;
    height: 343px;
    margin: 0;
    margin-bottom: 16px;
  }

  @media (min-width: 744px) {
    margin-right: 16px;
  }

  @media (min-width: 1200px) {
    margin-right: 20px;
    width: 486px;
    height: 486px;
  }
`;

export const ProductTitle = styled.h1`
  font-weight: 600;
  margin: 0;

  @media (min-width: 375px) {
    font-size: 16px;
    line-height: 26px;
  }

  @media (min-width: 744px) {
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0%;
  }

  @media (min-width: 1200px) {
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0%;
  }
`;

export const ProductPrice = styled.p`
  font-weight: 600;

  @media (min-width: 375px) {
    font-size: 24px;
    line-height: 32px;
    margin: 8px 0px 16px;
  }

  @media (min-width: 744px) {
    font-size: 32px;
    line-height: 42px;
    letter-spacing: 0%;
  }

  @media (min-width: 1200px) {
    font-size: 40px;
    line-height: 32px;
    letter-spacing: 0%;
    margin: 20px 0px 10px;
  }
`;

export const ProductSubTitle = styled.p`
  color: ${palette.gray600};

  @media (min-width: 375px) {
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0%;
    margin: 16px 0px 8px;
  }

  @media (min-width: 1200px) {
    font-size: 16px;
    font-weight: 600;
    margin: 20px 0px;
  }
`;

export const ProductTextArea = styled.p`
  color: ${palette.gray600};
  width: 100%;
  margin: 0;

  @media (min-width: 375px) {
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0%;
  }
`;

export const ProductTagWrapper = styled.div`
  @media (min-width: 375px) {
    margin-bottom: 40px;
  }

  @media (min-width: 1200px) {
    margin-bottom: 100px;
  }
`;

export const ProductTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
`;

export const ProductOwnerName = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin: 0px 0px 10px 0px;
  color: ${palette.gray600};
`;

export const ProductDate = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${palette.gray400};
  margin: 0;
`;

export const Heart = styled.div`
  border: 1px solid ${palette.gray200};
  border-radius: 35px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  column-gap: 5px;
  padding: 2px 10px;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const HeartCount = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${palette.gray500};
  margin: 0;
`;
