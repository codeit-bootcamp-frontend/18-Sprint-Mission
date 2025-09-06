import { Link } from "react-router-dom";
import userMenu from "../assets/scss/userMenu.module.scss";
import userProFile from "../assets/images/UserButton.svg";
import Button from "./Button";
import { Children, useState } from "react";

function UserMenu({ isLogin }) {
  return (
    <ul className={userMenu.menu}>
      <li tabIndex={0}>
        {isLogin ? (
          <>
            <button className={userMenu.profileButton}>
              <img src={userProFile} alt="프로필 이미지" />
            </button>
            <ul className={userMenu.dropMenu}>
              <li>
                <Button className={userMenu.logoutButton}>
                  로그아웃
                </Button>               
              </li>
            </ul>
          </>
        ) : (
          <Link
            to="/"
            className={`button medium-button ${userMenu.loginButton}`}
          >
            로그인
          </Link>
        )}
      </li>
    </ul>
  );
}

export default UserMenu;
