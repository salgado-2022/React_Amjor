import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { EditarUsuario } from "./modal/editarUsuario";

function ListaUsuarios() {
  const [tabla, setTabla] = useState([]);
  const [data, setData] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [totalItems, setTotalItems] = useState(0);
  const [selectedUsuarioID, setSelectedUsuarioID] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:4000/api/admin/usuario")
      .then((res) => {
        setData(res.data)
        setTabla(res.data);
        setTotalItems(res.data.length);
      })
      .catch((err) => console.log(err));
  };

  const handleDetalleUsuClick = (usuarioID) => {
    setSelectedUsuarioID(usuarioID);
    setModalShow(true);
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:4000/api/admin/usuarios/Usuariodel/" + id)
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Eliminado Correctamente",
          text: "Tu usuario ha sido eliminado correctamente",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(function () {
          window.location = "usuarios";
        }, 670);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = e => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }

  const filtrar = (terminoBusqueda) => {
    const resultadosBusqueda = tabla.filter((elemento) => {
      const correo = elemento.correo.toString().toLowerCase();
      const terminoBusquedaLower = terminoBusqueda.toLowerCase();

      return (
        correo.includes(terminoBusquedaLower)
      );
    });

    setData(resultadosBusqueda);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="col-12">
        <div className="row justify-content-end">
          <div className="input-group mb-3 col-3">
            <input
              type="text"
              className="form-control"
              value={busqueda}
              onChange={handleChange}
              placeholder="Buscar Usuario"
            />
           <div className="input-group-append">
            <button className="btn btn-outline" type="button"><a href="#!" className="icon-search"> </a></button>
          </div>
          </div>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Correo </th>
            <th scope="col">Editar </th>
            <th scope="col">Eliminar </th>
          </tr>
        </thead>
        <tbody>
          {currentItems &&
            currentItems.map((usuario) => (
              <tr key={usuario.ID_Usuario}>
                <th scope="row">{usuario.ID_Usuario}</th>
                <td>{usuario.correo}</td>
                <td>
                  <a
                    href="#!"
                    className="icon-edit"
                    onClick={() => {
                      handleDetalleUsuClick(usuario.ID_Usuario);
                    }}
                  > </a>
                </td>
                <td>
                  <a
                    href="#!"
                    className="icon-trash"
                    onClick={() => {
                      handleDelete(usuario.ID_Usuario);
                    }}
                  > </a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <nav>
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Anterior
            </button>
          </li>
          {Array.from(
            { length: Math.ceil(totalItems / itemsPerPage) },
            (_, index) => (
              <li
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
                key={index + 1}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            )
          )}
          <li
            className={`page-item ${
              currentPage === Math.ceil(totalItems / itemsPerPage)
                ? "disabled"
                : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Siguiente
            </button>
          </li>
        </ul>
      </nav>
      <EditarUsuario
        show={modalShow}
        onHide={() => setModalShow(false)}
        selectedUsuarioID={selectedUsuarioID}
      />
    </>
  );
}

export { ListaUsuarios };
