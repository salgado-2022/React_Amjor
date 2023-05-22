import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import axios from "axios";

function VerInsumos(props) {
    const { selectedAnchetaID, onHide, show } = props;
    const id = selectedAnchetaID;

    const [dataA, setDataA] = useState([]);

    const [data, setInsumo] = useState([])

    const [totalPrecio, setTotalPrecio] = useState(0);

    const formatPrice = (price) => {
        return price.toLocaleString('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0,
        });
    };

    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                try {
                    const res = await axios.get(`http://localhost:4000/api/admin/anchetas/insancheta/` + id);
                    setInsumo(res.data);
                    let total = 0;
                    res.data.forEach(insumo => {
                        total += insumo.Total;
                    });
                    setTotalPrecio(total);
                } catch (err) {
                    console.log(err);
                }
            };

            axios.get('http://localhost:4000/api/admin/anchetas/anchellamada/' + id)
                .then(res => {
                    console.log(res);
                    setDataA(prevValues => ({
                        ...prevValues,
                        NombreAncheta: res.data[0].NombreAncheta,
                        Descripcion: res.data[0].Descripcion,
                        PrecioUnitario: res.data[0].PrecioUnitario,
                        ID_Estado: res.data[0].ID_Estado
                    }));
                })
                .catch(err => console.log(err));

            fetchData();// Llama a la API al cargar el componente

            const interval = setInterval(fetchData, 3000); // Llama a la API cada 10 segundos

            return () => {
                clearInterval(interval); // Limpia el intervalo al desmontar el componente
            };
        }
    }, [id]);

    return (
        <Modal
            onHide={onHide}
            show={show}
            size="lg" 
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{ zIndex: '2000', boxShadow: '0 0 10px MediumSlateBlue' }}
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter" className="text-black">
                    Insumos de la Ancheta
                </Modal.Title>
                <Button variant="secondary" onClick={props.onHide} className="close">
                    <span aria-hidden="true">&times;</span>
                </Button>
            </Modal.Header>
            <Modal.Body>
            <h6 style={{fontSize: '21px'}}>{dataA.NombreAncheta}</h6>
            <p style={{fontSize: '15px'}}>{dataA.Descripcion}</p>
            <div>
                <div className="row justify-content-end">
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Insumo</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                            {data.map((insumos, index) => {
                                return <tr key={index}>
                                    <th scope="row">{insumos.ID_Insumos_Ancheta}</th>
                                    <td>{insumos.NombreInsumo}</td>
                                    <td>{insumos.Cantidad}</td>
                                    <td>{formatPrice(insumos.Total)}</td>
                                </tr>
                            })}
                        </tbody>
                </table>
            </div>
            </Modal.Body>
            <Modal.Footer>
                    <h3>Total:</h3>
                    <h3>{formatPrice(totalPrecio)}</h3>
                </Modal.Footer>
        </Modal>
    );
}

export { VerInsumos };
