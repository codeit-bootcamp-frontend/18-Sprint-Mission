import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { convertPxToRem, convertPxToVw } from "@/styles/utils/convert.utils";
import fontSize from "@/styles/utils/fontSize.utils";
import globalTheme from "@/styles/theme";
import Container from "@/components/Container";
import Button from "@/components/Button";
import VisualImgTop from "@/assets/visual/Img_home_top.png";
import VisualImgBottom from "@/assets/visual/Img_home_bottom.png";
import IntroImg01 from "@/assets/visual/Img_home_01.png";
import IntroImg02 from "@/assets/visual/Img_home_02.png";
import IntroImg03 from "@/assets/visual/Img_home_03.png";
const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${convertPxToRem(276)};
  @media all and (max-width: 1200px) {
    gap: max(${convertPxToVw(138, 1200)}, ${convertPxToRem(100)}) 0;
  }
  @media all and (max-width: 744px) {
    gap: max(${convertPxToVw(52, 744)}, ${convertPxToRem(40)}) 0;
  }
  @media all and (max-width: 375px) {
    gap: ${convertPxToRem(40)} 0;
  }
`;
const VisualWrapper = styled.section`
  background-color: ${globalTheme.colors.brand};
`;
const VisualTitle = styled.h2`
  ${fontSize("txt-4xl")};
  color: ${globalTheme.colors.gray700};
  font-weight: 700;
  @media all and (max-width: 744px) {
    text-align: center;
    padding-top: ${convertPxToRem(84)};
    word-break: keep-all;
  }
  @media all and (max-width: 375px) {
    padding-top: ${convertPxToRem(48)};
  }
`;
const Visual = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: ${convertPxToRem(540)};
  @media all and (max-width: 1200px) {
    height: max(${convertPxToVw(540, 1200)}, ${convertPxToRem(440)});
  }
  @media all and (max-width: 744px) {
    justify-content: start;
    align-items: center;
    gap: ${convertPxToRem(24)};
    height: max(${convertPxToRem(540)}, ${convertPxToVw(744, 744)});
  }
  @media all and (max-width: 375px) {
    height: ${convertPxToVw(540)};
    gap: ${convertPxToRem(18)};
  }
`;
const VisualTop = styled(Visual)`
  gap: ${convertPxToRem(32)};
  background: url(${VisualImgTop}) no-repeat bottom right;
  background-size: auto ${convertPxToRem(340)};
  & ${Button} {
    width: min(${convertPxToVw(357, 1370)}, 357px);
    margin-bottom: 100px;
  }
  @media all and (max-width: 1200px) {
    background-size: auto ${convertPxToVw(357, 1200)};
  }
  @media all and (max-width: 744px) {
    background-size: 100% auto;
    & ${Button} {
      width: min(80%, ${convertPxToRem(357)});
      margin-bottom: 0;
    }
  }
  @media all and (max-width: 375) {
    & ${Button} {
      width: 100%;
      max-width: ${convertPxToRem(240)};
    }
  }
`;
const VisualBottom = styled(Visual)`
  background: url(${VisualImgBottom}) no-repeat bottom right -1px;
  background-size: auto ${convertPxToRem(397)};
  & h2 {
    padding-bottom: ${convertPxToRem(127)};
  }
  @media all and (max-width: 1200px) {
    background-size: auto ${convertPxToVw(397, 1200)};
  }
  @media all and (max-width: 744px) {
    background-size: 100% auto;
    & h2 {
      padding-bottom: 0;
      padding-top: ${convertPxToRem(100)};
    }
  }
  @media all and (max-width: 375px) {
    & h2 {
      padding-top: ${convertPxToVw(120)};
    }
  }
`;
const IntroContent = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  border-radius: ${convertPxToRem(12)};
  background-color: #fcfcfc;
  & img {
    width: ${convertPxToRem(579)};
  }
  & .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    overflow: hidden;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    white-space: nowrap;
  }
  @media all and (max-width: 1200px) {
    & img {
      width: 50%;
      height: auto;
    }
  }
  @media all and (max-width: 744px) {
    flex-wrap: wrap;
    align-items: center;
    background-color: transparent;
    gap: ${convertPxToRem(24)};
    & img {
      width: 100%;
    }
  }
  @media all and (max-width: 375px) {
    gap: ${convertPxToRem(24)};
  }
