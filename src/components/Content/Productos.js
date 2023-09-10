import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../../assets/css/carousel.css';
import { useNavigate } from 'react-router-dom';

function Productos({ products }) {

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
        },
    };

    const deployApiUrl = process.env.REACT_APP_AMJOR_DEPLOY_API_URL;
    const lastFourProducts = products.slice(-4);

    const navigate = useNavigate();

    const formatPrice = (price) => {
        return price.toLocaleString('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0,
        });
    };

    const handleDetalle = (idAncheta) => {
        navigate("/shop", { state: { idAncheta } });
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
                            <Carousel
                                responsive={responsive}
                                showDots={false}
                                infinite={true}
                                draggable={false}
                                autoPlay
                                autoPlaySpeed={2000}
                                partialVisible={true}
                                partialVisibilityGutter={40}
                                containerClass="carousel-container"
                                itemClass="carousel-item-padding"
                            >
                                {lastFourProducts.map((product) => (
                                    <div key={product.ID_Ancheta} className="item" >
                                        <div className="block-4 card carrousel" onClick={() => { handleDetalle(product.ID_Ancheta)}}>
                                            <img src={`${deployApiUrl}/anchetas/` + product.image} alt="" className="card-img-top img-fluid size-catalog block-4-image" />
                                            <div className="card-body">
                                                <h3 className="card-title text-left" style={{ color: "Black", fontSize: "16px", marginTop: "5px" }}>{product.NombreAncheta}</h3>
                                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                                    <div>
                                                        <p className="card-text text-left font-weight-normal" style={{ color: "MediumSlateBlue", fontSize: "18px", alignSelf: 'center' }}>{formatPrice(product.PrecioUnitario)}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Productos };
