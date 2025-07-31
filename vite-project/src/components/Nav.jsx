import { NavLink, useLocation } from "react-router-dom";
import largeLogo from "../assets/logo-large.svg";
import smallLogo from "../assets/logo-small.svg";
import profileImg from "../assets/profile-default.svg";

import "./Nav.css";

function NavigationLink({ to, activePaths = [], children }) {
  const location = useLocation();

  const linkStyle = (isActive) => ({
    color: `var(--color-${isActive ? "primary-100" : "secondary-600"})`,
    textDecoration: "none",
  });

  const active = activePaths.includes(location.pathname);

  return (
    <li className="Nav-link">
      <NavLink to={to} style={({ isActive }) => linkStyle(isActive || active)}>
        {children}
      </NavLink>
    </li>
  );
}

function Nav() {
  return (
    <nav className="Nav">
      <div className="Nav-content">
        <ul className="Nav-links">
          <li className="Nav-logo">
            <picture>
              <source srcSet={smallLogo} media="(max-width: 767px)" />
              <img src={largeLogo} />
            </picture>
          </li>
          <NavigationLink to="/community">자유게시판</NavigationLink>
          <NavigationLink to="/items" activePaths={["/additem"]}>
            중고마켓
          </NavigationLink>
        </ul>
        <div className="Nav__profile">
          <img src={profileImg} />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
