import React from "react";

//Importación de imagenes
import promo from '../../assets/img/ancheta7.jpg'


function Promociones() {

    return (

        <div className="site-section block-8">
            <div className="container">
                <div className="row justify-content-center  mb-5">
                    <div className="col-md-7 site-section-heading text-center pt-4">
                        <h2>NUESTRAS PROMOCIONES</h2>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-12 col-lg-7 mb-5">
                        <img src={promo} alt="Imagen placeholder" className="img-fluid rounded" />
                    </div>
                    <div className="col-md-12 col-lg-5 text-center pl-md-5">
                        <h2><a href="#/" style={{fontSize: '20px' }} > -50% DE DESCUENTO EN ANCHETA DE GRADOS</a></h2>
                        <p>¡Aprovecha esta promoción del 50% de descuento en todas nuestras anchetas de grados! Disponible hasta fin de mes.</p>
                        <p><a href="shop" className="btn btn-primary btn-sm">Comprar ahora</a></p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export {Promociones}