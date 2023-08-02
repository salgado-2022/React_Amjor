
function Filtro () {    
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: '0'
    })

    const filterProducts = (data) => {
        return data.filter(product => {
            return product.precioUnitario >= filters.minPrice &&
            (
                filters.category === 'all' ||
                product.Estado === filters.category
            )
        })
    }
    
}
