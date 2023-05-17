import React from "react";
import '../../../assets/css/formunUsuarios.css'

function UsuariosFormulario (){

    return(
        <>
        <div class="bg-light py-3">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 mb-0"><a href="/">Home</a> <span class="mx-2 mb-0">/</span> <strong
                            class="text-black">Nuevo Usuario</strong></div>
                </div>
            </div>
        </div>

        <div class="site-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h1 class="h3 mb-3 text-black">Crear un nuevo Usuario.</h1>
                    </div>
                    <div class="col-md-12">
                        <div class="p-3 p-lg-12 border">
                            <div class="form-group row">
                                <div class="col-md-6">
                                    <label for="c_fname" class="text-black">DOMUENTO DE IDENTIDAD <span
                                            class="text-danger">*</span></label>
                                    <input type="number" class="form-control" id="documento" name="c_fidentifi" placeholder="12456"/>
                                    <h6>Solo números, sin letras ni puntos</h6>
                                </div>
                                <div class="col-md-6">
                                    <label for="c_lname" class="text-black">NOMBRES COMPLETOS<span
                                            class="text-danger">*</span></label>
                                    <input type="text" class="form-control" id="Nombre" name="c_lname" placeholder="e.j: Juan Morales"/>
                                    <h6>Solo letras, puedes con espacios y acentos</h6>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-8">
                                    <label for="c_email" class="text-black">CORREO ELECTRONICO <span
                                            class="text-danger">*</span></label>
                                    <input type="text" class="form-control" id="Correo" name="c_email" placeholder="juan@gmail.com"/>
                                </div>
                            </div>
                            &nbsp;
                            <br></br>
                            <div id="Roles">
                            <button>Seleccione el rol que está asociado</button> 
                            <br></br>
                            <div>
                                <div id="Roles-content">
                                 <input type="checkbox" id="option1"/>
                                    <label for="option1">Administrador</label><br></br>
                                     <input type="checkbox" id="option2"/>
                                        <label for="option2">Empleado</label><br></br>
                                        <input type="checkbox" id="option3"/>
                                            <label for="option3">Cliente</label><br></br>
                                      </div>
                                      </div>   
                                </div> 
                            <div class="col-md-12">
                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <label for="c_email" class="text-black">CONTRASEÑA <span
                                                class="text-danger">*</span></label>
                                        <input type="password" class="form-control" id="Contra" name="c_contra"/>
                                            <h6>Minimo de 5 caracteres</h6><br></br>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group row">
                                            <div class="col-md-12">
                                                <label for="c_email" class="text-black">CONFIRMAR CONTRASEÑA <span
                                                        class="text-danger">*</span></label>
                                                <input type="password" class="form-control" id="Contraconfi"
                                                    name="c_contra"/>
                                            </div>
                                            <br></br>&nbsp;
                                        </div>
                                        <button class="save-button btn-btn col-7">Guardar el nuevo Usuario</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    <body>
    <label class="toggle-container"/>
     <input type="checkbox" id="theme-toggle"/>
     <span class="toggle-slider"></span>
     <span class="toggle-label">Cambiar tema</span>
    </body>
   
    </>
    );
}

export{UsuariosFormulario}