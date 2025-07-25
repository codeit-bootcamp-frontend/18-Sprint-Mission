import React from "react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import "./gnbStyle.css";

const Gnb = () => {
  return (
    <header className="gnb">
      <div className="gnb-left">
        <Link to="/">
          <img
            src="/icons/full-logo.svg"
            className="logo"
            alt="판다마켓 로고"
          />
        </Link>
        <NavItem />
      </div>
      <div className="gnb-right">
        <Link to="/profile">
          <img src="/icons/profile.svg" alt="프로필 기본 이미지" />
        </Link>
      </div>
    </header>
  );
};

export default Gnb;
