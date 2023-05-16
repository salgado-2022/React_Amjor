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
import {Anchetas}  from '../views/Admin/Anchetas'
import {Insumos}  from '../views/Admin/Insumos'

//Rutas privadas
import { PrivateRoute } from './PrivateRoute'
import { PrivateNavbar } from './PrivateNavbar'
import { UpdataPassword } from '../components/Register/updatePassword';


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
                <Route path="/restore/password" element={<UpdataPassword />} />
                <Route path="/reset" element={<ResetPassword />} />
                <Route path="/admin/pedidos" element={
                    <PrivateRoute>
                        <Pedidos />
                    </PrivateRoute>} />
                <Route path="*" element={<Error404 />} />
                <Route path="/admin/anchetas" element={
                    <PrivateRoute>
                        <Anchetas />
                    </PrivateRoute>} />
                <Route path="*" element={<Error404/>} />
                <Route path="/admin/insumos" element={
                    <PrivateRoute>
                        <Insumos />
                    </PrivateRoute>} />
                <Route path="*" element={<Error404/>} />
            </Routes>

        </BrowserRouter>
    );
}

export { Rutas }

