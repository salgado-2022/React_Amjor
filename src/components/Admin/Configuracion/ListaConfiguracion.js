import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { EditarConfi } from "./Modals/editarConfiguracion";

function ListaConfiguracion() {
  const [tabla, setTabla] = useState([]);
  const [data, setData] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [totalItems, setTotalItems] = useState(0);
  const [selectedConfiguracionID, setselectedConfiguracionID] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [resultadosVacios, setResultadosVacios] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:4000/api/admin/configuracion")
      .then((res) => {
        setTabla(res.data);
        setData(res.data);
        setTotalItems(res.data.length);
      })
      .catch((err) => console.log(err));
  };

  const handleDetalleConfigClick = (usuarioID) => {
    setselectedConfiguracionID(usuarioID);
    setModalShow(true);
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:4000/api/admin/configuracion/Confidel/" + id)
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Eliminado Correctamente",
          text: "El rol se ha sido eliminado correctamente",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(function () {
          window.location = "configuracion";
        }, 670);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    const resultadosBusqueda = tabla.filter((elemento) => {
      const Nombre_Rol = elemento.Nombre_Rol.toString().toLowerCase();
      const terminoBusquedaLower = terminoBusqueda.toLowerCase();

      return Nombre_Rol.includes(terminoBusquedaLower);
    });

    setData(resultadosBusqueda);
    setResultadosVacios(resultadosBusqueda.length === 0);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="site-section"></div>
      <div className="container"></div>
      <div className="col-12">
        <div className="row justify-content-end">
          <div className="input-group mb-3 col-3">
            <input
              type="text"
              className="form-control"
              value={busqueda}
              onChange={handleChange}
              placeholder="Buscar Rol"
            />
            <div className="input-group-append">
              <button className="btn btn-outline" type="button">
                <a href="#!" className="icon-search"> </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div></div>
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Rol</th>
              <th scope="col">Editar</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((rol) => (
                <tr key={rol.ID_Rol}>
                  <th scope="row">{rol.ID_Rol}</th>
                  <td>{rol.Nombre_Rol}</td>
                  <td>
                    <a
                      href="#!"
                      className="icon-edit"
                      onClick={() => {
                        handleDetalleConfigClick(rol.ID_Rol);
                      }}
                    > </a>
                  </td>
                  <td>
                    <a
                      href="#!"
                      className="icon-trash"
                      onClick={() => {
                        handleDelete(rol.ID_Rol);
                      }}
                    > </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  {resultadosVacios ? "No se encontraron resultados" : "Cargando..."}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
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
      {/* Ventana modal */}
      <EditarConfi
        show={modalShow}
        onHide={() => setModalShow(false)}
        selectedConfiguracionID={selectedConfiguracionID}
      />
    </>
  );
}

export { ListaConfiguracion };
