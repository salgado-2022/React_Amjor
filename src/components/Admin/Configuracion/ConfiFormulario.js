import React, { useState } from "react";
import "../../../assets/css/configu.css";
import Swal from "sweetalert2";
import axios from "axios";

function ConfiFormulario() {
  const [rol, setRol] = useState('');
  const [permisos, setPermisos] = useState([]);

  const validarRolPermiso = () => {
    const rolRegex = /^[A-Za-z]+$/;

    if (rol.trim() === '') {
      Swal.fire({
        title: 'Validación fallida',
        text: 'Debes ingresar un rol.',
        icon: 'error',
      });
    } else if (!rol.match(rolRegex) || permisos.length === 0) {
      Swal.fire({
        title: 'Creación del rol y el permiso fallida',
        text: 'El rol debe contener solo letras y debes seleccionar al menos un permiso.',
        icon: 'error',
      });
    } else {
      const values = {
        rol: rol,
        permisos: permisos
      };

      axios.post("http://localhost:4000/api/crearRol", values)
        .then((res) => {
          if (res.data.Status === "Success") {
            Swal.fire({
              title: "Creado Correctamente",
              text: "El Rol se ha creado correctamente",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });
            setTimeout(function () {
              window.location = "rol";
            }, 670);
          } else {
            Swal.fire({
              title: "Error!",
              text: "Hubo un problema al crear el rol.",
              icon: "error",
              confirmButtonText: "OK",
            });
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const handlePermisoChange = (e) => {
    const permiso = e.target.value;
    if (e.target.checked) {
      setPermisos([...permisos, permiso]);
    } else {
      setPermisos(permisos.filter((p) => p !== permiso));
    }
  };

  return (
    <>
      <div className="container">
        <h2 className="h3 mb-7 text-black">CREAR UN NUEVO ROL Y PERMISOS.</h2>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Nuevo rol. Recuerda elegir también los permisos asociados al rol ingresado.
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="e.j Administrador"
            aria-describedby="emailHelp"
            required
            value={rol}
            onChange={(e) => setRol(e.target.value)}
          />
        </div>
        <br />
        <div id="dropdown">
          <button>SELECCIONE LOS PERMISOS ASOCIADOS</button>
          <br />
          <div id="dropdown-content">
            <input
              type="checkbox"
              id="option1"
              value="Dashboard"
              checked={permisos.includes('Dashboard')}
              onChange={handlePermisoChange}
            />
            <label htmlFor="option1">Dashboard</label>
            <br />
            <input
              type="checkbox"
              id="option2"
              value="Usuarios"
              checked={permisos.includes('Usuarios')}
              onChange={handlePermisoChange}
            />
            <label htmlFor="option2">Usuarios</label>
            <br />
            <input
              type="checkbox"
              id="option3"
              value="Configuracion"
              checked={permisos.includes('Configuracion')}
              onChange={handlePermisoChange}
            />
            <label htmlFor="option3">Anchetas</label>
            <br />
            <input
              type="checkbox"
              id="option4"
              value="Anchetas"
              checked={permisos.includes('Anchetas')}
              onChange={handlePermisoChange}
            />
            <label htmlFor="option4">Ventas</label>
            <br />
          </div>
          &nbsp;
        </div>
        <button
          type="submit"
          className="btn-agregar mb-4 col-4"
          id="btn-agregar"
          onClick={validarRolPermiso}
        >
          AGREGAR
        </button>
      </div>
    </>
  );
}

export { ConfiFormulario };