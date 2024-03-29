import { createContext, useState } from "react";

// Este es el context que consumimos.
export const FiltersContext = createContext();

// Este es el que nos da acceso al context
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    minPrice: 500, 
    motivo: "",
    orderBy: "reciente"
  })
  
  return (
    <FiltersContext.Provider value={{
        filters,
        setFilters
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
