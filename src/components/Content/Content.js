import React from "react";
import { Link } from 'react-router-dom';
import background from '../../assets/img/hero_1.jpg';


function Content() {
    return (
        <div className="Content">
            <div className="site-blocks-cover" style={{ backgroundImage: `url(${background})` }}>
                <div className="container">
                    <div className="row align-items-start align-items-md-center justify-content-center">
                        <div className="col-md-6 text-center">
                            <h1 style={{fontSize: "54px"}} className="text-white" data-aos="fade-up" data-aos-delay="">Amjor <br/>¡Hecho con amor!</h1>
                            <p className="mb-4" style={{color: "rgba(255, 255, 255, 0.7)", fontSize: "18px"}} data-aos="fade-up" data-aos-delay="100">Venta de anchetas personalizadas con productos de buena calidad al mejor precio</p>
                            <Link to="/shop"><p data-aos="fade-up" data-aos-delay="200"><a href="" className="btn btn-sm btn-primary">Comprar ahora</a></p></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-section site-section-sm site-blocks-1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="">
                            <div className="icon mr-4 align-self-start">
                                <span className="icon-truck"></span>
                            </div>
                            <div className="text">
                                <h2 className="text-uppercase">Envios seguros</h2>
                                <p>Recibe tu producto cumpliendo con el tiempo establecido en toda el area metropolitana.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon mr-4 align-self-start">
                                <span className="icon-edit"></span>
                            </div>
                            <div className="text">
                                <h2 className="text-uppercase">Personalizable</h2>
                                <p>Elige una de las anchetas y agrega tus productos deseados segun tus preferencias.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon mr-4 align-self-start">
                                <span className="icon-dollar"></span>
                            </div>
                            <div className="text">
                                <h2 className="text-uppercase">Métodos de Pago</h2>
                                <p>Paga contra entrega o mediante transacciones. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Content }