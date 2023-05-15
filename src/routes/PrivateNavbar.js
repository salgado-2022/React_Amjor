import Cookies from 'js-cookie';
import { Navbar } from '../components/Navbar/Navbar';
import { AdminNavbar } from '../components/Navbar/AdminNavbar';
import { useState, useEffect } from 'react';

export const PrivateNavbar = ({ children }) => {

    const [authToken, setAuthToken] = useState(Cookies.get('token'));

    useEffect(() => {
        setAuthToken(Cookies.get('token'));
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setAuthToken(Cookies.get('token'));
        }, 1);

        return () => clearInterval(intervalId);
    }, []);

    // Validar el token aquí o hacer una solicitud a tu servidor para validar el token

    if (!authToken) {
        return <Navbar />;
    }
    return (
        <>
            <AdminNavbar />
            {children}
        </>
    );
}
