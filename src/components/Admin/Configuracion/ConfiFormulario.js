import React from "react";
import '../../../assets/css/configu.css'


function ConfiFormulario(){


    return (
        <>
         <div className="container">
      <h2 className="h3 mb-7 text-black">CREAR UN NUEVO ROL Y PERMISOS.</h2> &nbsp;
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label"> &nbsp;
          Nuevo rol. Recuerda elegir tambien los permisos asociados al rol ingresado.
        </label>
        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="e.j Administrador" aria-describedby="emailHelp" required /> 
        <h6>Solo son letras, campo obligatorio</h6>
      </div> 
      <br></br>
      <div id="dropdown">
    <button>Seleccionar opciones</button> 
    <br></br> 
    <div id="dropdown-content">
      <input type="checkbox" id="option1"/>
      <label for="option1">Dashboart</label><br></br>
      <input type="checkbox" id="option2"/>
      <label for="option2">Usuarios</label><br></br>
      <input type="checkbox" id="option3"/>
      <label for="option3">Ventas</label><br></br>
      <input type="checkbox" id="option4"/>
      <label for="option4">Anchetas</label><br></br>
      <input type="checkbox" id="option5"/>
      <label for="option4">Configuracion</label><br></br>
      <input type="checkbox" id="option6"/>
      <label for="option4">Insumos</label><br></br>
      <input type="checkbox" id="option7"/>
      <label for="option4">Intensos</label><br></br>
       </div> &nbsp;  
    </div> 
   <br></br> 

      <button type="submit" className ="btn-agregar mb-4 col-8" id="btn-agregar">
        AGREGAR
      </button>
    </div>  

     
    </>
    );
}

export {ConfiFormulario}