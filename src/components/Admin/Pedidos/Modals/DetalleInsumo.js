import React, { useState, useEffect } from "react";

//react-bootstrap
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';

//AXIOS
import axios from "axios";

function DetalleInsumo(props) {

    const { selectedAnchetaID, onHide, show } = props

    const [data, setInsumos] = useState([])

    const id = selectedAnchetaID

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:4000/api/admin/pedidos/detalle/ancheta/` + id)
                .then(res => {
                    setInsumos(res.data);
                    console.log(res.data)
                    // Calcular la suma de los precios
                    // let total = 0;
                    // res.data.forEach(ancheta => {
                    //     total += ancheta.Total;
                    // });
                    // setTotalPrecio(total);
                })
                .catch(err => console.log(err))
        }
    }, [id])


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
                    Insumos

                </Modal.Title>
                <Button variant="secondary" onClick={props.onHide} classNameName="close">
                    <span aria-hidden="true">&times;</span>
                </Button>
            </Modal.Header>
            <Modal.Body>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre Insumo</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {data.map((insumo, index) => {
                            return <tr key={index}>
                                <th scope="row">{insumo.ID_PedidoInsumo}</th>
                                <td>{insumo.NombreInsumo}</td>
                                <td>{insumo.Cantidad}</td>
                                <td>{insumo.Precio}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </Modal.Body>
            <Modal.Footer>
                <h3>Total:</h3>
                <h3>300.000</h3>
            </Modal.Footer>
        </Modal>
    );
}

export { DetalleInsumo }