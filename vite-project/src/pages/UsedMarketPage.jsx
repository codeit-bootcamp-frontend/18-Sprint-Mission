import Header from "../components/Header";
import AllItems from "../components/AllItems";
import BestItems from "../components/BestItems";

const UsedMarketPage = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <BestItems />
        <AllItems />
      </main>
    </>
  );
};

export default UsedMarketPage;
