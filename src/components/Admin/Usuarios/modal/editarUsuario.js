

function editarUsuario() {
    <> 
    <div class="modal fade bd-example-modal-lg" id="modalUsua" tabindex="-1" role="dialog"/>
                    aria-labelledby="myLargeModalLabel" aria-hidden="true" style="!important;"  
                    <div class="modal-dialog modal-lg modal-dialog-centered"/>
                        <div class="modal-content"/>
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Mi información personal</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body"/>
                                <div class="container"/>
                                    <div class="row mb-5">
                                        <div class="col-md-12">
                                            <div class="border p-4 rounded" role="alert">
                                                Aqui puedes hacer las modificaciones de tus datos personales.
                                            </div>
                                        </div>
                                    </div>
                                    <h2 class="h3 mb-7 text-black">Documento</h2>
                                    <form method="post" action="#"/>
                                        <div class="mb-3">
                                            <input type="email" class="form-control" id="documento"/>
                                                aria-describedby="emailHelp" required=""
                                        </div>
                                        <h2 class="h3 mb-7 text-black">Nombre completo</h2>
                                        <form method="post" action="#"/>
                                            <div class="mb-3">
                                                <input type="email" class="form-control" id="Nombre"/>
                                                    aria-describedby="emailHelp" required=""
                                            </div>
                                            <h2 class="h3 mb-7 text-black">Email</h2>
                                            <form method="post" action="#"/>
                                                <div class="mb-3">
                                                    <input type="email" class="form-control" id="email"/>
                                                        aria-describedby="emailHelp" required=""
                                                </div>
                                                <h2 class="h3 mb-7 text-black">Contraseña</h2>
                                                <form method="post" action="#"/>
                                                    <div class="mb-3">
                                                        <input type="email" class="form-control" id="Correo"/>
                                                            aria-describedby="emailHelp" required=""
                                                    </div>
                                                    <h2 class="h3 mb-7 text-black">Confirmar Contraseña</h2>
                                                    <form method="post" action="#">
                                                        <div class="mb-3">
                                                            <input type="email" class="form-control" id="Contraconfi"/>
                                                                aria-describedby="emailHelp" required=""
                                                        </div>
                                                        <br></br>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary"
                                                                data-dismiss="modal">Cancelar</button>
                                                            <button type="button" class="btn btn-primary"
                                                                onclick="modificadoCorrectamente()">Guardar
                                                                cambios</button>
                                                            </div>  
                                                    </form>
                                                    
       </>
 }


export {editarUsuario}