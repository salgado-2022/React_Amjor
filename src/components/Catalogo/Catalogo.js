import React, { useState } from "react";
import { useCart } from '../../hooks/useCart';
import { AnchetaDetalle } from "./AnchetaDetalle";
import axios from "axios";

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


function ProductosCatalogo({ products }) {
    const apiUrl = process.env.REACT_APP_AMJOR_API_URL;
    
    const { addToCart, removeFromCart, cart } = useCart()

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');


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

    //console.log(data)



    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setSnackbarOpen(false);
      };
    
      const handleAddToCart = (product) => {
        if (checkProductInCart(product)) {
          removeFromCart(product);
        } else {
          axios
            .get(`${apiUrl}/api/admin/anchetas/insancheta/${product.ID_Ancheta}`)
            .then((response) => {
              const insumos = response.data;
    
              addToCart({
                ...product,
                insumos: insumos,
              });
    
              setSnackbarMessage('Producto añadido al carrito');
              setSnackbarOpen(true); // Mostrar la Snackbar

            })
            .catch((error) => {
              console.error('Error al obtener insumos:', error);
            });
        }
      };

    return (
        <>
            <div className="row mb-5">
                {products.map((product) => {
                    const isProductInCart = checkProductInCart(product)

                    return (
                        <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up" key={product.ID_Ancheta} >
                            <div className="block-4 card catalogue" onClick={() => { handleAnchetaClick(product.ID_Ancheta) }} style={{ borderRadius: "5%", boxShadow: "0 2px 15px rgba(0, 0, 0, 0.1)", border: "none", cursor: "pointer" }}>
                                <img src={`${apiUrl}/anchetas/` + product.image} alt="" className="card-img-top img-fluid size-catalog block-4-image" />
                                <div className="card-body">
                                    <h3 className="card-title" style={{ color: "Black", fontSize: "16px", marginTop: "5px" }}>{product.NombreAncheta}</h3>
                                    <p className="card-text text-right font-weight-normal" style={{ color: "MediumSlateBlue", fontSize: "18px" }}>{formatPrice(product.PrecioUnitario)}</p>
                                    
                                    <button
                                        className="btn"
                                        onClick={(e) => {
                                        e.stopPropagation();
                                        handleAddToCart(product);
                                        }}
                                        style={{
                                        backgroundColor: isProductInCart
                                            ? 'red'
                                            : 'MediumSlateBlue',
                                        }}
                                    >
                                        {isProductInCart ? 'Eliminar del carrito' : 'Añadir al carrito'}
                                    </button>
                                    
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <AnchetaDetalle
                show={modalShow}
                onHide={() => setModalShow(false)}
                selectedAnchetaID={selectedAnchetaID}
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
