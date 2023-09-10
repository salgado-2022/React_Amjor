import { React } from "react";
//import { useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'

function ThankYou() {
  //const location = useLocation();
  //const searchParams = new URLSearchParams(location.search);
  //const pedidoID = searchParams.get('id');
  const navigate = useNavigate()

  return (
    <div className="site-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <span className="icon-check_circle display-3 text-success"></span>
            <h2 className="display-3 text-black">¡Muchas gracias!</h2>
            <p className="lead mb-5">Tu pedido se ha solicitado correctamente y se encuentra pendiente. Recibirás un correo electrónico cuando este
              sea aprobado.</p>
            <Button
              size="large"
              type="submit"
              variant="contained"
              color="secondary"
              fontFamily={'"Mukta", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";'}
              onClick={() => navigate('/shop')}
              sx={{ textTransform: 'none', fontFamily: "'Public Sans', sans serif", fontSize: "15px", fontWeight: "400" }}
            >
              Volver al catálogo
            </Button>

            {/* <p><a href="shop" className="btn btn-sm btn-primary">Volver al catálogo</a></p> */}

          </div>
        </div>
      </div>
    </div>
  );
}

export { ThankYou }