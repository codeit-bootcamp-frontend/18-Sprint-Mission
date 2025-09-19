import styled from "styled-components";
import media from "@/styles/utils/media";

const Container = styled.div`
  position: relative;
  max-width: calc(1200px + 48px);
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
  ${media("sm")} {
    padding: 0 16px;
  }
`;

export default Container;
