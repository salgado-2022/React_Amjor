import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';

function EditarUsuario({ usuario }) {
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [modalVisible, setModalVisible] = useState(true);
  

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const guardarCambios = () => {
    if (!email || !contrasena || !confirmarContrasena) {
      Swal.fire('Error', 'Por favor completa todos los campos', 'error');
      return;
    }

    if (contrasena !== confirmarContrasena) {
      Swal.fire('Error', 'Las contraseñas no coinciden', 'error');
      return;
    }

    if (!selectedRole) {
      Swal.fire('Error', 'Debe seleccionar un rol', 'error');
      return;
    }

    Swal.fire('Éxito', 'Los cambios han sido guardados correctamente', 'success').then(() => {
      handleClose();
      window.location.reload();
    });
  };

  const handleClose = () => {
    setEmail('');
    setContrasena('');
    setConfirmarContrasena('');
    setSelectedRole('');
    setModalVisible(false);
  };

  return (
    <Modal show={modalVisible} onHide={handleClose} dialogClassName="modal-full-width">
      <Modal.Body>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLongTitle">
            Información del Usuario
          </h5>
          <button type="button" className="close" onClick={handleClose} aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="container">
            <div className="row mb-2">
              <div className="col-md-12">
                <div className="border p-4 rounded" role="alert">
                  Aquí puedes hacer las modificaciones del Usuario.
                </div>
              </div>
            </div>
            <h2 className="h3 mb-7 text-black">Email</h2>
            <form method="post" action="#">
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </form>
            <h2 className="h3 mb-7 text-black">Roles</h2>
            <div className="mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="roles"
                  id="option1"
                  value="Administrador"
                  checked={selectedRole === 'Administrador'}
                  onChange={handleRoleChange}
                />
                <label className="form-check-label" htmlFor="option1">
                  Administrador
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="roles"
                  id="option2"
                  value="Empleado"
                  checked={selectedRole === 'Empleado'}
                  onChange={handleRoleChange}
                />
                <label className="form-check-label" htmlFor="option2">
                  Empleado
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="roles"
                  id="option3"
                  value="Cliente"
                  checked={selectedRole === 'Cliente'}
                  onChange={handleRoleChange}
                />
                <label className="form-check-label" htmlFor="option3">
                  Cliente
                </label>
              </div>
            </div>
            <h2 className="h3 mb-7 text-black">Contraseña</h2>
            <form method="post" action="#">
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="Correo"
                  value={contrasena}
                  onChange={(e) => setContrasena(e.target.value)}
                  required
                />
              </div>
            </form>
            <h2 className="h3 mb-7 text-black">Confirmar Contraseña</h2>
            <form method="post" action="#">
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="Contraconfi"
                  value={confirmarContrasena}
                  onChange={(e) => setConfirmarContrasena(e.target.value)}
                  required
                />
              </div>
              <br />
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => { handleClose(); window.location.reload(); }}>
                 Cancelar
                </button>
                <button type="button" className="btn btn-primary" onClick={guardarCambios}>
                  Guardar cambios
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export { EditarUsuario };
