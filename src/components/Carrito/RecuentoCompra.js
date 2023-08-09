import React from "react";
import { Link } from "react-router-dom";

import { useCart } from '../../hooks/useCart';

function Recuento(){
    const { cart } = useCart();

    // Calcular el precio total sumando los precios de los productos en el carrito
    const totalPrice = cart.reduce((total, product) => {
      return total + product.PrecioUnitario * product.quantity;
    }, 0);

    return(
        <div className="col-md-6 pl-5">
        <div className="row justify-content-end">
            <div className="col-md-7">
                <div className="row">
                    <div className="col-md-12 text-right border-bottom mb-5">
                        <h3 className="text-black h4 text-uppercase">TOTALES</h3>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <span className="text-black">Subtotal</span>
                    </div>
                    <div className="col-md-6 text-right">
                        <strong className="text-black">${totalPrice.toFixed(2)}</strong>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-md-6">
                        <span className="text-black">Total</span>
                    </div>
                    <div className="col-md-6 text-right">
                        <strong className="text-black">${totalPrice.toFixed(2)}</strong>
                    </div>
                </div>

                <div className="row">
                    <Link exact to="/checkout"> 
                    <div className="col-md-12">
                        <button className="btn btn-primary btn-lg py-3 btn-block">Realizar pedido</button>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    );
}

export {Recuento}