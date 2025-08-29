import { Link, NavLink } from "react-router-dom";
import UserMenu from "./UserMenu";
import headerLogo from "../assets/images/logo.svg";
import header from "../assets/scss/header.module.scss";

function Header({ isLogin }) {
  return (
    <header className={header.header}>
      <div className={header.container}>
        <h1 className={header.logo}>
          <Link to="/">
            <img src={headerLogo} alt="판다마켓" />
          </Link>
        </h1>
        <nav className={header.nav}>
          <ul>
            <li>
              <NavLink
                to="/additem"
                className={({ isActive }) => (isActive ? header.active : "")}
              >
                자유게시판
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/items"
                className={({ isActive }) => (isActive ? header.active : "")}
              >
                중고마켓
              </NavLink>
            </li>
          </ul>
        </nav>
        <UserMenu isLogin={isLogin} />
      </div>
    </header>
  );
}

export default Header;
