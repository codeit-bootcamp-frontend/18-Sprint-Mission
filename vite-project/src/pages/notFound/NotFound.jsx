import React from "react";
import "./NotFoundStyle.css";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <h1>404</h1>
      <p>요청하신 페이지를 찾을 수 없습니다.</p>
      <button onClick={() => navigate("/")} className="home-button">
        홈으로 이동
      </button>
    </div>
  );
};

export default NotFound;
