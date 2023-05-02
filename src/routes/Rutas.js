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
import { Navbar } from '../components/Navbar/Navbar';
import { Register } from '../views/Register';


//Rutas privadas
import { PrivateRoute } from './PrivateRoute'

function Rutas() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/shop" element={
                    <PrivateRoute>
                        <Catalogo />
                    </PrivateRoute>} />
                <Route path="/carrito" element={<Carrito />} />
                <Route path='/payment' element={<Payment />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<Error404 />} />

            </Routes>

        </BrowserRouter>
    );
}

export { Rutas }

