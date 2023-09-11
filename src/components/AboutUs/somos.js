import React from "react";

//Importación de imagenes 
import logo from '../../assets/img/imagenlogo.png';

function Somos() {
    return (

        <div className="site-section border-bottom" data-aos="fade">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-6">
                        <div className="block-16">
                            <figure>
                                <img src={logo} alt="Imagen placeholder" className="img-fluid rounded" />

                            </figure>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-5">


                        <div className="site-section-heading pt-3 mb-4">
                            <h2 className="text-black" style={{fontSize: "54px"}}>¿Quiénes somos?</h2>
                        </div>
                        <p color="color: rgb(99, 115, 129)">AMJOR “Hecho con amor” es una compañía fundada en 2016, dedicada a la preparación, empaque y
                            distribución de postres y anchetas en toda el Área Metropolitana del Valle de Aburrá, con el fin de deleitar y acompañar
                            las reuniones y fiestas tanto familiares como de amigos. Somos una empresa que poco a poco se da
                            a conocer en el mercado y que crece con cada uno de sus clientes.
                            <br/><br/>
                                Nuestra misión se basa en satisfacer las necesidades de los consumidores, elaborando productos
                                innovadores de alta calidad, económicos, que alimenten y deleiten el paladar. Para ello contamos
                                con un personal comprometido con los valores corporativos y la preservación del medio ambiente.</p>
                            </div>
                    </div>
                </div>
            </div>
    );
}

export {Somos};