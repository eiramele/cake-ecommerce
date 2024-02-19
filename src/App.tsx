import "./App.css";
import Main from "./components/Main";
import Header from "./components/common/Header";
// import SearchBar from "./components/common/SearchBar";
import SearchandAddToCart from "./components/layout";
import CakeObjList from "./pages/Home/Components";

const cakesURL = "http://localhost:3000/cakes";

function App() {
  return (
    <>
    <Header/>
      <Main>
        <SearchandAddToCart/>
        <CakeObjList url={cakesURL} />
      </Main>
    </>
  );
}

export default App;
