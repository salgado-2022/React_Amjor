import React, { useEffect } from "react";

import ReactGA from "react-ga4";
import SalesPage from "../components/ventas/tabla";

function Shops() {
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Sobre nosotros" });
    });

    return (
        <React.Fragment>

            <SalesPage />


        </React.Fragment>
    );
}

export { Shops }