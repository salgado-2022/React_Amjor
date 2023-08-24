import { useContext} from 'react'
import { FiltersContext } from '../context/filters'

export function useFilters() {
    const { filters, setFilters } = useContext(FiltersContext)

    const filterProducts = (products) => {
        if (!Array.isArray(products)) {
            console.error('Hubo un problema al obtener la información del catálogo (products no es un array):', products);
            return [];
        }
    
        return products.filter(product => {
            return (
                product.PrecioUnitario >= filters.minPrice &&
                (
                    filters.category === 'all' ||
                    product.category === filters.category
                )
            )
        });
    }

    return { filters, filterProducts, setFilters }
}