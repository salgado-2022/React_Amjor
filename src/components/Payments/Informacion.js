import React from "react";

function Informacion() {
    return (

        <div className="col-md-6 mb-5 mb-md-0">
            <h2 className="h3 mb-3 text-black">Información</h2>
            <div className="p-3 p-lg-5 border">
                <div className="form-group">
                    <label htmlFor="c_country" className="text-black">País de residencia <span className="text-danger">*</span></label>
                    <select id="c_country" className="form-control">
                        <option value="1">Colombia</option>

                    </select>
                </div>
                <div className="form-group row">
                    <div className="col-md-6">
                        <label htmlFor="nombres" className="text-black">Nombres <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="nombres" name="nombres" />
                        <p id="nombresError">Los nombres solo pueden contener letras.</p>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="apellidos" className="text-black">Apellidos <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="apellidos" name="apellidos" />
                        <p id="apellidosError">Los apellidos solo pueden contener letras.</p>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-md-12">
                        <label htmlFor="direccion_entrega" className="text-black">Dirección de entrega <span
                            className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="direccion_entrega" name="direccion_entrega"
                            placeholder="Dirección donde se entregará el pedido" />
                    </div>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Apartamento, suite, torre etc. (opcional)" />
                </div>

                <div className="form-group row">
                    <div className="col-md-6">
                        <label htmlFor="municipio" className="text-black">Municipio <span className="text-danger">*</span></label>
                        <select id="municipio" className="form-control">
                            <option value="1">Selecciona un municipio</option>

                            <option value="2">Barbosa</option>
                            <option value="3">Bello</option>
                            <option value="4">Caldas</option>
                            <option value="5">Copacabana</option>
                            <option value="6">Envigado</option>
                            <option value="7">Girardota</option>
                            <option value="8">Itagüí</option>
                            <option value="9">La Estrella</option>
                            <option value="10">Medellín</option>
                            <option value="11">Sabaneta</option>
                        </select>
                        <p id="municipioError">Por favor elija un municipio.</p>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="barrio" className="text-black">Barrio <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="barrio" name="barrio" />
                        <p id="barrioError">El nombre del barrio solo puede contener letras y números.</p>
                    </div>
                </div>
                <div className="form-group row mb-5">
                    <div className="col-md-6">
                        <label htmlFor="correo_electronico" className="text-black">Correo electrónico <span
                            className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="correo_electronico" name="correo_electronico"
                            placeholder="tucorreo@gmail.com"/>
                            <p id="correo_electronicoError">Por favor ingrese un correo electrónico válido.</p>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="numero_celular" className="text-black">Celular <span className="text-danger">*</span></label>
                        <input type="number" className="form-control" id="numero_celular" name="numero_celular"
                            placeholder="Número de celular"/>
                            <p id="numero_celularError">Por favor ingrese un número de celular válido.</p>
                    </div>

                </div>

                <div className="form-group">
                    <label htmlFor="notas_adicionales" className="text-black">Notas adicionales</label>
                    <textarea name="notas_adicionales" id="notas_adicionales" cols="30" rows="5" className="form-control"
                        placeholder="Aquí puedes escribir cualquier información adicional que desees brindarnos..."></textarea>
                </div>

            </div>
        </div>
    );
}

export {Informacion}