import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import Container from "@/components/Layout/Container";

const StyledContainer = styled(Container)`
  max-width: ${({ template }) => (template === "auth" ? "calc(640px + 48px)" : "100%")};
`;

const PageLayout = ({ template = "main" }) => {
  const [isLoggedIn] = useState(true);
  return (
    <>
      <Header template={template} isLoggedIn={template === "sub" ? isLoggedIn : undefined} />
      <main>
        <StyledContainer template={template}>
          <Outlet />
        </StyledContainer>
      </main>
      {template === "main" && <Footer />}
    </>
  );
};

export default PageLayout;
