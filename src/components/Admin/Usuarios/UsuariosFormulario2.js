import React, { useState } from "react";
import "../../../assets/css/formunUsuarios.css";
import Swal from "sweetalert2";
import axios from "axios";

function UsuariosFormulario2() {
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [checkboxError, setCheckboxError] = useState(false);
  const [values, setValues] = useState({
    correo: "",
    contrasena: "",
    conficontrasena: "",
    ID_Rol: "1",
  });

  const initialValues = {
    correo: "",
    contrasena: "",
    ID_Rol: "1",
  };

  const handleCorreoChange = (event) => {
    const { name, value } = event.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleContraseñaChange = (event) => {
    const { name, value } = event.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleConficontraseñaChange = (event) => {
    const { name, value } = event.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRoleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedRoles((prevRoles) => [...prevRoles, value]);
    } else {
      setSelectedRoles((prevRoles) => prevRoles.filter((role) => role !== value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedRoles.length === 0) {
      setCheckboxError(true);
      return;
    }

    if (
      values.correo === "" ||
      values.contrasena === "" ||
      values.conficontrasena === ""
    ) {
      return;
    }

    if (values.contrasena.length < 5) {
      // Verificar si la contraseña cumple con los requisitos mínimos
      // Mostrar mensaje de error si no se cumple
      return;
    }

    if (values.contrasena !== values.conficontrasena) {
      // Verificar si las contraseñas coinciden
      // Mostrar mensaje de error si no coinciden
      return;
    }

    const handleReset = () => {
      setValues(initialValues);
  };


    axios
      .post("http://localhost:4000/api/crearUsuario", values)
      .then((res) => {
        if (res.data.Status === "Success") {
          Swal.fire({
            title: "Creado Correctamente",
            text: "Tu usuario ha sido creado correctamente",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(function () {
            window.location = "usuarios";
          }, 670);
        } else {
          Swal.fire({
            title: "Error!",
            text: "Hubo un problema al registrar.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="bg-light py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mb-0">
              <a href="/">Home</a> <span className="mx-2 mb-0">/</span>{" "}
              <strong className="text-black">Nuevo Usuario</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="h3 mb-3 text-black">Crear un nuevo Usuario.</h1>
            </div>
            <div className="col-md-12">
              <div className="p-3 p-lg-12 border">
                <div className="form-group row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <div className="col-md-12">
                        <label htmlFor="correo" className="text-black">
                          CORREO ELECTRONICO{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="correo"
                          name="correo"
                          placeholder="juan@gmail.com"
                          value={values.correo}
                          onChange={handleCorreoChange}
                        />
                        <span className="text-danger"></span>
                      </div>
                    </div>
                    &nbsp;
                    <br></br>
                    <div id="Roles">
                      <button>
                        Seleccione el rol que está asociado
                      </button>
                      <br />
                      <div>
                        <div id="Roles-content">
                          <input
                            type="checkbox"
                            id="option1"
                            value="Administrador"
                            checked={selectedRoles.includes("Administrador")}
                            onChange={handleRoleChange}
                          />
                          <label htmlFor="option1">Administrador</label>
                          <br />
                          <input
                            type="checkbox"
                            id="option2"
                            value="Empleado"
                            checked={selectedRoles.includes("Empleado")}
                            onChange={handleRoleChange}
                          />
                          <label htmlFor="option2">Empleado</label>
                          <br />
                          <input
                            type="checkbox"
                            id="option3"
                            value="Cliente"
                            checked={selectedRoles.includes("Cliente")}
                            onChange={handleRoleChange}
                          />
                          <label htmlFor="option3">Cliente</label>
                          <br />
                        </div>
                      </div>
                      {checkboxError && (
                        <div className="text-danger">
                          Debe seleccionar mínimo un rol de los que se han asignado
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group row">
                      <div className="col-md-9">
                        <label htmlFor="contraseña" className="text-black">
                          CONTRASEÑA{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="contraseña"
                          name="contrasena"
                          value={values.contrasena}
                          onChange={handleContraseñaChange}
                        />
                        <span className="text-danger"></span>
                        <h6>Minimo de 5 caracteres</h6>
                        <br></br>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group row">
                          <div className="col-md-9">
                            <label
                              htmlFor="conficontraseña"
                              className="text-black"
                            >
                              CONFIRMAR CONTRASEÑA{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="conficontraseña"
                              name="conficontrasena"
                              value={values.conficontrasena}
                              onChange={handleConficontraseñaChange}
                            />
                            <span className="text-danger"></span>
                          </div>
                          <br></br>&nbsp;
                        </div>
                        <button
                          type="submit"
                          className="save-button btn-btn col-7"
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
  export { UsuariosFormulario2 };