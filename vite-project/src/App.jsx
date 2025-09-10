import Header from "./components/Header/Header";
import BestItem from "./components/BestItem/BestItem";
import AllItemHeader from "./components/AllItem/AllItemHeader";
import AllItemSearchBar from "./components/AllItem/AllItemSearchBar";
import AllItemRegisterButton from "./components/AllItem/AllItemRegisterButton";

function App() {
  return (
    <>
      <Header />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BestItem />
        <div className="flex items-center justify-between mt-8">
          <AllItemHeader />
          <div className="flex items-center gap-2">
            <AllItemSearchBar />
            <AllItemRegisterButton />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
