// layouts/DefaultLayout.jsx
import Nav from "../components/Nav";
import "../components/Nav.css";
import "../components/reset.css";
import "../pages/ItemsPage/ItemsPage.css";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
}
