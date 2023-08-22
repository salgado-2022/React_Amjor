import React, { useEffect } from "react";
import { ThankYou } from "../components/Carrito/ThankYou";

import ReactGA from "react-ga4";

function CompraThankYou() {
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Pedido realizado" });
      });

    return (
        <>
            
                <ThankYou/>
        </>
    );
}

export{ CompraThankYou }