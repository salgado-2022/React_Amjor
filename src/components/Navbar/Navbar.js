import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logos/logomoradoclaro.png';
import '../../assets/css/media.css'

import { useCartContext } from '../../context/contador'
import Cookies from 'js-cookie';
import AccountPopover from "../Cliente/AccountPopover";

function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { items, setItems } = useCartContext();
    const [token, setToken] = useState();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        // Recuperar el valor del contador desde localStorage
        const savedItemCount = parseInt(localStorage.getItem('cartItemCount'), 10);
        if (!isNaN(savedItemCount)) {
            // Si existe un valor almacenado en localStorage, actualizar el contexto
            setItems(savedItemCount);
        }

        const token = Cookies.get('token');
        setToken(token)

         // Agrega un evento de scroll para detectar el desplazamiento
         window.addEventListener("scroll", handleScroll);

         // Limpia el evento de scroll al desmontar el componente
         return () => {
             window.removeEventListener("scroll", handleScroll);
         };
    }, []);

    const handleScroll = () => {
        // Verifica si el usuario ha hecho scroll más allá de un cierto punto (por ejemplo, 100px)
        if (window.scrollY > 100) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };



    return (

        <>

            <header className="site-navbar" role="banner" style={{ zIndex: 1000 }}>
                <div className="site-navbar-top" style={{ paddingBottom: 20, paddingTop: 20 }}>
                    <div className="container">
                        <div className="row align-items-center ">

                            <div className="col-1 site-search-icon text-left">
                                <div>
                                    <Link to="/">
                                        <img src={logo} style={{ width: '80px' }} alt="logo" />
                                    </Link>
                                </div>
                            </div>

                            <div className="col-8 text-center">
                                <div className="row">
                                    <div className="col-12">
                                        <nav className="site-navigation text-center" role="navigation">
                                            <div className="container">
                                                <ul className="site-menu menuOpcion">
                                                    <li >
                                                        <Link to="/" style={{ fontSize: '16px' }}>Inicio</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/nosotros" style={{ fontSize: '16px' }}>Nosotros</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop" style={{ fontSize: '16px' }}>Catálogo</Link>
                                                    </li>
                                                    <li className="">
                                                        <Link to="/contact" style={{ fontSize: '16px' }}>Contacto</Link>
                                                    </li>
                                                    {!token ? (
                                                        <li>
                                                        </li>
                                                    ) : (
                                                        <li>
                                                            <Link to="/shopping" style={{ fontSize: '16px' }}>Mis compras</Link>
                                                        </li>
                                                    )}
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>

                            <div className="col-3 text-right">
                                <div className="site-top-icons">
                                    <ul>
                                        {!token ? (
                                            <li style={{ marginRight: '5px' }}>
                                                <Link to="/login" >
                                                    <span className="textLogin" style={{ fontSize: '16px' }}>INICIAR SESIÓN</span>
                                                    <span className="icon icon-person"></span>

                                                </Link>
                                            </li>
                                        ) : (
                                            <AccountPopover />
                                        )}

                                        <li>
                                            <Link to="/carrito" className="site-cart">
                                                {/* <span className="textLogin" style={{ fontSize: '15px' }}>CARRITO</span> */}
                                                <span className="textLogin" style={{ fontSize: '15px' }}></span>
                                                <span className="icon icon-shopping_cart" ></span>
                                                <span className="count">{items}</span>
                                            </Link>
                                        </li>
                                        <div className="header">
                                            <li className="botonMenu">
                                                <a href="#!" className={`site-menu-toggle ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
                                                    <span className="icon-menu"></span>
                                                </a>
                                            </li>
                                        </div>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div >

            </header >

            {/* Mobile Menu */}
            <div div className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu} ></div >
            <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`} style={{ zIndex: 900 }}>
                <nav className="site-navigation-mobile  site-navigation text-center" role="navigation" style={{ marginTop: 170 }}>
                    <ul className="site-menu-mobile site-menu">
                        <li><Link to="/" onClick={closeMobileMenu} className="menu-link">Inicio</Link></li>
                        <li><Link to="/nosotros" onClick={closeMobileMenu} className="menu-link">Nosotros</Link></li>
                        <li><Link to="/shop" onClick={closeMobileMenu} className="menu-link">Catálogo</Link></li>
                        <li><Link to="/contact" onClick={closeMobileMenu} className="menu-link">Contacto</Link></li>
                        {!token ? (<li></li>) : (<li><Link to="/shopping" onClick={closeMobileMenu} className="menu-link">Mis compras</Link></li>)}

                    </ul>
                </nav>
            </div>
        </>

    );
}

export { Navbar }