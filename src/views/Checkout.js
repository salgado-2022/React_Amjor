import React, { useEffect } from "react";
import { Informacion } from "../components/Carrito/CheckoutInformacion";
import { CarritoPedido } from "../components/Carrito/CarritoPedido";

import ReactGA from "react-ga4";

function Checkout() {
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Checkout" });
      });

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