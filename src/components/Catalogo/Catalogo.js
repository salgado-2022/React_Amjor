import React, { useEffect, useState } from "react";
import { useCart } from '../../hooks/useCart';
import { AnchetaDetalle } from "./AnchetaDetalle";


function ProductosCatalogo({ products }) {
    const { addToCart, removeFromCart, cart } = useCart()

    // Console log cart in catalog
    console.log("Cart in Catalog", cart)

    const checkProductInCart = product => {
        return cart.some(item => item.ID_Ancheta === product.ID_Ancheta)
    }

    const [selectedAnchetaID, setSelectedAnchetaID] = useState(null);
    const [modalShow, setModalShow] = React.useState(false);

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

    return (
        <>
            <div className="row mb-5">
                {products.map((product) => {
                    const isProductInCart = checkProductInCart(product)

                    return (
                        <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up" key={product.ID_Ancheta} >
                            <div className="block-4 card catalogue" onClick={() => { handleAnchetaClick(product.ID_Ancheta) }} style={{ borderRadius: "5%", boxShadow: "0 2px 15px rgba(0, 0, 0, 0.1)", border: "none", cursor: "pointer" }}>
                                <img src={`http://localhost:4000/anchetas/` + product.image} alt="" className="card-img-top img-fluid size-catalog block-4-image" />
                                <div className="card-body">
                                    <h3 className="card-title" style={{ color: "Black", fontSize: "16px", marginTop: "5px" }}>{product.NombreAncheta}</h3>
                                    <p className="card-text text-right font-weight-normal" style={{ color: "MediumSlateBlue", fontSize: "18px" }}>{formatPrice(product.PrecioUnitario)}</p>
                                    <button
                                        className="btn"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            isProductInCart
                                                ? removeFromCart(product)
                                                : addToCart({ ...product, quantity: 1 }); // Agregar producto con cantidad 1 al carrito
                                        }}
                                        style={{ backgroundColor: isProductInCart ? 'red' : 'MediumSlateBlue' }}
                                    >
                                        Añadir al carrito
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
        </>
    );
}

export { ProductosCatalogo };
