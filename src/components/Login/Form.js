import React, { useState } from "react";
import { Link} from "react-router-dom";

//Axios 
import axios from "axios";

//sweetalert2
import Swal from 'sweetalert2';

//Importación de imagenes

function Form() {
    const apiUrl = process.env.REACT_APP_AMJOR_API_URL;

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    axios.defaults.withCredentials = true;

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${apiUrl}/api/login`, values)
            .then(res => {

                if (res.data.Status === "Success") {

                    const redirectTo = res.data.redirectTo;
                    window.location.href = redirectTo;

                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: "Correo u contraseña invalidos",
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <section className="h-100 gradient-form mt-5" >
            <div className="container py-2 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-10">
                        <div className="card rounded-3 text-black">
                            <div className="row g-0">
                                <div className="col-lg-6">
                                    <div className="card-body p-md-2 mx-md-4">
                                        <div className="text-center mt-5">
                                            <h4 className="mt-1 mb-5 pb-1">Iniciar sesión</h4>
                                        </div>

                                        <form onSubmit={handleSubmit}>
                                            <p>Por favor ingrese sus credenciales</p>

                                            <div className="form-outline mb-4">
                                                <input type="email" id="email" name="email" className="form-control"
                                                    placeholder="Correo electrónico"
                                                    onChange={e => setValues({ ...values, email: e.target.value })} />

                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="password" name="password" className="form-control"
                                                    placeholder="Contraseña" onChange={e => setValues({ ...values, password: e.target.value })} />
                                            </div>

                                            <div className="text-center pt-1 mb-5 pb-1">
                                                <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit"
                                                >Ingresar</button>
                                                <Link to="/reset" className="text-muted">¿Olvidaste tu contraseña?</Link>
                                            </div>

                                            <div className="d-flex align-items-center justify-content-center pb-4">
                                                <p className="mb-0 me-2">¿No tienes cuenta?</p>

                                                <Link to="/register">
                                                    <button type="button" className="btn btn-outline-danger ml-3">Crear cuenta</button>
                                                </Link>
                                            </div>

                                        </form>

                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                        <h4 className="mb-4">¿Por qué crear una cuenta?</h4>
                                        <p className="small mb-0">Crear una cuenta le permitirá realizar una compra de cualquier
                                            ancheta de forma fácil y rápida.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Form }