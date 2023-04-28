import React from "react"

import { useCounter } from '../../assets/js/btn';

function ModalEditarCarrito() {

    const { count, setCount, increment, decrement } = useCounter();

    const handleChange = (e) => {
        setCount(e.target.value);
    };

    return (
        <>
            <div className="modal fade bd-example-modal-lg" id="modalInsumos" data-bs-backdrop="static" tabIndex="-1" role="dialog"
                aria-labelledby="myLargeModalLabel" aria-hidden="true" style={{ zIndex: '2000' }} >
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Modificando producto</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row mb-5">
                                    <div className="col-md-12">
                                        <div className="border p-4 rounded" role="alert">
                                            Aquí puedes modificar una ancheta predeterminada a tu gusto. Agrega, elimina, o
                                            cambia la cantidad de insumos. Recuerda estar seguro de los cambios que
                                            realices, ya que después de realizar el solicitar el pedido no se puede hacer
                                            ningún cambio.
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-end">
                                    <div className="input-group mb-3 col-4">
                                        <input type="text" className="form-control" placeholder="Buscar insumo" />
                                        <div className="input-group-append">
                                            <button className="btn btn-outline" type="button"><a href="#/"
                                                className="icon-search"> </a></button>
                                        </div>
                                    </div>
                                </div>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Nombre Insumo</th>
                                            <th score="col">Descripción</th>
                                            <th scope="col">Precio unitario</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-group-divider">
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Chocolatina</td>
                                            <td>Descripción del insumo...</td>
                                            <td>$1.000</td>
                                            <td><a href="#/" className="btn btn-success">+ AGREGAR</a></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Chocolatina JUMBO</td>
                                            <td>Descripción del insumo...</td>
                                            <td>$2.500</td>
                                            <td><a href="#/" className="btn btn-success">+ AGREGAR</a></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Vino Tinto</td>
                                            <td>Descripción del insumo...</td>
                                            <td>$1.000</td>
                                            <td><a href="#/" className="btn btn-success">+ AGREGAR</a></td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="site-section">
                                    <div className="container">

                                        <div className="row">
                                            <div className="col-md-12 mb-5 mb-md-0">
                                                <h2 className="h3 mb-3 text-black">Insumos de tu ancheta</h2>
                                                <div className="p-3 p-lg-5 border">
                                                    <table className="table site-block-order-table mb-5">
                                                        <thead>
                                                            <tr>
                                                                <th>Producto</th>
                                                                <th>Precio unidad</th>
                                                                <th>Cantidad</th>
                                                                <td></td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Chocolatina</td>
                                                                <td>$1.000</td>
                                                                <td>
                                                                    <div className="input-group mb-3" style={{ maxWidth: '120px' }}>
                                                                        <div className="input-group-prepend">
                                                                            <button
                                                                                className="btn btn-outline-primary js-btn-minus"
                                                                                onClick={decrement} type="button">&minus;</button>
                                                                        </div>
                                                                        <input type="text" className="form-control text-center"
                                                                            value={count} onChange={handleChange } placeholder=""
                                                                            aria-label="Example text with button addon"
                                                                            aria-describedby="button-addon1" />
                                                                        <div className="input-group-append">
                                                                            <button
                                                                                className="btn btn-outline-primary js-btn-plus"
                                                                                onClick={increment} type="button">&#43;</button>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td><a href="#/"
                                                                    className="btn btn-primary btn-sm icon-trash"> </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Vino Tinto</td>
                                                                <td>$55.000</td>
                                                                <td>
                                                                    <div className="input-group mb-3" style={{ maxWidth: '120px' }}>
                                                                        <div className="input-group-prepend">
                                                                            <button
                                                                                className="btn btn-outline-primary js-btn-minus"
                                                                                type="button">&minus;</button>
                                                                        </div>
                                                                        <input type="text" className="form-control text-center"
                                                                            value="1" placeholder=""
                                                                            aria-label="Example text with button addon"
                                                                            aria-describedby="button-addon1" />
                                                                        <div className="input-group-append">
                                                                            <button
                                                                                className="btn btn-outline-primary js-btn-plus"
                                                                                type="button">&#43;</button>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <a href="#/" className="btn btn-primary btn-sm icon-trash"> </a>
                                                                </td>
                                                            </tr>

                                                        </tbody>
                                                    </table>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                            >Guardar
                                cambios</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export { ModalEditarCarrito }