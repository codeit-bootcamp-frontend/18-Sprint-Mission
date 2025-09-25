// layouts/MainLayout.jsx
import Header from "../pages/MainPage/Header";
import "../pages/MainPage/MainVariables.css";
import "../pages/MainPage/MainReset.css";
import "../pages/MainPage/MainIndex.css";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
