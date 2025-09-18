import { Outlet } from "react-router-dom";
import Header from "@/components/Layout/Header";

const AuthLayout = () => {
  return (
    <>
      <Header template="auth" />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;
