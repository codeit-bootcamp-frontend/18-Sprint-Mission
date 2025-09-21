import { Link, useLocation } from "react-router-dom";

const AllItemRegisterButton = () => {
  const location = useLocation();

  return (
    <Link
      to="/additem"
      className={`inline-block px-6 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
        location.pathname === "/additem"
          ? "bg-blue-600 text-white" // 현재 페이지일 때
          : "bg-blue-500 hover:bg-blue-600 text-white" // 기본 상태
      }`}
    >
      상품 등록하기
    </Link>
  );
};

export default AllItemRegisterButton;
