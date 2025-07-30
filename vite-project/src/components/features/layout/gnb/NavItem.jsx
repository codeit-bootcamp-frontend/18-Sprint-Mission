import React from "react";
import { NAV_LINKS } from "../../../../constants/NAV_LINKS";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./NavItemStyle.css";

const NavItem = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <ul>
      {NAV_LINKS.map((link) => (
        <li
          key={link.path}
          className={currentPath === link.path ? "active" : ""}>
          <NavLink to={link.path}>{link.label}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavItem;
