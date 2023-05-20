import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';

import axios from "axios";


function EditarInsumo(props) {

    const { selectedInsumoID, onHide, show } = props
    const id = selectedInsumoID
    
    const [values, setValues] = useState({
        NombreInsumo: '',
        Descripcion: '',
        PrecioUnitario: '',
        ID_Estado: ''
    })

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value}))
    }

    useEffect(() => {
        axios.get('http://localhost:4000/api/admin/insumos/detalle/'+ id)
        .then(res => console.log(res))
    //     { 
    //         setValues({...values, 
    //         NombreInsumo: res.data[0].NombreInsumo,
    //         Descripcion: res.data[0].Descripcion,
    //         PrecioUnitario: res.data[0].PrecioUnitario,
    //         ID_Estado: res.data[0].ID_Estado})
    // })
        .catch(err => console.log(err));
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
                    Editar Insumo

                </Modal.Title>
                <Button variant="secondary" onClick={props.onHide} className="close">
                    <span aria-hidden="true">&times;</span>
                </Button>
            </Modal.Header>
            <Modal.Body>
            <div>
            <form>
                            <div className="form-group">
                                <label for="NombreInsumo">Nombre</label>
                                <input type="text" className="form-control" id="NombreInsumo" name="NombreInsumo" value={values.NombreInsumo} onChange={handleInput} />
                            </div>
                            <div className="form-group">
                                <label for="Descripcion">Descripción</label>
                                <input type="text" className="form-control" id="Descripcion" name="Descripcion" value={values.Descripcion} onChange={handleInput} />
                            </div>
                            <div className="form-group">
                                <label for="PrecioUnitario">Precio</label>
                                <input type="text" className="form-control" id="PrecioUnitario" name="PrecioUnitario" value={values.PrecioUnitario} onChange={handleInput}/>
                            </div>
                            <div className="form-check" style={{marginBottom: '7px'}}>
                                <input type="checkbox" className="form-check-input" id="ID_Estado" name="ID_Estado" value={values.ID_Estado} onChange={handleInput}/>
                                <label className="form-check-label" for="estadoInsumo">Disponible</label>
                            </div>
                            <button type="submit" className="btn btn-primary" id="crearInsumo">Modificar</button> &nbsp;
                            <input type="button" className="btn btn-dark" id="cancelarInsumo" value="Cancelar"/>
                    </form>
        </div>
            </Modal.Body>
        </Modal>
    );
}

export { EditarInsumo }