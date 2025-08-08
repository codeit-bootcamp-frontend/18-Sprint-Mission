import "../styles/layout/header.css";
import ic_profile from "../assets/icons/ic_profile.svg";
import { Link, NavLink, useLocation } from "react-router";

/**
 * 헤더
 */
export default function Header() {
  /**
   * 현재 주소 가져오기
   */
  const location = useLocation();

  return (
    <>
      <header>
        <div className="logo">
          <div className="logo-img">
            <Link to="/">
              <div className="logo-img"></div>
            </Link>
          </div>
          {location.pathname !== "/" ? (
            <ul className="header-menu-box">
              <li className="header-menu">
                <NavLink
                  to="/community"
                  className={({ isActive }) =>
                    isActive
                      ? "header-menu-text header-active"
                      : "header-menu-text"
                  }
                >
                  자유게시판
                </NavLink>
              </li>
              <li className="header-menu">
                <NavLink
                  to="/items"
                  className={({ isActive }) =>
                    isActive || location.pathname === "/additem"
                      ? "header-menu-text header-active"
                      : "header-menu-text"
                  }
                >
                  중고마켓
                </NavLink>
              </li>
            </ul>
          ) : null}
          <Link to="login" className="header-link-text">
            {location.pathname !== "/" ? (
              <img src={ic_profile} alt="프로필_아이콘" />
            ) : (
              <button className="header-login-btn btn-hover btn-active">
                로그인
              </button>
            )}
          </Link>
        </div>
      </header>
    </>
  );
}
