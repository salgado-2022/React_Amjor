import React, { useEffect, useState } from "react";


//AXIOS
import axios from "axios";


//Ventanas modales
import { Detalle } from './Modals/Detalle'

function Table() {

    const [data, setData] = useState([])

    const [modalShow, setModalShow] = React.useState(false);

    const [selectedPedidoID, setSelectedPedidoID] = useState(null);

    useEffect(() => {
        fetchData();
    }, [data]);

    const fetchData = () => {
        axios.get('http://localhost:4000/api/admin/pedidos')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    };

    const handleDetalleClick = (pedidoID) => {
        setSelectedPedidoID(pedidoID);
        setModalShow(true);
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
    };

    const formatPrice = (price) => {
        const options = { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }; // Puedes ajustar la moneda según tus necesidades
        return price.toLocaleString(undefined, options);
    };


    return (
        <>
            <div className="site-blocks-table">
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
                                            <th scope="col">Fecha para Entrega</th>
                                            <th scope="col">Dirección Entrega</th>
                                            <th scope="col">Precio</th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-group-divider">
                                        {data.map((pedidos, index) => {
                                            return <tr key={index}>
                                                <th scope="row">{pedidos.ID_Pedido}</th>
                                                <td>{pedidos.Nombre_Cliente}</td>
                                                <td><a href="#!" className=" icon-eye" onClick={() => {
                                                    handleDetalleClick(pedidos.ID_Pedido)
                                                }}>  </a></td>
                                                <td>{formatDate(pedidos.Feche_Entrega)}</td>
                                                <td>{pedidos.Direccion_Entrega}</td>
                                                <td>{formatPrice(pedidos.Precio_Total)}</td>
                                                <td><a href="#/" className="icon-check" > </a></td>
                                                <td><a href="#/" className="icon-remove" > </a></td>
                                            </tr>
                                        })}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Detalle
                show={modalShow}
                onHide={() => setModalShow(false)}
                selectedPedidoID={selectedPedidoID}
            />
        </>
    );
}
export { Table }