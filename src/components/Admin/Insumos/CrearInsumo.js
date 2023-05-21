import React, {useState, useRef} from "react";
import Swal from 'sweetalert2';
import axios from "axios";
import { ValidInsumos } from "./ValidInsumos";
import { EditarInsumo } from './Modals/editarInsumo';


function CrearInsumo() {

    const [values, setValues] = useState({
        NombreInsumo: '', 
        Descripcion: '',
        PrecioUnitario: '',
        ID_Estado: '2'
    })

    const initialValues = {
    NombreInsumo: '',
    Descripcion: '',
    PrecioUnitario: '',
    ID_Estado: ''
  };

    const [errors, setErrors] = useState({});   

    const checkbox = useRef();

    const [estado, setEstado] = useState('');

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value}))
        if (checkbox.current.checked) {
            setEstado('2')
          } else {
            setEstado('1')
          }
    }

    const handleBlur = (event) => {
        setErrors(ValidInsumos(values));
    }

    const handleReset = () => {
        setValues(initialValues);
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (errors.NombreInsumo === "" && errors.Descripcion === "" && errors.PrecioUnitario === "") {
            axios.post('http://localhost:4000/api/crearInsumo', values)
                .then(res => {

                    if (res.data.Status === "Success") {
                        Swal.fire({
                            title: 'Creado Correctamente',
                            text: "Tu insumo ha sido creado correctamente",
                            icon: 'success',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        setTimeout(function(){ window.location = "insumos"; }, 1000);
                    } else {
                        Swal.fire({
                            title: 'Error!',
                            text: 'Hubo un problema al registrar el insumo.',
                            icon: 'error',
                            confirmButtonText: 'OK'
                        });
                    }
                })  
                .then(err => console.log(err));          
        }
    }

    return(
    <>
        <div>
            <form onSubmit={handleSubmit}>
                        <br/>
                        <h2 className="text-black" id="title">Crear Insumo</h2>
                            <div className="form-group">
                                <label for="NombreInsumo">Nombre</label>
                                <input type="text" className="form-control" id="NombreInsumo" name="NombreInsumo" onChange={handleInput} onBlur={handleBlur}/>
                                {errors.NombreInsumo && <span className="text-danger"> {errors.NombreInsumo}</span>}
                            </div>
                            <div className="form-group">
                                <label for="Descripcion">Descripción</label>
                                <input type="text" className="form-control" id="Descripcion" name="Descripcion" onChange={handleInput} onBlur={handleBlur}/>
                                {errors.Descripcion && <span className="text-danger"> {errors.Descripcion}</span>}
                            </div>
                            <div className="form-group">
                                <label for="PrecioUnitario">Precio</label>
                                <input type="text" className="form-control" id="PrecioUnitario" name="PrecioUnitario" onChange={handleInput} onBlur={handleBlur}/>
                                {errors.PrecioUnitario && <span className="text-danger"> {errors.PrecioUnitario}</span>}
                            </div>
                            <div className="form-check" style={{marginBottom: '7px'}}>
                                <input type="checkbox" className="form-check-input" id="ID_Estado" name="ID_Estado" value={estado} ref={checkbox} onChange={handleInput} onBlur={handleBlur}/>
                                <label className="form-check-label" for="estadoInsumo">Disponible</label>
                            </div>
                            <button type="submit" className="btn btn-primary" id="crearInsumo">Crear</button> &nbsp;
                            <button type="reset" className="btn btn-dark" id="cancelarInsumo" onClick={handleReset}>Cancelar</button>
                    </form>
        </div>
        <EditarInsumo
        estado={estado}
    />
    </>
                    
    );
}
export { CrearInsumo }