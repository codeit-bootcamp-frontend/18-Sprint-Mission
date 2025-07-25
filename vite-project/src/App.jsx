import { Routes, Route } from 'react-router-dom';
import Items from './pages/items/Items';
import Board from './pages/board/Board';

function App() {
  return (
    <Routes>
      <Route path="/board" element={<Board />} />
      <Route path="/items" element={<Items />} />
    </Routes>
  );
}

export default App;