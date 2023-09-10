import React, { useState, useEffect } from "react";
import { useCart } from '../../hooks/useCart';
import { AnchetaDetalle } from "./AnchetaDetalle";
import axios from "axios";

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Toaster, toast } from 'sonner';

import { useCartContext } from '../../context/contador';
import { useLocation } from 'react-router-dom';

import { IconButton } from '@mui/material';
import Iconify from '../Other/iconify';


function ProductosCatalogo({ products, dataLoaded }) {
    const apiUrl = process.env.REACT_APP_AMJOR_API_URL;
    const deployApiUrl = process.env.REACT_APP_AMJOR_DEPLOY_API_URL;

    const { addToCart, removeFromCart, cart } = useCart()

    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const { items, setItems } = useCartContext();

    const location = useLocation();
    const id = location.state?.idAncheta;

    const checkProductInCart = product => {
        return cart.some(item => item.ID_Ancheta === product.ID_Ancheta)
    }

    const [selectedAnchetaID, setSelectedAnchetaID] = useState(null);
    const [modalShow, setModalShow] = useState(false);

    const formatPrice = (price) => {
        return price.toLocaleString('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0,
        });
    };

    const handleAnchetaClick = (anchetaID) => {
        setSelectedAnchetaID(anchetaID);
        setModalShow(true);
    };

    useEffect(() => {
        if (id) {
            setTimeout(() => {
                handleAnchetaClick(id);
            }, 1000)
        }
    }, [id]);

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    const handleAddToCart = (product) => {
        if (checkProductInCart(product)) {
            axios
            .get(`${apiUrl}/api/admin/anchetas/insancheta/${product.ID_Ancheta}`)
            .then((response) => {
                const insumos = response.data;

                addToCart({
                    ...product,
                    insumos: insumos,
                });

                //setSnackbarMessage('Producto añadido al carrito');

                toast.success('Producto agregado', {
                    description: 'El producto fue agregado al carrito correctamente.'
                });

                //setSnackbarOpen(true); // Mostrar la Snackbar
                setItems(items + 1);

                // Almacenar el valor en localStorage
                localStorage.setItem('cartItemCount', items + 1);

            })
            .catch((error) => {
                console.error('Error al obtener insumos:', error);
            });
            // removeFromCart(product);
            // setItems(items - 1);
            // // Actualizar el valor en localStorage
            // localStorage.setItem('cartItemCount', items - 1);
        } else {
            axios
                .get(`${apiUrl}/api/admin/anchetas/insancheta/${product.ID_Ancheta}`)
                .then((response) => {
                    const insumos = response.data;

                    addToCart({
                        ...product,
                        insumos: insumos,
                    });

                    //setSnackbarMessage('Producto añadido al carrito');

                    toast.success('Producto agregado', {
                        description: 'El producto fue agregado al carrito correctamente.'
                    });

                    //setSnackbarOpen(true); // Mostrar la Snackbar
                    setItems(items + 1);

                    // Almacenar el valor en localStorage
                    localStorage.setItem('cartItemCount', items + 1);

                })
                .catch((error) => {
                    console.error('Error al obtener insumos:', error);
                });
        }
    };

    return (
        <>
            <Toaster richColors closeButton duration={3000}/>
            {dataLoaded ? (
                products.length === 0 ? (
                <div className="text-center">
                    <h2 style={{ color: "MediumSlateBlue"}}>No Encontrado</h2>
                    <p>Por el momento no hay productos disponibles con el precio o motivo que usted desea.</p>
                </div>
            ) : (
                <div className="row mb-5">
                {products.filter(product => product.Estado !== "Agotado").map((product) => {
                    const isProductInCart = checkProductInCart(product)
                    return (
                        <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up" key={product.ID_Ancheta} >
                            <div className="block-4 card catalogue" onClick={() => { handleAnchetaClick(product.ID_Ancheta) }} style={{ borderRadius: "5%", boxShadow: "0 2px 15px rgba(0, 0, 0, 0.1)", border: "none", cursor: "pointer" }}>
                                <img src={`${deployApiUrl}/anchetas/` + product.image} alt="" className="card-img-top img-fluid size-catalog block-4-image" />
                                <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <h3 className="card-title text-left" style={{ color: "Black", fontSize: "16px", marginTop: "5px" }}>{product.NombreAncheta}</h3>
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <div>
                                            <p className="card-text text-left font-weight-normal" style={{ color: "MediumSlateBlue", fontSize: "18px", alignSelf: 'center' }}>{formatPrice(product.PrecioUnitario)}</p>
                                        </div>
                                        <IconButton
                                            fontSize="large"
                                            size="large"
                                            height="none"
                                            style={{
                                                fontSize: '20px',
                                                width: '50px',
                                                height: '50px'
                                            }}
                                            color="secondary" onClick={(e) => { e.stopPropagation(); handleAddToCart(product) }}>
                                            <Iconify icon={'bxs:cart-add'} style={{ width: '40px', height: '40px' }} />
                                        </IconButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                </div>
            )  
            ) : null}       
            <AnchetaDetalle
                show={modalShow}
                onHide={() => setModalShow(false)}
                selectedAnchetaID={selectedAnchetaID}
                handleAddToCart={handleAddToCart}
            />
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
            >
                <Alert onClose={handleSnackbarClose} severity="success">
                    Producto añadido al carrito
                </Alert>
            </Snackbar>
        </>
    );
}

export { ProductosCatalogo };
