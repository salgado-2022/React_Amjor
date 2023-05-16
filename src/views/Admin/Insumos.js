import React from "react";
import { CrearInsumo } from "../../components/Admin/Insumos/CrearInsumo";
import { TablaInsumo } from "../../components/Admin/Insumos/TablaInsumo";

function Insumos() {
    return (
            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <CrearInsumo/>
                        </div>
                        <div className="col-8">
                            <TablaInsumo/>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export { Insumos }