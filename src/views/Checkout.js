import React, { useEffect, useState, useContext } from 'react';
import { FormContext, FormProvider, useFormContext } from '../context/formContext';
//import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

import { Informacion } from "../components/Carrito/CheckoutInformacion";
import { CarritoPedido } from "../components/Carrito/CarritoCheckout";


import ReactGA from "react-ga4";
import { CartProvider } from "../context/cart";
import { Grid, Box, Container } from "@mui/material";
import axios from 'axios'



function Checkout() {
    const apiUrl = process.env.REACT_APP_AMJOR_API_URL;
    const rutaCheckout = window.location.pathname;

    const [ formSearchValues, setFormSearchValues ] = useState([]);
    const { setCheckoutUrl } = useFormContext();


    const navigate = useNavigate();
    const [user, setUser] = useState(null);


    useEffect(() => {
        setCheckoutUrl(rutaCheckout);

        const token = Cookies.get('token');
        if (!token) {
            navigate('/login');
        } else {
            const decodedToken = jwt_decode(token);
            setUser(decodedToken.userId);

        }

        if (user) {
            axios.get(`${apiUrl}/api/checkout/searchuserinfo/${user}`)
                .then(res => {
                    setFormSearchValues(res.data);
                    //console.log(res.data);
                })
                .catch(error => {
                    console.error("Error al obtener la información del usuario:", error);
                });
        }
    }, [user, navigate]);

    return (
        <>
        <CartProvider>
            <Container sx={{ marginTop: "50px"}} >
                <Grid container spacing={2}>
                    <Grid item xs>
                    <Informacion formSearchValues={formSearchValues} />

                    </Grid>
                    <Grid item xs={12} md={4}>
                    <CarritoPedido/>
                    </Grid>
                </Grid>

            </Container>
        </CartProvider>

        </>
    );
}

export{ Checkout }