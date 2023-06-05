import React from 'react';

function EditarConfiguracion() {
  return (
    <div className="modal fade bd-example-modal-lg" id="modalconfiga" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Modificando un Rol y permiso</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="container">
              <div className="row mb-5">
                <div className="col-md-12">
                  <div className="border p-4 rounded" role="alert">
                    Aquí puedes hacer los cambios de un rol y permiso, debes escribir el Rol a modificar y elegir sus permisos.
                  </div>
                </div>
              </div>
              <h2 className="h3 mb-7 text-black">Nuevo rol.</h2>
              <form method="post" action="#">
                <div className="mb-3">
                  <input type="email" className="form-control" id="modalperro" aria-describedby="emailHelp" required placeholder="e.j: Empleado" />
                  <h6>Recuerda, solo letras.</h6>
                </div>
                <div className="multiselect">
                  <h2 className="h3 mb-7 text-black">Nuevo Permisos.</h2>
                  <div className="form-check" id="malquitos">
                    <label className="form-check-label" htmlFor="one" id="selecta">
                      <br />
                      <input type="checkbox" id="one" />ventas
                    </label>
                    <br />
                    <label className="form-check-label" htmlFor="two" id="selecta">
                      <br />
                      <input type="checkbox" id="two" />pedidos
                    </label>
                    <br />
                    <label className="form-check-label" htmlFor="three" id="selecta">
                      <br />
                      <input type="checkbox" id="three" />catálogo
                    </label>
                    <br />
                    <br />
                    <label className="form-check-label" htmlFor="five" id="selecta">
                      <br />
                      <input type="checkbox" id="five" />editar datos
                    </label>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                  <button type="button" className="btn btn-primary" onClick="modificadoCorrectamente()">Guardar cambios</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { EditarConfiguracion };