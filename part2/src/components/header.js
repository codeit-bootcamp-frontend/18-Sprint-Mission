import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/img/logo.svg';
import Profile from '../assets/img/ic_profile.svg';
import './header.css';

function getLinkStyle({ isActive }) {
  return { color: isActive ? 'var(--blue)' : undefined };
}

function Header() {
  return (
    <header className="header">
      <div className="headerBar">
        <Link to="/" className="headerLogo" aria-label="홈 이동">
          <img src={Logo} alt="로고" width="170" />
        </Link>
        <nav>
          <ul>
            <li>
              <NavLink to="/community" style={getLinkStyle}>
                자유게시판
              </NavLink>
            </li>
            <li>
              <NavLink to="/items" style={getLinkStyle}>
                중고마켓
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Link to="/profile" className="profile">
        <img src={Profile} alt="프로필" width="40" />
      </Link>
    </header>
  );
}

export default Header;
