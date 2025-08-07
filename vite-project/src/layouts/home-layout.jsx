import styled from "styled-components";
import Nav from "../components/Nav";

const Content = styled.div`
  max-width: 1200px;
  margin: 24px auto 0px;

  @media (max-width: 1199px) {
    max-width: none;
    margin: 24px 24px 0px;
  }

  @media (max-width: 767px) {
    max-width: none;
    margin: 16px 16px 0px;
  }
`;

function HomeLayout({ children }) {
  return (
    <>
      <Nav />
      <Content>{children}</Content>
    </>
  );
}

export default HomeLayout;
