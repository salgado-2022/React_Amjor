import { React, useContext } from "react";
import { useCart } from '../../hooks/useCart'
import { CartProvider } from "../../context/cart";
import { useCounter } from '../../assets/js/btn';
import { Card, Typography, IconButton, Table, TableBody, TableCell, TableRow, TableHead, Button, Box, CardHeader, Icon, CardContent } from '@mui/material';
import Iconify from '../Other/iconify';


import { useCartContext } from '../../context/contador'


function CarritoVacio() {


    const { cart, addToCart, clearCart, removeFromCart } = useCart()


    return (
        <>
            <Card sx={{ width: '100%', border: 'none', borderRadius: '16px', marginBottom: '25px', boxShadow: 'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;' }}>
                {/* <CardHeader
                    title={
                        <Typography variant="h4" sx={{ fontFamily: 'Mukta', margin: '0px 0px 24px', padding: '24px 24px 0px', fontSize: '20px', fontWeight: '700' }}>
                            Tu carrito <Typography component="span" variant="h4" sx={{ fontWeight: '400', fontFamily: 'Mukta', fontSize: '18px', color: 'rgb(99, 115, 129)' }}>
                                ({totalItems} {totalItems === 1 ? 'producto' : 'productos'})
                            </Typography>
                        </Typography>
                    }
                /> */}
                <CardContent>
                <Box sx={{ margin: 'auto', textAlign: 'center', marginTop: '70px', marginBottom: '70px'}}>

                        <Iconify color="rgb(99, 115, 129);" icon={'ic:outline-shopping-cart'} height="none" style={{ width: '100px', height: '100px' }}/>

                    <Typography variant="h4" sx={{ color: 'rgb(99, 115, 129);', fontFamily: 'Mukta',fontSize: '20px', fontWeight: '700' }}>
                        Carrito vacío 
                        <Typography variant="h6" sx={{ fontWeight: '400', fontFamily: 'Mukta', fontSize: '15px', color: 'rgb(99, 115, 129)' }}>
                            Parece que no tienes ningún producto en el carrito.
                        </Typography>
                    </Typography>

                </Box>
                </CardContent>




            </Card>
        </>
    );
}

export { CarritoVacio }
