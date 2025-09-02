import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "./Logo";
import Nav from "./Nav";
import Avatar from "./Avatar";

export default function Header() {
  return (
    <header id="header">
      <div>
        <Link to="/">
          <Logo />
        </Link>
        <Nav />
      </div>
      <Avatar />
    </header>
  );
}
