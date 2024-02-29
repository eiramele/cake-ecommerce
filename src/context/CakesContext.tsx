import { ReactNode, createContext, useContext } from "react";
import { useData } from "../hooks";

const cakesURL: string = "http://localhost:3000/cakes";

export interface Cake {
  id: number;
  name: string;
  price: number;
  stock: number;
  image: string;
  description: string;
  rating: string;
}

interface CakesContextType {
  cakes: Cake[];
}

interface CakesContextProviderProps {
  children: ReactNode;
}
export const CakesContext = createContext<CakesContextType | undefined>(
  undefined
);

export const CakesContextProvider: React.FC<CakesContextProviderProps> = ({
  children,
}) => {
  const { cakes } = useData(cakesURL);

  const value = { cakes: cakes || [] };

  return (
    <CakesContext.Provider value={value}>{children}</CakesContext.Provider>
  );
};

export function useCakes() {
  const context = useContext(CakesContext);
  if (!context) {
    throw new Error("useCakes must be used within a CakesContextProvider");
  }
  return context;
}
