import React, { useEffect, useState } from "react";

// @mui
import { styled } from '@mui/material/styles';
import { Container, Typography, Stack, Button, TextField } from '@mui/material';

import { Link } from "react-router-dom";

// components
import Iconify from '../../components/iconify';

//Axios
import axios from "axios";

//sweetalert2
import Swal from 'sweetalert2';


// ----------------------------------------------------------------------

const StyledContent = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '60vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(1, 0),
}));

// ----------------------------------------------------------------------

export default function ResetPassword() {

    const apiUrl = process.env.REACT_APP_AMJOR_API_URL;

    const [email, setEmail] = useState("");

    useEffect(() => {
        // Al entrar al componente, cambia el estilo del body
        document.body.style.backgroundColor = "#f0f0f0"; // Cambia esto al color deseado

        // Al salir del componente, restablece el estilo del body
        return () => {
            document.body.style.backgroundColor = null;
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post(`${apiUrl}/api/recuperar`, { email })
            .then((response) => {
                if (response.data.existe === true) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Correo enviado Correctamente',
                        confirmButtonText: 'OK'
                    })
                } else if (response.data.existe === false) {
                    Swal.fire({ // Muestra la alerta de SweetAlert2
                        title: 'Error!',
                        text: 'El correo no se encuentra registrado en el sistema.',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                }
            })
            .catch((error) => {
                // Aquí puedes manejar los errores
                console.error(error);
                Swal.fire({ // Muestra la alerta de SweetAlert2
                    title: 'Error!',
                    text: error,
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            });
    };

    return (
        <>
            <Container
                maxWidth="sm"
                style={{
                    display: 'flex',          // Utilizar flexbox para centrar vertical y horizontalmente
                    justifyContent: 'center', // Centrar horizontalmente
                    alignItems: 'center',     // Centrar verticalmente
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
                    borderRadius: 10,
                    marginTop: 50,
                    backgroundColor: '#FFFFFF'
                }}
            >
                <StyledContent>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Iconify icon="mdi:forgot-password" color="#9C27B0" width={65} height={48} />
                    </div>
                    <form onSubmit={handleSubmit}>

                        <Stack style={{ marginTop: '40px', marginBottom: '40px', textAlign: 'center' }} spacing={3}>
                            <Typography variant="h3" style={{ fontSize: '30px', fontWeight: 'bold' }} color="textPrimary">
                                ¿Olvidaste tu contraseña?
                            </Typography>

                            <Typography variant="body2">
                                Ingrese la dirección de correo electrónico asociada con su cuenta y le enviaremos un enlace para restablecer su contraseña.
                            </Typography>
                        </Stack  >

                        <Stack spacing={3}>

                            <TextField
                                name="Correo"
                                label="Correo"
                                color='info'
                                id='Correo'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <Button fullWidth size="large" type="submit" variant="contained" color="secondary" fontFamily={'Mukta'}>
                                Enviar
                            </Button>

                            <Link to="/login" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Mukta' }}>
                                <Iconify icon="eva:arrow-ios-back-fill" color="#000000" width={16} height={16} style={{ marginBottom: '3px' }} />
                                <Typography variant="subtitle2" style={{ color: '#212B36' }}>
                                    Volver a iniciar sesión
                                </Typography>
                            </Link>
                        </Stack>
                    </form>
                </StyledContent>
            </Container>
        </>
    );
}

