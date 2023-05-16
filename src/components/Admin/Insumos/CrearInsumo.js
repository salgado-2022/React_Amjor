import React, {useState} from "react";
import { ValidInsumos } from "./ValidInsumos";



function CrearInsumo() {
    const [values, setValues] = useState({
        nombreInsumo: '',
        descInsumo: '',
        precioInsumo: ''
    })

    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const handleBlur = (event) => {
        setErrors(ValidInsumos(values));
    }

    return(
                    <div id="crear">
                        <br/>
                        <h2 class="text-black" id="title">Crear Insumo</h2>
                            <div class="form-group">
                                <label for="nombreInsumo">Nombre</label>
                                <input type="text" class="form-control" id="nombreInsumo" name="nombreInsumo" onChange={handleInput} onBlur={handleBlur}/>
                                {errors.nombreInsumo && <span className="text-danger"> {errors.nombreInsumo}</span>}
                            </div>
                            <div class="form-group">
                                <label for="descInsumo">Descripción</label>
                                <input type="text" class="form-control" id="descInsumo" name="descInsumo"/>
                            </div>
                            <div class="form-group">
                                <label for="precioInsumo">Precio</label>
                                <input type="text" class="form-control" id="precioInsumo" name="precioInsumo"/>
                            </div>
                            <div class="form-check" style={{marginBottom: '7px'}}>
                                <input type="checkbox" class="form-check-input" id="estadoInsumo" name="estadoInsumo"/>
                                <label class="form-check-label" for="estadoInsumo">Disponible</label>
                            </div>
                            <button type="submit" class="btn btn-primary" id="crearInsumo">Crear</button> &nbsp;
                            <button type="submit" class="btn btn-dark" id="cancelarInsumo">Cancelar</button>
                    </div>  
    );
}
export { CrearInsumo }