import React, {useEffect} from "react";

// @mui
import { styled } from '@mui/material/styles';
import { Container, Typography, Divider, Stack, Button } from '@mui/material';

import { Link } from "react-router-dom";

// components
import Iconify from '../components/iconify';
// sections
import { LoginForm } from '../sections/auth/login';


// ----------------------------------------------------------------------

const StyledContent = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '60vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(5, 0),
}));

// ----------------------------------------------------------------------

export default function Login() {

    useEffect(() => {
        // Al entrar al componente, cambia el estilo del body
        document.body.style.backgroundColor = "#f0f0f0"; // Cambia esto al color deseado

        // Al salir del componente, restablece el estilo del body
        return () => {
            document.body.style.backgroundColor = null;
        };
    }, []);

    return (
        <>
                <Container maxWidth="sm" style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', borderRadius: 10, marginTop: 40, backgroundColor: '#FFFFFF' }}>
                    <StyledContent>
                        <Typography variant="h4" gutterBottom color="textPrimary" fontFamily={'Mukta'}>
                            Iniciar Sesión
                        </Typography>
                        <br />

                        <Typography variant="body2" fontFamily={'Mukta'} sx={{ mb: 5 }} style={{ fontSize: 16 }} color="textPrimary">
                            ¿No tienes una cuenta? {''}
                            <Link to="/register"  style={{ fontSize: 16, fontWeight: 'bold', color: '#9C27B0'}}>Crea una</Link>
                        </Typography>

                        <Stack direction="row" spacing={2}>
                            <Button fullWidth size="large" color="inherit" variant="outlined">
                                <Iconify icon="eva:google-fill" color="#DF3E30" width={22} height={22} />
                            </Button>

                            <Button fullWidth size="large" color="inherit" variant="outlined">
                                <Iconify icon="eva:facebook-fill" color="#1877F2" width={22} height={22} />
                            </Button>

                            <Button fullWidth size="large" color="inherit" variant="outlined">
                                <Iconify icon="bi:github" color="#000000" width={22} height={22} />
                            </Button>
                        </Stack>

                        <Divider sx={{ my: 3 }}>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }} fontFamily={'Mukta'}>
                                O
                            </Typography>
                        </Divider>

                        <LoginForm />
                    </StyledContent>
                </Container>
        </>
    );
}
