import React from 'react';

import '../../assets/css/carousel.css'
//Importación de la libreria react-multi-carousel 
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//Importación de imagenes para Owl-Carousel
import img1 from '../../assets/img/ancheta1.jpg'
import img2 from '../../assets/img/ancheta2.jpg'
import img3 from '../../assets/img/ancheta3.jpg'
import img4 from '../../assets/img/ancheta4.jpg'

//Componente de productos destacados
function Productos() {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    };

    return (

        <div className="site-section block-6 site-blocks-2 bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 site-section-heading text-center pt-4">
                        <h2>Productos destacados</h2>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="nonloop-block-3">
                            <Carousel responsive={responsive} showDots={false} infinite={true}
                                draggable={false} autoPlay autoPlaySpeed={4000} partialVisible={true}
                                partialVisibilityGutter={40} containerClass="carousel-container"    
                                itemClass="carousel-item-padding">
                                <div className='item'>
                                    <div className="">
                                        <div className="block-4 text-center">
                                            <figure className="block-4-image">
                                                <img className="img-fluid" src={img1} alt="" />
                                            </figure>
                                            <div className="block-4-text p-4">
                                                <h3><a href="#/">Ancheta elegante</a></h3>
                                                <p className="mb-0">Perfecta para situaciones importantes</p>
                                                <p className="text-primary font-weight-bold">$80.000</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className="">
                                        <div className="block-4 text-center">
                                            <figure className="block-4-image">
                                                <img className="img-fluid" src={img2} alt="" />
                                            </figure>
                                            <div className="block-4-text p-4">
                                                <h3><a href="#/">Ancheta elegante</a></h3>
                                                <p className="mb-0">Perfecta para situaciones importantes</p>
                                                <p className="text-primary font-weight-bold">$80.000</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className="">
                                        <div className="block-4 text-center">
                                            <figure className="block-4-image">
                                                <img className="img-fluid" src={img3} alt="" />
                                            </figure>
                                            <div className="block-4-text p-4">
                                                <h3><a href="#/">Ancheta elegante</a></h3>
                                                <p className="mb-0">Perfecta para situaciones importantes</p>
                                                <p className="text-primary font-weight-bold">$80.000</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className="">
                                        <div className="block-4 text-center">
                                            <figure className="block-4-image">
                                                <img className="img-fluid" src={img4} alt="" />
                                            </figure>
                                            <div className="block-4-text p-4">
                                                <h3><a href="#/">Ancheta elegante</a></h3>
                                                <p className="mb-0">Perfecta para situaciones importantes</p>
                                                <p className="text-primary font-weight-bold">$80.000</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export { Productos }