import { NavLink } from "react-router-dom";
import logoImg from "../assets/logo-large.svg";
import profileImg from "../assets/profile-default.svg";

import "./Nav.css";

export default function Nav() {
  const linkStyle = ({ isActive }) => ({
    color: `var(--color-${isActive ? "primary-100" : "secondary-600"})`,
    textDecoration: "none",
  });

  return (
    <nav className="Nav">
      <div className="Nav-content">
        <ul className="Nav-links">
          <li className="Nav-logo">
            <img src={logoImg} />
          </li>
          <li className="Nav-link">
            <NavLink to="/community" style={linkStyle}>
              자유게시판
            </NavLink>
          </li>
          <li className="Nav-link">
            <NavLink to="/items" style={linkStyle}>
              중고마켓
            </NavLink>
          </li>
        </ul>
        <div className="Nav__profile">
          <img src={profileImg} />
        </div>
      </div>
    </nav>
  );
}
