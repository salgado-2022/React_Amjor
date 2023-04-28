import React from "react";

//importación de imagenes del catalogo
import img1 from '../../assets/img/ancheta1.jpg';
import img2 from '../../assets/img/ancheta2.jpg';
import img3 from '../../assets/img/ancheta3.jpg';
import img4 from '../../assets/img/ancheta4.jpg';
import img5 from '../../assets/img/ancheta5.jpg';
import img6 from '../../assets/img/ancheta6.jpg';
import img7 from '../../assets/img/ancheta7.jpg';
import img8 from '../../assets/img/ancheta8.jpg';
import img9 from '../../assets/img/ancheta9.jpg';


function ProductosCatalogo() {

    return (

        <div className="col-md-9 order-2">

            <div className="row">
                <div className="col-md-12 mb-5">
                    <div className="float-md-left mb-4">
                        <h2 className="text-black h5">Mira nuestros productos!</h2>
                    </div>
                    <div className="d-flex">
                        <div className="dropdown mr-1 ml-md-auto">
                            <button type="button" className="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuOffset"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Lo más reciente
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                                <a className="dropdown-item" href="#/">Orden alfabetico</a>
                                <a className="dropdown-item" href="#/">Más antiguo</a>
                                <a className="dropdown-item" href="#/">Promociones</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="row mb-5">

                <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                    <div className="block-4 text-center border">
                        <figure className="block-4-image">
                            <a href="shop-single"><img src={img9} alt="Imagen placeholder"
                                className="img-fluid"/></a>
                        </figure>
                        <div className="block-4-text p-4">
                            <h3><a href="shop-single">Ancheta casual</a></h3>
                            <p className="mb-0">Perfecta para todo tipo de regalo</p>
                            <p className="text-primary font-weight-bold">$40.000</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                    <div className="block-4 text-center border">
                        <figure className="block-4-image">
                            <a href="shop-single"><img src={img8} alt="Imagen placeholder"
                                className="img-fluid"/></a>
                        </figure>
                        <div className="block-4-text p-4">
                            <h3><a href="shop-single">Bandeja padre</a></h3>
                            <p className="mb-0">Bandeja con producto varios</p>
                            <p className="text-primary font-weight-bold">$40.000</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                    <div className="block-4 text-center border">
                        <figure className="block-4-image">
                            <a href="shop-single"><img src={img7} alt="Imagen placeholder"
                                className="img-fluid"/></a>
                        </figure>
                        <div className="block-4-text p-4">
                            <h3><a href="shop-single">Ancheta de grados</a></h3>
                            <p className="mb-0">Ancheta perfecta para regalar en grados</p>
                            <p className="text-primary font-weight-bold">$70.000</p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                    <div className="block-4 text-center border">
                        <figure className="block-4-image">
                            <a href="shop-single"><img src={img6} alt="Imagen placeholder"
                                className="img-fluid"/></a>
                        </figure>
                        <div className="block-4-text p-4">
                            <h3><a href="shop-single">Bandeja halloween</a></h3>
                            <p className="mb-0">Perfecta para regalar en fechas de octubre</p>
                            <p className="text-primary font-weight-bold">$50.000</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                    <div className="block-4 text-center border">
                        <figure className="block-4-image">
                            <a href="shop-single"><img src={img5} alt="Imagen placeholder"
                                className="img-fluid"/></a>
                        </figure>
                        <div className="block-4-text p-4">
                            <h3><a href="shop-single">Ancheta de cumpleaños</a></h3>
                            <p className="mb-0">Ancheta para regalar en cumpleaños </p>
                            <p className="text-primary font-weight-bold">$60.000</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                    <div className="block-4 text-center border">
                        <figure className="block-4-image">
                            <a href="shop-single"><img src={img4} alt="Imagen placeholder"
                                className="img-fluid"/></a>
                        </figure>
                        <div className="block-4-text p-4">
                            <h3><a href="shop-single">Ancheta de amor y amistad</a></h3>
                            <p className="mb-0">Para regalar en amor y amistad</p>
                            <p className="text-primary font-weight-bold">$50</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                    <div className="block-4 text-center border">
                        <figure className="block-4-image">
                            <a href="shop-single"><img src={img3} alt="Imagen placeholder"
                                className="img-fluid"/></a>
                        </figure>
                        <div className="block-4-text p-4">
                            <h3><a href="shop-single">Ancheta casual</a></h3>
                            <p className="mb-0">Perfecta para regalar en todo tipo de ocaciones</p>
                            <p className="text-primary font-weight-bold">$40.000</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                    <div className="block-4 text-center border">
                        <figure className="block-4-image">
                            <a href="shop-single"><img src={img2} alt="Imagen placeholder"
                                className="img-fluid"/></a>
                        </figure>
                        <div className="block-4-text p-4">
                            <h3><a href="shop-single">Ancheta dia de madres</a></h3>
                            <p className="mb-0">Ancheta para rendir homenaje a las madres</p>
                            <p className="text-primary font-weight-bold">$80.000</p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                    <div className="block-4 text-center border">
                        <figure className="block-4-image">
                            <a href="shop-single"><img src={img1} alt="Imagen placeholder"
                                className="img-fluid"/></a>
                        </figure>
                        <div className="block-4-text p-4">
                            <h3><a href="shop-single">Ancheta elegante</a></h3>
                            <p className="mb-0">Ancheta para situaciones formales</p>
                            <p className="text-primary font-weight-bold">$100.000</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" data-aos="fade-up">
                <div className="col-md-12 text-center">
                    <div className="site-block-27">
                        <ul>
                            <li><a href="#/">&lt;</a></li>
                            <li className="active"><span>1</span></li>
                            <li><a href="#/">2</a></li>
                            <li><a href="#/">3</a></li>
                            <li><a href="#/">4</a></li>
                            <li><a href="#/">5</a></li>
                            <li><a href="#/">&gt;</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {ProductosCatalogo}