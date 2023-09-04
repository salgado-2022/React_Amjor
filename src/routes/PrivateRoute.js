import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const PrivateRoute = ({ children }) => {
    const apiUrl = process.env.REACT_APP_AMJOR_API_URL;
    const [user, setUser] = useState("");

    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            axios.get(`${apiUrl}/api/validar/cliente/${token}`)
                .then((res) => {
                    if (res.data.Status === "Ok") {
                        setUser("Ok");
                        console.log(res.data.Status);
                    } else {
                        setUser("Error");
                        console.log("error");
                    }
                })
                .catch((err) => {
                    setUser("Error");
                    console.log("Error en el sistema");
                });
        } else {
            setUser("NoToken");
        }
    }, [apiUrl]);

    if (user === "NoToken") {
        return <Navigate to="/login" />;
    }

    if (user === "Error") {
        return <Navigate to="/login" />;
    }

    return children;
};
