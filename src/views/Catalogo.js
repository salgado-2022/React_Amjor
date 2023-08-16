import { React, useState, useEffect } from "react";
import { Footer } from '../components/Footer/footer'
import { Filtro } from '../components/Filtro/filtro'
import { Filtro2 } from '../components/Catalogo/Filtro2'
import axios from "axios";
import { useFilters } from '../hooks/useFilters';

import { ProductosCatalogo } from '../components/Catalogo/Catalogo'
import { CartProvider } from '../context/cart';

function Catalogo() {
    const apiUrl = process.env.REACT_APP_AMJOR_API_URL;
    
    const [products, setProducts] = useState([]);
    const { filterProducts } = useFilters();
    const filteredProducts = filterProducts(products);

    useEffect(() => {
        // Función para obtener los datos desde la API
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${apiUrl}/api/admin/anchetas`);
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <CartProvider>
            <div className="site-wrap">
                <div className="site-section">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-md-9 order-2">
                                <Filtro2 />
                                <ProductosCatalogo products={filteredProducts} />
                            </div>
                            <Filtro />
                        </div>
                    </div>
                </div>
                <Footer />
                
                {/* <TestFooter /> */}

            </div>
        </CartProvider>
    );
}



// function Catalogo() {
//     return (
//             <div className="site-wrap">
//                 <div className="site-section">
//                     <div className="container">
//                         <div className="row mb-5">
//                             <div className="col-md-9 order-2">
//                                 <Filtro2 />
//                                 <ProductosCatalogo data={filteredProducts} />
//                             </div>
//                             <Filtro />
//                         </div>
//                     </div>
//                 </div>
//                 <Footer />

//             </div>
//     );
// }
export { Catalogo }