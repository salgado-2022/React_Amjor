import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart'
import axios from "axios";

function ProductosCatalogo({ products }) {
    const { addToCart, removeFromCart, cart } = useCart()

    const checkProductInCart = product => {
        return cart.some(item => item.ID_Ancheta === product.ID_Ancheta)
    }
    

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

    //console.log(data)

    return (
        <div className="row mb-5">
            {products.map((product) => {
                const isProductInCart = checkProductInCart(product)
                
                return (
                    <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up" key={product.ID_Ancheta} onClick={fetchData}>
                        <div className="block-4 card catalogue" onClick={() => { handleAnchetaClick(product.ID_Ancheta) }} style={{ borderRadius: "5%", boxShadow: "0 2px 15px rgba(0, 0, 0, 0.1)", border: "none", cursor: "pointer" }}>
                            <img src={`http://localhost:4000/anchetas/` + product.image} alt="" className="card-img-top img-fluid size-catalog block-4-image" />
                            <div className="card-body">
                                <h3 className="card-title" style={{ color: "Black", fontSize: "16px", marginTop: "5px" }}>{product.NombreAncheta}</h3>
                                <p className="card-text text-right font-weight-normal" style={{ color: "MediumSlateBlue", fontSize: "18px" }}>{formatPrice(product.PrecioUnitario)}</p>
                                <button onClick={() => isProductInCart
                                     ? removeFromCart(product) 
                                     : addToCart(product)} style={{ backgroundColor: isProductInCart ? 'red' : 'blue'}}>
                                    
                                    Añadir al carrito</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );

    

//     return (
//         <div className="row mb-5">
//             {data.map((anchetas) => (
//                 <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up" key={anchetas.ID_Ancheta} onClick={fetchData}>
//                     <div className="block-4 card catalogue" onClick={() => { handleAnchetaClick(anchetas.ID_Ancheta) }} style={{ borderRadius: "5%", boxShadow: "0 2px 15px rgba(0, 0, 0, 0.1)", border: "none", cursor: "pointer" }}>
//                         <img src={`http://localhost:4000/anchetas/` + anchetas.image} alt="" className="card-img-top img-fluid size-catalog block-4-image" />
//                         <div className="card-body">
//                             <h3 className="card-title" style={{ color: "Black", fontSize: "16px", marginTop: "5px" }}>{anchetas.NombreAncheta}</h3>
//                             <p className="card-text text-right font-weight-normal" style={{ color: "MediumSlateBlue", fontSize: "18px" }}>{formatPrice(anchetas.PrecioUnitario)}</p>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
}

export { ProductosCatalogo };
