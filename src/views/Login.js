import React, { useEffect } from "react";

//Importando componentes
import { Form } from "../components/Login/Form";

//Importando estilos CSS

import '../assets/css/login.css'

import ReactGA from "react-ga4";

function Login() {
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Inicia sesión" });
      });

    return (
        <>
        <div className="site-wrap">
        <Form/>
        </div>
        

        </>
    )
}

export { Login }