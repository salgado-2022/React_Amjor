import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function ListaUsuarios() {
  const [data, setData] = useState([]);
  const [tabla, setTabla] = useState([]);

  const fetchData = () => {
    axios.get('http://localhost:4000/api/admin/usuario')
        .then(res => {
            setData(res.data)
            setTabla(res.data)
        })
        .catch(err => console.log(err));
};

const handleDelete = (id) => {
  axios.delete('http://localhost:4000/api/admin/usuarios/Usuariodel/' + id)
      .then(res => {
          console.log(res)
          Swal.fire({
              title: 'Eliminado Correctamente',
              text: "Tu usuario ha sido eliminado correctamente",
              icon: 'success',
              showConfirmButton: false,
              timer: 1500
          })
          setTimeout(function () { window.location = "usuario"; }, 670);
      }).catch(err => console.log(err));
};


useEffect(() => {
  fetchData();
}, []);

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
                            <th scope="col">Correo </th>
                            <th scope="col">Eliminar </th>
                        </tr>
                    </thead>
                   <tbody>
                        {data &&
                            data.map((usuarios) => (
                                <tr key={usuarios.ID_Usuario}>
                                    <th scope="row">{usuarios.ID_Usuario}</th>
                                    <td>{usuarios.correo}</td>
                                    <td><a href="#!" className=" icon-trash" onClick={() => {
                                        handleDelete(usuarios.ID_Usuario)
                                    }}> </a></td>
                                </tr>
                            ))}

                    </tbody>
            </table>
    </>
  );
}

export { ListaUsuarios };