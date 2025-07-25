import { Routes, Route } from 'react-router-dom';
import Items from './pages/Items';
import Board from './pages/Board';

function App() {
  return (
    <Routes>
      <Route path="/board" element={<Board />} />
      <Route path="/items" element={<Items />} />
    </Routes>
  );
}

export default App;