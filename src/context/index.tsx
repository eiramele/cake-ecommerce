/** Context files are used to store the context providers and the context itself. */

import { createContext, useState, useContext } from "react";

import { Cake } from "../pages/Home/Components";

interface CartContextType {
  cart: Cake[];
  setCart: React.Dispatch<React.SetStateAction<Cake[]>>;
}

export const CartContext = createContext<CartContextType | undefined> (undefined);

export function CartContextProvider({children}) {
  const [cart, setCart] = useState<Cake[]>([]);

  const value = { cart, setCart };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }
  return context;
}
