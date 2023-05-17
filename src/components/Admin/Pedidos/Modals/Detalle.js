import React from "react";

function Detalle() {
    return (
        <div class="modal fade bd-example-modal-lg" id="modalPedidos" data-bs-backdrop="static" tabindex="-1" role="dialog"
            aria-labelledby="myLargeModalLabel" aria-hidden="true" style={{ zIndex: '2000' }} >
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Anchetas</h5>
                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nombre Ancheta</th>
                                    <th scope="col">Insumos</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider">
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Ancheta Navideña</td>
                                    <td><a href="#!" class=" icon-eye" data-toggle="modal" data-target="#modalInsumos"
                                        data-dismiss="modal"> </a>
                                    </td>

                                    <td>5</td>
                                    <td>50.000</td>
                                    <td><a href="#!" class="icon-remove"> </a></td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>

                                    <td><a href="#!" class=" icon-eye" data-toggle="modal" data-target="#modalInsumos"
                                        data-dismiss="modal"> </a>
                                    </td>

                                    <td>4</td>
                                    <td>50.000</td>
                                    <td><a href="#!" class="icon-remove"> </a></td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>

                                    <td><a href="#!" class=" icon-eye" data-toggle="modal" data-target="#modalInsumos"
                                        data-dismiss="modal"> </a>
                                    </td>

                                    <td>3</td>
                                    <td>50.000</td>

                                    <td><a href="#!" class="icon-remove"> </a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="modal-footer">
                        <h3>Total:</h3>
                        <h3>150.000</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {Detalle}