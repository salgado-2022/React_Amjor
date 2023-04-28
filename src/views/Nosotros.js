import React from "react";

//Importación de componentes
import { Somos } from '../components/AboutUs/somos'
import { Footer } from "../components/Footer/footer";
import { Ceo } from "../components/AboutUs/ceo";

function Nosotros() {
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