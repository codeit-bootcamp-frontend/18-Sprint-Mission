import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "@/components/Layout/Header";
import Container from "@/components/Layout/Container";

const StyledContainer = styled(Container)`
  max-width: calc(640px + 48px);
`;

const AuthLayout = () => {
  return (
    <>
      <Header template="auth" />
      <main>
        <StyledContainer>
          <Outlet />
        </StyledContainer>
      </main>
    </>
  );
};

export default AuthLayout;
