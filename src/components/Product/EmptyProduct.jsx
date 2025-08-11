import styled from "styled-components";
import EmptyImg from "@/assets/visual/Img_empty_product.svg";
import fontSize from "@/styles/utils/fontSize.utils";
import globalTheme from "@/styles/theme";
const EmptyProductWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  & img {
    max-width: 282px;
    width: 100%;
  }
  & p {
    ${fontSize("txt-xl")};
    font-weight: 600;
    color:${globalTheme.colors.coolGray500}
  }
`;
const EmptyProduct = ({ children }) => {
  return (
    <EmptyProductWrapper>
      <img src={EmptyImg} alt="" />
      <p>{children}</p>
    </EmptyProductWrapper>
  );
};
export default EmptyProduct;
