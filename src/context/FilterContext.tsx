import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState("");

  const handleSetFilter = (newValue: string) => {
    setFilter(newValue);
  };

  return (
    <FilterContext.Provider value={{ filter, handleSetFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export function useFilter() {
  return useContext(FilterContext);
}
