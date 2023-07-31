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
import { Login } from '../views/Login';
import { Register } from '../views/Register';
import { ResetPassword } from '../components/Reset-Password/Reset-Password';

//Rutas Admin
import { Pedidos } from '../views/Admin/Pedidos'
import { Anchetas } from '../views/Admin/Anchetas'
import { Insumos } from '../views/Admin/Insumos'
import { Usuarios } from '../views/Admin/Usuarios';
import { Configuracion } from '../views/Admin/Configuracion';
import { Ventas } from '../views/Admin/Ventas';

//Rutas privadas
import { PrivateRoute } from './PrivateRoute'
import { UpdataPassword } from '../components/Register/updatePassword';
import { Navbar } from '../components/Navbar/Navbar';



function Rutas() {
    return (
        <BrowserRouter>
            <Navbar/>
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

                <Route path="/admin/pedidos" element={
                    <PrivateRoute>
                        <Pedidos />
                    </PrivateRoute>} />
                <Route path="*" element={<Error404 />} />
                <Route path="/admin/anchetas" element={
                    <PrivateRoute>
                        <Anchetas />
                    </PrivateRoute>} />
                <Route path="*" element={<Error404 />} />
                <Route path="/admin/insumos" element={
                    <PrivateRoute>
                        <Insumos />
                    </PrivateRoute>} />
                <Route path="*" element={<Error404 />} />

                <Route path='/admin/usuarios' element={
                    <PrivateRoute>
                        <Usuarios />
                    </PrivateRoute>
                } />

                <Route path='/admin/configuracion' element={
                    <PrivateRoute>
                        <Configuracion />
                    </PrivateRoute>
                } />

                <Route path='/admin/ventas' element={
                    <PrivateRoute>
                        <Ventas />
                    </PrivateRoute>
                } />
            </Routes>

        </BrowserRouter>
    );
}

export { Rutas }
