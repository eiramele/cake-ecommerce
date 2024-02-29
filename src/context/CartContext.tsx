

import { createContext, useState, useContext, ReactNode } from "react";
import { Cake } from "./CakesContext";

export interface CakeWithQuantity extends Cake {
  quantity: number;
}
export interface CartContextType {
  cart: CakeWithQuantity[];
  setCart: React.Dispatch<React.SetStateAction<CakeWithQuantity[]>>;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartContextProvider: React.FC<CartContextProviderProps> = ({
  children,
}) => {
  const [cart, setCart] = useState<CakeWithQuantity[]>(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const value = { cart, setCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export function useCartContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }
  return context;
}
