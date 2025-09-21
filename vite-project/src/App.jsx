// App.jsx - 라우터 적용 버전
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MarketPage from "./pages/market";
import BoardPage from "./pages/board";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />

        {/* 페이지별 콘텐츠 */}
        <Routes>
          <Route path="/" element={<MarketPage />} />
          <Route path="/board" element={<BoardPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
