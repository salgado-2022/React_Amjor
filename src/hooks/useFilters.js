import { useContext} from 'react'
import { FiltersContext } from '../context/filters'

export function useFilters() {
    const { filters, setFilters } = useContext(FiltersContext);
  
    const filterProducts = (products) => {
      if (!Array.isArray(products)) {
        console.error('Hubo un problema al obtener la información del catálogo (products no es un array):', products);
        return [];
      }
  
      let filteredProducts = products.filter((product) => {
        return (
          product.PrecioUnitario >= filters.minPrice &&
          (filters.motivo === "" ||
            product.NombreAncheta.toLowerCase().includes(filters.motivo.toLowerCase()))
        );
      });

      if (filters.orderBy === "alfabetico") {
        filteredProducts = filteredProducts.sort((a, b) =>
          a.NombreAncheta.localeCompare(b.NombreAncheta)
        );
      } else if (filters.orderBy === "antiguo") {
        filteredProducts = filteredProducts.sort((a, b) =>
          a.ID_Ancheta - b.ID_Ancheta
        );
      } else if (filters.orderBy === "reciente") {
        filteredProducts = filteredProducts.sort((a, b) =>
          b.ID_Ancheta - a.ID_Ancheta
        );
      }
      return filteredProducts;
    };
  
    return { filters, filterProducts, setFilters };
  }
  