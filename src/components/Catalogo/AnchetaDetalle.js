import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import axios from "axios";

function AnchetaDetalle(props) {
    const { selectedAnchetaID, onHide, show } = props;
    const id = selectedAnchetaID;

    const [dataA, setDataA] = useState([]);

    const [data, setInsumo] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const formatPrice = (price) => {
        if (typeof price === 'number') {
            return price.toLocaleString('es-CO', {
                style: 'currency',
                currency: 'COP',
                minimumFractionDigits: 0,
            });
        }
        return 'N/A'; // Otra opción es retornar un valor predeterminado en caso de que price no sea un número válido
    };
    

    useEffect(() => {
        setIsLoading(true);
        if (id) {
            const fetchData = async () => {
                try {
                    const res = await axios.get(`http://localhost:4000/api/admin/anchetas/insancheta/` + id);
                    setInsumo(res.data);
                    setIsLoading(false);
                } catch (err) {
                    console.log(err);
                    setIsLoading(false);
                }
            };

            axios.get('http://localhost:4000/api/admin/anchetas/anchellamada/' + id)
                .then(res => {
                    setDataA(prevValues => ({
                        ...prevValues,
                        NombreAncheta: res.data[0].NombreAncheta,
                        Descripcion: res.data[0].Descripcion,
                        PrecioUnitario: res.data[0].PrecioUnitario,
                        image: res.data[0].image
                    }));
                })
                .catch(err => {
                    console.log(err);
                    setIsLoading(false);
                });

            fetchData();// Llama a la API al cargar el componente
        }
    }, [id]);

    return (
        <Modal
            onHide={onHide}
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{ zIndex: '2000' }}
        >
            <Modal.Header>
                <Button variant="secondary" onClick={props.onHide} className="close">
                    <span aria-hidden="true">&times;</span>
                </Button>
            </Modal.Header>
            <Modal.Body>
                {isLoading ? (
                    <div className="text-center">
                        <h3>Espera un momento...</h3>
                    </div>
                ) : (
                    <>
                        <div className="section" style={{ display: "flex", padding: "10px" }}>
                            <div className="row">
                                <div className="col-xl-6" style={{ marginTop: "20px" }}>
                                    <div className="container modal-container">
                                        <div className="image-container">
                                            <img src={`http://localhost:4000/anchetas/` + dataA.image} className="rounded" alt=""/>
                                        </div>
                                    </div> 
                                </div>
                                <div className="col-xl-6" style={{ marginTop: "20px" }}>
                                    <div className="container">
                                        <h1 style={{ fontSize: '26px', fontWeight: "bold", color: "#2E2C36"}}>{dataA.NombreAncheta}</h1>
                                        <p style={{fontWeight: "normal", fontSize: '16px', color: "MediumSlateBlue" }}>{formatPrice(dataA.PrecioUnitario)+"/u"}</p> 
                                        {data.map((insumos, index) => {
                                            return (
                                                <li key={index}>
                                                    <span>{insumos.Cantidad} {insumos.NombreInsumo}</span> 
                                                </li>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="hr-blurry"></hr>
                        <div style={{ padding: "10px" }}>
                            <h1 style={{ fontSize: '20px', fontWeight: "bold", color: "#2E2C36"}}>Descripción del producto</h1>
                            <p style={{ fontSize: '16px', color: "#2E2C36"}}>{dataA.Descripcion}</p>
                        </div>
                        <Modal.Footer>
                        <button type="submit" className="btn btn-cart" id="crearAncheta" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <span style={{fontWeight: "700"}}>Agregar</span><a>{formatPrice(dataA.PrecioUnitario)}</a>
                        </button>
                        {/* <button className="btn btn-cart" onClick={(e) => {e.stopPropagation(); isProductInCart ? removeFromCart(product) : addToCart(product)}} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: isProductInCart ? 'red' : 'MediumSlateBlue'}}><span style={{fontWeight: "700"}}>Agregar</span><a>{formatPrice(dataA.PrecioUnitario)}</a></button> */}
                        </Modal.Footer>
                    </>
                )}
            </Modal.Body>
        </Modal>
    );
}

export { AnchetaDetalle};
