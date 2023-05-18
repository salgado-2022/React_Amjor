import React from "react";

function ListaUsuarios(){
    return(
        <>
        <div class="col-12">
        <div class="row justify-content-end">
            <div class="input-group mb-3 col-3">
                <input type="text" class="form-control" placeholder="Buscar Usuario"/>
                <div class="input-group-append">
                </div>
            </div>
        </div>
    </div>
    <table class="table">
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
            <th scope="row">1</th>
            <td>Juan</td>
            <td>juanpapas@misena.edu.co</td>
            <td>*******</td>
            <td>Activo</td>
            <td><label class="switch">
                    <input type="checkbox"/>
                    <span class="slider"></span>
                </label></td>
                <td><a href="#!" class="icon-edit" onclick="modificarUsuario()"> </a></td>
                <td><a href="#!" class="icon-trash" onclick="eliminarUsuario()"> </a></td>
            <tr>
                <th scope="row">2</th>
                <td>Fabian</td>
                <td>fabian@calditorico.com</td>
                <td>*******</td>
                <td>Desactivo</td>
                <td><label class="switch">
                        <input type="checkbox"/>
                        <span class="slider"></span>

                    </label></td>
                    <td><a href="#!" class="icon-edit" onclick="modificarUsuario()"> </a></td>
                    <td><a href="#!" class="icon-trash" onclick="eliminarUsuario()"> </a></td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Sofia</td>
                <td>sofiacarson@gmail.com</td>
                <td>*******</td>
                <td>Activa</td>
                <td><label class="switch">
                        <input type="checkbox"/>
                        <span class="slider"></span>
                    </label></td>
                    <td><a href="#!" class="icon-edit" onclick="modificarUsuario()"> </a></td>
                    <td><a href="#!" class="icon-trash" onclick="eliminarUsuario()"> </a></td>
            </tr>
        </tbody>
    </table>

         </>
    );

}

export{ListaUsuarios}