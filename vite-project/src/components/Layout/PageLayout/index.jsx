import Header from "@/components/Layout/Header";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default PageLayout;
