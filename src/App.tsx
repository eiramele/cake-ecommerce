import "./App.css";

// import SearchBar from "./components/common/SearchBar";
import {
  CheckoutPage,
  HomePage,
  LoginPage,
  ProductPageLayout,
  ThankYouPage,
} from "./components/layout";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CHECKOUT, HOME, LOGIN, THANKYOU } from "./routes/routing.routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={LOGIN} element={<LoginPage />} />
        <Route path={HOME} element={<HomePage />} />
        <Route path="/:id" element={<ProductPageLayout />} />

        <Route path={CHECKOUT} element={<CheckoutPage />} />
        <Route path={THANKYOU} element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
