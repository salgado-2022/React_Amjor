import React, { useState, useEffect } from "react";

//react-bootstrap
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';

//AXIOS
import axios from "axios";
import { DetalleInsumo } from "./DetalleInsumo";


function Detalle(props) {

    const { selectedPedidoID, onHide, show } = props

    const id = selectedPedidoID

    const [data, setAncheta] = useState([])

    const [totalPrecio, setTotalPrecio] = useState(0);

    const [modalShow, setModalShow] = React.useState(false);

    const [selectedAnchetaID, setSelectedAnchetaID] = useState(null);


    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                try {
                    const res = await axios.get(`http://localhost:4000/api/admin/pedidos/detalle/` + id);
                    setAncheta(res.data);
                    let total = 0;
                    res.data.forEach(ancheta => {
                        total += ancheta.Total;
                    });
                    setTotalPrecio(total);
                } catch (err) {
                    console.log(err);
                }
            };

            fetchData(); // Llama a la API al cargar el componente
        }
    }, [id]);

    const formatPrice = (price) => {
        const options = { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }; // Puedes ajustar la moneda según tus necesidades
        return price.toLocaleString(undefined, options);
    };

    const handleDetalleClick = (pedidoID) => {
        setSelectedAnchetaID(pedidoID);
        setModalShow(true);
    };

    return (
        <>
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
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {data.map((anchetas, index) => {
                                return <tr key={index}>
                                    <th scope="row">{anchetas.ID_PedidoAnch}</th>
                                    <td>{anchetas.NombreAncheta}</td>
                                    <td><a href="#!" className=" icon-eye" onClick={() => {
                                        handleDetalleClick(anchetas.ID_PedidoAnch)
                                    }}>  </a></td>
                                    <td>{anchetas.Cantidad}</td>
                                    <td>{formatPrice(anchetas.Total)}</td>
                                    <td><a href="#!" className="icon-edit" data-toggle="modal" data-target="#modalModificar"
                                        data-dismiss="modal"> </a>
                                    </td>
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

            <DetalleInsumo
                show={modalShow}
                onHide={() => setModalShow(false)}
                selectedAnchetaID={selectedAnchetaID}
            />
        </>
    );
}

export { Detalle }