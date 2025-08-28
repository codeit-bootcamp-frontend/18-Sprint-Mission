import { useState } from "react";
import Header from "./components/header";
import { Outlet } from "react-router-dom";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <Header isLogin={isLogin} />
      <main className="main" id="main">
        <Outlet />
      </main>
    </>
  );
}

export default App;
