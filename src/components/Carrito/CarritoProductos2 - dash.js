import { React, useContext } from "react";
import { useCart } from '../../hooks/useCart'
import { CartProvider } from "../../context/cart";
import { useCounter } from '../../assets/js/btn';
import { Card, Typography, IconButton, Table, TableBody, TableCell, TableRow, TableHead, Button, Box, CardHeader } from '@mui/material';
import Iconify from '../Other/iconify';

function CarritoProductos() {
    const apiUrl = process.env.REACT_APP_AMJOR_API_URL;

    const { cart, addToCart, clearCart, removeFromCart } = useCart()

    const { count, setCount, increment, decrement } = useCounter();

    const handleChange = (e) => {
        setCount(e.target.value);
    };

    function CartItem({ image, PrecioUnitario, NombreAncheta, quantity, addToCart, removeFromCart }) {

        const handleRemoveFromCart = () => {
            removeFromCart();
        }

        return (
            <TableRow style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>
                <TableCell style={{ border: 'none' }}>
                    <img src={`${apiUrl}/anchetas/` + image} alt="Imagen" className="img-fluid" style={{ border: '0px solid #ddd', borderRadius: '10px' }} />
                </TableCell>
                <TableCell style={{ border: 'none' }}>
                    <Typography style={{ fontWeight: 600}} variant="subtitle2" noWrap>
                        {NombreAncheta}
                    </Typography>
                </TableCell>
                <TableCell style={{ border: 'none' }}>${PrecioUnitario}</TableCell>
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
                <TableCell style={{ border: 'none' }}>${PrecioUnitario * quantity}</TableCell>
                <TableCell style={{ border: 'none' }}>
                    <IconButton size="large" color="inherit" onClick={handleRemoveFromCart}>
                        <Iconify icon={'eva:trash-2-outline'} />
                    </IconButton>
                </TableCell>
            </TableRow>
        )
    }

    return (
        <>
            <Card sx={{ border: '1px solid #FFFFF', borderRadius: '16px', width: 'fit-content', marginBottom: '20px' }}>
                <CardHeader
                    title={
                        <Typography variant="h4" sx={{ fontFamily: 'Mukta', margin: '0px 0px 24px', padding: '24px 24px 0px', fontSize: '20px', fontWeight: 'bold' }}>
                            Tu carrito
                        </Typography>
                    }
                />
                <Table sx={{ maxWidth: 700, borderSpacing: '10px 0' }}>
                    <TableHead sx={{ backgroundColor: 'rgb(244, 246, 248)' }}>
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
                        {cart.map(product => (
                            <CartItem
                                key={product.ID_Ancheta}
                                addToCart={() => addToCart(product)}
                                removeFromCart={() => removeFromCart(product)} // Asegúrate de pasar la función
                                {...product}
                            />
                        ))}
                    </TableBody>
                </Table>
            </Card>
        </>
    );
}

export { CarritoProductos }