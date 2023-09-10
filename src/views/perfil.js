import React, { useEffect } from "react";

import ReactGA from "react-ga4";
import Profile from "../components/Perfil/perfil";

function Perfil() {
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Sobre nosotros" });
    });

    return (
        <React.Fragment>

            <Profile />


        </React.Fragment>
    );
}

export { Perfil }