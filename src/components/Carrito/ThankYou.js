import React from "react";

function ThankYou() {

    return(
        <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <span class="icon-check_circle display-3 text-success"></span>
            <h2 class="display-3 text-black">¡Muchas gracias!</h2>
            <p class="lead mb-5">Tu pedido se ha solicitado correctamente. Recibirás un correo electrónico cuando este
              sea aprobado.</p>
            <p><a href="shop" class="btn btn-sm btn-primary">Volver al catálogo</a></p>
          </div>
        </div>
      </div>
    </div>
    );
}

export { ThankYou }