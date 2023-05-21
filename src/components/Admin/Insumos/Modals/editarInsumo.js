import React, { useState, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import Swal from "sweetalert2";

import axios from "axios";


function EditarInsumo(props) {

    const { selectedInsumoID, onHide, show, } = props
    const id = selectedInsumoID
    const checkbox = useRef();
    const [estadoinsumo, setEstadoinsumo] = useState('')
    
    const [values, setValues] = useState({
        NombreInsumo: '',
        Descripcion: '',
        PrecioUnitario: '',
        ID_Estado: estadoinsumo
    })

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value}))
        if (checkbox.current.checked) {
            setEstadoinsumo('2')
          } else {
            setEstadoinsumo('1')
          }
    }

    useEffect(() => {
        axios.get('http://localhost:4000/api/admin/insumos/insullamada/'+ id)
        .then(res => { 
            console.log(res)
            setValues({...values, NombreInsumo: res.data[0].NombreInsumo, Descripcion: res.data[0].Descripcion, PrecioUnitario: res.data[0].PrecioUnitario,ID_Estado: res.data[0].ID_Estado})
        })
        .catch(err => console.log(err));
    }, [id])

    const initialValues = {
        ...values
      };

    const handleCancel = () => {
        setValues(initialValues);
      };

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('http://localhost:4000/api/admin/insumos/insumoedit/'+ id, values)
        .then(res => {
            console.log(res)
            Swal.fire({
                title: 'Modificado Correctamente',
                text: "Tu insumo ha sido modificado correctamente",
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
            setTimeout(function(){ window.location = "insumos"; }, 1000);
        }).catch(err => console.log(err));
    }

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
            <form onSubmit={handleUpdate} id="editarInsumo">
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
                                <input type="checkbox" className="form-check-input" id="ID_Estado" name="ID_Estado" value={estadoinsumo} ref={checkbox} onChange={handleInput}/>
                                <label className="form-check-label" for="estadoInsumo">Disponible</label>
                            </div>
                            <button type="submit" className="btn btn-primary" id="modInsumo" style={{backgroundColor: "#d4728a", borderColor: "#d4728a"}} onClick={props.onHide}>Modificar</button> &nbsp;
                            <button type="reset" className="btn btn-dark" id="cancelarInsumo" onClick={handleCancel}>Cancelar</button>
                    </form>
        </div>
            </Modal.Body>
        </Modal>
    );
}

export { EditarInsumo }