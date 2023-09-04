import React, { useState } from "react";
import { useContext } from 'react';
import { FormContext } from '../../context/formContext';
import { Link } from "react-router-dom";
import { useCart } from '../../hooks/useCart';
import axios from 'axios'
import {
    Grid, Card, CardHeader, Divider,
    Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box
} from '@mui/material';

import { useCartContext } from '../../context/contador'
//import { handleBlur } from './CheckoutInformacion'



function CarritoPedido({ formSearchValues }) {
    const apiUrl = process.env.REACT_APP_AMJOR_API_URL;

    const { formValues, errors } = useContext(FormContext);
    
    const { items, setItems } = useCartContext();
    //const [errors, setErrors] = useState({});

    const { clearCart } = useCart();


    //   const [pedidoData, setPedidoData] = useState({
    //       ID_Cliente: 1, // Reemplaza con el ID real del cliente
    //       Direccion_Entrega: "Dirección de prueba: Cra 60A #70A - 80 Int 2106",
    //       Fecha_Entrega: "2023-08-15", // Fecha de entrega en formato YYYY-MM-DD
    //       Precio_Total: calcularPrecioTotal(storedCart), // Implementa una función para calcular el precio total del carrito
    //       Anchetas: storedCart.map(producto => ({
    //           ID_Ancheta: producto.ID_Ancheta,
    //           Cantidad: producto.quantity,
    //           Insumos: producto.insumos.map(insumo => ({
    //               ID_Insumo: insumo.ID_Insumos_Ancheta,
    //               Cantidad: insumo.Cantidad
    //           }))
    //       }))
    //   });

    function calcularPrecioTotal(storedCart) {
        let total = 0;

        storedCart.forEach(producto => {
            total += producto.PrecioUnitario * producto.quantity; // Sumar el precio del producto
        });

        return total;
    }

    const storedCart = JSON.parse(window.localStorage.getItem('cart')) || [];
    const { cart } = useCart();

    const pedidoData = {
        ID_Cliente: formSearchValues.length > 0 ? formSearchValues[0].ID_Cliente : null,
        ...formValues,
        Pais: "Colombia",
        Precio_Total: calcularPrecioTotal(storedCart), // Función para calcular el precio total del carrito
        Anchetas: cart.map(producto => ({
            ID_Ancheta: producto.ID_Ancheta,
            Cantidad: producto.quantity,
            Insumos: producto.insumos ? producto.insumos.map(insumo => ({
                ID_Insumo: insumo.ID_Insumo,
                Cantidad: insumo.Cantidad
            })) : []
        }))
    };


    const enviarPedido = () => {
        if (Object.keys(errors).length === 0) {
            // No hay errores de validación, puedes enviar los datos al servidor
            console.log("Información del pedido:", pedidoData);

            // Realizar la solicitud HTTP POST al servidor
            axios
                .post(`${apiUrl}/api/enviarPedido`, pedidoData)
                .then((response) => {
                    console.log("Pedido enviado con éxito:", response.data);
                    console.log(storedCart);
                    clearCart();
                    setItems(0);
                    // Actualizar el valor del contador de items en carrito en localStorage
                    localStorage.setItem('cartItemCount', 0);
                })
                .catch((error) => {
                    console.error("Error al enviar el pedido:", error);
                });
        } else {
            // Si hay errores de validación, puedes mostrarlos al usuario o realizar alguna acción adicional
            console.log("El formulario contiene errores de validación:", errors);
        }
    };


    return (
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
                        <Typography sx={{ color: 'rgb(99, 115, 129);', fontFamily: '"Public Sans", sans-serif;', fontWeight: '400' }} variant="body1">Subtotal</Typography>
                        <Typography sx={{ color: '#212B36', fontFamily: '"Public Sans", sans-serif;', fontWeight: '600' }} variant="body1">$1</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                        <Typography sx={{ color: 'rgb(99, 115, 129);', fontFamily: '"Public Sans", sans-serif;', fontWeight: '400' }} variant="body1">Descuentos</Typography>
                        <Typography sx={{ color: '#212B36', fontFamily: '"Public Sans", sans-serif;', fontWeight: '600' }} variant="body1"> - </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                        <Typography sx={{ color: 'rgb(99, 115, 129);', fontFamily: '"Public Sans", sans-serif;', fontWeight: '400' }} variant="body1">Mano de obra</Typography>
                        <Typography sx={{ color: '#212B36', fontFamily: '"Public Sans", sans-serif;', fontWeight: '600' }} variant="body1">$0.0</Typography>
                    </Box>

                    <Divider sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }} />

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                        <Typography sx={{ color: '#212B36', fontFamily: '"Public Sans", sans-serif;', fontWeight: '600' }} variant="body1">Total</Typography>
                        <Typography sx={{ color: '#FF5630', fontFamily: '"Public Sans", sans serif;', fontWeight: '600' }} variant="body1">1</Typography>
                    </Box>
                </Box>
            </Card>
            <Grid item xs={12}>

                <Link to="/checkout">
                    <Button
                        type="submit"
                        sx={{ borderRadius: "8px", textTransform: "none", marginTop: '20px', fontFamily: "'Public Sans', sans serif", fontSize: "15px", fontWeight: "400" }}
                        variant="contained"
                        color="secondary"
                        fullWidth
                        size="large"
                        onClick={enviarPedido} // Agrega esta línea
                    >
                        Realizar pedido
                    </Button>
                </Link>

            </Grid>
        </Grid>
    );
}

export { CarritoPedido }