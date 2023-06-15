import React from "react";
import { Informacion } from "../components/Carrito/CheckoutInformacion";
import { CarritoPedido } from "../components/Carrito/CarritoPedido";

function Checkout() {
    return (
        <>
            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <Informacion/>
                        <CarritoPedido/>
                    </div>
                </div>
            </div>
        </>
    );
}

export{ Checkout }