`;
const IntroFeatureTextSpacing = css`
  flex-grow: 1;
  & .txt-4xl {
    margin: ${convertPxToRem(12)} 0 ${convertPxToRem(24)};
  }
  @media all and (max-width: 744px) {
    & .txt-4xl {
      margin: ${convertPxToRem(16)} 0 ${convertPxToRem(24)};
    }
  }
  @media all and (max-width: 375px) {
    & .txt-4xl {
      margin: ${convertPxToRem(8)} 0 ${convertPxToRem(16)};
    }
  }
`;
const IntroFeature = styled.div`
  ${IntroFeatureTextSpacing}
  padding-left: ${convertPxToRem(64)};
  @media all and (max-width: 1200px) {
    padding-left: ${convertPxToRem(24)};
  }
  @media all and (max-width: 744px) {
    padding-left: 0;
  }
`;
const IntroContentReverse = styled(IntroContent)`
  & img {
    order: 2;
  }
  @media all and (max-width: 744px) {
    & img {
      order: 0;
    }
  }
`;
const IntroFeatureReverse = styled.div`
  ${IntroFeatureTextSpacing}
  padding-right: ${convertPxToRem(64)};
  text-align: right;
  @media all and (max-width: 1200px) {
    padding-right: ${convertPxToRem(24)};
  }
  @media all and (max-width: 744px) {
    padding-right: 0;
  }
`;
const HomePage = () => {
  return (
    <>
      <MainContent>
        <VisualWrapper>
          <VisualTop>
            <VisualTitle>
              일상의 모든 물건을 <br />
              거래해 보세요
            </VisualTitle>
            <Button as={Link} to="/items" size="lg" round="true">
              구경하러 가기
            </Button>
          </VisualTop>
        </VisualWrapper>
        <Container as="section">
          <IntroContent>
            <h2 className="visually-hidden">인기 상품 안내</h2>
            <img src={IntroImg01} alt="인기 상품 안내" />
            <IntroFeature>
              <span className="txt-2lg font-weight-700 fc-primary100">
                Hot item
              </span>
              <h3 className="txt-4xl font-weight-700">
                인기 상품을 <br />
                확인해 보세요
              </h3>
              <p className="txt-2xl font-weight-500">
                가장 HOT한 중고거래 물품을 <br />
                판다 마켓에서 확인해 보세요
              </p>
            </IntroFeature>
          </IntroContent>
        </Container>
        <Container as="section">
          <IntroContentReverse>
            <h2 className="visually-hidden">상품 검색 안내</h2>
            <img src={IntroImg02} alt="상품 검색 안내" />
            <IntroFeatureReverse>
              <span className="txt-2lg font-weight-700 fc-primary100">
                Search
              </span>
              <h3 className="txt-4xl font-weight-700">
                구매를 원하는 <br />
                상품을 검색하세요
              </h3>
              <p className="txt-2xl font-weight-500">
                구매하고 싶은 물품은 검색해서 <br />
                쉽게 찾아보세요
              </p>
            </IntroFeatureReverse>
          </IntroContentReverse>
        </Container>
        <Container as="section">
          <IntroContent>
            <h2 className="visually-hidden">상품 등록 안내</h2>
            <img src={IntroImg03} alt="상품 등록 안내" />
            <IntroFeature>
              <span className="txt-2lg font-weight-700 fc-primary100">
                Register
              </span>
              <h3 className="txt-4xl font-weight-700">
                판매를 원하는 <br />
                상품을 등록하세요
              </h3>
              <p className="txt-2xl font-weight-500">
                어떤 물건이든 판매하고 싶은 상품을 <br />
                쉽게 등록하세요
              </p>
            </IntroFeature>
          </IntroContent>
        </Container>
        <VisualWrapper>
          <VisualBottom>
            <VisualTitle>
              믿을 수 있는 <br />
              판다마켓 중고 거래
            </VisualTitle>
          </VisualBottom>
        </VisualWrapper>
      </MainContent>
    </>
  );
};
export default HomePage;
