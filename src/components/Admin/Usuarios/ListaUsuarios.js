import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { editarUsuario } from "./modal/editarUsuario";

function ListaUsuarios() {
 
  return (
    <>
      <div className="col-12">
        <div className="row justify-content-end">
          <div className="input-group mb-3 col-3">
            <input type="text" className="form-control" placeholder="Buscar Usuario" />
            <div className="input-group-append"></div>
          </div>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Contraseña</th>
            <th scope="col">Estado</th>
            <th scope="col">Estado</th>
            <th scope="col">Editar</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Juan</td>
            <td>juanpapas@misena.edu.co</td>
            <td>*******</td>
            <td>Activo</td>
            <td>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </td>
            <td>
              <a href="#!" className="icon-edit" onClick={editarUsuario}></a>
            </td>
            <td>
              <a href="#!" className="icon-trash" onClick="eliminarUsuario()"></a>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Fabian</td>
            <td>fabian@calditorico.com</td>
            <td>*******</td>
            <td>Desactivo</td>
            <td>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </td>
            <td>
              <a href="#!" className="icon-edit" onClick={editarUsuario}></a>
            </td>
            <td>
              <a href="#!" className="icon-trash" onClick="eliminarUsuario()"></a>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Sofia</td>
            <td>sofiacarson@gmail.com</td>
            <td>*******</td>
            <td>Activa</td>
            <td>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </td>
            <td>
              <a href="#!" className="icon-edit" onClick={editarUsuario}></a>
            </td>
            <td>
              <a href="#!" className="icon-trash" onClick="eliminarUsuario()"></a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export { ListaUsuarios };