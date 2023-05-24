import React, { useState } from "react";
import "../../../assets/css/formunUsuarios.css";
import Swal from "sweetalert2";
import { validocumentoIdenti } from "./Validations/validocumentoIdenti";
import { valinombre } from "./Validations/valinombre";
import { valicorreo } from "./Validations/valicorreo";
import { valcontraseña } from "./Validations/valcontraseña";
import { valiconficontraseña } from "./Validations/valiconficontraseña";

function UsuariosFormulario() {
  const [documentoIdenti, setDocumentoIdenti] = useState("");
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [conficontraseña, setConficontraseña] = useState("");

  const handleDocumentoIdentiChange = (e) => {
    setDocumentoIdenti(e.target.value);
  };

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleCorreoChange = (e) => {
    setCorreo(e.target.value);
  };

  const handleContraseñaChange = (e) => {
    setContraseña(e.target.value);
  };

  const handleConficontraseñaChange = (e) => {
    setConficontraseña(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar campos vacíos
    if (
      documentoIdenti.trim() === "" ||
      nombre.trim() === "" ||
      correo.trim() === "" ||
      contraseña.trim() === "" ||
      conficontraseña.trim() === ""
    ) {
      // Campos vacíos, mostrar SweetAlert de error
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Debes completar todos los campos",
      });
      return; // Detener la ejecución del submit
    }

    // Validaciones
    const documentoIdentiErrors = validocumentoIdenti({ documentoIdenti });
    const nombreErrors = valinombre(nombre);
    const correoErrors = valicorreo(correo);
    const contraseñaErrors = valcontraseña(contraseña);
    const conficontraseñaErrors = valiconficontraseña(contraseña, conficontraseña);

    // Verificar si existen errores en las validaciones
    if (
      Object.values(documentoIdentiErrors).some((error) => error !== "") ||
      Object.values(nombreErrors).some((error) => error !== "") ||
      Object.values(correoErrors).some((error) => error !== "") ||
      Object.values(contraseñaErrors).some((error) => error !== "") ||
      Object.values(conficontraseñaErrors).some((error) => error !== "")
    ) {
      // Mostrar SweetAlert de errores
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Verifica los campos e intenta nuevamente",
      });
    } else {
      // Registro exitoso
      Swal.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "El usuario se ha registrado correctamente",
      });

      // Aquí puedes realizar la acción de guardar el nuevo usuario en tu base de datos
    }
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
                      <label for="documentoIdenti" class="text-black">
                        DOMUENTO DE IDENTIDAD{" "}
                        <span class="text-danger">*</span>
                      </label>
                      <input
                        type="number"
                        class="form-control"
                        id="documentoIdenti"
                        name="documentoIdenti"
                        placeholder="12456"
                        
                        value={documentoIdenti}
                        onChange={handleDocumentoIdentiChange}
                        />
                      <span className="text-danger"></span>
                    </div>
                    <div class="col-md-6">
                      <label for="nombre" class="text-black">
                        NOMBRES COMPLETOS
                        <span class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="nombre"
                        name="nombre"
                        placeholder="e.j: Juan Morales"
                        value={nombre}
                        onChange={handleNombreChange}/>
                      <span className="text-danger"></span>
                      <h6>Solo letras, puedes con espacios y acentos</h6>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-8">
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
                    <br></br>
                    <div>
                      <div id="Roles-content">
                        <input type="checkbox" id="option1" />
                        <label for="option1">Administrador</label>
                        <br></br>
                        <input type="checkbox" id="option2" />
                        <label for="option2">Empleado</label>
                        <br></br>
                        <input type="checkbox" id="option3" />
                        <label for="option3">Cliente</label>
                        <br></br>
                      </div>
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
      </>
    );
  }
  
  export { UsuariosFormulario };