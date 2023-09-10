import { React, useState, useEffect } from "react";
import { Footer } from '../components/Footer/footer'
import { Filtro } from '../components/Filtro/filtro'
import { Filtro2 } from '../components/Filtro/Filtro2'
import axios from "axios";
import { useFilters } from '../hooks/useFilters';

import { ProductosCatalogo } from '../components/Catalogo/Catalogo'
import { CartProvider } from '../context/cart';

import ReactGA from "react-ga4";

function Catalogo() {
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Catalogo" });
      });

    const apiUrl = process.env.REACT_APP_AMJOR_API_URL;
    
    const [products, setProducts] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const { filterProducts } = useFilters();
    const filteredProducts = filterProducts(products);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${apiUrl}/api/admin/anchetas`);
                setProducts(response.data);
                setDataLoaded(true);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, [apiUrl]);

    return (
        <CartProvider>
            <div className="site-wrap">
                <div className="site-section">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-md-9 order-2">
                                <Filtro2 />
                                <ProductosCatalogo products={filteredProducts} dataLoaded={dataLoaded} />
                            </div>
                            <Filtro />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </CartProvider>
    );
}

export { Catalogo }