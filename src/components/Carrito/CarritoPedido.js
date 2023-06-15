import React from "react";
import { Link } from "react-router-dom";

function CarritoPedido() {
    
    
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
                    
                    <button className="btn btn-primary btn-lg py-3 btn-block" id="boton-realizarPedido" >Realizar
                      pedido</button>
                  </div>
                  </Link>

                </div>
              </div>
            </div>

          </div>
    );
}

export { CarritoPedido }