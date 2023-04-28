import React from "react";
import { Footer } from '../components/Footer/footer'
import { Filtro } from '../components/Filtro/filtro'
import { ProductosCatalogo } from '../components/Catalogo/Catalogo'

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