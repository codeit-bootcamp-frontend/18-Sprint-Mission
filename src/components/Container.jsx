import styled from "styled-components";
import { convertPxToRem } from "../styles/utils/convert.utils";

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 ${convertPxToRem(40)};
  @media all and (max-width: 744px) {
    padding: 0 ${convertPxToRem(24)};
  }
  @media all and (max-width: 375px) {
    padding: 0 ${convertPxToRem(16)};
  }
`;
export default Container;
