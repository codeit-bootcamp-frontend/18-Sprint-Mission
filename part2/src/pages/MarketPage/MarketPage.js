import AllItemSelection from './components/AllItemSelection';
import BestItemSelection from './components/BestItemSelection';
import './MarketPage.css';

function MarketPage() {
  return (
    <div className="wrapper">
      <BestItemSelection />
      <AllItemSelection />
    </div>
  );
}

export default MarketPage;
