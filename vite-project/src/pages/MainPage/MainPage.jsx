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

function MainPage() {
  return (
    <>
      <Header />
      <main>
        <div class="top-container">
          <div class="top-content-container">
            <h1 class="top-content">
              일상의 모든 물건을
              <br />
              거래해 보세요
              <a href="./items">구경하러 가기</a>
            </h1>
            <img src={HomeImg} alt="홈 사진" />
          </div>
        </div>
        <section class="section-container">
          <div class="section-div">
            <div class="section-img">
              <img src={hotImg} alt="인기 이미지" />
            </div>
            <div class="section-div-content">
              <div class="section-div-content-top">Hot item</div>
              <h2 class="section-div-content-mid">
                인기 상품을
                <br />
                확인해 보세요
              </h2>
              <div class="section-div-content-bottom">
                가장 HOT한 중고거래 물품을
                <br />
                판다 마켓에서 확인해 보세요
              </div>
            </div>
          </div>
        </section>

        <section class="section-container">
          <div class="section-div">
            <div class="section-img">
              <img src={searchImg} alt="서치 이미지" />
            </div>
            <div class="section-div-content">
              <div class="section-div-content-top">Search</div>
              <h2 class="section-div-content-mid">
                구매를 원하는
                <br />
                상품을 검색하세요
              </h2>
              <div class="section-div-content-bottom">
                구매하고 싶은 물품은 검색해서
                <br />
                쉽게 찾아보세요
              </div>
            </div>
          </div>
        </section>

        <section class="section-container">
          <div class="section-div">
            <div class="section-img">
              <img src={registerImg} alt="레지스터 이미지" />
            </div>
            <div class="section-div-content">
              <div class="section-div-content-top">Register</div>
              <h2 class="section-div-content-mid">
                판매를 원하는
                <br />
                상품을 등록하세요
              </h2>
              <div class="section-div-content-bottom">
                어떤 물건이든 판매하고 싶은 상품을
                <br />
                쉽게 등록하세요
              </div>
            </div>
          </div>
        </section>
        <div class="bottom-container">
          <div class="bottom-content-container">
            <div class="bottom-content">
              믿을 수 있는
              <br />
              판마다켓 중고 거래
            </div>
            <img src={bottomImg} alt="하단 사진" />
          </div>
        </div>
        <footer>
          <div class="footer-codeit">©codeit - 2024</div>
          <div class="footer-mid">
            <div>
              <a href="./privacy.html">Privacy Policy</a>
            </div>
            <div>
              <a href="./faq.html">FAQ</a>
            </div>
          </div>
          <ul class="footer-sns">
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
