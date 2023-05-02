import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function PrivateRoute({ element: Component, ...rest }) {
    const isAuthenticated = localStorage.getItem('isAuthenticated'); // verifica si el usuario está autenticado

    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuthenticated ? (
                    <Component />
                ) : (
                    <Navigate to="/login" state={{ from: location }} /> // redirige al usuario a la página de inicio de sesión
                )
            }
        />
    );
}

export { PrivateRoute };
