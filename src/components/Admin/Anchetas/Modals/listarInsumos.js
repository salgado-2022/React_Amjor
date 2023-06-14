import React, { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { Insumoscontext } from "../Context/Context";


function ListarInsumos(props) {
  const { onHide, show } = props;

  const [data, setData] = useState([]);
  const [tabla, setTabla] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const Globalstate = useContext(Insumoscontext);
  const dispatch = Globalstate.dispatch;
  const { state: insumosState } = useContext(Insumoscontext);
  const insumosAgregados = insumosState.map((insumo) => insumo.ID_Insumo);

  const formatPrice = (price) => {
    return price.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    });
  };

  const fetchData = () => {
    axios
      .get("http://localhost:4000/api/admin/insumos")
      .then((res) => {
        setData(res.data);
        setTabla(res.data);
      })
      .catch((err) => console.log(err));
  };
  

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = tabla.filter((elemento) => {
      if (
        elemento.NombreInsumo.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) || 
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

  return (
    <Modal
      onHide={onHide}
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ zIndex: "2000" }}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter" className="text-black">
          Lista de Insumos
        </Modal.Title>
        <Button variant="secondary" onClick={props.onHide} className="close">
          <span aria-hidden="true">&times;</span>
        </Button>
      </Modal.Header>
      <Modal.Body>
        <div id="site-section">
          <div className="row justify-content-end">
            <div className="input-group mb-3 col-5">
              <input type="text" className="form-control" value={busqueda} onChange={handleChange} placeholder="Buscar Insumo"/>
              <div className="input-group-append">
                <button className="btn btn-outline" type="reset"><a href="#!" className="icon-search"> </a></button>
              </div>
            </div>
          </div>
          <ul className="list-group list-group-flush">
          {data && data.map((insumo) => {
            
            if (insumosAgregados.includes(insumo.ID_Insumo)){
              return null;
            }
            insumo.Cantidad = 1;
            insumo.Precio = insumo.PrecioUnitario;
            return (
            <li key={insumo.ID_Insumo} className="list-group-item">
              <div className="row">
                <div className="col-8" style={{display: "flex", alignItems: "center", fontSize: "18px"}}><a href="#!" className="icon-plus" style={{fontSize: "24px"}} onClick={()=>dispatch({type:'AddInsumo', payload: insumo})}> </a>&nbsp; &nbsp;{insumo.NombreInsumo}</div>
                <div className="col-md-auto">
                  <div className="input-group" style={{ maxWidth: "110px" }}>
                    <div className="input-group-prepend">
                      <button className="btn btn-outline-primary js-btn-minus" type="button" onClick={()=>dispatch({type: 'Decrement', payload: insumo})}>&minus;</button>
                    </div>
                    <input type="text" className="form-control text-center" value={insumo.Cantidad} placeholder=""/>
                    <div className="input-group-append">
                      <button className="btn btn-outline-primary js-btn-plus" type="button" onClick={()=>dispatch({type: 'Increment', payload: insumo})}>&#43;</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-auto" style={{fontSize:"18px", display: "flex", alignItems: "center"}}>{formatPrice(insumo.Precio)}</div>
              </div>
            </li>
            );
          })}
          </ul>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export { ListarInsumos };
