import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from "axios";

import { styled } from '@mui/material/styles';

// import Swal from 'sweetalert2';
import Swal from 'sweetalert2';

// Cookies
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

import {
    Box,
    Card,
    Stack,
    Container,
    Typography,
    TextField,
    CardHeader,
    Button,
    CardMedia,
    IconButton

} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import Iconify from '../iconify';


// CSS
import '../../assets/css/perfil.css'


const NoNumberArrowsTextField = styled(TextField)(({ theme }) => ({
    '& input[type=number]': {
        MozAppearance: 'textfield', // Firefox
        '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
            WebkitAppearance: 'none',
            margin: 0,
        },
    },
}));

export default function Profile() {
    const apiUrl = process.env.REACT_APP_AMJOR_API_URL;
    const deployApiUrl = process.env.REACT_APP_AMJOR_DEPLOY_API_URL;

    const [id, setID] = useState()
    const [imageUrlEdit, setImageUrlEdit] = useState(null);
    const [oldImage, setOldImage] = useState('');
    const navigate = useNavigate();
    const [values, setValues] = useState({
        Documento: '',
        Nombre: '',
        Apellido: '',
        Telefono: '',
        correo: '',
        img: ''
    });



    useEffect(() => {
        const token = Cookies.get('token');
        const decodedToken = jwt_decode(token);
        setID(decodedToken.userId)
        fetchData();
    }, [])

    console.log(id)

    const fetchData = useCallback(async () => {

        const token = Cookies.get('token');
        if (token) {
            const decodedToken = jwt_decode(token);
            axios.get(`${apiUrl}/api/perfil/user/${decodedToken.userId}`)
                .then((res) => {
                    setValues(prevValues => ({
                        ...prevValues,
                        Documento: res.data[0].Documento,
                        Nombre: res.data[0].Nombre,
                        Apellido: res.data[0].Apellido,
                        Telefono: res.data[0].Telefono,
                        correo: res.data[0].correo,
                        img: res.data[0].img
                    }));
                    setOldImage(res.data[0].img);
                    setImageUrlEdit(null);
                })
                .catch((err) => {
                    console.error(err)
                })
        }
    })

    const handleReset = () => {
        fetchData();
    }

    const handleInput = (event) => {
        const { name, value, type } = event.target;
        setValues(prev => ({ ...prev, [name]: value }));

        if (type === 'file') {
            const selectedFileEdit = event.target.files[0];
            if (selectedFileEdit) {
                setImageUrlEdit(URL.createObjectURL(selectedFileEdit));
                setValues((prev) => ({ ...prev, img: selectedFileEdit }));
            }
        }
    }
    console.log(values.img)

    const handleUpdate = (event) => {
        event.preventDefault();

        const formdata = new FormData();
        formdata.append('Documento', values.Documento)
        formdata.append('Nombre', values.Nombre);
        formdata.append('Apellido', values.Apellido);
        formdata.append('Telefono', values.Telefono)
        formdata.append('correo', values.correo)
        axios.put(`${apiUrl}/api/user/perfil/update/` + id, formdata)
            .then(res => {
                Swal.fire({
                    title: 'Actualizado correctamente',
                    text: "Tu información se actualizó correctamente",
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                });
                if (values.img) {
                    const formdata = new FormData();
                    console.log(values.img)
                    console.log(oldImage)
                    formdata.append('image', values.img);
                    formdata.append('oldImage', oldImage);
                    axios.put(`${apiUrl}/api/user/perfil/update/` + id, formdata)
                }
                setTimeout(() => {
                    window.location.reload();
                }, 1000)
            })
        window.history.back();
    }


    return (
        <>
            <Container maxWidth="lg" style={{ marginTop: 40 }}>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom sx={{ fontSize: '24px', color: "#212B36", fontFamily: "'Public Sans',sans-serif;", fontWeight: 'bold' }}>
                        Mi perfil
                    </Typography>
                </Stack>

                <form onSubmit={handleUpdate} onReset={handleReset} encType="multipart/form-data">
                    <Grid container spacing={3}>
                        <Grid xs={12} md={4}>
                        <Card sx={{ width: '100%', border: 'none', borderRadius: '16px', marginBottom: '25px', boxShadow: 'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.3) 0px 12px 24px -4px;' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <div style={{ paddingTop: "80px", marginRight: "24px", marginLeft: "24px", marginBottom: "40px" }}>

                                        {values.img && (
                                            <div>
                                                <CardMedia component="img" onClick={() => {
                                                    setImageUrlEdit(null);
                                                    setValues((prev) => ({ ...prev, img: null }));
                                                }} alt="" sx={{ width: 150, height: 150, borderRadius: 50 }} image={imageUrlEdit || `${apiUrl}/anchetas/` + values.img} />

                                            </div>
                                        )}
                                        {!values.img && (
                                            <CardHeader
                                                component="label"
                                                className="hover-card-header"
                                                sx={{
                                                    backgroundColor: "#f5f5f5",
                                                    cursor: "pointer",
                                                    textAlign: "center",
                                                    padding: "24px",
                                                    marginBottom: "0px",
                                                    borderRadius: '50%',
                                                    overflow: 'hidden',
                                                    height: "150px",
                                                    width: "150px",
                                                    backgroundImage: `https://api.amjor.shop/usuario/${values.img}`
                                                }}
                                                title={
                                                    <div style={{ fontSize: "48px", marginBottom: "21px" }}>
                                                        <input type="file" className="form-control" id="img" name="img" accept=".jpg, .png, .jpeg" onChange={handleInput} style={{ display: "none" }} />
                                                        <Iconify icon="fluent:image-add-20-regular" className="big-icon" />
                                                    </div>
                                                }
                                            />
                                        )}
                                    </div>
                                    <Typography align="center" style={{ paddingBottom: '30px' }}>
                                        Permitido *.jpeg, *.jpg, *.png
                                        <br />
                                        tamaño máximo de 3,1 MB
                                    </Typography>
                                </div>
                            </Card>
                        </Grid>

                        <Grid xs={12} md={8}>
                            <Box display="flex" justifyContent="center">
                                {/* Inicio de la Card */}
                                <Card sx={{ width: '100%', border: 'none', borderRadius: '16px', marginBottom: '50px', boxShadow: 'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.3) 0px 12px 24px -4px;' }}>
                                    <CardHeader
                                        title={"Información personal"}
                                        titleTypographyProps={{
                                            style: {
                                                padding: '12px',
                                                fontSize: '20px',  
                                                color: "#212B36",     // Cambia el color del texto
                                                fontFamily: "'Public Sans',sans-serif;",
                                                fontWeight: 'bold' 
                                            },
                                            
                                        }}
                                    />
                                    <Box p={3}> {/* Agrega espacio interno a la Card */}
                                        <Grid container spacing={3}>
                                            <Grid xs={12} sm={6}>
                                                <NoNumberArrowsTextField
                                                    label="Documento *"
                                                    name="Documento"
                                                    type="number"
                                                    margin="dense"
                                                    fullWidth
                                                    value={values.Documento}
                                                    onChange={handleInput}
                                                    color="secondary"
                                                    inputProps={{
                                                        inputMode: 'numeric',
                                                        pattern: '[0-9]*',
                                                    }}
                                                />
                                                {/* Mostrar mensaje de error si es necesario */}
                                            </Grid>
                                            <Grid xs={12} sm={6}>
                                                <TextField
                                                    label="Nombre *"
                                                    name="Nombre"
                                                    type="text"
                                                    margin="dense"
                                                    color="secondary"
                                                    fullWidth
                                                    value={values.Nombre}
                                                    onChange={handleInput}

                                                />
                                                {/* Mostrar mensaje de error si es necesario */}
                                            </Grid>
                                            <Grid xs={12} sm={6}>
                                                <TextField
                                                    label="Apellidos *"
                                                    name="Apellido"
                                                    type="text"
                                                    margin="dense"
                                                    color="secondary"
                                                    fullWidth
                                                    value={values.Apellido}
                                                    onChange={handleInput}
                                                />
                                                {/* Mostrar mensaje de error si es necesario */}
                                            </Grid>
                                            <Grid xs={12} sm={6}>
                                                <NoNumberArrowsTextField
                                                    label="Teléfono *"
                                                    name="Telefono"
                                                    type="number"
                                                    margin="dense"
                                                    color="secondary"
                                                    fullWidth
                                                    value={values.Telefono}
                                                    onChange={handleInput}
                                                />
                                                {/* Mostrar mensaje de error si es necesario */}
                                            </Grid>
                                            <Grid xs={12}>
                                                <TextField
                                                    label="Correo electrónico *"
                                                    type='Email'
                                                    name="correo"
                                                    margin="dense"
                                                    color="secondary"
                                                    fullWidth
                                                    value={values.correo}
                                                    onChange={handleInput}
                                                />
                                                {/* Mostrar mensaje de error si es necesario */}
                                                <Box mt={2} display="flex" justifyContent="flex-start">
                                                    <Button type="submit" variant="contained" color="secondary" sx={{ boxShadow: '0 8px 16px 0 rgba(52, 58, 64, 0.24)', backgroundColor: "#9C27B0", textTransform: 'none', padding: '6px 16px', fontSize: '14px', marginTop: '8px', borderRadius: '6px;', fontWeight: 700, fontFamily: '"Public Sans", sans-serif;' }}>Actualizar</Button>
                                                    <Button type="reset" variant="contained" color="secondary" sx={{ ":hover": { bgcolor: "#000", color: "white" }, backgroundColor: "#343A40", textTransform: 'none', padding: '6px 16px', fontSize: '14px', marginTop: '8px', borderRadius: '6px;', fontWeight: 700, fontFamily: '"Public Sans", sans-serif;' }} style={{ marginLeft: '16px' }}>Cancelar</Button>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Card>
                                {/* Fin de la Card */}
                            </Box>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </>
    );
}
