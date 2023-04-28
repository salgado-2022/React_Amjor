import React from "react";
import { Informacion } from "../components/Payments/Informacion";

function Payment() {
    return (
        <>
            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <Informacion/>
                    </div>
                </div>
            </div>
        </>
    );
}

export{Payment}