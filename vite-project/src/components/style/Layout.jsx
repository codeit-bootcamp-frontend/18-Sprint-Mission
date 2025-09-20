import { Outlet } from "react-router-dom";
import Header from "../common/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="max-w-screen-xl px-4 mt-6 md:px-6 md:mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
