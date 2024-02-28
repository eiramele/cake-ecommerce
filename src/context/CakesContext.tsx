/** Context files are used to store the context providers and the context itself. */

import { createContext, useState, useContext } from "react";

import { Cake, CakeWithQuantity } from "../pages/Home/Components";
import { useData } from "../hooks";
const cakesURL: string = "http://localhost:3000/cakes";

export interface CakesContextType {
  cakes: Cake[];
  setCakes: React.Dispatch<React.SetStateAction<Cake[]>>;
}

export const CakesContext = createContext<CakesContextType | undefined>(
  undefined
);

export function CakesContextProvider({ children }) {
  const { cakes, setCakes } = useData(cakesURL);

  const value = { cakes };

  return (
    <CakesContext.Provider value={value}>{children}</CakesContext.Provider>
  );
}

export function useCakes() {
  const context = useContext(CakesContext);
  if (!context) {
    throw new Error("useCakes must be used within a CakesContextProvider");
  }
  return context;
}
