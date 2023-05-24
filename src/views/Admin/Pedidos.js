import React from "react";
import { Table } from "../../components/Admin/Pedidos/Table";

function Pedidos() {
    return (
        <div className="site-wrap">
            <div className="site-section">
                <div className="container">
                    <Table />
                </div>
            </div>
        </div>
    );
}
export { Pedidos }