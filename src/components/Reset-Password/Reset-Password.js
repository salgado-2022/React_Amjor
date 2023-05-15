import React, { useState } from "react";

//sweetalert2
import Swal from 'sweetalert2';

//Axios
import axios from "axios";

function ResetPassword() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:4000/api/recuperar", { email })
            .then((response) => {
                if (response.data.existe === true) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Correo enviado Correctamente',
                        confirmButtonText: 'OK'
                    })
                }
            })
            .catch((error) => {
                // Aquí puedes manejar los errores
                console.error(error);
            });
    };

    return (
        <section className="h-100 gradient-form mt-0">
            <div className="container py-2 h-100">
                <div className=" d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-6 mt-3">
                        <div className="card rounded-3 text-black">
                            <div className="row g-0">
                                <div className="col justify-content-center align-items-center">
                                    <div className="card-body  mx-md-5 ">
                                        <div className="text-center">
                                            <h4 className="mt-1 mb-5 pb-1">Enviar email de recuperación</h4>
                                        </div>

                                        <form onSubmit={handleSubmit}>
                                            <p>Por favor ingrese su correo electrónico</p>

                                            <div className="form-outline mb-4">
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    className="form-control"
                                                    placeholder="Email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                            <div className="text-center  pt-1 mb-5 pb-1">
                                                <button
                                                    className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                                                    type="submit"
                                                >
                                                    Enviar
                                                </button>
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

export { ResetPassword };
