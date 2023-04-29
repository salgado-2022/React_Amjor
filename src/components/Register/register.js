import React,{ useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from "axios";


function FormRegister() {

    const [values , setValues] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:4000/api/register', values)
        .then(res => {
            if(res.data.Status === "Success"){
                navigate('/login')
            }else{
                alert('Error');
            }
        })
        .then(err =>console.log(err));
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

                                            <h4 className="mt-1 mb-5 pb-1">Registro</h4>
                                        </div>

                                        <form onSubmit={handleSubmit}>
                                            <p>Porfavor ingrese sus datos </p>

                                            <div className="form-outline mb-4">
                                                <input type="email" id="email" name="email" className="form-control"
                                                    placeholder="Email" onChange={e=> setValues({...values, email: e.target.value})}
                                                />

                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="password" name="password" className="form-control"
                                                    placeholder="Contraseña" onChange={e=> setValues({...values, password: e.target.value})} />
                                            </div>  

                                            {/* <div className="form-outline mb-4">
                                                <input type="password" id="form2Example22" className="form-control"
                                                    placeholder="Contraseña" />
                                            </div> */}

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

export { FormRegister }