import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logos/logomoradoclaro.png';
import axios from "axios";

//sweetalert2
import Swal from 'sweetalert2';

function AdminNavbar() {

    axios.defaults.withCredentials = true;
    const navigate = useNavigate();

    const handleDelete = () => {
        axios.get('http://localhost:4000/api/logout')
            .then(res => {
                navigate('/');
                let timerInterval
                Swal.fire({
                    title: 'Cerrando Sesión!',
                    html: 'Por favor espere un momento.',
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: () => {
                        
                    },
                    willClose: () => {
                        clearInterval(timerInterval);
                        window.location.reload(true);
                    }
                }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {
                        console.log('I was closed by the timer');
                    }
                })

            }).catch(err => console.log(err));
    }

    return (

        <header className="site-navbar" role="banner">
            <div className="site-navbar-top">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
                            <form action="" className="site-block-top-search">
                                <span className=""></span>
                            </form>
                        </div>
                        <div className="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
                            <div className="">
                                <Link to="/">
                                    <img src={logo} style={{ width: '95px' }} alt="logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 order-3 order-md-3 text-right">
                            <div className="site-top-icons">
                                <ul>
                                    <li>
                                        <span className="icon icon-exit_to_app" onClick={handleDelete}></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="site-navigation text-center text-md-center" >
                <div className="container">
                    <ul className="site-menu">
                        <li>
                            <Link to="/admin/configuracion">Configuración</Link>
                        </li>
                        <li>
                            <Link to="/admin/usuarios">Usuarios</Link>
                        </li>
                        <li>
                            <Link to="/admin/anchetas">Anchetas</Link>
                        </li>
                        <li className="">
                            <Link to="/admin/insumos">Insumos</Link>
                        </li>
                        <li className="">
                            <Link to="/admin/pedidos">Pedidos</Link>
                        </li>
                        <li className="">
                            <Link to="/contact">Ventas</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

    );
}

export { AdminNavbar }