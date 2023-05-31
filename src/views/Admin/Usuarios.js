import React from "react";
//import { UsuariosFormulario } from "../../components/Admin/Usuarios/UsuariosFomulario";
import { ListaUsuarios } from "../../components/Admin/Usuarios/ListaUsuarios";
import { UsuariosFormulario2 } from "../../components/Admin/Usuarios/UsuariosFormulario2";

function Usuarios() {
    return (
        <React.Fragment>
            <div className="Site-whap">
                <div className="site-section">
                    <div className="container">
                        <UsuariosFormulario2 />
                        <div className="row">
                            <ListaUsuarios />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export {Usuarios}