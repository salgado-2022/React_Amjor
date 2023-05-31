import React, { useState } from "react";
import "../../../assets/css/formunUsuarios.css";
import Swal from "sweetalert2";

function UsuariosFormulario() {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [conficontraseña, setConficontraseña] = useState('');
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [checkboxError, setCheckboxError] = useState(false);
  
  const handleCorreoChange = (e) => {
    setCorreo(e.target.value);
  };

  const handleContraseñaChange = (e) => {
    setContraseña(e.target.value);
  };

  const handleConficontraseñaChange = (e) => {
    setConficontraseña(e.target.value);
  };

  const handleRoleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedRoles((prevRoles) => [...prevRoles, value]);
    } else {
      setSelectedRoles((prevRoles) => prevRoles.filter((role) => role !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar campos vacíos
    if (
      correo.trim() === '' ||
      contraseña.trim() === '' ||
      conficontraseña.trim() === ''
    ) {
      // Campos vacíos, mostrar SweetAlert de error
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Debes completar todos los campos',
      });
      return; // Detener la ejecución del submit
    }

    // Validar checkbox de roles
    if (selectedRoles.length === 0) {
      setCheckboxError(true);
      return;
    }

    // Validar coincidencia de contraseñas
    if (contraseña !== conficontraseña) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Las contraseñas ingresadas no coinciden',
      });
      return;
    }

    // Registro exitoso
    Swal.fire({
      icon: 'success',
      title: 'Registro exitoso',
      text: 'El usuario se ha registrado correctamente',
      showConfirmButton: false,
      timer: 1000 
    }).then(() => {
      setTimeout(() => {
        window.location.reload(); 
      }, 1000);
    });
      
  };

    return (
      <>
        <div class="bg-light py-3">
          <div class="container">
            <div class="row">
              <div class="col-md-12 mb-0">
                <a href="/">Home</a> <span class="mx-2 mb-0">/</span>{" "}
                <strong class="text-black">Nuevo Usuario</strong>
              </div>
            </div>
          </div>
        </div>
        <div class="site-section">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <h1 class="h3 mb-3 text-black">Crear un nuevo Usuario.</h1>
              </div>
              <div class="col-md-12">
                <div class="p-3 p-lg-12 border">
                  <div class="form-group row">
                    <div class="col-md-6">
                  <div class="form-group row">
                    <div class="col-md-12">
                      <label for="correo" class="text-black">
                        CORREO ELECTRONICO{" "}
                        <span class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="correo"
                        name="correo"
                        placeholder="juan@gmail.com"
                        value={correo}
                        onChange={handleCorreoChange}/>
                      <span className="text-danger"></span>
                    </div>
                  </div>
                  &nbsp;
                  <br></br>
                  <div id="Roles">
            <button>Seleccione el rol que está asociado</button>
            <br />
            <div>
              <div id="Roles-content">
                <input
                  type="checkbox"
                  id="option1"
                  value="Administrador"
                  checked={selectedRoles.includes('Administrador')}
                  onChange={handleRoleChange}
                />
                <label htmlFor="option1">Administrador</label>
                <br />
                <input
                  type="checkbox"
                  id="option2"
                  value="Empleado"
                  checked={selectedRoles.includes('Empleado')}
                  onChange={handleRoleChange}
                />
                <label htmlFor="option2">Empleado</label>
                <br />
                <input
                  type="checkbox"
                  id="option3"
                  value="Cliente"
                  checked={selectedRoles.includes('Cliente')}
                  onChange={handleRoleChange}
                />
                <label htmlFor="option3">Cliente</label>
                <br />
                  </div>
                 </div>
                {checkboxError && <div className="text-danger">Debe seleccionar minimo un rol de loos que se han asignado</div>}
              </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group row">
                      <div class="col-md-12">
                        <label for="contraseña" class="text-black">
                          CONTRASEÑA{" "}
                          <span class="text-danger">*</span>
                        </label>
                        <input
                          type="password"
                          class="form-control"
                          id="contraseña"
                          name="contraseña"
                          value={contraseña}
                          onChange={handleContraseñaChange}/>
                        <span className="text-danger"></span>
                        <h6>Minimo de 5 caracteres</h6>
                        <br></br>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group row">
                          <div class="col-md-12">
                            <label
                              for="conficontraseña"
                              class="text-black">
                              CONFIRMAR CONTRASEÑA{" "}
                              <span class="text-danger">*</span>
                            </label>
                            <input
                              type="password"
                              class="form-control"
                              id="conficontraseña"
                              name="conficontraseña"
                              value={conficontraseña}
                              onChange={handleConficontraseñaChange}
                            />
                            <span className="text-danger"></span>
                          </div>
                          <br></br>&nbsp;
                        </div>
                        <button
                          type="submit"
                          class="save-button btn-btn col-7"
                          id="UsuariosFormulario"
                          onClick={handleSubmit}>
                          Guardar el nuevo Usuario
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
  
  export { UsuariosFormulario };