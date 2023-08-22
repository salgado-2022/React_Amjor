import React, { useEffect } from "react";
import {FormRegister} from "../components/Register/register"

import ReactGA from "react-ga4";

function Register(){
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Register" });
      });

    return(
        <>
        <FormRegister/>
        </>
    );
}

export {Register}