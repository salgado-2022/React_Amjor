import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


//sweetalert2
import Swal from 'sweetalert2';

//Importación de imagenes

function Form() {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:4000/api/login', values)
            .then(res => {
                if (res.data.Status === "Admin") {
                    navigate('/shop')
                }else{
                    Swal.fire({ // Muestra la alerta de SweetAlert2
                        title: 'Error!',
                        text: res.data.Error,
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                }
            })
            .then(err => console.log(err));
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
                                            <h4 className="mt-1 mb-5 pb-1">Iniciar Sesión</h4>
                                        </div>

                                        <form onSubmit={handleSubmit}>
                                            <p>Porfavor ingrese a su cuenta</p>

                                            <div className="form-outline mb-4">
                                                <input type="email" id="email" name="email"className="form-control"
                                                    placeholder="Email"
                                                    onChange={e => setValues({ ...values, email: e.target.value })} />

                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="password" name="password"className="form-control"
                                                    placeholder="Contraseña" onChange={e => setValues({ ...values, password: e.target.value })} />
                                            </div>

                                            <div className="text-center pt-1 mb-5 pb-1">
                                                <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit"
                                                >Login</button>
                                                <a className="text-muted" href="#!">Olvidaste tu contraseña?</a>
                                            </div>

                                            <div className="d-flex align-items-center justify-content-center pb-4">
                                                <p className="mb-0 me-2">No tienes cuenta?</p>

                                                <Link to="/register">
                                                    <button type="button" className="btn btn-outline-danger ml-3">Crear cuenta</button>
                                                </Link>
                                            </div>

                                        </form>

                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                        <h4 className="mb-4">We are more than just a company</h4>
                                        <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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