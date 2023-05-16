import React, { useState, useEffect } from "react";

import { useNavigate, useSearchParams } from 'react-router-dom';

import { ValidationPass } from './password'

import axios from "axios";

//sweetalert2
import Swal from 'sweetalert2';


function UpdataPassword() {

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const token = searchParams.get('token');


    useEffect(() => {
        if (token) {

            axios.post('http://localhost:4000/api/recovery', { token })
                .then(response => {
                    if (response.data.mensaje === "Token válido") {

                    } else {

                    }
                })
                .catch(error => {
                    //Manejo de errores por parte de la API

                    if (error.message === "Request failed with status code 401") {
                        Swal.fire({
                            title: 'Error!',
                            text: 'El enlace ha expirado.',
                            icon: 'error',
                            confirmButtonText: 'OK'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                navigate('/');
                                window.location.reload(true);
                            }
                        });
                    }
                });
        } else {

            // Manejar el caso cuando no se proporciona el token en la URL
            // por ejemplo, redirigir a una página de error o mostrar un mensaje de error
            navigate('/')
            window.location.reload(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token, navigate]);

    const [values, setValues] = useState({
        password: '',
        token
    })

    const [errorP, setErrorp] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const handleBlurPass = (event) => {
        setErrorp(ValidationPass(values));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (errorP.password === "") {
            axios.patch('http://localhost:4000/api/actualizar',values)
                .then(res => {
                    if (res.data.Status === "Success") {
                        Swal.fire({
                            icon: 'success',
                            title: 'Contraseña actualizada correctamente',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate('/login')
                    } else {
                        Swal.fire({ // Muestra la alerta de SweetAlert2
                            title: 'Error!',
                            text: 'Hubo un problema al registrar el usuario.',
                            icon: 'error',
                            confirmButtonText: 'OK'
                        });
                    }
                })
                .then(err => console.log(err));
        }
    }


    return (
        <section className="h-100 gradient-form mt-0" >
            <div className="container py-2 h-100">
                <div className=" d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-6 mt-3">
                        <div className="card rounded-3 text-black">
                            <div className="row g-0">
                                <div className="col justify-content-center align-items-center">
                                    <div className="card-body  mx-md-5 ">

                                        <div className="text-center">

                                            <h4 className="mt-1 mb-5 pb-1">Actualizar constraseña</h4>
                                        </div>

                                        <form onSubmit={handleSubmit}>
                                            <p>Ingrese su nueva contraseña </p>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="password" name="password" className="form-control"
                                                    placeholder="Contraseña" onChange={handleInput} onBlur={handleBlurPass} />
                                                {errorP.password && <span className="text-danger"> {errorP.password}</span>}

                                            </div>
                                            <div className="text-center  pt-1 mb-5 pb-1">
                                                <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit"
                                                >Registrar</button>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export { UpdataPassword }