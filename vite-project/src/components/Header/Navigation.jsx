// components/Header/Navigation.jsx - 간단한 구조
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="flex gap-8">
      <Link
        to="/board"
        className={`transition-colors ${
          location.pathname === "/board"
            ? "text-blue-600 font-medium"
            : "text-gray-600 hover:text-blue-600"
        }`}
      >
        자유게시판
      </Link>
      <Link
        to="/"
        className={`transition-colors ${
          location.pathname === "/"
            ? "text-blue-600 font-medium"
            : "text-gray-600 hover:text-blue-600"
        }`}
      >
        중고마켓
      </Link>
    </nav>
  );
};

export default Navigation;
