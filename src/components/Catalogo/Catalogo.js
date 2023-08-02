import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

function ProductosCatalogo() {
    const [data, setData] = useState([]);
    const [selectedAnchetaID, setSelectedAnchetaID] = useState(null);

    const formatPrice = (price) => {
        return price.toLocaleString('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0,
        });
    };

    const handleAnchetaClick = (anchetaID) => {
        setSelectedAnchetaID(anchetaID);
    };

    const fetchData = () => {
        axios.get('http://localhost:4000/api/admin/anchetas')
            .then(res => {
                setData(res.data);
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        fetchData();
    }, []);
    
    console.log(data)


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
                {data.map((anchetas) => (
                    <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up" key={anchetas.ID_Ancheta} onClick={fetchData}>
                        <div className="block-4 card catalogue" onClick={() => {handleAnchetaClick(anchetas.ID_Ancheta)}} style={{borderRadius: "5%", boxShadow: "0 2px 15px rgba(0, 0, 0, 0.1)", border: "none", cursor: "pointer"}}>    
                            <img src={`http://localhost:4000/anchetas/` + anchetas.image} alt="" className="card-img-top img-fluid size-catalog block-4-image"/>
                            <div className="card-body">
                                <h3 className="card-title" style={{color: "Black", fontSize: "16px" , marginTop: "5px"}}>{anchetas.NombreAncheta}</h3>
                                <p className="card-text text-right font-weight-normal" style={{color: "MediumSlateBlue", fontSize: "18px"}}>{formatPrice(anchetas.PrecioUnitario)}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export { ProductosCatalogo };
