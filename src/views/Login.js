import React from "react";

//Importando componentes
import { Form } from "../components/Login/Form";

//Importando estilos CSS

import '../assets/css/login.css'

function Login() {
    return (
        <>
        <div className="site-wrap">
        <Form/>
        </div>
        

        </>
    )
}

export { Login }