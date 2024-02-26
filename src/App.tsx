import "./App.css";

// import SearchBar from "./components/common/SearchBar";
import { CheckoutPage, HomePage, ProductPageLayout } from "./components/layout";

import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="home/:id" element={<ProductPageLayout />} />

        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
