import { React, useContext, useState } from "react";
import { useCart } from '../../hooks/useCart'
import { CartProvider } from "../../context/cart";
import { useCounter } from '../../assets/js/btn';
import { Card, Typography, IconButton, Table, TableBody, TableCell, TableRow, TableHead, Button, Box, CardHeader } from '@mui/material';
import Iconify from '../Other/iconify';
import PersonalizarAncheta from "../Modals/PersonalizarAncheta";

import { useCartContext } from '../../context/contador'
import { CarritoVacio } from "./CarritoVacio";


function CarritoProductos() {
    const apiUrl = process.env.REACT_APP_AMJOR_API_URL;
    const deployApiUrl = process.env.REACT_APP_AMJOR_DEPLOY_API_URL;

    const { cart, addToCart, clearCart, removeFromCart } = useCart()

    const totalItems = cart.reduce((total, product) => total + product.quantity, 0);

    const [dialogOpen, setDialogOpen] = useState(false);

    const [selectedAncheta, setSelectedAncheta] = useState(null);


    const handleOpenDialog = (index) => {
        console.log("Opening dialog for product at index:", index);
        setDialogOpen(true);
        setSelectedAncheta(index); // Aquí accedes al índice del producto
    };


    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    const { count, setCount, increment, decrement } = useCounter();

    const handleChange = (e) => {
        setCount(e.target.value);
    };
    const { items, setItems } = useCartContext();

    const formatPrice = (price) => {
        return price.toLocaleString('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0,
        });
    };


    function CartItem({ image, PrecioUnitario, NombreAncheta, quantity, addToCart, removeFromCart, index }) {
        console.log("Rendering CartItem for product:", NombreAncheta);
        console.log("Received index:", index);

        const handleRemoveFromCart = () => {
            removeFromCart();
            setItems(items - 1);
        }

        return (
            <TableRow style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>
                <TableCell style={{ border: 'none' }}>
                    <img src={`${deployApiUrl}/anchetas/` + image} alt="Imagen" className="img-fluid" style={{ width: '80px', border: '0px solid #ddd', borderRadius: '10px' }} />
                    {/* <img src={`${apiUrl}/anchetas/` + image} alt="Imagen" className="img-fluid" style={{ width: '100px', border: '0px solid #ddd', borderRadius: '10px' }} /> */}
                </TableCell>
                <TableCell style={{ border: 'none' }}>
                    <Typography style={{ fontWeight: 600 }} variant="subtitle2" noWrap>
                        {NombreAncheta}
                    </Typography>
                </TableCell>
                <TableCell style={{ border: 'none' }}>{formatPrice(PrecioUnitario)}</TableCell>
                <TableCell style={{ border: 'none' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton onClick={decrement} size="small">
                            <Iconify icon={'eva:minus-outline'} />
                        </IconButton>
                        <Typography variant="body2" sx={{ mx: 1 }}>
                            {quantity}
                        </Typography>
                        <IconButton onClick={increment} size="small">
                            <Iconify icon={'eva:plus-outline'} />
                        </IconButton>
                    </Box>
                </TableCell>
                <TableCell style={{ border: 'none' }}>{formatPrice(PrecioUnitario * quantity)}</TableCell>
                <TableCell style={{ border: 'none' }}>

                    <IconButton size="large" color="inherit" onClick={() => handleOpenDialog(index)}>
                        <Iconify icon={'fa-solid:edit'} />
                    </IconButton>

                    <IconButton size="large" color="inherit" onClick={handleRemoveFromCart}>
                        <Iconify icon={'eva:trash-2-outline'} />

                    </IconButton>

                </TableCell>
            </TableRow>
        )
    }

    return (
        <>

            {totalItems > 0 ? (
                <>
                    <Card sx={{ width: '100%', border: 'none', borderRadius: '16px', marginBottom: '25px', boxShadow: 'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;' }}>
                        <CardHeader
                            title={
                                <Typography variant="h4" sx={{ fontFamily: 'Mukta', margin: '0px 0px 24px', padding: '24px 24px 0px', fontSize: '20px', fontWeight: '700' }}>
                                    Tu carrito <Typography component="span" variant="h4" sx={{ fontWeight: '400', fontFamily: 'Mukta', fontSize: '18px', color: 'rgb(99, 115, 129)' }}>
                                        ({totalItems} {totalItems === 1 ? 'producto' : 'productos'})
                                    </Typography>
                                </Typography>
                            }
                        />
                        <Table sx={{ width: '100%', borderSpacing: '10px 0' }}>
                            <TableHead sx={{ padding: '16px', backgroundColor: 'rgb(244, 246, 248)' }}>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 600, borderBottom: 'none', fontSize: '14px', color: 'rgb(99, 115, 129)', fontFamily: 'Public Sans, sans-serif' }}>Producto</TableCell>
                                    <TableCell sx={{ fontWeight: 600, borderBottom: 'none', fontSize: '14px', color: 'rgb(99, 115, 129)', fontFamily: 'Public Sans, sans-serif' }}></TableCell>
                                    <TableCell sx={{ fontWeight: 600, borderBottom: 'none', fontSize: '14px', color: 'rgb(99, 115, 129)', fontFamily: 'Public Sans, sans-serif' }}>Precio</TableCell>
                                    <TableCell sx={{ fontWeight: 600, borderBottom: 'none', fontSize: '14px', color: 'rgb(99, 115, 129)', fontFamily: 'Public Sans, sans-serif' }}>Cantidad</TableCell>
                                    <TableCell sx={{ fontWeight: 600, borderBottom: 'none', fontSize: '14px', color: 'rgb(99, 115, 129)', fontFamily: 'Public Sans, sans-serif' }}>Total</TableCell>
                                    <TableCell sx={{ fontWeight: 600, borderBottom: 'none', fontSize: '14px', color: 'rgb(99, 115, 129)', fontFamily: 'Public Sans, sans-serif' }}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cart.map((product, index) => (
                                    <CartItem
                                        key={product.ID_Ancheta}
                                        handleOpenDialog={handleOpenDialog} // Pasamos la función
                                        index={index}
                                        addToCart={() => addToCart(product)}
                                        removeFromCart={() => removeFromCart(product)}
                                        {...product}
                                    />
                                ))}
                            </TableBody>
                        </Table>
                    </Card>
                </>
            ) : (
                <CarritoVacio />
            )
            }


            <PersonalizarAncheta open={dialogOpen} onClose={handleCloseDialog} selectedAnchetaIndex={selectedAncheta} />
        </>
    );
}

export { CarritoProductos }
