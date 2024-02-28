import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CartContextProvider } from "./context/CartContext.tsx";
import { CakesContextProvider } from "./context/CakesContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CakesContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </CakesContextProvider>
  </React.StrictMode>
);
