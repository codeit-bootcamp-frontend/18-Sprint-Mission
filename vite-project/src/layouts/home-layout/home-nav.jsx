import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import largeLogo from "../../assets/logo-large.svg";
import smallLogo from "../../assets/logo-small.svg";
import Avatar from "../../components/avatar/avatar";

const StyledHomeNav = styled.nav`
  padding: 0 200px;
  border-bottom: 1px solid #dfdfdf;
  background-color: white;

  @media (max-width: 1199px) {
    padding: 0 24px;
  }

  @media (max-width: 767px) {
    padding: 0 16px;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkList = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none; /* Tablet */

  @media (max-width: 767px) {
    gap: 8px;
  }
`;

const LinkListItem = styled.li`
  padding: 21px 15px;
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;

  @media (max-width: 767px) {
    padding: 21px 0;
    font-size: 16px;
  }
`;

const Logo = styled.picture`
  margin-right: 32px;

  @media (max-width: 1199px) {
    margin-right: 20px;
  }

  @media (max-width: 767px) {
    margin-right: 0px;
  }
`;

function NavigationLink({ to, activePaths = [], children }) {
  const location = useLocation();

  const linkStyle = (isActive) => ({
    color: `var(--color-${isActive ? "primary-100" : "secondary-600"})`,
    textDecoration: "none",
  });

  const active = activePaths.includes(location.pathname);

  return (
    <NavLink to={to} style={({ isActive }) => linkStyle(isActive || active)}>
      {children}
    </NavLink>
  );
}

function HomeNav() {
  return (
    <StyledHomeNav>
      <Content>
        <LinkList>
          <LinkListItem>
            <Logo>
              <source srcSet={smallLogo} media="(max-width: 767px)" />
              <img src={largeLogo} />
            </Logo>
          </LinkListItem>
          <LinkListItem>
            <NavigationLink to="/community">자유게시판</NavigationLink>
          </LinkListItem>
          <LinkListItem>
            <NavigationLink to="/items" activePaths={["/additem"]}>
              중고마켓
            </NavigationLink>
          </LinkListItem>
        </LinkList>
        <Avatar />
      </Content>
    </StyledHomeNav>
  );
}

export default HomeNav;
