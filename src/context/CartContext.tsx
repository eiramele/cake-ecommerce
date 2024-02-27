/** Context files are used to store the context providers and the context itself. */

import { createContext, useState, useContext } from "react";

import { CakeWithQuantity } from "../pages/Home/Components";

export interface CartContextType {
  cart: CakeWithQuantity[];
  setCart: React.Dispatch<React.SetStateAction<CakeWithQuantity[]>>;
}
// interface QuantityContextType {
//   quantity: number;
//   setQuantity: React.Dispatch<React.SetStateAction<number>>;
// }

//Cart context
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

//Quantity context
// export const QuantityContext = createContext<QuantityContextType | undefined>(
//   undefined
// );

// export function QuantityContextProvider({ children }) {
//   const [quantity, setQuantity] = useState<number>(1);

//   const value = { quantity, setQuantity };

//   return <QuantityContext.Provider value={value}>{children}</QuantityContext.Provider>;
// }

// export function useQuantityContext() {
//   const context = useContext(QuantityContext);
//   if (!context) {
//     throw new Error("useQuantityContext must be used within a QuantityContextProvider");
//   }
//   return context;
// }
