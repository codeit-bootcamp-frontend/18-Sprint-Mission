import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col">
      404! 없는 페이지 입니다!
      <Link to="/items">제품페이지로 이동</Link>
    </div>
  );
};

export default NotFound;
