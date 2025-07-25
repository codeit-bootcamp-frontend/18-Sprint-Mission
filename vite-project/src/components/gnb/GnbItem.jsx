import React from "react";
import { NAV_LINKS } from "../../constants/NAV_LINKS";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const GnbItem = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <ul>
      {NAV_LINKS.map((link) => (
        <li
          key={link.path}
          className={currentPath === link.path ? "active" : ""}>
          <Link to={link.path}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default GnbItem;
