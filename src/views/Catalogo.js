import React from "react";
import { Footer } from '../components/Footer/footer'
import { Filtro } from '../components/Filtro/filtro'
import { ProductosCatalogo } from '../components/Catalogo/Catalogo'

function App() {
    
    const [anchetas, setAnchetas] = useState([]);
    const [anchetass] = useState('initialProducts');  

    const fetchData = () => {
        axios.get('http://localhost:4000/api/admin/anchetas')
          .then(res => {
            setAnchetas(res.data);
          })
          .catch(err => console.log(err));
      };
    
      useEffect(() => {
        fetchData();
      }, []);


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

    const filteredProducts = filterProducts(data)
    
}

function Catalogo() {
    return (
        <React.Fragment>
            <div className="site-wrap">
                <div className="site-section">
                    <div className="container">
                        <div className="row mb-5">
                            <ProductosCatalogo />
                            <Filtro />
                        </div>
                    </div>
                </div>
                <Footer />

            </div>
        </React.Fragment>
    );
}
export { Catalogo }