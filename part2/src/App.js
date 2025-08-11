import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import HomePage from './pages/HomePage/HomePage';
import CommunityPage from './pages/CommunityPage/CommunityPage';
import MarketPage from './pages/MarketPage/MarketPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import AddItemPage from './pages/AddItemPage/AddItemPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="withHeader">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="items" element={<MarketPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="additem" element={<AddItemPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
