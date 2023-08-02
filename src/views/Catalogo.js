import { React, useState, useEffect }  from "react";
import { Footer } from '../components/Footer/footer'
import { Filtro } from '../components/Filtro/filtro'
import { Filtro2 } from '../components/Catalogo/Filtro2'
import { ProductosCatalogo } from '../components/Catalogo/Catalogo'
import axios from "axios";

function App() {

    const [data, anchetas, setAnchetas] = useState([]);
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
            <div className="site-wrap">
                <div className="site-section">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-md-9 order-2">
                                <Filtro2 />
                                <ProductosCatalogo />
                            </div>
                            <Filtro />
                        </div>
                    </div>
                </div>
                <Footer />

            </div>
    );
}
export { Catalogo }