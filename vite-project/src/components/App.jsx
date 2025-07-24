import Nav from "./Nav";
import PageControl from "./PageControl";

function App() {
  return (
    <>
      <Nav />
      <PageControl numberOfPages={10} />
    </>
  );
}

export default App;
