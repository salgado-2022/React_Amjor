import React from "react";

//Importación de imagenes 
import fb from '../../assets/img/logos/facebook.png';
import ig from '../../assets/img/logos/instagram.png';
import wh from '../../assets/img/logos/whatsapp.png';

const facebook = "https://www.facebook.com/profile.php?id=100063563502774";
const instagram = "https://www.instagram.com/amjorhechoamor/";
const whatsapp = "https://wa.me/573053782378";

function Social() {
    return (
    <div data-aos="fade-left" data-aos-delay="">
        <div className="site-section-heading pt-3 mb-5">
            <h1 className="text-black" style={{fontSize: "54px"}}>Muchas Gracias</h1>
            <h2 color="#25262a" style={{fontSize: "48px", marginTop: "-10px"}}>¿Preguntas?</h2>
        </div>
        <div className="site-section pt-4">
            <h3 className="text-black" style={{fontSize: "22px"}}><strong>Dirección</strong></h3>
            <h3 className="text-black mb-4" style={{fontSize: "18px"}}>Carrera 58 # 56-81</h3>
            <p className="text-black" style={{fontSize: "16px"}}>Copacabana Antioquia, Colombia</p>
        </div>
        <div className="row">
            <div className="col-md-2">
                <div className="block-38 text-center">
                    <div className="block-38-header">
                        <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                            <img src={wh} alt="Imagen placeholder" className="mb-4" style={{ width: "50px", height: "50px" }} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-md-2">
                <div className="block-38 text-center">
                    <div className="block-38-header">
                        <a href={instagram} target="_blank" rel="noopener noreferrer">
                            <img src={ig} alt="Imagen placeholder" className="mb-4" style={{ width: "50px", height: "50px" }} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-md-1">
                <div className="block-38 text-center">
                    <div className="block-38-header">
                        <a href={facebook} target="_blank" rel="noopener noreferrer">
                            <img src={fb} alt="Imagen placeholder" className="mb-4" style={{ width: "50px", height: "50px" }} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Social;