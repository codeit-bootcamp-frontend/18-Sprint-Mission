import type { JSX } from "react";
import styled from "styled-components";

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

const StyledLinkList = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none; /* Tablet */

  @media (max-width: 767px) {
    gap: 8px;
  }
`;

interface Props {
  children: React.ReactNode;
}
function LinkList({ children }: Props): JSX.Element {
  return <StyledLinkList>{children}</StyledLinkList>;
}

export { LinkList, LinkListItem };
