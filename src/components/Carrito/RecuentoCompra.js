import React from "react";
import { Link } from "react-router-dom";

import { useCart } from '../../hooks/useCart';

import { Card, CardHeader, Typography, Button, Box, Grid, Divider } from '@mui/material';

function Recuento(){
    const { cart } = useCart();

    // Calcular el precio total sumando los precios de los productos en el carrito
    const totalPrice = cart.reduce((total, product) => {
      return total + product.PrecioUnitario * product.quantity;
    }, 0);

    return(
        <Grid container direction="column" alignItems="stretch">
            <Card sx={{ width: '100%', border: 'none', borderRadius: '16px', marginBottom: '25px', boxShadow: 'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;' }}>
                <CardHeader
                    title={
                        <Typography variant="h4" sx={{ fontFamily: 'Mukta', margin: '0px 0px 24px', padding: '24px 24px 0px', fontSize: '20px', fontWeight: 'bold' }}>
                            Resumen de la compra
                        </Typography>
                    }
                />
                <Box sx={{ padding: '24px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                        <Typography sx={{ color: 'rgb(99, 115, 129);', fontFamily: '"Public Sans", sans-serif;', fontWeight: '400'}} variant="body1">Subtotal</Typography>
                        <Typography sx={{ color: '#212B36', fontFamily: '"Public Sans", sans-serif;', fontWeight: '600'}} variant="body1">${totalPrice.toFixed(2)}</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                        <Typography sx={{ color: 'rgb(99, 115, 129);', fontFamily: '"Public Sans", sans-serif;', fontWeight: '400'}} variant="body1">Descuentos</Typography>
                        <Typography sx={{ color: '#212B36', fontFamily: '"Public Sans", sans-serif;', fontWeight: '600'}} variant="body1"> - </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                        <Typography sx={{ color: 'rgb(99, 115, 129);', fontFamily: '"Public Sans", sans-serif;', fontWeight: '400'}} variant="body1">Mano de obra</Typography>
                        <Typography sx={{ color: '#212B36', fontFamily: '"Public Sans", sans-serif;', fontWeight: '600' }} variant="body1">$0.0</Typography>
                    </Box>

                    <Divider sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }} />

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                        <Typography sx={{ color: '#212B36', fontFamily: '"Public Sans", sans-serif;', fontWeight: '600' }} variant="body1">Total</Typography>
                        <Typography sx={{ color: '#FF5630', fontFamily: '"Public Sans", sans serif;', fontWeight: '600' }} variant="body1">${totalPrice.toFixed(2)}</Typography>
                    </Box>
                </Box>
            </Card>
            <Grid item xs={12}>

                <Link to="/checkout">
                <Button sx={{ borderRadius: "8px", textTransform: "none", marginTop: '20px', fontFamily: "'Public Sans', sans serif", fontSize: "15px", fontWeight: "400"}} variant="contained" color="secondary" fullWidth size="large" >
                    Realizar pedido
                </Button>
                        </Link>

            </Grid>
        </Grid>
    );
}

export { Recuento }