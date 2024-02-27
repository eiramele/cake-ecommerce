import "./App.css";

// import SearchBar from "./components/common/SearchBar";
import {
  CheckoutPage,
  HomePage,
  LoginPage,
  PaymentPage,
  ProductPageLayout,
  ThankYouPage,
} from "./components/layout";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  CHECKOUT,
  HOME,
  LOGIN,
  PAYMENT,
  THANKYOU,
} from "./routes/routing.routes";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path={LOGIN} element={<LoginPage />} />
          <Route path={HOME} element={<HomePage />} />
          <Route path="/:id" element={<ProductPageLayout />} />

          <Route path={CHECKOUT} element={<CheckoutPage />} />
          <Route path={THANKYOU} element={<ThankYouPage />} />
          <Route
            path={PAYMENT}
            element={
              <PrivateRoute>
                <PaymentPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
