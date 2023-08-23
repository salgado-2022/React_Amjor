import React from "react";
import { Link } from "react-router-dom";

import { useCart } from '../../hooks/useCart';

import { Card, CardHeader, Typography, Button, Box, Grid } from '@mui/material';

function Recuento(){
    const { cart } = useCart();

    // Calcular el precio total sumando los precios de los productos en el carrito
    const totalPrice = cart.reduce((total, product) => {
      return total + product.PrecioUnitario * product.quantity;
    }, 0);

    return(
        <Grid container direction="column" alignItems="stretch">
            <Card sx={{ border: '1px solid #FFFFF', borderRadius: '16px', width: '100%' }}>
                <CardHeader
                    title={
                        <Typography variant="h4" sx={{ fontFamily: 'Mukta', margin: '0px 0px 24px', padding: '24px 24px 0px', fontSize: '20px', fontWeight: 'bold' }}>
                            Resumen de la compra
                        </Typography>
                    }
                />
                <Box sx={{ padding: '24px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                        <Typography variant="body1">Subtotal</Typography>
                        <Typography variant="body1">${totalPrice.toFixed(2)}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                        <Typography variant="body1">Total</Typography>
                        <Typography variant="body1">${totalPrice.toFixed(2)}</Typography>
                    </Box>
                </Box>
            </Card>
            <Grid item xs={12}>
                <Button sx={{ borderRadius: "8px", textTransform: "none", marginTop: '20px', fontFamily: "'Public Sans', sans serif", fontSize: "15px", fontWeight: "400"}} variant="contained" color="secondary" fullWidth size="large" >
                    Realizar pedido
                </Button>
            </Grid>
        </Grid>
    );
}

export { Recuento }