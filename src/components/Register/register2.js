import React, { useEffect, useState } from "react";

// @mui
import { styled } from '@mui/material/styles';
import { Container, Typography, InputAdornment, IconButton, Button, Grid, TextField } from '@mui/material';

import { Link } from "react-router-dom";

// components
import Iconify from '../iconify';


// ----------------------------------------------------------------------

const StyledContent = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '60vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(2, 0),
}));

// ----------------------------------------------------------------------

const NoNumberArrowsTextField = styled(TextField)(({ theme }) => ({
    '& input[type=number]': {
        MozAppearance: 'textfield', // Firefox
        '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
            WebkitAppearance: 'none',
            margin: 0,
        },
    },
}));

export default function FormRegister() {

    const [showPassword, setShowPassword] = useState(false);


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
                        Registrar
                    </Typography>
                    <form >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <NoNumberArrowsTextField
                                    label="Documento"
                                    name="documento"
                                    type="number"
                                    margin="dense"
                                    fullWidth
                                    inputProps={{
                                        inputMode: 'numeric',
                                        pattern: '[0-9]*',
                                    }}
                                />
                                {/* Mostrar mensaje de error si es necesario */}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Nombre"
                                    name="nombre"
                                    type="text"
                                    margin="dense"
                                    fullWidth
                                />
                                {/* Mostrar mensaje de error si es necesario */}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Apellidos"
                                    name="apellidos"
                                    type="text"
                                    margin="dense"
                                    fullWidth
                                />
                                {/* Mostrar mensaje de error si es necesario */}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <NoNumberArrowsTextField
                                    label="Telefono"
                                    name="telefono"
                                    type="number"
                                    margin="dense"
                                    fullWidth
                                />
                                {/* Mostrar mensaje de error si es necesario */}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Correo electrónico"
                                    type='Email'
                                    name="correo"
                                    margin="dense"
                                    fullWidth
                                />
                                {/* Mostrar mensaje de error si es necesario */}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    color='info'
                                    name="Password"
                                    id='Password'
                                    label="Contraseña"
                                    type={showPassword ? 'text' : 'password'}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                {/* Mostrar mensaje de error si es necesario */}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    color='info'
                                    name="Password"
                                    id='Password'
                                    label="Confimar contraseña"
                                    type={showPassword ? 'text' : 'password'}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                {/* Mostrar mensaje de error si es necesario */}
                            </Grid>
                        </Grid>
                        <br />
                        <Button fullWidth size="large" type="submit" variant="contained" color='secondary' fontFamily={'Mukta'}>
                            Registrar
                        </Button>
                        <Link to="/login" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Mukta', marginTop: '15px' }}>
                            <Iconify icon="eva:arrow-ios-back-fill" color="#000000" width={16} height={16} style={{ marginBottom: '3px' }} />
                            <Typography variant="subtitle2" style={{ color: '#212B36' }}>
                                Volver a iniciar sesión
                            </Typography>
                        </Link>
                    </form>
                </StyledContent>
            </Container>
        </>
    );
}
