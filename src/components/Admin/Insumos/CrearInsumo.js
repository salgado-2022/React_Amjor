import React, {useState} from "react";
import Swal from 'sweetalert2';
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

    const handleSubmit = (event) => {
        event.preventDefault();
        if (errors.nombreInsumo === "" && errors.descInsumo === "" && errors.precioInsumo === "") {
            Swal.fire({
                title: 'Creado Correctamente',
                text: "Tu insumo ha sido creado correctamente",
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
              })
            setTimeout(function(){ window.location = "insumos"; }, 1000);
        }
    }

    function refreshPage() {
        window.location.reload(false);
      }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                        <br/>
                        <h2 class="text-black" id="title">Crear Insumo</h2>
                            <div class="form-group">
                                <label for="nombreInsumo">Nombre</label>
                                <input type="text" class="form-control" id="nombreInsumo" name="nombreInsumo" onChange={handleInput} onBlur={handleBlur}/>
                                {errors.nombreInsumo && <span className="text-danger"> {errors.nombreInsumo}</span>}
                            </div>
                            <div class="form-group">
                                <label for="descInsumo">Descripción</label>
                                <input type="text" class="form-control" id="descInsumo" name="descInsumo" onChange={handleInput} onBlur={handleBlur}/>
                                {errors.descInsumo && <span className="text-danger"> {errors.descInsumo}</span>}
                            </div>
                            <div class="form-group">
                                <label for="precioInsumo">Precio</label>
                                <input type="text" class="form-control" id="precioInsumo" name="precioInsumo" onChange={handleInput} onBlur={handleBlur}/>
                                {errors.precioInsumo && <span className="text-danger"> {errors.precioInsumo}</span>}
                            </div>
                            <div class="form-check" style={{marginBottom: '7px'}}>
                                <input type="checkbox" class="form-check-input" id="estadoInsumo" name="estadoInsumo"/>
                                <label class="form-check-label" for="estadoInsumo">Disponible</label>
                            </div>
                            <button type="submit" class="btn btn-primary" id="crearInsumo">Crear</button> &nbsp;
                            <input type="button" class="btn btn-dark" id="cancelarInsumo" onClick={refreshPage} value="Cancelar"/>
                    </form>
        </div>
                    
    );
}
export { CrearInsumo }