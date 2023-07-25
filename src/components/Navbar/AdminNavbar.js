// import React from "react";
// import { Link, useNavigate } from 'react-router-dom';
// import logo from '../../assets/img/logos/logomoradoclaro.png';
// import '../../assets/css/navbar.css'
// import axios from "axios";

// //sweetalert2
// import Swal from 'sweetalert2';

// function AdminNavbar() {

//     axios.defaults.withCredentials = true;
//     const navigate = useNavigate();

//     const handleDelete = () => {
//         axios.get('http://localhost:4000/api/logout')
//             .then(res => {
//                 navigate('/');
//                 let timerInterval
//                 Swal.fire({
//                     title: 'Cerrando Sesión!',
//                     html: 'Por favor espere un momento.',
//                     timer: 2000,
//                     timerProgressBar: true,
//                     didOpen: () => {

//                     },
//                     willClose: () => {
//                         clearInterval(timerInterval);
//                         window.location.reload(true);
//                     }
//                 }).then((result) => {
//                     /* Read more about handling dismissals below */
//                     if (result.dismiss === Swal.DismissReason.timer) {
//                         console.log('I was closed by the timer');
//                     }
//                 })

//             }).catch(err => console.log(err));
//     }

//     return (

//         <header className="site-navbar mb-5" role="banner">
//             <div className="navigation-wrap bg-light start-header start-style">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-12">
//                             <nav className="navbar navbar-expand-md navbar-light">
//                                 <Link to="/">
                                    
//                                         <span>
//                                             <img src={logo} alt="logo" className="navbar-brand" style={{ marginTop: '-20px', marginBottom: '-20px', width: '80px' }} />
//                                         </span>
                                    

//                                 </Link>

//                                 <div className="navbar-collapse" id="navbarSupportedContent">
//                                     <ul className="navbar-nav ml-auto py-4 py-md-0">
//                                         <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
//                                             <Link to="/admin/configuracion">Configuración</Link>
//                                         </li>
//                                         <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
//                                             <Link to="/admin/usuarios">Usuarios</Link>
//                                         </li>
//                                         <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
//                                             <Link to="/admin/anchetas">Anchetas</Link>
//                                         </li>
//                                         <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
//                                             <Link to="/admin/insumos">Insumos</Link>
//                                         </li>
//                                         <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
//                                             <Link to="/admin/pedidos">Pedidos</Link>
//                                         </li>
//                                         <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
//                                             <Link to="/admin/ventas">Ventas</Link>
//                                         </li>
//                                     </ul>
//                                     <span className="icon icon-exit_to_app ml-5" onClick={handleDelete}></span>
//                                 </div>

//                             </nav>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </header>

//     );
// }

// export { AdminNavbar }