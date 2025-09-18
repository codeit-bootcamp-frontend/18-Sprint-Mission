import { Link, useLocation } from "react-router-dom";
import { HeaderContainer, Inner, Logo, LogoLink, MenuList, MenuLink, UserMenu, UserProfileButton } from "./style";
import Icon from "@/components/Icon";

const MENU_ITEMS = [
  { to: "/board", label: "자유게시판" },
  { to: "/items", label: "중고마켓" },
];
const AUTH_ITEMS = ["/login", "/signup"];

const Header = ({ template = "main", isLoggedIn }) => {
  const { pathname } = useLocation();
  const isAuthPage = AUTH_ITEMS.includes(pathname);

  return (
    <HeaderContainer $template={template}>
      <Inner $template={template}>
        <Logo $template={template}>
          <LogoLink $template={template} to="/">
            <span className="blind">판다마켓</span>
          </LogoLink>
        </Logo>

        {isAuthPage ? null : (
          <>
            {isLoggedIn && (
              <nav>
                <MenuList>
                  {MENU_ITEMS.map(({ to, label }) => (
                    <li key={to}>
                      <MenuLink to={to}>{label}</MenuLink>
                    </li>
                  ))}
                </MenuList>
              </nav>
            )}
            <UserMenu>
              {isLoggedIn ? (
                <UserProfileButton type="button" aria-label="사용자 프로필">
                  <Icon size="lg" icon="profile" />
                </UserProfileButton>
              ) : (
                <Link to="/login">로그인</Link>
              )}
            </UserMenu>
          </>
        )}
      </Inner>
    </HeaderContainer>
  );
};

export default Header;
