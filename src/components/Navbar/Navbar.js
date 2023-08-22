import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logos/logomoradoclaro.png';
import '../../assets/css/media.css'


function Navbar() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            <header className="site-navbar" role="banner">
                <div className="site-navbar-top" style={{paddingBottom:20, paddingTop:20}}>
                    <div className="container">
                        <div className="row align-items-center ">

                            <div className="col-2 site-search-icon text-left">
                                <div className="">
                                    <Link to="/">
                                        <img src={logo} style={{ width: '95px' }} alt="logo" />
                                    </Link>
                                </div>
                            </div>

                            <div className="col-8 text-center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <nav className="site-navigation text-center" role="navigation">
                                                <div className="container">
                                                    <ul className="site-menu  d-none d-md-block">
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
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-2 text-right">
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
                                        <li className="d-inline-block d-md-none ml-md-0">
                                            <a href="#" className={`site-menu-toggle ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
                                                <span className="icon-menu"></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </header>

            {/* Mobile Menu */}
            <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}></div>
            <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
                <nav className="site-navigation-mobile  site-navigation text-center" role="navigation" style={{ marginTop: 170 }}>
                    <ul className="site-menu-mobile site-menu">
                        <li><Link to="/" onClick={closeMobileMenu} className="menu-link">Inicio</Link></li>
                        <li><Link to="/nosotros" onClick={closeMobileMenu} className="menu-link">Nosotros</Link></li>
                        <li><Link to="/shop" onClick={closeMobileMenu} className="menu-link">Catálogo</Link></li>
                        <li><Link to="/contact" onClick={closeMobileMenu} className="menu-link">Contacto</Link></li>
                    </ul>
                </nav>
            </div>


        </>

    );
}

export { Navbar }