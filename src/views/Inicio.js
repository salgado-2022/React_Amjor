import React, { useEffect } from "react";

//Componentes
import {Footer} from '../components/Footer/footer';
import { Content } from '../components/Content/Content';
import { Productos } from '../components/Content/Productos';
import {Promociones} from '../components/Content/Promociones';

// Estilos css

import ReactGA from "react-ga4";

function Inicio() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Inicio" });
  });

  return (
    <React.Fragment>
      <div className="site-wrap">
        <Content/>
        <Productos/>
        <Promociones/>
        <Footer/>
      </div>

    </React.Fragment>
  );
}

export default Inicio;
