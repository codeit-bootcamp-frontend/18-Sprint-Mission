import Header from "./Header";
import HomeImg from "../../assets/img-home-top.png";
import hotImg from "../../assets/img-home-item.png";
import searchImg from "../../assets/img-home-search.png";
import registerImg from "../../assets/img-home-register.png";
import bottomImg from "../../assets/img-home-bottom.png";
import facebookIcon from "../../assets/ic_facebook.svg";
import twitterIcon from "../../assets/ic_twitter.svg";
import youtubeIcon from "../../assets/ic_youtube.svg";
import instagramIcon from "../../assets/ic_instagram.svg";

type SectionProps = {
  imgSrc: string,
  imgAlt: string,
  topText: string,
  midText: string,
  bottomText: string,
};

function Section({
  imgSrc,
  imgAlt,
  topText,
  midText,
  bottomText,
}: SectionProps) {
  return (
  <>
  <section className="section-container">
          <div className="section-div">
            <div className="section-img">
              <img src={imgSrc} alt={imgAlt} />
            </div>
            <div className="section-div-content">
              <div className="section-div-content-top">{topText}</div>
              <h2 className="section-div-content-mid">
                {midText.split('\n').map((line, index) =>
                <span key={index}>{line}<br /></span>
                )}
              </h2>
              <div className="section-div-content-bottom">
                {bottomText.split('\n').map((line, index) =>
                <span key={index}>{line}<br /></span>
                )}
              </div>
            </div>
          </div>
        </section>
  </>);
}

function MainPage() {
  return (
    <>
      <Header />
      <main>
        <div className="top-container">
          <div className="top-content-container">
            <h1 className="top-content">
              일상의 모든 물건을
              <br />
              거래해 보세요
              <a href="./items">구경하러 가기</a>
            </h1>
            <img src={HomeImg} alt="홈 사진" />
          </div>
        </div>
        <Section imgSrc={hotImg} imgAlt='인기 이미지' topText="Hot item" midText={`인기 있는 상품을\n확인해 보세요`} bottomText={`가장 Hot한 중고거래 물품을\n판다 마켓에서 확인해 보세요`} />
        <Section imgSrc={searchImg} imgAlt='검색 이미지' topText="Search" midText={`구매를 원하는\n상품을 검색하세요`} bottomText={`구매하고 싶은 물품은 검색해서\n쉽게 찾아보세요`} />
        <Section imgSrc={registerImg} imgAlt='등록 이미지' topText="Register" midText={`판매를 원하는\n상품을 등록하세요`} bottomText={`어떤 물건이든 판매하고 싶은 상품을\n쉽게 등록하세요`} />
        <div className="bottom-container">
          <div className="bottom-content-container">
            <div className="bottom-content">
              믿을 수 있는
              <br />
              판마다켓 중고 거래
            </div>
            <img src={bottomImg} alt="하단 사진" />
          </div>
        </div>
        <footer>
          <div className="footer-codeit">©codeit - 2024</div>
          <div className="footer-mid">
            <div>
              <a href="./privacy.html">Privacy Policy</a>
            </div>
            <div>
              <a href="./faq.html">FAQ</a>
            </div>
          </div>
          <ul className="footer-sns">
            <li>
              <a href="https://www.facebook.com/">
                <img src={facebookIcon} alt="페이스북" />
              </a>
            </li>
            <li>
              <a href="https://x.com/">
                <img src={twitterIcon} alt="트위터" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/">
                <img src={youtubeIcon} alt="유튜브" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <img src={instagramIcon} alt="인스타그램" />
              </a>
            </li>
          </ul>
        </footer>
      </main>
    </>
  );
}

export default MainPage;
