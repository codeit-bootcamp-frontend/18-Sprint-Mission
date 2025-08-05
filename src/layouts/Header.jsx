import { Link } from "react-router-dom";
import useDeviceSize from "../hooks/useDeviceSize";
import logo from "../assets/logo/logo.svg";
import logoText from "../assets/logo/logo-text.svg";
import styled from "styled-components";
import Button from "../components/Button";
import Icon from "../components/Icon";
import fontSize from "../styles/utils/fontSize.utils";
import globalTheme from "../styles/theme";
import { convertPxToRem } from "../styles/utils/convert.utils";
const HeaderStyle = styled.header`
  height: ${convertPxToRem(70)};
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  padding: 0 ${convertPxToRem(40)};
  background-color: #fff;
  & .logo {
    height: ${convertPxToRem(51)};
  }
  & nav {
    flex: 1;
    display: flex;
    flex-flow: row nowrap;
    & a {
      display: block;
      height: 100%;
      align-content: center;
      padding: ${convertPxToRem(21)} ${convertPxToRem(15)};
      ${fontSize("txt-2lg")}
      font-weight: 700;
      color: ${globalTheme.colors.gray600};
      white-space: nowrap;
    }
  }
  @media all and (max-width: 744px) {
    padding: 0 ${convertPxToRem(24)};
  }
  @media all and (max-width: 480px) {
    & .logo {
      height: ${convertPxToRem(27)};
    }
    & nav a {
      padding: ${convertPxToRem(16)} ${convertPxToRem(4)};
    }
  }
  @media all and (max-width: 375px) {
    height: ${convertPxToRem(60)};
    padding: 0 ${convertPxToRem(16)};
  }
`;
const HaederContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  gap: ${convertPxToRem(24)};
  max-width: 1520px;
  margin: 0 auto;
  @media all and (max-width: 744px) {
    gap: ${convertPxToRem(16)};
  }
  @media all and (max-width: 510px) {
    gap: ${convertPxToRem(8)};
  }
`;
const UserAccessBtn = styled(Button)`
  width: ${convertPxToRem(128)};
  @media all and (max-width: 744px) {
    width: ${convertPxToRem(88)};
  }
`;
const UserAccess = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <button type="button">
        <Icon iconName="profile" size="xl"></Icon>
      </button>
    );
  }
  return (
    <UserAccessBtn as={Link} to="/login" size="xs">
      로그인
    </UserAccessBtn>
  );
};
const Header = ({ isLoggedIn }) => {
  const { isSmall } = useDeviceSize();
  const img = isSmall ? logoText : logo;
  return (
    <HeaderStyle>
      <HaederContainer>
        <Link to="/">
          <h1>
            <img src={img} alt="판다마켓 로고" className="logo" />
          </h1>
        </Link>
        <nav>
          <Link to="/boards">자유게시판</Link>
          <Link to="/items">중고마켓</Link>
        </nav>
        <UserAccess isLoggedIn={isLoggedIn}></UserAccess>
      </HaederContainer>
    </HeaderStyle>
  );
};

export default Header;
