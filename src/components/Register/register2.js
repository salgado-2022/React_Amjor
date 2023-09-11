import React, { useEffect, useState } from "react";

// @mui
import { styled } from '@mui/material/styles';
import { Divider, Container, Typography, InputAdornment, IconButton, Button, Grid, TextField, Tooltip, tooltipClasses } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import { Link } from "react-router-dom";

import { useNavigate } from 'react-router-dom'

// components
import Iconify from '../iconify';


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
    padding: theme.spacing(5, 0),
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

const CustomWidthTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))({
    [`& .${tooltipClasses.tooltip}`]: {
        maxWidth: 500,
        fontSize: '16px',
    },
});


export default function FormRegister() {


    const apiUrl = process.env.REACT_APP_AMJOR_API_URL;

    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false);

    const [loading, setLoading] = useState(false);

    const [values, setValues] = useState({
        Documento: '',
        Nombre: '',
        Apellidos: '',
        Telefono: '',
        Email: '',
        Password: '',
        PasswordVerify: ''
    });

    const [documentoInput, setDocumentoInput] = useState(null);

    const [nameInput, setNameInput] = useState(null)

    const [lastName, setLastName] = useState(null)

    const [telInput, setTelInput] = useState(null)

    const [emailInput, setEmailInput] = useState(null);

    const [passwordInput, setPasswordInput] = useState(null);

    const [passwordVerify, setPasswordVerify] = useState(null);

    const documentoRegex = /^\d{1,10}$/;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    //Validacion para que acepte ñ y espacios en blanco
    const textRegex = /^[a-zA-Z0-9ñÑ\s]+$/;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

    const handleInput = (event) => {
        const { name, value } = event.target;
        setValues(prev => ({ ...prev, [name]: value }));

    }

    const handleBlur = (event) => {
        const { name, value } = event.target

        if (name === 'Documento') {
            if (!value) {
                setDocumentoInput('Campo obligatorio')
            } else if (!documentoRegex.test(value)) {
                setDocumentoInput('Documento invalido')
            } else {
                setDocumentoInput(null);
                axios.post(`${apiUrl}/api/validate/documento`, values)
                    .then(res => {
                        if (res.data.Status === "Success") {
                            setDocumentoInput(null)
                        } else if (res.data.Status === "Exists") {
                            setDocumentoInput('El documento ya se encuentra registrado')
                        }
                    })
            }
        }
        if (name === 'Email') {
            if (!value) {
                setEmailInput('Campo obligatorio')
            } else if (!emailRegex.test(value)) {
                setEmailInput('Correo invalido')
            } else {
                setEmailInput(null);

                axios.post(`${apiUrl}/api/validate/email`, values)
                    .then(res => {
                        if (res.data.Status === "Success") {
                            setEmailInput(null)
                        } else if (res.data.Status === "Exists") {
                            setEmailInput('El correo ya esta registrado')
                        }
                    })
            }
        }
        if (name === 'Telefono') {
            if (!value) {
                setTelInput('Campo obligatorio')
            } else if (!documentoRegex.test(value)) {
                setTelInput('Telefono invalido')
            } else {
                setTelInput(null)
            }
        }
        if (name === 'Nombre') {
            if (!value) {
                setNameInput('Campo obligatorio')
            } else if (!textRegex.test(value)) {
                setNameInput('Nombre invalido')
            } else {
                setNameInput(null)
            }
        }
        if (name === 'Apellidos') {
            if (!value) {
                setLastName('Campo obligatorio')
            } else if (!textRegex.test(value)) {
                setLastName('Apellido invalido')
            } else {
                setLastName(null)
            }
        }
        if (name === 'Password') {
            if (!value) {
                setPasswordInput('Campo obligatorio')
            } else if (!passwordRegex.test(value)) {
                setPasswordInput('Contraseña invalida')
            } else {
                setPasswordInput(null)
            }
        }
        if (name === 'PasswordVerify') {
            if (!passwordRegex.test(value)) {
                setPasswordVerify('Contraseña invalida')
            }
            else if (values.Password !== values.PasswordVerify) {
                setPasswordVerify('Las contraseñas no coinciden');
            } else {
                setPasswordVerify(null)
            }
        }

    }

    const handleSubmit = (event) => {
        event.preventDefault();

        handleBlur({ target: { name: 'Documento', value: values.Documento } });
        handleBlur({ target: { name: 'Nombre', value: values.Nombre } });
        handleBlur({ target: { name: 'Apellidos', value: values.Apellidos } });
        handleBlur({ target: { name: 'Telefono', value: values.Telefono } });
        handleBlur({ target: { name: 'Email', value: values.Email } });
        handleBlur({ target: { name: 'Password', value: values.Password } });
        handleBlur({ target: { name: 'PasswordVerify', value: values.PasswordVerify } });

        if (documentoInput === null && nameInput === null && lastName === null && telInput === null && emailInput === null && passwordInput === null && passwordVerify === null) {
            setLoading(true);
            axios.post(`${apiUrl}/api/register`, values)
                .then(res => {
                    if (res.data.Status === "Success") {
                        Swal.fire({
                            icon: 'success',
                            title: 'Te has registrado correctamente',
                            showConfirmButton: false,
                            timer: 1500,
                            onClose: setLoading(false)
                        })
                        navigate('/login')
                    }
                })
                .then(err => {
                    console.log(err)
                    setLoading(false);
                });

        }
    }


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
                    {/* <Typography variant="h4" gutterBottom color="textPrimary" fontFamily={'Mukta'}>
                        Registrar
                    </Typography> */}
                    <Typography variant="h4" display="flex" justifyContent="center" gutterBottom color="textPrimary" fontFamily={'Mukta'}>
                        Crear nueva cuenta
                    </Typography>

                    <Typography variant="body2" display="flex" justifyContent="center" fontFamily={'Mukta'} sx={{}} style={{ fontSize: 16 }} color="textPrimary">
                        ¿Ya tienes una cuenta? {''}
                        <Link to="/login" style={{ fontSize: 16, fontWeight: 'bold', color: '#9C27B0', marginLeft: '5px' }}>Inicia sesión ahora</Link>
                    </Typography>

                    <Divider sx={{ my: 3 }}>

                    </Divider>

                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <NoNumberArrowsTextField
                                    label="Documento *"
                                    name="Documento"
                                    type="number"
                                    margin="dense"
                                    fullWidth
                                    color="secondary"
                                    value={values.Documento}
                                    onChange={handleInput}
                                    onBlur={handleBlur}
                                    error={documentoInput !== null}
                                    helperText={documentoInput}
                                    inputProps={{
                                        inputMode: 'numeric',
                                        pattern: '[0-9]*',
                                    }}
                                />
                                {/* Mostrar mensaje de error si es necesario */}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Nombre *"
                                    name="Nombre"
                                    type="text"
                                    margin="dense"
                                    color="secondary"
                                    fullWidth
                                    value={values.Nombre}
                                    onChange={handleInput}
                                    onBlur={handleBlur}
                                    error={nameInput !== null}
                                    helperText={nameInput}
                                />
                                {/* Mostrar mensaje de error si es necesario */}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Apellidos *"
                                    name="Apellidos"
                                    type="text"
                                    margin="dense"
                                    color="secondary"
                                    fullWidth
                                    value={values.Apellidos}
                                    onChange={handleInput}
                                    onBlur={handleBlur}
                                    error={lastName !== null}
                                    helperText={lastName}
                                />
                                {/* Mostrar mensaje de error si es necesario */}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <NoNumberArrowsTextField
                                    label="Teléfono *"
                                    name="Telefono"
                                    type="number"
                                    margin="dense"
                                    color="secondary"
                                    fullWidth
                                    value={values.Telefono}
                                    onChange={handleInput}
                                    onBlur={handleBlur}
                                    error={telInput !== null}
                                    helperText={telInput}
                                />
                                {/* Mostrar mensaje de error si es necesario */}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Correo electrónico *"
                                    type='Email'
                                    name="Email"
                                    margin="dense"
                                    color="secondary"
                                    fullWidth
                                    value={values.Email}
                                    onChange={handleInput}
                                    onBlur={handleBlur}
                                    error={emailInput !== null}
                                    helperText={emailInput}
                                />
                                {/* Mostrar mensaje de error si es necesario */}
                            </Grid>
                            <Grid item xs={12}>
                                <CustomWidthTooltip arrow placement="top-start" title="La contraseña debe contener al menos 8 caracteres, incluyendo letras mayúsculas, letras minúsculas y números." sx={{ maxWidth: 500, fontSize: 200 }}>
                                    <TextField
                                        fullWidth
                                        color='secondary'
                                        name="Password"
                                        id='Password'
                                        label="Contraseña *"
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
                                        value={values.Password}
                                        onChange={handleInput}
                                        onBlur={handleBlur}
                                        error={passwordInput !== null}
                                        helperText={passwordInput}
                                    />
                                </CustomWidthTooltip>
                                {/* Mostrar mensaje de error si es necesario */}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    color='secondary'
                                    name="PasswordVerify"
                                    id='PasswordVerify'
                                    label="Confimar contraseña *"
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
                                    value={values.PasswordVerify}
                                    onChange={handleInput}
                                    onBlur={handleBlur}
                                    error={passwordVerify !== null}
                                    helperText={passwordVerify}

                                />
                                {/* Mostrar mensaje de error si es necesario */}
                            </Grid>
                        </Grid>
                        <br />
                        {/* <Button fullWidth size="large" type="submit" variant="contained" color='secondary' fontFamily={'Mukta'}>
                            Registrar
                        </Button> */}

                        <LoadingButton
                            size="large"
                            fullWidth
                            type="submit"
                            loading={loading}
                            variant="contained"
                            color="secondary"
                            sx={{ backgroundColor: "#9C27B0", textTransform: 'none',  marginTop: '8px', fontWeight: 400, fontFamily: '"Public Sans", sans-serif;' }}
                        //disabled
                        >
                            <span>Crear cuenta</span>
                        </LoadingButton>

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
