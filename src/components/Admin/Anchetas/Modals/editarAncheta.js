import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import Swal from "sweetalert2";
import axios from "axios";

function EditarAncheta(props) {
    const { selectedAnchetaID, onHide, show } = props;
    const id = selectedAnchetaID;

    const [isChecked, setIsChecked] = useState(false); // false = 0

    const [values, setValues] = useState({
        NombreAncheta: '',
        Descripcion: '',
        PrecioUnitario: '',
        ID_Estado: ''
    });

    const handleInput = (event) => {
        const { name, value, type, checked } = event.target;

        if (type === 'checkbox') {
            setIsChecked(checked);
            setValues(prev => ({ ...prev, [name]: checked ? 1 : 2 }));
        } else {
            setValues(prev => ({ ...prev, [name]: value }));
        }
    };

    useEffect(() => {
        if (show) {
            axios.get('http://localhost:4000/api/admin/anchetas/anchellamada/' + id)
                .then(res => {
                    console.log(res);
                    setValues(prevValues => ({
                        ...prevValues,
                        NombreAncheta: res.data[0].NombreAncheta,
                        Descripcion: res.data[0].Descripcion,
                        PrecioUnitario: res.data[0].PrecioUnitario,
                        ID_Estado: res.data[0].ID_Estado
                    }));
                    setIsChecked(res.data[0].ID_Estado === 1);
                })
                .catch(err => console.log(err));
        }
    }, [id, show]);

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('http://localhost:4000/api/admin/anchetas/anchetaedit/' + id, values)
            .then(res => {
                console.log(res);
                Swal.fire({
                    title: 'Modificado Correctamente',
                    text: "Tu ancheta ha sido modificada correctamente",
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                });
                setTimeout(function () { window.location = "anchetas"; }, 670);
            })
            .catch(err => console.log(err));
    };

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
                    Editar Ancheta
                </Modal.Title>
                <Button variant="secondary" onClick={props.onHide} className="close">
                    <span aria-hidden="true">&times;</span>
                </Button>
            </Modal.Header>
            <Modal.Body>
                <div style={{padding: "10px"}}>
                    <form onSubmit={handleUpdate} id="editarAncheta">
                        <div className="form-group">
                            <label htmlFor="NombreInsumo">Nombre</label>
                            <input type="text" className="form-control" id="NombreAncheta" name="NombreAncheta" value={values.NombreAncheta} onChange={handleInput} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Descripcion">Descripción</label>
                            <input type="text" className="form-control" id="Descripcion" name="Descripcion" value={values.Descripcion} onChange={handleInput} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="PrecioUnitario">Precio</label>
                            <input type="text" className="form-control" id="PrecioUnitario" name="PrecioUnitario" value={values.PrecioUnitario} onChange={handleInput} />
                        </div>
                        <div className="form-check" style={{ marginBottom: '7px' }}>
                            <input type="checkbox" className="form-check-input" id="ID_Estado" name="ID_Estado" checked={isChecked} onChange={handleInput} />
                            <label className="form-check-label" htmlFor="estadoInsumo">Disponible</label>
                        </div>
                        <button type="submit" className="btn btn-primary" id="modInsumo" onClick={props.onHide}>Modificar</button> &nbsp;
                        <button type="reset" className="btn btn-dark" id="cancelarInsumo" onClick={props.onHide}>Cancelar</button>
                    </form>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export { EditarAncheta };
