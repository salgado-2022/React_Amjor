import React, { useEffect, useState } from "react";

// @mui
import { styled } from '@mui/material/styles';
import { MenuItem, Card, CardHeader, Container, Typography, InputAdornment, IconButton, Button, Grid, TextField, Tooltip, tooltipClasses } from '@mui/material';

import { Link } from "react-router-dom";

import { useNavigate } from 'react-router-dom'

// components
import Iconify from '../iconify';


//Axios 
import axios from "axios";

//sweetalert2
import Swal from 'sweetalert2';


const StyledContent = styled('div')(({ theme }) => ({
    minHeight: '60vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',

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


function Informacion() {

    const apiUrl = process.env.REACT_APP_AMJOR_API_URL;

    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false);

    const [values, setValues] = useState({
        Documento: '',
        Nombre: '',
        Apellidos: '',
        Telefono: '',
        Email: '',
        Password: '',
        PasswordVerify: ''
    });

    const municipios = [
        {
            value: 'Barbosa',
            label: 'Barbosa',
        },
        {
            value: 'Bello',
            label: 'Bello',
        },
        {
            value: 'Caldas',
            label: 'Caldas',
        },
        {
            value: 'Copacabana',
            label: 'Copacabana',
        },
        {
            value: 'Envigado',
            label: 'Envigado',
        },
        {
            value: 'Girardota',
            label: 'Girardota',
        },
        {
            value: 'Itagüí',
            label: 'Itagüí',
        },
        {
            value: 'La Estrella',
            label: 'La Estrella',
        },
        {
            value: 'Medellín',
            label: 'Medellín',
        },
        {
            value: 'Sabaneta',
            label: 'sabaneta',
        },
    ];

    const paises = [
        {
            value: 'Colombia',
            label: 'Colombia',
        }
    ];
    const [documentoInput, setDocumentoInput] = useState(null);

    const [nameInput, setNameInput] = useState(null)

    const [lastName, setLastName] = useState(null)

    const [telInput, setTelInput] = useState(null)

    const [emailInput, setEmailInput] = useState(null);

    const [passwordInput, setPasswordInput] = useState(null);

    const [passwordVerify, setPasswordVerify] = useState(null);

    const documentoRegex = /^\d{1,10}$/;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const textRegex = /^[a-zA-Z0-9]+$/;

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
            axios.post(`${apiUrl}/api/register`, values)
                .then(res => {
                    if (res.data.Status === "Success") {
                        Swal.fire({
                            icon: 'success',
                            title: 'Te has registrado correctamente',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate('/login')
                    }
                })
                .then(err => console.log(err));
        }
    }


    return (
        <>

            <StyledContent>
                <Card sx={{ padding: '24px 24px 0px', width: '100%', border: 'none', borderRadius: '16px', marginBottom: '25px', boxShadow: 'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;' }}>
                    <CardHeader
                        title={
                            <Typography variant="h4" sx={{ fontFamily: 'Mukta', margin: '0px 0px 24px', padding: '24px 24px 0px', fontSize: '20px', fontWeight: '700' }}>
                                Información personal
                            </Typography>
                        }
                    />
                    {/* <Typography variant="h4" gutterBottom color="textPrimary" fontFamily={'Mukta'}>
                    Registrar
                </Typography> */}

                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Nombres"
                                    name="Nombres"
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
                                    label="Apellidos"
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
                                    label="Documento"
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
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <NoNumberArrowsTextField
                                    label="Telefono"
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
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Correo electrónico"
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

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    fullWidth
                                    label="Municipio de residencia"
                                    defaultValue=""
                                    helperText="¿Dónde será entregado el pedido?"
                                >
                                    {municipios.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    fullWidth
                                    label="País de residencia"
                                    defaultValue="Colombia"
                                    helperText=""
                                >
                                    {paises.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Dirección de entrega"
                                    type="text"
                                    name="Direccion"
                                    margin="dense"
                                    color="secondary"
                                    fullWidth
                                    value=""
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Barrio"
                                    type="text"
                                    name="Barrio"
                                    margin="dense"
                                    color="secondary"
                                    fullWidth
                                    value=""
                                    helperText=" "
                                />
                            </Grid>


                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Notas adicionales para el pedido"
                                    color="secondary"
                                    multiline
                                    fullWidth
                                    rows={3}
                                    defaultValue=""
                                />
                            </Grid>
                        </Grid>
                        <br />
                        

                    </form>

                </Card>
                <Button sx={{textTransform: 'none'}}>
                        <Link to="/carrito" style={{ display: 'flex', alignItems: 'left', justifyContent: 'left', fontFamily: 'Mukta', marginTop: '15px' }}>
                            <Iconify icon="eva:arrow-ios-back-fill" color="#000000" width={16} height={16} style={{ marginBottom: '3px' }} />
                            <Typography variant="subtitle2" style={{ fontSize: '13px', color: '#212B36', fontWeight: '700', padding: '4px'}}>
                                Volver al carrito
                            </Typography>
                        </Link>
                        </Button>
            </StyledContent>

        </>
    );
}

export { Informacion }