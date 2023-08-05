
import React from "react";
import { Link } from "react-router-dom";


function Filtro2() {

    return (
        <>
            <div className="row">
                <div className="col-md-12 mb-5">
                    <div className="float-md-left mb-4">
                        <h2 className="text-black h5">Mira nuestros productos!</h2>
                    </div>
                    <div className="d-flex">
                        <div className="dropdown mr-1 ml-md-auto">
                            <button type="button" className="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuOffset"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Lo más reciente
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                                <a className="dropdown-item" href="#/">Orden alfabetico</a>
                                <a className="dropdown-item" href="#/">Más antiguo</a>
                                <a className="dropdown-item" href="#/">Promociones</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export { Filtro2 }


