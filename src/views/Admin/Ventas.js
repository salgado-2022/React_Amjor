import React from "react";

import { TablaVenta } from "../../components/Admin/Ventas/tablaVentas";

function Ventas() {
    return (
        <div className="site-section">
            <div className="container">
                <TablaVenta />
            </div>
        </div>
    );
}

export { Ventas }
