import React from "react";
import { ConfiFormulario } from "../../components/Admin/Configuracion/ConfiFormulario";
import { ListaConfiguracion} from "../../components/Admin/Configuracion/ListaConfiguracion";

function Configuracion() {
    return (
        <React.Fragment>
            <div className="Site-whap">
                <div className="site-section">
                    <div className="container">
                        <ConfiFormulario />
                        <div className="row">
                            <ListaConfiguracion />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export {Configuracion}