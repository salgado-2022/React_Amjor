import React, { useEffect, useState } from "react";
import axios from "axios";
import { EditarInsumo } from './Modals/editarInsumo';
import Swal from "sweetalert2";

function TablaInsumo(){
    const [data, setData] = useState([])

    const [modalShow, setModalShow] = React.useState(false);

    const [selectedInsumoID, setSelectedInsumoID] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const formatPrice = (price) => {
        const options = { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }; // Puedes ajustar la moneda según tus necesidades
        return price.toLocaleString(undefined, options);
    };

    const handleDetalleClick = (insumoID) => {
        setSelectedInsumoID(insumoID);
        setModalShow(true);
    };


    const fetchData = () => {
        axios.get('http://localhost:4000/api/admin/insumos')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    };

    const handleDelete = (id) => {
        axios.delete('http://localhost:4000/api/admin/insumos/insumodel/'+id)
        .then(res => {
            console.log(res)
            Swal.fire({
                title: 'Eliminado Correctamente',
                text: "Tu insumo ha sido eliminado correctamente",
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
            setTimeout(function(){ window.location = "insumos"; }, 1000);
        }).catch(err => console.log(err));
    };

    return(
        <>
                    <div id="site-section">
                        <br/>
                        <div className="row justify-content-end">
                            <div className="input-group mb-3 col-6">
                            <input type="text" className="form-control" placeholder="Buscar Insumo" />
                            <div className="input-group-append">
                                <button className="btn btn-outline" type="button"><a href="#!" className="icon-search"> </a></button>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Descripcion</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Estado</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                        {data.map((insumos, index) => {
                                        return <tr key={index}>
                                            <th scope="row">{insumos.ID_Insumo}</th>
                                            <td>{insumos.NombreInsumo}</td>
                                            <td>{insumos.Descripcion}</td>
                                            <td>{formatPrice(insumos.PrecioUnitario)}</td>
                                            <td>{insumos.Estado}</td>
                                            <td><a href="#!" className=" icon-edit" onClick={() => {
                                                handleDetalleClick(insumos.ID_Insumo)
                                            }}></a></td>
                                            <td><a href="#!" className=" icon-trash" onClick={() => {
                                                handleDelete(insumos.ID_Insumo)
                                            }}></a></td>
                                        </tr>
                                    })}
                        </tbody>
                    </table>
                    </div> 
                    <EditarInsumo
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    selectedInsumoID={selectedInsumoID}
                />
            </>
                           
    );
}

export {TablaInsumo}