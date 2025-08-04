import logoImg from "../assets/logo-pandamarket.svg";
import profileImg from "../assets/logo-profile.svg";
import "./Nav.css";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();

  return (
    <div className="nav-container">
      <div className="nav-inner">
        <div className="nav-content">
          <div className="nav-logo">
            <img src={logoImg} alt="판다마켓 이미지" />
          </div>
          <ul className="nav-menu">
            <li className="nav-menu-item">자유게시판</li>
            <li className="nav-menu-item">
              <Link
                to="/items"
                className={`nav-menu-item ${
                  location.pathname === "/items" ? "active" : ""
                }`}
              >
                중고마켓
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-profile">
          <img src={profileImg} alt="프로필 이미지" />
        </div>
      </div>
    </div>
  );
}

export default Nav;
