import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function ListaUsuarios() {

  const [tabla, setTabla] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [itemsPerPage] = useState(5);
  const [totalItems, setTotalItems] = useState(0);

  const fetchData = () => {
    axios.get("http://localhost:4000/api/admin/usuario")
      .then((res) => {
        
        setTabla(res.data);
        setTotalItems(res.data.length);
      })
      .catch((err) => console.log(err));
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


  useEffect(() => {
    fetchData();
  }, []);

  // Calcular el índice del último elemento en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;

  // Calcular el índice del primer elemento en la página actual
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Obtener los elementos para mostrar en la página actual
  const currentItems = tabla.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="col-12">
        <div className="row justify-content-end">
          <div className="input-group mb-3 col-3">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar Usuario"
            />
            <div className="input-group-append"></div>
          </div>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Correo </th>
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
                    href="#!"className="icon-trash" onClick={() => { handleDelete(usuario.ID_Usuario);
                    }}
                  ></a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* Agregar la navegación de la paginación */}
      <nav>
        <ul className="pagination">
          <li
            className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
          >
            <button
              className="page-link"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Anterior
            </button>
          </li>
          {/* Generar los números de página */}
          {Array.from(
            { length: Math.ceil(totalItems / itemsPerPage) },
            (_, index) => (
              <li
                className={`page-item ${currentPage === index + 1 ? "active" : ""
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
            className={`page-item ${currentPage === Math.ceil(totalItems / itemsPerPage)
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
    </>
  );
}

export { ListaUsuarios };