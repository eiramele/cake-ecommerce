import "./App.css";
import Main from "./components/Main";
import CakeObjList from "./pages/Home/Components";

const cakesURL = "http://localhost:3000/cakes";

function App() {
  return (
    <>
      <Main>
        <CakeObjList url={cakesURL} />
      </Main>
    </>
  );
}

export default App;
