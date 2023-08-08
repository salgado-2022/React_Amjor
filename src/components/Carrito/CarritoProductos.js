import {React, useContext} from "react";
import { useCart } from '../../hooks/useCart' 
import { CartProvider } from "../../context/cart";

//Importación de componentes

import { ModalEditarCarrito } from "../Modals/CarritoEditar";
import { useCounter } from '../../assets/js/btn';


function CarritoProductos() {
    const { cart, addToCart, clearCart } = useCart()
    // Console log del cart
    console.log("Cart:", cart)

    const { count, setCount, increment, decrement } = useCounter();


    // const handleChange = (e) => {
    //     setCount(e.target.value);
    // };

    function CartItem( { image, PrecioUnitario, NombreAncheta, quantity, addToCart, removeFromCart } ) {
        const handleChange = (e) => {
            const newQuantity = parseInt(e.target.value, 10);
            if (newQuantity >= 1) {
                addToCart({ ...product, quantity: newQuantity });
            }
        };
        return (
            <tr>
                                    <td className="product-thumbnail">
                                        <img src={`http://localhost:4000/anchetas/` + image} alt="Imagen" className="img-fluid" />
                                    </td>
                                    <td className="product-name">
                                        <h2 className="h5 text-black">{NombreAncheta}</h2>
                                    </td>
                                    <td>${PrecioUnitario}</td>
                                    <td>
                                        <div className="input-group mb-3 ml-4" style={{ maxWidth: '120px' }}>
                                            <div className="input-group-prepend">
                                                <button className="btn btn-outline-primary" onClick={removeFromCart}
                                                    type="button">&minus;</button>
                                            </div>
                                            <input type="text" className="form-control text-center" value={quantity}
                                                onChange={handleChange} min="1" placeholder="" aria-label="Example text with button addon"
                                                aria-describedby="button-addon1" />
                                            <div className="input-group-append">
                                                <button className="btn btn-outline-primary " onClick={addToCart}
                                                    type="button">&#43;</button>
                                            </div>
                                        </div>
                                    </td>
                                    <td>${PrecioUnitario}</td>
                                    <td><button type="button" className="btn btn-primary icon-edit" data-bs-toggle="modal"
                                        data-bs-target="#modalInsumos" ></button></td>
                                    <td><button type="button" className="btn btn-primary icon-trash"
                                    ></button></td>
                                </tr>

        )
    }

    return (
        <>
            <div className="row mb-5">
                <form className="col-md-12">
                    <div className="site-blocks-table">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th className="product-thumbnail"></th>
                                    <th className="product-name">Producto</th>
                                    <th className="product-price">Precio</th>
                                    <th className="product-quantity">Cantidad</th>
                                    <th className="product-total">Total</th>
                                    <th className="product-modify">Modificar</th>
                                    <th className="product-remove">Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(product => (
                                    <CartItem key={product.ID_Ancheta}
                                    addToCart = { () => addToCart(product)} 
                                    {...product} />
                                ))}
                                


                            </tbody>
                        </table>
                    </div>
                </form>
            </div>
            <ModalEditarCarrito />
        </>
    );
}

export { CarritoProductos }

// Botón de prueba para limpiar carrito.
// <td><button type="button" onlick={clearCart} className="btn btn-warning icon-trash"
// >Limpiar carrito</button></td>