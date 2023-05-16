import React from "react";

function CrearAncheta(){

    return(
        <div id="crear">
                        <h2 className="text-black" id="title">Crear Ancheta</h2>
                        <div className="form-group">
                            <label for="nombreAncheta">Nombre</label>
                            <input type="text" className="form-control" id="nombreAncheta"/>
                        </div>
                        <div className="form-group">
                            <label for="descAncheta">Descripción</label>
                            <input type="text" className="form-control" id="descAncheta"/>
                        </div>
                        <div className="form-group">
                            <label for="imagenAncheta">Subir Imagen</label>
                            <input type="file" className="form-control" id="imagenAncheta"/>
                        </div>
                        <h5 id="totalAncheta">Total: 0$</h5>
                        <div className="form-check" style={{marginBottom: '7px'}}>
                            <input type="checkbox" className="form-check-input" id="estadoAncheta"/>
                            <label className="form-check-label" for="estadoAncheta">Disponible</label>
                        </div>
                        <button type="submit" className="btn btn-primary" id="crearAncheta">Crear</button> &nbsp;
                        <button type="submit" className="btn btn-dark" id="cancelarAncheta">Cancelar</button>
                    </div>
    );
}

export {CrearAncheta}