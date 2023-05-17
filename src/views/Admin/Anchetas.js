import React from "react";
import { CrearAncheta } from "../../components/Admin/Anchetas/CrearAncheta";
import { TablaAncheta } from "../../components/Admin/Anchetas/TablaAncheta";

function Anchetas() {
    return (
            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <CrearAncheta/>
                        </div>
                        <div className="col-8">
                            <TablaAncheta/>
                        </div>
                    </div>
                </div>
            </div>  
    );
}
export { Anchetas }