import React, {useState, useRef, useEffect} from "react";
import Swal from 'sweetalert2';
import axios from "axios";
import { valnomanch } from "./Validations/valnomanch";
import { valdescanch } from "./Validations/valdescanch";
import { valprecioanch } from "./Validations/valprecioanch";

function CrearAncheta(){

    const [values, setValues] = useState({
        NombreAncheta: '',
        Descripcion: '',
        PrecioUnitario: '',
        ID_Estado: '2',
        image: '' 
    });

    const initialValues = {
        NombreAncheta: '',
        Descripcion: '',
        PrecioUnitario: '',
        ID_Estado: '2',
        image: ''
    };

    const [errorname, setErrorname] = useState({});
    const [errordesc, setErrordesc] = useState({});
    const [errorprice, setErrorprice] = useState({});
    const [isChecked, setIsChecked] = useState(false);
    const checkbox = useRef();
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        // Restablecer el estado del checkbox según los valores iniciales
        setIsChecked(values.ID_Estado === '1');
    }, [values]);

    const handleInput = (event) => {
        const { name, value, type, checked } = event.target;
        if (type === 'checkbox') {
            setIsChecked(checked);
            setValues(prev => ({ ...prev, [name]: checked ? '1' : '2' }));
        } else{
            setValues(prev => ({ ...prev, [name]: value }));
        }
        
        if (type === 'file'){
            const selectedFile = event.target.files[0];
            if (selectedFile) {
                setImageUrl(URL.createObjectURL(selectedFile));
                setValues((prev) => ({ ...prev, image: selectedFile })); // Set the image property in the values state
              }
        }
    };


    const handleBlurname = (event) => {
        setErrorname(valnomanch(values));
    };

    const handleBlurdesc = (event) => {
        setErrordesc(valdescanch(values));
    };

    const handleBlurprice = (event) => {
        setErrorprice(valprecioanch(values));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (
            errorname.NombreAncheta === "" &&
            errordesc.Descripcion === "" &&
            errorprice.PrecioUnitario === "" 
        ) {
            if (!values.image) {
                Swal.fire({
                            title: 'Error',
                            text: "Debes subir una imagen de la ancheta",
                            icon: 'error',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        return;
              }
            if (
                JSON.stringify(values) === JSON.stringify(initialValues) ||
                !values.NombreAncheta ||
                !values.Descripcion ||
                !values.PrecioUnitario
            ) {
                return;
            }
            const formdata = new FormData();
            formdata.append('NombreAncheta', values.NombreAncheta);
            formdata.append('Descripcion', values.Descripcion);
            formdata.append('PrecioUnitario', values.PrecioUnitario);
            formdata.append('ID_Estado', values.ID_Estado);
            formdata.append('image', values.image);
            axios.post('http://localhost:4000/api/crearAncheta', formdata)
                .then(res => {
                    if (res.data.Status === "Success") {
                        Swal.fire({
                            title: 'Creado Correctamente',
                            text: "Tu ancheta ha sido creada correctamente",
                            icon: 'success',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        setTimeout(function () { window.location = "anchetas"; }, 670);
                    } else {
                        Swal.fire({
                            title: 'Error!',
                            text: 'Hubo un problema al registrar la ancheta.',
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
        setImageUrl(null);
    };

    return(
                <div>
                    <form onSubmit={handleSubmit} onReset={handleReset} encType="multipart/form-data">
                        <h2 className="text-black" id="title">Crear Ancheta</h2>
                        <div className="form-group">
                            <label for="nombreAncheta">Nombre</label>
                            <input type="text" className="form-control" id="NombreAncheta" name="NombreAncheta" value={values.NombreAncheta} onChange={handleInput} onBlur={handleBlurname}/>
                            {errorname.NombreAncheta && <span className="text-danger"> {errorname.NombreAncheta}</span>}
                        </div>
                        <div className="form-group">
                            <label for="descAncheta">Descripción</label>
                            <input type="text" className="form-control" id="Descripcion" name="Descripcion" value={values.Descripcion} onChange={handleInput} onBlur={handleBlurdesc}/>
                            {errordesc.Descripcion && <span className="text-danger"> {errordesc.Descripcion}</span>}
                        </div>
                        <div className="form-group">
                            <label for="PrecioUnitario">Precio</label>
                            <input type="text" className="form-control" id="PrecioUnitario" name="PrecioUnitario" value={values.PrecioUnitario} onChange={handleInput} onBlur={handleBlurprice}/>
                            {errorprice.PrecioUnitario && <span className="text-danger"> {errorprice.PrecioUnitario}</span>}
                        </div>
                        <div className="form-group">
                            <input type="file" className="form-control" id="image" name="image" accept=".jpg, .png" onChange={handleInput} style={{display:"none"}}/>
                                <label for="image" style={{color: "black", height: "50px", width: "180px", backgroundColor: "#feeb75", borderRadius: "8px", fontSize: "16px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <i className="icon-image"></i>&nbsp;
                                Imagen de la ancheta
                                </label>
                                {imageUrl && <img src={imageUrl} alt="Imagen de la ancheta" style={{ marginTop: "10px", maxWidth: "200px" }} />} {/* Mostrar la imagen si hay una URL */}
                        </div>
                        <h5 id="totalAncheta">Total: 0$</h5>
                        <div className="form-check" style={{marginBottom: '7px'}}>
                            <input type="checkbox" className="form-check-input" id="ID_Estado" name="ID_Estado" ref={checkbox} checked={isChecked} onChange={handleInput}/>
                            <label className="form-check-label" for="estadoAncheta">Disponible</label>
                        </div>
                        <button type="submit" className="btn btn-primary" id="crearAncheta">Crear</button> &nbsp;
                        <button type="reset" className="btn btn-dark" id="cancelarAncheta">Cancelar</button>
                    </form>
                </div>
    );
}

export {CrearAncheta}