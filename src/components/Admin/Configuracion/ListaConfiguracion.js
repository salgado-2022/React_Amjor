import React, { useState } from "react";
import {Editarconfiguracion} from "../Configuracion/modal/editarconfiguracion"

function ListaConfiguracion() {
  const [modalShow, setModalShow] = useState(false);

  const handleEditarClick = () => {
    setModalShow(true);
  };

  return (
    <>
      <div className="site-section"></div>
      <div className="container"></div>
      <div className="col-12">
        <div className="row justify-content-end">
          <div className="input-group mb-3 col-3">
            <input type="text" className="form-control" placeholder="Buscar Rol" />
            <div className="input-group-append"></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div></div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Rol</th>
            <th scope="col">Permisos</th>
            <th scope="col">Estado</th>
            <th scope="col">Estado</th>
            <th scope="col">Editar</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Administrador</td>
            <td>Todo el aplicativo</td>
            <td>Activo</td>
            <td>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </td>
            <td>
              <a href="#!" className="icon-edit" onClick={handleEditarClick}> </a>
            </td>
            <td>
              <a href="#!" className="icon-trash" onClick="eliminarRol()"> </a>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Cliente</td>
            <td>Anchetas, insumos, ventas</td>
            <td>Activo</td>
            <td>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </td>
            <td>
              <a href="#!" className="icon-edit" onClick={handleEditarClick}> </a>
            </td>
            <td>
              <a href="#!" className="icon-trash" onClick="eliminarRol()"> </a>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Ventana modal */}
      {modalShow && <Editarconfiguracion/>}
    </>
  );
}

export { ListaConfiguracion };