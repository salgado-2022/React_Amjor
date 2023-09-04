import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useEffect } from 'react';

export const PrivateRoute = ({ children }) => {

    const authToken = Cookies.get('token');
    useEffect(()=>{
        axios.get
    })

    // Validar el token aquí o hacer una solicitud a tu servidor para validar el token
    if (!authToken) {
        return <Navigate to="/login" />;
    }
    return children
}