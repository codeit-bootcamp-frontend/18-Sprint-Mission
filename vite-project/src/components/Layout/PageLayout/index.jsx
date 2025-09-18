import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Layout/Header";

const PageLayout = () => {
  const [isLoggedIn] = useState(true);

  return (
    <>
      <Header template="sub" isLoggedIn={isLoggedIn} />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default PageLayout;
