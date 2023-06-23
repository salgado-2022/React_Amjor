import React from "react";

// //AXIOS
// import axios from "axios";

// //sweetalert2
// import Swal from 'sweetalert2';

function TablaVenta() {
    return (
        <>
            <div className="site-blocks-table">
                <div className="site-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h2 className="h3 mb-3 text-black">Ventas</h2>
                            </div>
                            <div className="col-12">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Nombre Cliente</th>
                                            <th scope="col">Detalle</th>
                                            <th scope="col">Fecha para Entrega</th>
                                            <th scope="col">Dirección Entrega</th>
                                            <th scope="col">Precio</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-group-divider">

                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export { TablaVenta };