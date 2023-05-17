import React from "react";

function TablaInsumo(){
    return(
                    <div id="styleTablaInsumos">
                        <br/>
                        <div class="row justify-content-end">
                            <div class="input-group mb-3 col-6">
                            <input type="text" class="form-control" placeholder="Buscar Insumo" />
                            <div class="input-group-append">
                                <button class="btn btn-outline" type="button"><a href="#!" class="icon-search"> </a></button>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Descripcion</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Estado</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Chocolate</td>
                                <td>Chocolate Jumbo 100 gr</td>
                                <td>3.000</td>
                                <td>Disponible</td>
                                <td><a href="#!" class="icon-edit" onclick="modificarInsumo()"> </a></td>
                                <td><a href="#!" class="icon-trash" onclick="eliminarInsumo()"> </a></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Vino</td>
                                <td>Vino tinto Casa Blanca 750 ml</td>
                                <td>45.000</td>
                                <td>Disponible</td>
                                <td><a href="#!" class="icon-edit"> </a></td>
                                <td><a href="#!" class="icon-trash" data-toggle="modal" data-target="#eliminarAncheta"> </a></td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Cerveza</td>
                                <td>Cerveza corona 355 ml</td>
                                <td>4.500</td>
                                <td>Agotado</td>
                                <td><a href="#!" class="icon-edit"> </a></td>
                                <td><a href="#!" class="icon-trash" data-toggle="modal" data-target="#eliminarAncheta"> </a></td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
    );
}

export {TablaInsumo}