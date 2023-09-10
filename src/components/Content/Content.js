import React from "react";
import background from '../../assets/img/hero_1.jfif';


function Content() {
    return (
        <div className="Content">
            <div className="site-blocks-cover" style={{ backgroundImage: `url(${background})` }} data-aos="fade">
                <div className="container">
                    <div className="row align-items-start align-items-md-center justify-content-end">
                        <div className="col-md-5 text-center text-md-left pt-5 pt-md-0">
                            <h1 className="mb-2">Amjor <br /> ¡Hecho con amor!</h1>
                            <div className="intro-text text-center text-md-left">
                                <p className="mb-4">¡Venta de anchetas personalizables y de catálogo con la mejor calidad y a un precio increíble! </p>
                                <p>
                                    <a href="shop" className="btn btn-sm btn-primary">Comprar ahora</a>
                                </p>
                            </div>
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
                                <h2 className="text-uppercase">Envíos seguros</h2>
                                <p>Recibe tu producto en toda el área metropolitana cumpliendo con el tiempo establecido.

                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon mr-4 align-self-start">
                                <span className="icon-edit"></span>
                            </div>
                            <div className="text">
                                <h2 className="text-uppercase">Personalizable</h2>
                                <p>Elige una de las anchetas del catálogo y agrega tus productos deseados según tus preferencias.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon mr-4 align-self-start">
                                <span className="icon-dollar"></span>
                            </div>
                            <div className="text">
                                <h2 className="text-uppercase">Métodos de pago</h2>
                                <p>Paga cuando recibas tu pedido o mediante transferencias bancarias. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Content }