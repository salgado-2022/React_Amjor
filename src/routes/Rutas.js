import React from 'react';

import { Route, Routes, BrowserRouter } from "react-router-dom";

// Componentes publicos 
import Inicio from '../views/Inicio'
import { Nosotros } from '../views/Nosotros';
import { Catalogo } from '../views/Catalogo';
import { Error404 } from '../views/404';
import { Carrito } from '../views/Carrito';
import { Login } from '../views/Login';
import { Payment } from '../views/Payment';
import { Register } from '../views/Register';
import { ResetPassword } from '../components/Reset-Password/Reset-Password';

//Rutas Admin
import {Pedidos}  from '../views/Admin/Pedidos'
import { Configuracion } from '../views/Admin/Configuracion';
import { Usuarios } from '../views/Admin/Usuarios';

//Rutas privadas
import { PrivateRoute } from './PrivateRoute'
import { PrivateNavbar } from './PrivateNavbar'




function Rutas() {
    return (
        <BrowserRouter>
            <PrivateNavbar />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/shop" element={<Catalogo />} />
                <Route path="/carrito" element={<Carrito />} />
                <Route path='/payment' element={<Payment />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/reset" element={<ResetPassword />} />
                <Route path="/admin/pedidos" element={
                    <PrivateRoute>
                        <Pedidos />
                    </PrivateRoute>} />
                <Route path="*" element={<Error404 />} />
                <Route path="/admin/Configuracion" element={
                    <PrivateRoute>
                        <Configuracion />
                    </PrivateRoute>} />
                    <Route path="*" element={<Error404 />} />
                    <Route path="/admin/Usuarios" element={
                    <PrivateRoute>
                        <Usuarios />
                    </PrivateRoute>} />
                    <Route path="*" element={<Error404 />} />
            </Routes>

        </BrowserRouter>
    );
}

export { Rutas }

