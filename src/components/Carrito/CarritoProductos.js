import React from "react";

//Importación de imagenes
import ancheta1 from '../../assets/img/ancheta1.jpg';
import ancheta2 from '../../assets/img/ancheta2.jpg';

//Importación de componentes

import { ModalEditarCarrito } from "../Modals/CarritoEditar";
import { useCounter } from '../../assets/js/btn';


function CarritoProductos() {

    const { count, setCount, increment, decrement } = useCounter();

    const handleChange = (e) => {
        setCount(e.target.value);
    };

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
                                <tr>
                                    <td className="product-thumbnail">
                                        <img src={ancheta1} alt="Imagen" className="img-fluid" />
                                    </td>
                                    <td className="product-name">
                                        <h2 className="h5 text-black">Ancheta 1</h2>
                                    </td>
                                    <td>$49.00</td>
                                    <td>
                                        <div className="input-group mb-3 ml-4" style={{ maxWidth: '120px' }}>
                                            <div className="input-group-prepend">
                                                <button className="btn btn-outline-primary" onClick={decrement}
                                                    type="button">&minus;</button>
                                            </div>
                                            <input type="text" className="form-control text-center" value={count}
                                                onChange={handleChange} placeholder="" aria-label="Example text with button addon"
                                                aria-describedby="button-addon1" />
                                            <div className="input-group-append">
                                                <button className="btn btn-outline-primary " onClick={increment}
                                                    type="button">&#43;</button>
                                            </div>
                                        </div>
                                    </td>
                                    <td>$49.900</td>
                                    <td><button type="button" className="btn btn-primary icon-edit" data-bs-toggle="modal"
                                        data-bs-target="#modalInsumos" ></button></td>
                                    <td><button type="button" className="btn btn-primary icon-trash"
                                    ></button></td>
                                </tr>

                                <tr>
                                    <td className="product-thumbnail">
                                        <img src={ancheta2} alt="Imagen" className="img-fluid" />
                                    </td>
                                    <td className="product-name">
                                        <h2 className="h5 text-black">Ancheta 2</h2>
                                    </td>
                                    <td>$55.000</td>
                                    <td>
                                        <div className="input-group mb-3 ml-4" style={{ maxWidth: '120px' }}>
                                            <div className="input-group-prepend">
                                                <button className="btn btn-outline-primary js-btn-minus"
                                                    type="button">&minus;</button>
                                            </div>
                                            <input type="text" className="form-control text-center" value="1"
                                                placeholder="" aria-label="Example text with button addon"
                                                aria-describedby="button-addon1" />
                                            <div className="input-group-append">
                                                <button className="btn btn-outline-primary js-btn-plus"
                                                    type="button">&#43;</button>
                                            </div>
                                        </div>

                                    </td>
                                    <td>$55.000</td>
                                    <td><button type="button" className="btn btn-primary icon-edit" data-bs-toggle="modal"
                                        data-bs-target=".bd-example-modal-lg"></button></td>
                                    <td><button type="button" className="btn btn-primary icon-trash"
                                    ></button></td>
                                </tr>
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