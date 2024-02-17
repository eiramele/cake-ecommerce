import './App.css'
import CakeObjList from './pages/Home/Components'

const cakesURL = "http://localhost:3000/cakes";

function App() {
  return (
    <>     
        <CakeObjList url={cakesURL}/>
          </>
  )
}

export default App