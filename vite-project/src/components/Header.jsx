import Logo from "../svg/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <a className="container-son">
        <Link to="/" className="head_logo" color="#3692FF">
          <img
            src={Logo}
            alt="판다마켓 로고"
            style="width: 40px; height: 40px; top: 5px"
          />
          판다마켓
        </Link>
      </a>
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
