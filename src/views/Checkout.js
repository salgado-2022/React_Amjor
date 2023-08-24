import React, { useEffect } from "react";
import { Informacion } from "../components/Carrito/CheckoutInformacion";
import { CarritoPedido } from "../components/Carrito/CarritoCheckout";

import ReactGA from "react-ga4";
import { CartProvider } from "../context/cart";
import { Grid, Box, Container } from "@mui/material";

function Checkout() {
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Checkout" });
      });

    return (
        <>
        <CartProvider>
            <Container sx={{ marginTop: "50px"}} >
                <Grid container spacing={2}>
                    <Grid item xs>
                    <Informacion/>

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