import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import { Container, Typography, Stack, Button, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { Link } from "react-router-dom";
import Iconify from '../../components/iconify';
import axios from "axios";
import Swal from 'sweetalert2';

const StyledContent = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '60vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(1, 0),
}));

export function UpdataPassword() {
    const apiUrl = process.env.REACT_APP_AMJOR_API_URL;
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        document.body.style.backgroundColor = "#f0f0f0";
        return () => {
            document.body.style.backgroundColor = null;
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        axios
            .post(`${apiUrl}/api/recuperar`, { email })
            .then((response) => {
                if (response.data.existe === true) {
                    setLoading(false);
                    Swal.fire({
                        icon: 'success',
                        title: 'Correo enviado correctamente',
                        timer: 2000,
                        confirmButtonText: 'Ok'
                    })
                } else if (response.data.existe === false) {
                    setLoading(false);
                    Swal.fire({
                        title: 'Error',
                        text: 'El correo no se encuentra registrado en el sistema.',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                }
            })
            .catch((error) => {
                setLoading(false);
                console.error(error);
                Swal.fire({
                    title: 'Error!',
                    text: 'Hubo un problema al enviar el correo.',
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
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
                    borderRadius: 10,
                    marginTop: 50,
                    backgroundColor: '#FFFFFF'
                }}
            >
                <StyledContent>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Iconify style={{ marginTop: '30px'}} icon="mdi:forgot-password" color="#9C27B0" width={65} height={48} />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <Stack style={{ marginTop: '30px', marginBottom: '40px', textAlign: 'center' }} spacing={3}>
                            <Typography variant="h3" style={{ fontSize: '30px', fontWeight: 'bold' }} color="textPrimary">
                                Actualizar contraseña
                            </Typography>
                            <Typography variant="body2">
                                Solicitaste un cambio de contraseña. Ingresa tu nueva contraseña en los campos inferiores para recuperar el acceso a tu cuenta.
                            </Typography>
                        </Stack>
                        <Stack spacing={3}>
                            <TextField
                                name="password"
                                label="Nueva contraseña *"
                                color="secondary"
                                value={email}
                                onChange={handleInput}
                                onBlur={handleBlurPass}
                            />
                            <LoadingButton
                                size="large"
                                fullWidth
                                type="submit"
                                loading={loading}
                                variant="contained"
                                color="secondary"
                                sx={{ backgroundColor: "#9C27B0", textTransform: 'none', marginTop: '8px', fontWeight: 400, fontFamily: '"Public Sans", sans-serif;' }}
                            >
                                <span>Cambiar contraseña</span>
                            </LoadingButton>
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
