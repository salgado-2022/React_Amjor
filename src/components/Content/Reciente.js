import React from "react";

function Reciente({ products }) {

    const deployApiUrl = process.env.REACT_APP_AMJOR_DEPLOY_API_URL;
    const lastFourProducts = products.slice(-1);

    return (
    <div className="site-section block-8">
        <div className="container">
            <div className="row justify-content-center  mb-5">
                <div className="col-md-7 site-section-heading text-center pt-4">
                    <h2>¡Mira nuestra última ancheta!</h2>
                </div>
            </div>
        {lastFourProducts.map((product) => (
            <div key={product.ID_Ancheta} className="item">
                <div className="row align-items-center" key={product.ID_Ancheta}>
                    <div className="col-md-12 col-lg-7 mb-5" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                        <img src={`${deployApiUrl}/anchetas/` + product.image} alt="" className="img-fluid rounded"/>
                    </div>
                    <div className="col-md-12 col-lg-5 text-center pl-md-5" data-aos="fade-left" data-aos-duration="1000">
                        <h2><a style={{ color: "MediumSlateBlue"}}>{product.NombreAncheta}</a></h2>
                        <p>{product.Descripcion}</p>
                        <p><a href="shop" style={{ textTransform: 'none'}} className="btn btn-primary btn-sm">Comprar ahora</a></p>
                    </div>
                </div>
            </div>
        ))} 
        </div>
    </div>
    );
}

export {Reciente}