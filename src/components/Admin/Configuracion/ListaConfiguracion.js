import React from "react"

function ListaConfiguracion (){
    return(
        <>
        <div className="site-section">
     </div>
      <div className="container">
      </div>
      <div className="col-12">
                <div className="row justify-content-end">
                  <div className="input-group mb-3 col-3">
                    <input type="text" className="form-control" placeholder="Buscar Rol" />
                    <div className="input-group-append">
                    </div>
                  </div>
                </div>
              </div>
        <div className="row">
        </div>
          <br />
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Rol</th>
                <th scope="col">Permisos</th>
                <th scope="col">Estado</th>
                <th scope="col">Editar</th>
                <th scope="col">Elinar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Administrador</td>
                <td>Todo el aplicativo</td>
                <td>Activo y listo pa dal</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Cliente</td>
                <td>Anchetas, insumos, ventas</td>
                <td>Activo</td>
                </tr>
            </tbody>
        </table> 
        
        </>
    );

}

export {ListaConfiguracion}