import Logo from "../svg/logo.svg";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <div className="container-son">
        <Link to="/" className="head_logo">
          <img src={Logo} alt="판다마켓 로고" />
        </Link>
        <span className="head_name">판다마켓</span>
      </div>
      <Link to="/" className="free-board">
        자유게시판
      </Link>
      <Link to="/items" className="used-market">
        중고마켓
      </Link>
    </div>
  );
};

export default Header;
