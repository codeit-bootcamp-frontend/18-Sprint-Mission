import "./MainVariables.css";
import "./MainReset.css";
import "./MainIndex.css";

import logoImg from "../../assets/ic-header.png";

function Header() {
  return (
    <>
      <header class="header">
        <div class="header-container">
          <div class="header-logo">
            <img src={logoImg} alt="판다 얼굴" />
            <a class="header-title" href="./">
              판다마켓
            </a>
          </div>
          <a class="header-login" href="./login.html">
            로그인
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
