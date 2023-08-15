import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from '../../hooks/useCart'; 
import axios from 'axios'
import { clear } from "i/lib/inflections";


function CarritoPedido() {
  
  const {  clearCart } = useCart();
  const storedCart = JSON.parse(window.localStorage.getItem('cart')) || [];

  const [pedidoData, setPedidoData] = useState({
      ID_Cliente: 1, // Reemplaza con el ID real del cliente
      Direccion_Entrega: "Dirección de prueba: Cra 60A #70A - 80 Int 2106",
      Fecha_Entrega: "2023-08-15", // Fecha de entrega en formato YYYY-MM-DD
      Precio_Total: calcularPrecioTotal(storedCart), // Implementa una función para calcular el precio total del carrito
      Anchetas: storedCart.map(producto => ({
          ID_Ancheta: producto.ID_Ancheta,
          Cantidad: producto.quantity,
          Insumos: producto.insumos.map(insumo => ({
              ID_Insumo: insumo.ID_Insumos_Ancheta,
              Cantidad: insumo.Cantidad
          }))
      }))
  });

  function calcularPrecioTotal(storedCart) {
    let total = 0;
  
    storedCart.forEach(producto => {
        total += producto.PrecioUnitario * producto.quantity; // Sumar el precio del producto
    });
  
    return total;
  }

  const enviarPedido = () => {
    console.log(pedidoData)
      // Realizar la solicitud HTTP POST al servidor
      axios.post("http://localhost:4000/api/enviarPedido", pedidoData)
          .then(response => {
              console.log("Pedido enviado con éxito:", response.data);
              console.log(storedCart)
              clearCart();
              
          })
          .catch(error => {
              console.error("Error al enviar el pedido:", error);
          });
  }; 
    
    
    return(
        <div className="col-md-6">
            <div className="row mb-5">
              <div className="col-md-12">
                <h2 className="h3 mb-3 text-black">Tu pedido</h2>
                <div className="p-3 p-lg-5 border">
                  <table className="table site-block-order-table mb-5">
                    <thead>
                      <th>Producto</th>
                      <th>Total</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Ancheta 1 <strong className="mx-2">x</strong> 1</td>
                        <td>$49.900</td>
                      </tr>
                      <tr>
                        <td>Ancheta 2<strong className="mx-2">x</strong> 1</td>
                        <td>$55.000</td>
                      </tr>
                      <tr>
                        <td><strong className="mx-2"> </strong>  </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Costo del envío</td>
                        <td>$10.000</td>
                      </tr>
                      <tr>
                        <td className="text-black font-weight-bold"><strong>Subtotal</strong></td>
                        <td className="text-black">$114.900</td>
                      </tr>
                      <tr>
                        <td className="text-black font-weight-bold"><strong>Total</strong></td>
                        <td className="text-black font-weight-bold"><strong>$114.900</strong></td>
                      </tr>
                    </tbody>
                  </table>

                  {/* <!--
                  <div className="border p-3 mb-3">
                    <h3 className="h6 mb-0"><a className="d-block" data-toggle="collapse" href="#collapsebank" role="button"
                        aria-expanded="false" aria-controls="collapsebank">Direct Bank Transfer</a></h3>

                    <div className="collapse" id="collapsebank">
                      <div className="py-2">
                        <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as
                          the payment reference. Your order won’t be shipped until the funds have cleared in our
                          account.</p>
                      </div>
                    </div>
                  </div>
                --> */}

                  <div className="border p-3 mb-3">
                    <h3 className="h6 mb-0"><a className="d-block" data-toggle="collapse" href="#!" role="button"
                        aria-expanded="false" aria-controls="collapse-contraentrega">Pago contra entrega</a></h3>

                    <div >
                      <div className="py-2">
                        <p className="mb-0">Pagas cuando el producto llegue a la dirección que nos proporcionaste. Si no se paga en ese momento, el producto no podrá ser entregado.</p>
                      </div>
                    </div>
                  </div>

                  <div className="border p-3 mb-5">
                    <h3 className="h6 mb-0"><a className="d-block" data-toggle="collapse" href="#!" role="button"
                        aria-expanded="false" aria-controls="collapsepaypal">Por el momento no contamos con más métodos de pago.</a></h3>

                  </div>

                  <Link exact to="/thankyou"> 
                  <div className="form-group">
                    
                    <button className="btn btn-primary btn-lg py-3 btn-block" id="boton-realizarPedido" onClick={() => enviarPedido()}
                    >Realizar pedido</button>
                  </div>
                  </Link>

                </div>
              </div>
            </div>

          </div>
    );
}

export { CarritoPedido }