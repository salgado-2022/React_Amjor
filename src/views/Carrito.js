import React, { useEffect } from "react";
import { Recuento } from "../components/Carrito/RecuentoCompra";
import { Footer } from "../components/Footer/footer";
import { SeguirComprando } from "../components/Carrito/SeguirComprando";
import { CarritoProductos } from "../components/Carrito/CarritoProductos2 - dash";
import { CartProvider } from '../context/cart';

import ReactGA from "react-ga4";

import { Grid, Box, Container } from '@mui/material';

function Carrito() {
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Carrito" });
    });

    return (
        <CartProvider>
            <Container sx={{ marginTop: "50px"}} >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>

                        <CarritoProductos />
                    
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Recuento />
                    </Grid>
                </Grid>

                <SeguirComprando />
                <Footer />

            </Container>
        </CartProvider>
    );
}
export { Carrito }