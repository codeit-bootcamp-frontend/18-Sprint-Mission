import '../styles/style.css';
import home_top from '../assets/images/Img_home_top.png';
import hot_item from '../assets/images/hot_item.png';
import search_img from '../assets/images/search.png';
import register_img from '../assets/images/register.png';
import home_bottom from '../assets/images/Img_home_bottom.png';
import { Link } from 'react-router';

/**
 * 메인화면
 */
export default function Home() {
  return (
    <>
      <div className="main-contianer">
        <div className="plan-card">
          <div className="slogan">
            <p className="slogan-heading">
              일상의 모든 물건을 <br className="only-pc only-mobile" />
              거래해보세요
            </p>
            <Link to="/items">
              <button className="large-btn btn-hover btn-active">
                구경하러 가기
              </button>
            </Link>
          </div>
          <img className="main-img" src={home_top} alt="main_img" />
        </div>

        <div className="home-container">
          <div className="content-box">
            <img className="introduce-img" src={hot_item} alt="hot_item" />
            <div className="introduce">
              <p className="keyword">Hot item</p>
              <p className="menu-heading">
                인기 상품을 <br className="only-pc" />
                확인해 보세요
              </p>
              <h2>
                가장 HOT한 중고거래 물품을 <br />
                판다 마켓에서 확인해보세요
              </h2>
            </div>
          </div>
        </div>

        <div className="home-container">
          <div className="content-box">
            <div className="sec-introduce">
              <p className="keyword">Search</p>
              <p className="menu-heading">
                구매를 원하는 <br className="only-pc" />
                상품을 검색하세요
              </p>
              <h2>
                구매하고 싶은 물품은 검색해서 <br />
                쉽게 찾아보세요
              </h2>
            </div>
            <img className="introduce-img" src={search_img} alt="search" />
          </div>
        </div>

        <div className="home-container">
          <div className="content-box">
            <img className="introduce-img" src={register_img} alt="register" />
            <div className="introduce">
              <p className="keyword">Register</p>
              <p className="menu-heading">
                판매를 원하는 <br className="only-pc" />
                상품을 등록하세요
              </p>
              <h2>
                어떤 물건이든 판매하고 싶은 상품을 <br />
                쉽게 등록하세요
              </h2>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="bottom-slogan">
            <p className="slogan-heading">
              믿을 수 있는 <br />
              판다마켓 중고 거래
            </p>
          </div>
          <img src={home_bottom} alt="bottom_img" />
        </div>
      </div>
    </>
  );
}
