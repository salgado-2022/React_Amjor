import React from "react";


function Filtro() {

    return (
        <div className="col-md-3 order-1 mb-5 mb-md-0">


            <div className="border p-4 rounded mb-4">
                <div className="mb-4">
                    <h3 className="mb-3 h6 text-uppercase text-black d-block">Filtrar por precio</h3>
                    <div id="slider-range" className="border-primary"></div>
                    <input type="text" name="text" id="amount" className="form-control border-0 pl-0 bg-white" disabled />
                </div>

                <div className="mb-4">
                    <h3 className="mb-3 h6 text-uppercase text-black d-block">Tamaño</h3>
                    <label htmlFor="s_sm" className="d-flex">
                        <input type="checkbox" id="s_sm" className="mr-2 mt-1" /> <span className="text-black">Pequeña</span>
                    </label>
                    <label htmlFor="s_md" className="d-flex">
                        <input type="checkbox" id="s_md" className="mr-2 mt-1" /> <span className="text-black">Mediana </span>
                    </label>
                    <label htmlFor="s_lg" className="d-flex">
                        <input type="checkbox" id="s_lg" className="mr-2 mt-1" /> <span className="text-black">Grande</span>
                    </label>
                </div>

                <div className="mb-4">
                    <h3 className="mb-3 h6 text-uppercase text-black d-block">Motivos</h3>
                    <a href="#/" className="d-flex color-item align-items-center">
                        <span className="bg-primary color d-inline-block rounded-circle mr-2"></span> <span
                            className="text-black">Cumpleaños </span>
                    </a>
                    <a href="#/" className="d-flex color-item align-items-center">
                        <span className="bg-primary color d-inline-block rounded-circle mr-2"></span> <span className="text-black">Bodas
                        </span>
                    </a>
                    <a href="#/" className="d-flex color-item align-items-center">
                        <span className="bg-primary color d-inline-block rounded-circle mr-2"></span> <span
                            className="text-black">Grados </span>
                    </a>
                    <a href="#/" className="d-flex color-item align-items-center">
                        <span className="bg-primary color d-inline-block rounded-circle mr-2"></span> <span
                            className="text-black">Halloween </span>
                    </a>
                    <a href="#/" className="d-flex color-item align-items-center">
                        <span className="bg-primary color d-inline-block rounded-circle mr-2"></span> <span
                            className="text-black">Navidad </span>
                    </a>
                    <a href="#/" className="d-flex color-item align-items-center">
                        <span className="bg-primary color d-inline-block rounded-circle mr-2"></span> <span
                            className="text-black">Desayunos </span>
                    </a>
                    <a href="#/" className="d-flex color-item align-items-center">
                        <span className="bg-primary color d-inline-block rounded-circle mr-2"></span> <span
                            className="text-black">Bandejas </span>
                    </a>
                    <a href="#/" className="d-flex color-item align-items-center">
                        <span className="bg-primary color d-inline-block rounded-circle mr-2"></span> <span className="text-black">Amor
                            y amistad </span>
                    </a>
                    <a href="#/" className="d-flex color-item align-items-center">
                        <span className="bg-primary color d-inline-block rounded-circle mr-2"></span> <span className="text-black">Otras
                        </span>
                    </a>
                </div>

            </div>
        </div>

    );

}

export { Filtro }