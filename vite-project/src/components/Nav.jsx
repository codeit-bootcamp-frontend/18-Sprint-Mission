import { NavLink, useLocation } from "react-router-dom";
import largeLogo from "../assets/logo-large.svg";
import smallLogo from "../assets/logo-small.svg";
import "./Nav.css";
import Avatar from "./avatar";

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
        <Avatar />
      </div>
    </nav>
  );
}

export default Nav;
