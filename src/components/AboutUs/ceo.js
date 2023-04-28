import React from 'react';

import photo from '../../assets/img/susana.jpg';


function Ceo() {

    return (
        <div className="site-section border-bottom" data-aos="fade">
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-md-7  text-center pt-4">

                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 col-lg-12">

                        <div className="block-38 text-center">
                            <div className="block-38-img">
                                <div className="block-38-header">
                                    <img src={photo} alt="Imagen placeholder" className="mb-4" />
                                    <h3 className="block-38-heading h4">Susana Henao</h3>
                                    <p className="block-38-subheading">Fundadora de Amjor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {Ceo}