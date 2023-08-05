import React from "react";
import { Recuento } from "../components/Carrito/RecuentoCompra";
import { Footer } from "../components/Footer/footer";
import { SeguirComprando } from "../components/Carrito/SeguirComprando";
import { CarritoProductos } from "../components/Carrito/CarritoProductos";
import { CartProvider } from '../context/cart';

function Carrito() {

    return (
        <CartProvider>
        <React.Fragment>
                <div className="site-wrap">
                    <div className="site-section">
                        <div className="container">
                        <CarritoProductos />
                            <div className="row">
                                
                                <SeguirComprando />
                                <Recuento />
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
        </React.Fragment>
            </CartProvider>

    );
}
export { Carrito }