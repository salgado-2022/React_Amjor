import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';

import axios from "axios";


function Detalle(props) {

    const { selectedPedidoID, onHide, show } = props
    const id = selectedPedidoID

    const [data, setAncheta] = useState([])

    const [totalPrecio, setTotalPrecio] = useState(0);

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:4000/api/admin/pedidos/detalle/` + id)
                .then(res => {
                    setAncheta(res.data);

                    // Calcular la suma de los precios
                    let total = 0;
                    res.data.forEach(ancheta => {
                        total += ancheta.Precio;
                    });
                    setTotalPrecio(total);
                })
                .catch(err => console.log(err))
        }
    }, [id])

    const formatPrice = (price) => {
        const options = { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }; // Puedes ajustar la moneda según tus necesidades
        return price.toLocaleString(undefined, options);
    };

    return (
        <Modal
            onHide={onHide}
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{ zIndex: '2000' }}
        >
            <Modal.Header >
                <Modal.Title id="contained-modal-title-vcenter">
                    Anchetas

                </Modal.Title>
                <Button variant="secondary" onClick={props.onHide} className="close">
                    <span aria-hidden="true">&times;</span>
                </Button>
            </Modal.Header>
            <Modal.Body>
                <table className="table">
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
                    <tbody className="table-group-divider">
                        {data.map((anchetas, index) => {
                            return <tr key={index}>
                                <th scope="row">{anchetas.ID_PedidoAnch}</th>
                                <td>{anchetas.NombreAncheta}</td>
                                <td><a href="#!" className=" icon-eye" data-toggle="modal" data-target="#modalInsumos"
                                    data-dismiss="modal"> </a>
                                </td>
                                <td>{anchetas.Cantidad}</td>
                                <td>{formatPrice(anchetas.Precio)}</td>
                                <td><a href="#!" className="icon-remove"> </a></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </Modal.Body>
            <Modal.Footer>
                <h3>Total:</h3>
                <h3>{formatPrice(totalPrecio)}</h3>
            </Modal.Footer>
        </Modal>
    );
}

export { Detalle }