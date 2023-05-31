
function EditarConfiguracion() {



    return(
        <> 
        <div class="modal fade bd-example-modal-lg" id="modalconfiga" tabindex="-1" role="dialog"
                    aria-labelledby="myLargeModalLabel" aria-hidden="true" style="!important;">
                    <div class="modal-dialog modal-lg modal-dialog-centered"/>
                        <div class="modal-content"/>
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Modificando un Rol y permiso</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body"/>
                                <div class="container"/>
                                    <div class="row mb-5">
                                        <div class="col-md-12">
                                            <div class="border p-4 rounded" role="alert">
                                                Aqui puedes hacer los cambios de un rol y permiso, debes escribir el Rol
                                                a modificar y elegir sus permisos.
                                            </div>
                                        </div>
                                    </div>
                                    <h2 class="h3 mb-7 text-black">Nuevo rol.</h2>
                                    <form method="post" action="#"/>
                                        <div class="mb-3">

                                            <input type="email" class="form-control" id="modalperro"
                                                aria-describedby="emailHelp" required placeholder="e.j: Empleado"/>
                                                <h6>recuerda, solo letras</h6>
                                        </div>
                                        <br></br>
                                        <div class="multiselect"/>

                                            <h2 class="h3 mb-7 text-black">Nuevo Permisos.</h2>
                                            <div class="form-check" id="malquitos"/>
                                                <label class="form-check-label" for="one" id="selecta">
                                                    <br></br>
                                                    <input type="checkbox" id="one" />ventas</label>
                                                <br></br>
                                                <label class="form-check-label" for="two" id="selecta">
                                                    <br></br>
                                                    <input type="checkbox" id="two" />pedidos</label>
                                                <br></br>
                                                <label class="form-check-label" for="three" id="selecta">
                                                    <br></br>
                                                    <input type="checkbox" id="three" />catalogo</label>
                                                <br></br>
                                                <label class="form-check-label" for="four" id="selecta">
                                                    <br></br>
                                                    <input type="checkbox" id="four" />domicilios</label>
                                                <br></br>
                                                <label class="form-check-label" for="five" id="selecta">
                                                    <br></br>
                                                    <input type="checkbox" id="five" />editar datos</label>
                                            </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-dismiss="modal">Cancelar</button>
                                            <button type="button" class="btn btn-primary"
                                                onclick="modificadoCorrectamente()">Guardar cambios</button>
                                </div>
                                </>
    );
}

export {EditarConfiguracion}