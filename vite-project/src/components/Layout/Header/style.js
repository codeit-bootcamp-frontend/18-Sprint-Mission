import { Link, NavLink } from "react-router-dom";
import { styled, css } from "styled-components";
import typography from "@/styles/utils/typography";
import media from "@/styles/utils/media";

const COMMON_CONTAINER_STYLES = css`
  position: fixed;
  height: 70px;
  border-bottom: 1px solid var(--border-color);
  background-color: var(--main-bg-color);
  min-width: 320px;
`;

const CONTAINER_VAR = {
  main: COMMON_CONTAINER_STYLES,
  sub: COMMON_CONTAINER_STYLES,
  auth: css`
    position: relative;
  `,
};

export const HeaderContainer = styled.header`
  ${({ $template }) => CONTAINER_VAR[$template] || CONTAINER_VAR.main}
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
`;

const INNER_VAR = {
  main: css`
    max-width: calc(1120px + 400px);
    padding: 0 200px;
  `,
  sub: css`
    max-width: calc(1520px + 48px);
    padding: 0 24px;
    gap: 0 48px;
    ${media("md")} {
      gap: 0 35px;
    }
    ${media("sm")} {
      gap: 0 12px;
    }
  `,
  auth: css`
    justify-content: center;
  `,
};

export const Inner = styled.div`
  ${({ $template }) => INNER_VAR[$template] || INNER_VAR.main}
  display: flex;
  align-items: center;
  margin: 0 auto;
  height: 100%;
  box-sizing: border-box;
  ${media("md")} {
    padding: 0 24px;
  }
  ${media("sm")} {
    padding: 0 16px;
  }
`;

const COMMON_LOGO_STYLES = css`
  width: 153px;
  height: 51px;
  ${media("sm")} {
    width: 81px;
    height: 40px;
  }
`;
const LOGO_VAR = {
  main: COMMON_LOGO_STYLES,
  sub: COMMON_LOGO_STYLES,
  auth: css`
    width: 396px;
    height: 132px;
    ${media("sm")} {
      width: 198px;
      height: 66px;
    }
  `,
};

export const Logo = styled.h1`
  ${({ $template }) => LOGO_VAR[$template] || LOGO_VAR.main}
`;

const LOGOLINK_VAR = {
  main: css`
    ${media("sm")} {
      background: var(--img-logo-text);
    }
  `,
  sub: css`
    ${media("sm")} {
      background: var(--img-logo-text);
    }
  `,
  auth: css`
    background: red;
  `,
};

export const LogoLink = styled(Link)`
  ${({ $template }) => LOGOLINK_VAR[$template] || LOGOLINK_VAR.main}
  display: block;
  width: 100%;
  height: 100%;
  background: var(--img-logo);
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  gap: 0 30px;
  ${typography["text-2lg-bold"]};
  color: var(--color-gray-600);
  ${media("sm")} {
    ${typography["text-lg-bold"]};
    gap: 0 8px;
  }
`;

export const MenuLink = styled(NavLink)`
  display: block;
  &.active {
    color: var(--color-primary-100);
  }
`;

export const UserMenu = styled.div`
  margin-left: auto;
`;

export const UserProfileButton = styled.button``;
