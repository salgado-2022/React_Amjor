import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

//sweetalert2
import Swal from 'sweetalert2';

//Axios para conectar a la api
import axios from "axios";

//Validaciones de formulario
import { Validation } from './validation';
import { ValidationPass } from './password'

//Archivos CSS
import '../../assets/css/alertas.css'


function FormRegister() {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()

    const [errors, setErrors] = useState({});
    const [errorP, setErrorp] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const handleBlur = (event) => {
        setErrors(Validation(values));
    }

    const handleBlurPass = (event) => {
        setErrorp(ValidationPass(values));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (errors.email === "" && errorP.password === "") {
            axios.post('http://localhost:4000/api/register', values)
                .then(res => {
                    if (res.data.Status === "Success") {
                        Swal.fire({
                            icon: 'success',
                            title: 'Te has registrado correctamente',
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

                                            <h4 className="mt-1 mb-5 pb-1">Crear una cuenta</h4>
                                        </div>

                                        <form onSubmit={handleSubmit}>
                                            <p>Correo electrónico</p>
                                            <div className="form-outline mb-4">
                                                <input type="email" id="email" name="email" className="form-control"
                                                    placeholder="tucorreo@gmail.com" onChange={handleInput} onBlur={handleBlur}
                                                />
                                                {errors.email && <span className="text-danger"> {errors.email}</span>}
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label>Contraseña</label>
                                                <input type="password" id="password" name="password" className="form-control"
                                                    placeholder="Contraseña" onChange={handleInput} onBlur={handleBlurPass} />
                                                {errorP.password && <span className="text-danger"> {errorP.password}</span>}

                                            </div>

                                            {/* <div className="form-outline mb-4">
                                                <input type="password" id="form2Example22" className="form-control"
                                                    placeholder="Contraseña" />
                                            </div> */}

                                            <div className="text-center  pt-1 mb-5 pb-1">
                                                <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit"
                                                >Registrarse</button>
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

export { FormRegister }
