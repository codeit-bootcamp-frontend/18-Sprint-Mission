import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Layout/Header";
import Container from "@/components/Layout/Container";

const PageLayout = () => {
  const [isLoggedIn] = useState(true);

  return (
    <>
      <Header template="sub" isLoggedIn={isLoggedIn} />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default PageLayout;
