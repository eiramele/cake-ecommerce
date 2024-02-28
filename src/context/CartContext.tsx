/** Context files are used to store the context providers and the context itself. */

import { createContext, useState, useContext } from "react";

import { CakeWithQuantity } from "../pages/Home/Components";

export interface CartContextType {
  cart: CakeWithQuantity[];
  setCart: React.Dispatch<React.SetStateAction<CakeWithQuantity[]>>;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState<CakeWithQuantity[]>(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const value = { cart, setCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCartContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }
  return context;
}
