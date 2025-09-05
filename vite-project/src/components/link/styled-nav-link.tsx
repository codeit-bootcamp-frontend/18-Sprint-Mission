import type { JSX } from "react";
import { NavLink, useLocation } from "react-router-dom";

interface Props {
  to: string;
  activePaths?: string[];
  children: React.ReactNode;
}

type NavLinkRenderCallback = (isActive: boolean) => React.CSSProperties;

function StyledNavLink({ to, activePaths = [], children }: Props): JSX.Element {
  const location = useLocation();

  const linkStyle: NavLinkRenderCallback = (isActive) => ({
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

export default StyledNavLink;
