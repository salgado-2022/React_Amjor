import {React, useContext} from "react";
import { useCart } from '../../hooks/useCart' 
import { CartProvider } from "../../context/cart";
import { useCounter } from '../../assets/js/btn';
import { Card, Typography, IconButton, Table, TableBody, TableCell, TableRow, TableHead, Button, Box, CardHeader } from '@mui/material';
import Iconify from '../Other/iconify';

function CarritoProductos() {
    const apiUrl = process.env.REACT_APP_AMJOR_API_URL;
    
    const { cart, addToCart, clearCart } = useCart()

    const { count, setCount, increment, decrement } = useCounter();

    const handleChange = (e) => {
        setCount(e.target.value);
    };

    function CartItem( { image, PrecioUnitario, NombreAncheta, quantity, addToCart, removeFromCart } ) {
        return (
            <TableRow>
                <TableCell>
                    <img src={`${apiUrl}/anchetas/` + image} alt="Imagen" className="img-fluid" />
                </TableCell>
                <TableCell>
                    <Typography variant="subtitle2" noWrap>
                        {NombreAncheta}
                    </Typography>
                </TableCell>
                <TableCell>${PrecioUnitario}</TableCell>
                <TableCell>
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
                <TableCell>${PrecioUnitario * quantity}</TableCell>
                <TableCell>
                    <IconButton
                        size="large"
                        color="inherit"
                        onClick={removeFromCart}
                    >
                        <Iconify icon={'eva:trash-2-outline'} />
                    </IconButton>
                </TableCell>
            </TableRow>
        )
    }

    return (
      <>
          <Card sx={{ border: '1px solid #FFFFF', borderRadius: '16px' }}>
              <CardHeader
                  title={
                      <Typography variant="h4" sx={{ fontFamily: 'Mukta', margin: '0px 0px 24px', padding: '24px 24px 0px', fontSize: '20px', fontWeight: 'bold' }}>
                          Carrito de compras
                      </Typography>
                  }
              />
              <Table sx={{ maxWidth: 700 }}>
              <TableHead sx={{ backgroundColor: 'rgb(244, 246, 248)' }}>
    <TableRow>
        <TableCell sx={{ borderBottom: 'none', fontSize: '14px', color: 'rgb(99, 115, 129)', fontFamily: 'Public Sans, sans-serif' }}>Imagen</TableCell>
        <TableCell sx={{ borderBottom: 'none', fontSize: '14px', color: 'rgb(99, 115, 129)', fontFamily: 'Public Sans, sans-serif' }}>Nombre del producto</TableCell>
        <TableCell sx={{ borderBottom: 'none', fontSize: '14px', color: 'rgb(99, 115, 129)', fontFamily: 'Public Sans, sans-serif' }}>Precio</TableCell>
        <TableCell sx={{ borderBottom: 'none', fontSize: '14px', color: 'rgb(99, 115, 129)', fontFamily: 'Public Sans, sans-serif' }}>Cantidad</TableCell>
        <TableCell sx={{ borderBottom: 'none', fontSize: '14px', color: 'rgb(99, 115, 129)', fontFamily: 'Public Sans, sans-serif' }}>Total</TableCell>
        <TableCell sx={{ borderBottom: 'none', fontSize: '14px', color: 'rgb(99, 115, 129)', fontFamily: 'Public Sans, sans-serif'}}>Eliminar</TableCell>
    </TableRow>
</TableHead>
    <TableBody>
        {cart.map(product => (
            <CartItem key={product.ID_Ancheta}
            addToCart = { () => addToCart(product)} 
            {...product} />
        ))}
    </TableBody>
</Table>
              <Button variant="contained" color="primary" onClick={clearCart}>
                  Limpiar carrito
              </Button>
          </Card>
      </>
  );
}

export { CarritoProductos }