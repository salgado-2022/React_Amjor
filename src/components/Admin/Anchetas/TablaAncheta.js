import React from "react";

function TablaAncheta(){
    return(
        <div id="styleTablaAnchetas">
                        <div className="row justify-content-end">
                            <div className="input-group mb-3 col-6">
                                <input type="text" className="form-control" placeholder="Buscar Ancheta"/>
                                <div className="input-group-append">
                                    <button className="btn btn-outline" type="button"><a href="#!"
                                            className="icon-search"> </a></button>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Insumos</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Ancheta Navideña</td>
                                    <td><a href="#!" className="icon-eye" data-toggle="modal"
                                            data-target="#modalAnchetaDetalle"> </a></td>
                                    <td>90.000</td>
                                    <td>Disponible</td>
                                    <td><a href="#!" className="icon-edit" onClick="modificarAncheta()"> </a></td>
                                    <td><a href="#!" className="icon-trash" id="eliminar" onclick="eliminarAncheta()"> </a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Ancheta Halloween</td>
                                    <td><a href="#!" className="icon-eye" data-toggle="modal"
                                            data-target="#modalAnchetaDetalle"> </a></td>
                                    <td>135.000</td>
                                    <td>Disponible</td>
                                    <td><a href="#!" className="icon-edit" onClick="modificarAncheta()"> </a></td>
                                    <td><a href="#!" className="icon-trash" id="eliminar" onclick="eliminarAncheta()"> </a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Ancheta Padres</td>
                                    <td><a href="#!" className="icon-eye" data-toggle="modal"
                                            data-target="#modalAnchetaDetalle"> </a></td>
                                    <td>42.000</td>
                                    <td>Agotado</td>
                                    <td><a href="#!" className="icon-edit" onclick="modificarAncheta()"> </a></td>
                                    <td><a href="#!" className="icon-trash" id="eliminar" onclick="eliminarAncheta()"> </a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Ancheta Madres</td>
                                    <td><a href="#!" className="icon-eye" id="eliminar" onClick="eliminarAncheta()"> </a></td>
                                    <td>42.000</td>
                                    <td>Agotado</td>
                                    <td><a href="#!" className="icon-edit" onClick="modificarAncheta()"> </a></td>
                                    <td><a href="#!" className="icon-trash" id="eliminar" onClick="eliminarAncheta()"> </a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Ancheta Cumpleañera</td>
                                    <td><a href="#!" className="icon-eye" data-toggle="modal"
                                            data-target="#modalAnchetaDetalle"> </a></td>
                                    <td>67.000</td>
                                    <td>Agotado</td>
                                    <td><a href="#!" className="icon-edit" onClick="modificarAncheta()"> </a></td>
                                    <td><a href="#!" className="icon-trash" id="eliminar" onClick="!"> </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
    );
}

export {TablaAncheta}