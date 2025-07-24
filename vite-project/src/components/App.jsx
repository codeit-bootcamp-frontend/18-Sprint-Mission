import Nav from "./Nav";
import PageControl from "./PageControl";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <PageControl numberOfPages={10} />
    </>
  );
}

export default App;
