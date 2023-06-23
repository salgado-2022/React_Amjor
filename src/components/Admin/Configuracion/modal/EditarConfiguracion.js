import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import Swal from "sweetalert2";
import axios from "axios";

function EditarConfi(props) {
    const { selectedConfiguracionID, onHide, show } = props;
    const id = selectedConfiguracionID;

    const [isChecked, setIsChecked] = useState(false);
    const [values, setValues] = useState({
        Nombre_Rol: ''
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
            axios.get('http://localhost:4000/api/admin/configuracion/confillamada/' + id)
                .then(res => {
                    console.log(res);
                    setValues(prevValues => ({
                        ...prevValues,
                        Nombre_Rol: res.data[0].Nombre_Rol
                    }));
                    setIsChecked(res.data[0].ID_Estado === 1);
                })
                .catch(err => console.log(err));
        }
    }, [id, show]);

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('http://localhost:4000/api/admin/configuracion/confiedit/' + id, values)
            .then(res => {
                console.log(res);
                Swal.fire({
                    title: 'Modificado Correctamente',
                    text: "Tu rol se ha sido modificado correctamente",
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                });
                setTimeout(function () { window.location = "configuracion"; }, 670);
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
                    Editar Roles y los permisos
                </Modal.Title>
                <Button variant="secondary" onClick={props.onHide} className="close">
                    <span aria-hidden="true">&times;</span>
                </Button>
            </Modal.Header>
            <Modal.Body>
                <div className="modal fade bd-example-modal-lg" id="modalconfiga" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style={{important: '!important'}}>
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Modificando un Rol y permiso</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="container">
                                    <div className="row mb-5">
                                        <div className="col-md-12">
                                            <div className="border p-4 rounded" role="alert">
                                                Aqui puedes hacer los cambios de un rol y permiso, debes escribir el Rol a modificar y elegir sus permisos.
                                            </div>
                                        </div>
                                    </div>
                                    <h2 className="h3 mb-7 text-black">Nuevo rol.</h2>
                                    <form method="post" action="#">
                                        <div className="mb-3">
                                            <input type="email" className="form-control" id="modalperro" aria-describedby="emailHelp" required placeholder="e.j: Empleado" />
                                            <h6>recuerda, solo letras</h6>
                                        </div>
                                        <br />
                                        <div className="multiselect">
                                            <h2 className="h3 mb-7 text-black">Nuevo Permisos.</h2>
                                            <div className="form-check" id="malquitos">
                                                <label className="form-check-label" htmlFor="one" id="selecta">
                                                    <br />
                                                    <input type="checkbox" id="one" />ventas</label>
                                                <br />
                                                <label className="form-check-label" htmlFor="two" id="selecta">
                                                    <br />
                                                    <input type="checkbox" id="two" />pedidos</label>
                                                <br />
                                                <label className="form-check-label" htmlFor="three" id="selecta">
                                                    <br />
                                                    <input type="checkbox" id="three" />catalogo</label>
                                                <br />
                                                <label className="form-check-label" htmlFor="four" id="selecta">
                                                    <br />
                                                    <input type="checkbox" id="four" />domicilios</label>
                                                <br />
                                                <label className="form-check-label" htmlFor="five" id="selecta">
                                                    <br />
                                                    <input type="checkbox" id="five" />editar datos</label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                <button type="button" className="btn btn-primary" onClick="()">Guardar cambios</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export { EditarConfi };