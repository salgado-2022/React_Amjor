import React, { useEffect, useState } from "react";
import axios from "axios";

function Table() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/api/admin/pedidos')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [])
    return (
        <div className="site-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="h3 mb-3 text-black">Pedido</h2>
                    </div>
                    <div className="col-12">

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nombre Cliente</th>
                                    <th scope="col">Detalle</th>
                                    <th scope="col">Fecha</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                {data.map((usuario, index) => {
                                    return <tr key={index}>
                                        <th scope="row">{usuario.ID_Usuario}</th>
                                        <td>{usuario.Correo}</td>
                                        <td>{usuario.contrasena}</td>
                                        <td><a href="#/" className=" icon-eye" data-toggle="modal"
                                            data-target="#modalPedidos">  </a></td>
                                        <td><a href="#/" className="icon-check" > </a></td>
                                        <td><a href="#/" className="icon-remove" > </a></td>
                                    </tr>
                                })}
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td><a href="#/" className=" icon-eye" data-toggle="modal"
                                        data-target="#modalPedidos">  </a></td>
                                    <td>20/12/2022</td>
                                    <td>5</td>
                                    <td>50.000</td>
                                    <td><a href="#/" className="icon-check" > </a></td>
                                    <td><a href="#/" className="icon-remove" > </a></td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>

                                    <td><a href="#/" className=" icon-eye" data-toggle="modal"
                                        data-target="#modalPedidos"> </a></td>
                                    <td>20/12/2022</td>
                                    <td>4</td>
                                    <td>50.000</td>
                                    <td><a href="#/" className="icon-check" > </a></td>
                                    <td><a href="#/" className="icon-remove" > </a></td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>

                                    <td><a href="#/" className=" icon-eye" data-toggle="modal"
                                        data-target="#modalPedidos"> </a></td>
                                    <td>20/12/2022</td>
                                    <td>3</td>
                                    <td>50.000</td>
                                    <td><a href="#/" className="icon-check" > </a></td>
                                    <td><a href="#/" className="icon-remove" > </a></td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    );
}
export { Table }