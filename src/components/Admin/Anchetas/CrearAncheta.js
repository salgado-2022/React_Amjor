import "../../../assets/css/image_animation.css";
import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import axios from "axios";
import { valnomanch } from "./Validations/valnomanch";
import { valdescanch } from "./Validations/valdescanch";
import { valprecioanch } from "./Validations/valprecioanch";
import { ListarInsumos } from '../Anchetas/Modals/listarInsumos';
import { CSSTransition } from "react-transition-group";

function CrearAncheta() {

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

    const [imageUrl, setImageUrl] = useState(null);
    const [imageHolder, setImageHolder] = useState(null);

    const [modalShow3, setModalShow3] = React.useState(false);


    useEffect(() => {
    }, [values]);

    const handleInsumoClick = () => {
        setModalShow3(true);
    };

    const handleInput = (event) => {
        const { name, value, type } = event.target;
        setValues(prev => ({ ...prev, [name]: value }));

        if (type === 'file') {
            const selectedFile = event.target.files[0];
            if (selectedFile) {
                setImageUrl(URL.createObjectURL(selectedFile));
                setValues((prev) => ({ ...prev, image: selectedFile }));
                setImageHolder(selectedFile);
            }

            if(!selectedFile){
                setValues((prev) => ({ ...prev, image: imageHolder }));
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

    return (
    <>
        <div>
            <form onSubmit={handleSubmit} onReset={handleReset} encType="multipart/form-data">
            &nbsp;
                <h2 className="text-black" id="title">Crear Ancheta</h2>
                <div className="form-group">
                    <label htmlFor="nombreAncheta">Nombre</label>
                    <input type="text" className="form-control" id="NombreAncheta" name="NombreAncheta" value={values.NombreAncheta} onChange={handleInput} onBlur={handleBlurname} />
                    {errorname.NombreAncheta && <span className="text-danger"> {errorname.NombreAncheta}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="descAncheta">Descripción</label>
                    <input type="text" className="form-control" id="Descripcion" name="Descripcion" value={values.Descripcion} onChange={handleInput} onBlur={handleBlurdesc} />
                    {errordesc.Descripcion && <span className="text-danger"> {errordesc.Descripcion}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="PrecioUnitario">Precio</label>
                    <input type="text" className="form-control" id="PrecioUnitario" name="PrecioUnitario" value={values.PrecioUnitario} onChange={handleInput} onBlur={handleBlurprice} />
                    {errorprice.PrecioUnitario && <span className="text-danger"> {errorprice.PrecioUnitario}</span>}
                </div>
                <div className="row">
                    <div className="form-group col-4">
                        <button type="button" className="btn btn-add" id="agregarInsumo" onClick={() => {handleInsumoClick()}}>Agregar Insumos</button>
                    </div>&nbsp; &nbsp;          
                    <div className="form-group col-6">
                        <input type="file" className="form-control" id="image" name="image" accept=".jpg, .png" onChange={handleInput} style={{ display: "none" }} />
                        <label htmlFor="image" className="btn btn-image">
                            <i className="icon-image"></i>&nbsp;
                            Imagen de la Ancheta
                        </label>
                    </div>
                </div>
                <CSSTransition in={!!imageUrl} timeout={600} classNames="image-animation" unmountOnExit>
                <img src={imageUrl} alt="" style={{ marginTop: "10px", maxWidth: "200px"}}/>
                </CSSTransition>
                <div className="form-group"><h5 id="totalAncheta">Total: 0$</h5></div>
                <button type="submit" className="btn btn-primary" id="crearAncheta">Crear</button> &nbsp;
                <button type="reset" className="btn btn-dark" id="cancelarAncheta">Cancelar</button>
            </form>
        </div>
        <ListarInsumos
        show={modalShow3}
        onHide={() => setModalShow3(false)}
        />
    </>
    );
}

export { CrearAncheta }