import { Routes, Route, useLocation } from "react-router-dom";
import App from "./App";
import HomePage from "@/pages/HomePage";
import ItemPage from "@/pages/ItemPage";
import LoginPage from "@/pages/LoginPage";
import SignupPage from "@/pages/SignupPage";
import BoardPage from "@/pages/BoardPage";
import FaqPage from "@/pages/FaqPage";
import PrivacyPage from "@/pages/PrivacyPage";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import AdditemPage from "@/pages/AdditemPage";

function Main() {
  // 해당 path 일 경우 헤더 + 푸터  미노출
  const hiddenHeaderRoutes = ["/login", "/signup"];
  const location = useLocation();
  const pathname = location.pathname;
  const isHiddenHeaderRoutes = hiddenHeaderRoutes.includes(pathname);
  // 로그인 여부로 로그인버튼, 유저아이콘 상태조절 (임의로 메인페이지에서만 로그인 노출)
  const isLoggedIn = pathname !== "/";
  return (
    <>
      {!isHiddenHeaderRoutes && <Header isLoggedIn={isLoggedIn} />}
      <Routes>
        <Route path="/" element={<App></App>}>
          <Route index element={<HomePage></HomePage>}></Route>
          <Route path="items" element={<ItemPage></ItemPage>}></Route>
          <Route path="additem" element={<AdditemPage></AdditemPage>}></Route>
          <Route path="login" element={<LoginPage></LoginPage>}></Route>
          <Route path="signup" element={<SignupPage></SignupPage>}></Route>
          <Route path="boards" element={<BoardPage></BoardPage>}></Route>
          <Route path="faq" element={<FaqPage></FaqPage>}></Route>
          <Route path="privacy" element={<PrivacyPage></PrivacyPage>}></Route>
        </Route>
      </Routes>
      {!isHiddenHeaderRoutes && <Footer />}
    </>
  );
}

export default Main;
