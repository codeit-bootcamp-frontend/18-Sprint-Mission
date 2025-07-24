import logoImg from "../assets/logo-large.svg";
import profileImg from "../assets/profile-default.svg";

import "./Nav.css";

export default function Nav() {
  return (
    <nav className="Nav">
      <div className="Nav-content">
        <ul className="Nav-links">
          <li className="Nav-logo">
            <img src={logoImg} />
          </li>
          <li className="Nav-link">자유게시판</li>
          <li className="Nav-link">중고마켓</li>
        </ul>
        <div className="Nav__profile">
          <img src={profileImg} />
        </div>
      </div>
    </nav>
  );
}
