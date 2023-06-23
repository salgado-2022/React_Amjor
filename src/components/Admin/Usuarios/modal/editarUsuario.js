import React, { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import { Button } from "react-bootstrap";
import Swal from 'sweetalert2';
import axios from "axios";

function EditarUsuario(props) {
  const { selectedUsuarioID, onHide, show } = props;
  const id = selectedUsuarioID;

  const [isChecked, setIsChecked] = useState(false);
  const [values, setValues] = useState({
    correo: '',
    contrasena: ''
  });

  const handleInput = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
      setIsChecked(checked);
      setValues(prev => ({ ...prev, [name]: checked ? 1 : 0 }));
    } else {
      setValues(prev => ({ ...prev, [name]: value }));
    }
  };

  useEffect(() => {
    if (show) {
      axios.get(`http://localhost:4000/api/admin/usuario/usullamada/` + id)
        .then(res => {
          console.log(res);
          setValues(prevValues => ({
            ...prevValues,
            correo: res.data[0].Correo
          }));
          setIsChecked(res.data[0].ID_Usuario === 1);
        })
        .catch(err => console.log(err));
    }
  }, [id , show]);

  const handleUpdate = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:4000/api/admin/usuario/usuariarioedit/`, values)
      .then(res => {
        console.log(res);
        Swal.fire({
          title: 'Modificado Correctamente',
          text: "Tu Usuario se ha sido modificado correctamente",
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        });
        setTimeout(function () { window.location = "usuario"; }, 670);
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
          Editar datos de Usuario
        </Modal.Title>
        <Button variant="secondary" onClick={props.onHide} className="close">
          <span aria-hidden="true">&times;</span>
        </Button>
      </Modal.Header>
      <Modal.Body>
        <div>
          <form onSubmit={handleUpdate} id="editarUsuario">
            <div className="form-group">
              <label htmlFor="correo">Correo</label>
              <input type="text" className="form-control" id="correo" name="correo" value={values.correo} onChange={handleInput} />
            </div>
            <div className="form-group">
              <label htmlFor="contrasena">Contraseña</label>
              <input type="password" className="form-control" id="contrasena" name="contrasena" value={values.contrasena} onChange={handleInput} />
            </div>
            <div className="form-check" style={{ marginBottom: '7px' }}>
              <input type="checkbox" className="form-check-input" id="ID_Estado" name="ID_Estado" checked={isChecked} onChange={handleInput} />
              <label className="form-check-label" htmlFor="estadoUsuarios">Disponible</label>
            </div>
            <button type="submit" className="btn btn-primary" id="modUsuario" onClick={props.onHide}>Guardar Cambios</button> &nbsp;
            <button type="reset" className="btn btn-dark" id="cancelarUsuario" onClick={props.onHide}>Cancelar</button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export { EditarUsuario };
