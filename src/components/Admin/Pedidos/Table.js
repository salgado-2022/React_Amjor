import React, { useEffect, useState } from "react";
import socket from '../../socket/config'

//AXIOS
import axios from "axios";

//sweetalert2
import Swal from 'sweetalert2';


//Ventanas modales
import { Detalle } from './Modals/Detalle'

function Table() {

    /* Estas líneas de código están declarando e inicializando variables de estado usando `useState` hook. */
    const [data, setData] = useState([])
    const [modalShow, setModalShow] = React.useState(false);
    const [selectedPedidoID, setSelectedPedidoID] = useState(null);


    useEffect(() => {
        socket.on('Pedidos', datosActualizados =>{
            setData(datosActualizados)
        })
    }, [data]);

    /**
    * La función establece el ID del pedido seleccionado y muestra un modal cuando se hace clic en el botón detalle.
      * @param pedidoID - pedidoID es una variable que representa el ID de un pedido específico que
      * se hizo clic en. Esta función se utiliza para manejar el evento de clic en un pedido específico y establece el
      * selectedPedidoID state al ID del pedido en el que se hizo clic y establece el estado modalShow en verdadero, lo que
      * mostrará
     */
    const handleDetalleClick = (pedidoID) => {
        setSelectedPedidoID(pedidoID);
        setModalShow(true);
    };


    const handleSuccessOrder = (pedido, cliente) => {

        const data = {
            pedido: pedido,
            cliente: cliente
        }

        axios.get('http://localhost:4000/api/admin/pedidos/success',{ params: data })
        .then(res => {
            if(res.data.Success === true){
                Swal.fire({
                    icon: 'success',
                    title: 'Pedido aceptado correctamente',
                    confirmButtonText: 'OK'
                })
            }
        })
        .catch(err =>{
            Swal.fire({ // Muestra la alerta de SweetAlert2
                title: 'Error!',
                text: err,
                icon: 'error',
                confirmButtonText: 'OK'
            });
        })
    }


    /**
    * La función `formatDate` toma una cadena de fecha y devuelve una cadena de fecha formateada en el formato
    * de "Mes Día, Año".
    * @param dateString: una cadena que representa una fecha, que se convertirá en un objeto de fecha.
    * @returns La función `formatDate` devuelve una cadena de fecha formateada en el formato de "Mes Día,
    * Año". La entrada `dateString` se convierte en un objeto `Date`, y luego `toLocaleDateString`
    * El método se utiliza para dar formato a la fecha de acuerdo con las opciones especificadas.
    */
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
    };

    /**
    * La función formatea un valor de precio dado en un formato de moneda con pesos colombianos como moneda
      * símbolo.
      * @param precio: el parámetro de precio es un número que representa el precio que se va a formatear.
      * @returns La función `formatPrice` devuelve una representación de cadena formateada de un precio dado
      * valor, en moneda peso colombiano (COP) y sin decimales.
     */
    const formatPrice = (price) => {
        const options = { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }; // Puedes ajustar la moneda según tus necesidades
        return price.toLocaleString(undefined, options);
    };


    return (
        <>
            <div className="site-blocks-table">
                <div className="site-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h2 className="h3 mb-3 text-black">Pedido</h2>
                            </div>
                            <div className="col-12">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Nombre Cliente</th>
                                            <th scope="col">Detalle</th>
                                            <th scope="col">Fecha para Entrega</th>
                                            <th scope="col">Dirección Entrega</th>
                                            <th scope="col">Precio</th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-group-divider">

                                        {
                                            data.slice(0).reverse().map((pedido, index)=>{
                                                return(
                                                    <tr key={index}>
                                                <th scope="row">{pedido.ID_Pedido}</th>
                                                <td>{pedido.Nombre_Cliente}</td>
                                                <td><a href="#!" className=" icon-eye" onClick={() => {
                                                    handleDetalleClick(pedido.ID_Pedido)
                                                }}>  </a></td>
                                                <td>{formatDate(pedido.Feche_Entrega)}</td>
                                                <td>{pedido.Direccion_Entrega}</td>
                                                <td>{formatPrice(pedido.Precio_Total)}</td>
                                                <td>
                                                    <a href="#/" className="icon-check"
                                                        onClick={() => {
                                                            handleSuccessOrder(pedido.ID_Pedido, pedido.ID_Cliente);
                                                        }}
                                                    > </a>
                                                </td>
                                                <td><a href="#/" className="icon-remove" > </a></td>
                                            </tr>
                                                );
                                            })
                                        }
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Detalle
                show={modalShow}
                onHide={() => setModalShow(false)}
                selectedPedidoID={selectedPedidoID}
            />
        </>
    );
}
export { Table }