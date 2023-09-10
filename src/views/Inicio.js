import React, { useEffect, useState } from "react";
import axios from "axios";
//Componentes
import {Footer} from '../components/Footer/footer';
import { Content } from '../components/Content/Content';
import { Productos } from '../components/Content/Productos';
import { Reciente } from '../components/Content/Reciente';

// Estilos css

import ReactGA from "react-ga4";

function Inicio() {

  const apiUrl = process.env.REACT_APP_AMJOR_API_URL;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Inicio" });
  });

  useEffect(() => {
    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${apiUrl}/api/admin/anchetas`);
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };
    fetchProducts();
}, [apiUrl]);

  return (
    <React.Fragment>
      <div className="site-wrap">
        <Content/>
        <Productos products={products} />
        <Reciente products={products}/>
        <Footer/>
      </div>

    </React.Fragment>
  );
}

export default Inicio;
