import React, { useEffect, useState } from "react";
import axios from "axios";
import { EditarAncheta } from './Modals/editarAncheta';
import { VerInsumos } from './Modals/verInsumos';
import Swal from "sweetalert2";

function TablaAncheta() {

    const [data, setData] = useState([]);
    const [tabla, setTabla] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    const [modalShow, setModalShow] = React.useState(false);

    const [modalShow2, setModalShow2] = React.useState(false);

    const [selectedAnchetaID, setSelectedAnchetaID] = useState(null);

    const [itemsPerPage] = useState(5);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const formatPrice = (price) => {
        return price.toLocaleString('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0,
        });
    };

    const handleEditClick = (anchetaID) => {
        setSelectedAnchetaID(anchetaID);
        setModalShow(true);
    };

    const handleDetalleClick = (anchetaID) => {
        setSelectedAnchetaID(anchetaID);
        setModalShow2(true);
    };

    const fetchData = () => {
        axios.get('http://localhost:4000/api/admin/anchetas')
            .then(res => {
                setData(res.data);
                setTabla(res.data);
                setTotalItems(res.data.length);
            })
            .catch(err => console.log(err));
    };

    const handleDelete = (id) => {
        axios.delete('http://localhost:4000/api/admin/anchetas/anchetadel/' + id)
            .then(res => {
                console.log(res)
                Swal.fire({
                    title: 'Eliminado Correctamente',
                    text: "Tu ancheta ha sido eliminada correctamente",
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                })
                setTimeout(function () { window.location = "anchetas"; }, 670);
            }).catch(err => console.log(err));
    };

    const handleChange = e => {
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    };

    const filtrar = (terminoBusqueda) => {
        const resultadosBusqueda = tabla.filter((elemento) => {
            if (
                elemento.NombreAncheta.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
                elemento.PrecioUnitario.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
                elemento.Estado.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            ) {
                return elemento;
            }
            return null;
        });
        setData(resultadosBusqueda);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <>
            <div id="site-section">
                <br />
                <div className="row justify-content-end">
                    <div className="input-group mb-3 col-6">
                        <input
                            type="text"
                            className="form-control"
                            value={busqueda}
                            onChange={handleChange}
                            placeholder="Buscar Ancheta"
                        />
                        <div className="input-group-append">
                            <button className="btn btn-outline" type="button"><a href="#!" className="icon-search"> </a></button>
                        </div>
                    </div>
                </div>
                <br />
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col"></th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Insumos</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Estado</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.length > 0 ? (
                            currentItems.map((anchetas) => (
                                <tr key={anchetas.ID_Ancheta}>
                                    <th scope="row">{anchetas.ID_Ancheta}</th>
                                    <td>
                                        <img src={`http://localhost:4000/anchetas/` + anchetas.image} alt="" className="anchetas_img" />
                                    </td>
                                    <td>{anchetas.NombreAncheta}</td>
                                    <td><a href="#!" className=" icon-eye" onClick={() => {
                                        handleDetalleClick(anchetas.ID_Ancheta)
                                    }}> </a></td>
                                    <td>{formatPrice(anchetas.PrecioUnitario)}</td>
                                    <td>{anchetas.Estado}</td>
                                    <td><a href="#!" className=" icon-edit" onClick={() => {
                                        handleEditClick(anchetas.ID_Ancheta)
                                    }}> </a></td>
                                    <td><a href="#!" className=" icon-trash" onClick={() => {
                                        handleDelete(anchetas.ID_Ancheta)
                                    }}> </a></td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="text-center">
                                    {busqueda !== "" ? "No se encontraron resultados" : "Cargando..."}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <nav>
                    <ul className="pagination">
                        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                            <button
                                className="page-link"
                                onClick={() => setCurrentPage(currentPage - 1)}
                            >
                                Anterior
                            </button>
                        </li>
                        {Array.from(
                            { length: Math.ceil(totalItems / itemsPerPage) },
                            (_, index) => (
                                <li
                                    className={`page-item ${currentPage === index + 1 ? "active" : ""
                                        }`}
                                    key={index + 1}
                                >
                                    <button
                                        className="page-link"
                                        onClick={() => setCurrentPage(index + 1)}
                                    >
                                        {index + 1}
                                    </button>
                                </li>
                            )
                        )}
                        <li
                            className={`page-item ${currentPage === Math.ceil(totalItems / itemsPerPage)
                                ? "disabled"
                                : ""
                                }`}
                        >
                            <button
                                className="page-link"
                                onClick={() => setCurrentPage(currentPage + 1)}
                            >
                                Siguiente
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
            <EditarAncheta
                show={modalShow}
                onHide={() => setModalShow(false)}
                selectedAnchetaID={selectedAnchetaID}
            />
            <VerInsumos
                show={modalShow2}
                onHide={() => setModalShow2(false)}
                selectedAnchetaID={selectedAnchetaID}
            />
        </>
    );
}

export { TablaAncheta }
