import React from 'react';

import { Route, Routes, BrowserRouter } from "react-router-dom";

// Componentes publicos 
import Inicio from '../views/Inicio'
import { Nosotros } from '../views/Nosotros';
import { Catalogo } from '../views/Catalogo';
import { AnchetaDetalle } from '../components/Catalogo/AnchetaDetalle';
import { Error404 } from '../views/404';
import { Carrito } from '../views/Carrito';
import { Checkout } from '../views/Checkout';
import { CompraThankYou } from '../views/ThankYou';
import { Contact } from '../views/contact';
import Login from '../views/Login';
import { Register } from '../views/Register';
import ResetPassword from '../components/Reset-Password/Reset-Password2';



//Rutas privadas
import { UpdataPassword } from '../components/Register/updatePassword';
import { Navbar } from '../components/Navbar/Navbar';
import { Shops } from '../views/shops';
import { PrivateRoute } from './PrivateRoute';
import { Perfil } from '../views/perfil';



function Rutas() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/shop" element={<Catalogo />} />
                <Route path="/anchetas/:anchetaID" element={<AnchetaDetalle />} />
                <Route path="/carrito" element={<Carrito />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/thankyou' element={<CompraThankYou />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/restore/password" element={<UpdataPassword />} />
                <Route path="/reset" element={<ResetPassword />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/shopping" element={
                    <PrivateRoute>
                        <Shops />
                    </PrivateRoute>
                } />
                <Route path='/usuario/perfil' element={<Perfil/>}/>

                <Route path="*" element={<Error404 />} />
            </Routes>

        </BrowserRouter>
    );
}

export { Rutas }
