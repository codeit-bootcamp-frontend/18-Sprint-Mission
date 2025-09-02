import { NavLink, useMatch } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  const AddItemActive = useMatch("/additem");
  const ItemActive = useMatch("/items");

  return (
    <ul className="panda-nav">
      <li className="panda-li">
        <NavLink>자유게시판</NavLink>
      </li>
      <li className="panda-li">
        <NavLink
          to="/items"
          style={{ color: AddItemActive || ItemActive ? "#3692FF" : "#485563",}}
        >
          중고마켓
        </NavLink>
      </li>
    </ul>
  );
}
