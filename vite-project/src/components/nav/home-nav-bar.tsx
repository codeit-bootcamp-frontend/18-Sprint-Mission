import type { JSX } from "react";
import Avatar from "../avatar/avatar";
import { LinkList, LinkListItem } from "../link/link-list";
import StyledNavLink from "../link/styled-nav-link";
import NavLogo from "../logo/nav-logo";
import NavBar from "./nav-bar";

function HomeNavBar(): JSX.Element {
  return (
    <NavBar>
      <LinkList>
        <LinkListItem>
          <NavLogo />
        </LinkListItem>
        <LinkListItem>
          <StyledNavLink to="/community">자유게시판</StyledNavLink>
        </LinkListItem>
        <LinkListItem>
          <StyledNavLink to="/items" activePaths={["/additem"]}>
            중고마켓
          </StyledNavLink>
        </LinkListItem>
      </LinkList>
      <Avatar />
    </NavBar>
  );
}

export default HomeNavBar;
