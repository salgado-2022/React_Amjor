import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logos/logomoradoclaro.png';

function Navbar() {
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
                                        <Link to="/login" >
                                            <span className="icon icon-person"></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/carrito" className="site-cart">
                                            <span className="icon icon-shopping_cart"></span>
                                            <span className="count">2</span>
                                        </Link>
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
                            <Link to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/nosotros">Nosotros</Link>
                        </li>
                        <li>
                            <Link to="/shop">Catálogo</Link>
                        </li>
                        <li className="">
                            <Link to="/contact">Contacto</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

    );
}

export { Navbar }