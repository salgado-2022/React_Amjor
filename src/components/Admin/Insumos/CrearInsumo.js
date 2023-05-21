import React, { useState, useRef, useEffect } from "react";
import Swal from 'sweetalert2';
import axios from "axios";
import { valnombre } from "./Validations/valnombre";
import { valdesc } from "./Validations/valdesc";
import { valprecio } from "./Validations/valprecio";

function CrearInsumo() {
    const [values, setValues] = useState({
        NombreInsumo: '',
        Descripcion: '',
        PrecioUnitario: '',
        ID_Estado: '2'
    });

    const initialValues = {
        NombreInsumo: '',
        Descripcion: '',
        PrecioUnitario: '',
        ID_Estado: '2'
    };

    const [errorname, setErrorname] = useState({});
    const [errordesc, setErrordesc] = useState({});
    const [errorprice, setErrorprice] = useState({});
    const [isChecked, setIsChecked] = useState(false);
    const checkbox = useRef();

    useEffect(() => {
        // Restablecer el estado del checkbox según los valores iniciales
        setIsChecked(values.ID_Estado === '1');
    }, [values]);

    const handleInput = (event) => {
        const { name, value, type, checked } = event.target;

        if (type === 'checkbox') {
            setIsChecked(checked);
            setValues(prev => ({ ...prev, [name]: checked ? '1' : '2' }));
        } else {
            setValues(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleBlurname = (event) => {
        setErrorname(valnombre(values));
    };

    const handleBlurdesc = (event) => {
        setErrordesc(valdesc(values));
    };

    const handleBlurprice = (event) => {
        setErrorprice(valprecio(values));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (
            errorname.NombreInsumo === "" &&
            errordesc.Descripcion === "" &&
            errorprice.PrecioUnitario === ""
        ) {
            if (
                JSON.stringify(values) === JSON.stringify(initialValues) ||
                !values.NombreInsumo ||
                !values.Descripcion ||
                !values.PrecioUnitario
            ) {
                return;
            }

            axios.post('http://localhost:4000/api/crearInsumo', values)
                .then(res => {
                    if (res.data.Status === "Success") {
                        Swal.fire({
                            title: 'Creado Correctamente',
                            text: "Tu insumo ha sido creado correctamente",
                            icon: 'success',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        setTimeout(function () { window.location = "insumos"; }, 670);
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
    };

    const handleReset = () => {
        setValues(initialValues);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} onReset={handleReset}>
                <br />
                <h2 className="text-black" id="title">Crear Insumo</h2>
                <div className="form-group">
                    <label htmlFor="NombreInsumo">Nombre</label>
                    <input type="text" className="form-control" id="NombreInsumo" name="NombreInsumo" value={values.NombreInsumo} onChange={handleInput} onBlur={handleBlurname} />
                    {errorname.NombreInsumo && <span className="text-danger"> {errorname.NombreInsumo}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="Descripcion">Descripción</label>
                    <input type="text" className="form-control" id="Descripcion" name="Descripcion" value={values.Descripcion} onChange={handleInput} onBlur={handleBlurdesc} />
                    {errordesc.Descripcion && <span className="text-danger"> {errordesc.Descripcion}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="PrecioUnitario">Precio</label>
                    <input type="text" className="form-control" id="PrecioUnitario" name="PrecioUnitario" value={values.PrecioUnitario} onChange={handleInput} onBlur={handleBlurprice} />
                    {errorprice.PrecioUnitario && <span className="text-danger"> {errorprice.PrecioUnitario}</span>}
                </div>
                <div className="form-check" style={{ marginBottom: '7px' }}>
                    <input type="checkbox" className="form-check-input" id="ID_Estado" name="ID_Estado" ref={checkbox} checked={isChecked} onChange={handleInput} />
                    <label className="form-check-label" htmlFor="estadoInsumo">Disponible</label>
                </div>
                <button type="submit" className="btn btn-primary" id="crearInsumo">Crear</button> &nbsp;
                <button type="reset" className="btn btn-dark" id="cancelarInsumo" >Cancelar</button>
            </form>
        </div>
    );
}

export { CrearInsumo };
