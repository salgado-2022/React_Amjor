import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export const PrivateRoute = ({ children }) => {

    const authToken = Cookies.get('token');

    // Validar el token aquí o hacer una solicitud a tu servidor para validar el token
    if (!authToken) {
        return <Navigate to="/login" />;
    }
    return children
}