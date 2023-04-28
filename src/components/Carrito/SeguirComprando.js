import React from "react";
import { Link } from "react-router-dom";


function SeguirComprando() {

    return (

        <div className="col-md-6">
            <div className="row mb-5">
                <div className="col-md-6">
                    <Link exact to="/shop"> 
                    <span className="btn btn-outline-primary btn-sm btn-block">Seguir comprando</span>
                    </Link>
                </div>
            </div>
        </div>

    );
}

export {SeguirComprando}