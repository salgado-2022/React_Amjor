import React, { useEffect } from "react";

//Importación de componentes
import { Somos } from '../components/AboutUs/somos'
import { Footer } from "../components/Footer/footer";
import { Ceo } from "../components/AboutUs/ceo";

import ReactGA from "react-ga4";

function Nosotros() {
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Sobre nosotros" });
      });

    return (
        <React.Fragment>
            <div className="site-wrap">
                <Somos />
                <Ceo/>
                <Footer />
            </div>
        </React.Fragment>
    );
}

export { Nosotros }