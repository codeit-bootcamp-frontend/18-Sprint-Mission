import "./MainVariables.css";
import "./MainReset.css";
import "./MainIndex.css";

import logoImg from "../../assets/ic-header.png";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header-logo">
            <img src={logoImg} alt="판다 얼굴" />
            <a className="header-title" href="./">
              판다마켓
            </a>
          </div>
          <a className="header-login" href="./login">
            로그인
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
