import React, { useState, useEffect } from "react";

import { useNavigate, useSearchParams } from 'react-router-dom';

import { ValidationPass } from './password'

import axios from "axios";

//sweetalert2
import Swal from 'sweetalert2';


function UpdataPassword() {
    const apiUrl = process.env.REACT_APP_AMJOR_API_URL;

    /* Estas líneas de código usan hooks de la biblioteca `react-router-dom` para acceder y extraer el
    parámetro `token` de los parámetros de búsqueda de URL. */
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const token = searchParams.get('token');


    /* El hook `useEffect` se usa para realizar efectos secundarios en un componente funcional. En este caso lo es
    comprobando si hay un `token` en los parámetros de búsqueda de URL. Si lo hay, envía una solicitud POST a
    un punto final de la API de recuperación con el `token` como datos. Si la solicitud falla con un error 401, muestra
    un mensaje de error SweetAlert2 y redirige al usuario a la página de inicio. Si no hay un `token`, es
    redirige al usuario a la página de inicio. El gancho `useEffect` también depende del `token` y
    `Navegar` variables, por lo que se volverá a ejecutar cada vez que cambie alguna de esas variables. */
    useEffect(() => {
        if (token) {

            axios.post(`${apiUrl}/api/recovery`, { token })
                .catch(error => {

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
            navigate('/')
            window.location.reload(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    /* Inicializar la variable de estado `values` como un objeto con dos propiedades: `password` y `token`.
    La propiedad `password` se establece inicialmente en una cadena vacía, y la propiedad `token` se establece en el
    valor de la variable `token` extraída de los parámetros de URL usando el hook `useSearchParams`.
    La función `setValues` se usa para actualizar el estado de la variable `values`. */
    const [values, setValues] = useState({
        password: '',
        token
    })

    /* Inicializar una variable de estado `errorP` con un objeto vacío `{}` y una función `setErrorp` para
    actualizar el estado de `errorP`. Esta variable de estado se utiliza para almacenar cualquier error de validación relacionado con
    el campo de entrada de la contraseña. */
    const [errorP, setErrorp] = useState({})

    /**
      * Esta función actualiza los valores de estado con el nuevo valor de entrada.
      * @param event: el parámetro de evento es un objeto que contiene información sobre el evento que
      * activó la función. En este caso, es un objeto de evento que se genera cuando un usuario
      * ingresa datos en un campo de formulario. Contiene información como el elemento de destino (el campo de formulario
      * que fue cambiado), el tipo de evento
      */
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
    }

    /**
      * La función maneja el evento onblur en un campo de entrada de contraseña y establece un mensaje de error basado en el
      * validación del valor de entrada.
      * @param event: el parámetro de evento es un objeto que contiene información sobre el evento que
      * activó la función. En este caso, es probable que se haya producido un evento de desenfoque en un campo de entrada. El
      * El objeto de evento se puede utilizar para acceder a información como el elemento de destino, el tipo de evento y
      * cualquier dato adicional relacionado con
      */
    const handleBlurPass = (event) => {
        setErrorp(ValidationPass(values));
    }
    /**
          * La función handleSubmit evita el envío del formulario predeterminado, comprueba si hay un error en el
          * campo de contraseña y envía una solicitud patch para actualizar la contraseña en una base de datos usando axios.
          * @param event: el parámetro event es un objeto que representa el evento que activó el
          * función. En este caso, es el evento de envío del formulario.
          */
    const handleSubmit = (event) => {
        event.preventDefault();
        if (errorP.password === "") {
            axios.patch(`${apiUrl}/api/actualizar`, values)
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