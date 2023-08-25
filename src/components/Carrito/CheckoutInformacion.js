import React, { useEffect, useState } from "react";
import { useContext } from 'react';
import { FormContext } from '../../context/formContext';

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


////////////////////////////////
// FECHAS - INPUTS DE FECHAS

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateField } from '@mui/x-date-pickers/DateField';
import { LocalizationProvider } from '@mui/x-date-pickers';

import { createTheme } from '@mui/material/styles';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon'


////////////////////////////////


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

    const [values, setValues] = useState({
        Nombres: '',
        Apellidos: '',
        Documento: '',
        Telefono: '',
        Email: '',
        Municipio: '',
        Pais: '',
        Direccion_Entrega: '',
        Barrio: '',
        Notas_Adicionales: '',
        Fecha_Entrega: '',
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

    const [nameInput, setNameInput] = useState(null)

    const [lastName, setLastName] = useState(null)

    const [documentoInput, setDocumentoInput] = useState(null);

    const [telefonoInput, setTelefonoInput] = useState(null)

    const [emailInput, setEmailInput] = useState(null);

    const [municipioInput, setMunicipioInput] = useState(null);

    const [paisInput, setPaisInput] = useState(null);

    const [direccionInput, setDireccionInput] = useState(null);

    const [barrioInput, setBarrioInput] = useState(null);

    const [notas_adicionalesInput, setNotas_AdicionalesInput] = useState(null);

    const [fecha_entregaInput, setFecha_EntregaInput] = useState(null);

    const documentoRegex = /^\d{1,10}$/;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const textRegex = /^[a-zA-Z0-9]+$/;

    const { setFormValues } = useContext(FormContext);

    const handleInput = (event) => {
        const { name, value } = event.target;
        setValues(prev => ({ ...prev, [name]: value }));
        setFormValues(prev => ({ ...prev, [name]: value })); // Almacena los valores en el contexto
    }

    const handleBlur = (event) => {
        const { name, value } = event.target

        if (name === 'Documento') {
            if (!value) {
                setDocumentoInput('Campo obligatorio')
            } else if (!documentoRegex.test(value)) {
                setDocumentoInput('Documento invalido')
            } else {
                setDocumentoInput(null)
            }
        }

        if (name === 'Email') {
            if (!value) {
                setEmailInput('Campo obligatorio')
            } else if (!emailRegex.test(value)) {
                setEmailInput('Correo invalido')
            } else {
                setEmailInput(null)
            }
        }

        if (name === 'Telefono') {
            if (!value) {
                setTelefonoInput('Campo obligatorio')
            } else if (!documentoRegex.test(value)) {
                setTelefonoInput('Telefono invalido')
            } else {
                setTelefonoInput(null)
            }
        }
        if (name === 'Nombres') {
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
    }

    const handleSubmit = (event) => {
        console.log('El botón realizar pedido funciona, lo demás aún no lo sé.')

        event.preventDefault();
        console.log('El botón realizar pedido funciona, lo demás aún no lo sé.')

        handleBlur({ target: { name: 'Nombres', value: values.Nombres } });
        handleBlur({ target: { name: 'Apellidos', value: values.Apellidos } });
        handleBlur({ target: { name: 'Documento', value: values.Documento } });
        handleBlur({ target: { name: 'Telefono', value: values.Telefono } });
        handleBlur({ target: { name: 'Email', value: values.Email } });

        handleBlur({ target: { name: 'Municipio', value: values.Municipio } });
        handleBlur({ target: { name: 'Pais', value: values.Pais } });
        handleBlur({ target: { name: 'Direccion_Entrega', value: values.Direccion_Entrega } });
        handleBlur({ target: { name: 'Barrio', value: values.Barrio } });
        handleBlur({ target: { name: 'Notas_Adicionales', value: values.Notas_Adicionales } });
        handleBlur({ target: { name: 'Fecha_Entrega', value: values.Fecha_Entrega } });

        if (documentoInput === null && nameInput === null && lastName === null && telefonoInput === null && emailInput === null) {
            axios.post(`${apiUrl}/api/enviarPedido`, values)
                .then(res => {
                    if (res.data.Status === "Success") {
                        Swal.fire({
                            icon: 'success',
                            title: 'Pedido enviado correctamente',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate('/thankyou')
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
                                    value={values.Nombres}
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
                                    error={telefonoInput !== null}
                                    helperText={telefonoInput}
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
                                    name="Municipio"
                                    id="outlined-select-currency"
                                    select
                                    fullWidth
                                    onChange={handleInput}
                                    label="Municipio de residencia"
                                    defaultValue=""
                                    value={values.Municipio}
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
                                    name="Pais"
                                    id="outlined-select-currency"
                                    onChange={handleInput}
                                    select
                                    fullWidth
                                    label="País de residencia"
                                    defaultValue="Colombia"
                                    value={values.Pais}
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
                                    onChange={handleInput}
                                    type="text"
                                    name="Direccion_Entrega"
                                    margin="dense"
                                    color="secondary"
                                    fullWidth
                                    value={values.Direccion_Entrega}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Barrio"
                                    onChange={handleInput}
                                    type="text"
                                    name="Barrio"
                                    margin="dense"
                                    color="secondary"
                                    fullWidth
                                    value={values.Barrio}
                                />
                            </Grid>


                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="Notas_Adicionales"
                                    onChange={handleInput}
                                    id="outlined-multiline-static"
                                    label="Notas adicionales"
                                    color="secondary"
                                    multiline
                                    fullWidth
                                    minRows={1}
                                    maxRows={3}
                                    defaultValue=""
                                    value={values.Notas_Adicionales}
                                    helperText="Ingrese notas dicionales como el aparatamento, unidad, torre, bloque u otros."
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <TextField
                                        type="date"
                                        color="secondary"
                                        name="Fecha_Entrega"
                                        label="Fecha de entrega"
                                        value={values.Fecha_Entrega}
                                        fullWidth
                                        onChange={handleInput}
                                        helperText="Fecha en que espera recibir su pedido."
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />

                                    {/* <DateField 
                                        label="Fecha de entrega"
                                        onChange={handleInput}
                                        name="Fecha_Entrega"
                                        helperText="Fecha en que espera recibir su pedido:"
                                        format="DD/MM/YYYY"
                                        color="secondary"
                                        value={values.Fecha_Entrega}
                                        fullWidth
                                        /> */}

                                    {/* <DatePicker
                                        theme={{ theme }} 
                                        sx={{ width: '100%'}}
                                        label="Fecha de entrega"
                                        format="DD/MM/YYYY"
                                        margin="dense"
                                        color="secondary"
                                        slotProps={{
                                            textField: {
                                              helperText: 'Fecha en que espera recibir su pedido.',
                                            },
                                          }}
                                    /> */}

                                </LocalizationProvider>
                            </Grid>

                        </Grid>
                        <br />


                    </form>

                </Card>
                <Button sx={{ textTransform: 'none' }}>
                    <Link to="/carrito" style={{ display: 'flex', alignItems: 'left', justifyContent: 'left', fontFamily: 'Mukta', marginTop: '15px' }}>
                        <Iconify icon="eva:arrow-ios-back-fill" color="#000000" width={16} height={16} style={{ marginBottom: '3px' }} />
                        <Typography variant="subtitle2" style={{ fontSize: '13px', color: '#212B36', fontWeight: '700', padding: '4px' }}>
                            Volver al carrito
                        </Typography>
                    </Link>
                </Button>
            </StyledContent>

        </>
    );
}

export { Informacion }