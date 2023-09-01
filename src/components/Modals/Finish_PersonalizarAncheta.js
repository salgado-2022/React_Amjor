import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';

import {
  Container,
  Grid,
  Button,
  TextField,
  Typography,
  Stack,
  Card,
  CardHeader,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  TablePagination,
  Paper,
  CardMedia,
  Divider
} from "@mui/material";
//import { UserListToolbar } from '../../@dashboard/user';
import { filter } from 'lodash';
//import AddIcon from '@mui/icons-material/Add';
//import RemoveIcon from '@mui/icons-material/Remove';
//import Iconify from "../../../components/iconify";
import Swal from 'sweetalert2';
import axios from "axios";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Switch from "@mui/material/Switch";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { UserListToolbar } from '../Other/others/user';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Iconify from "../../components/iconify";

import { useCart } from '../../hooks/useCart'
import { Insumoscontext } from '../../context/Context';

export default function PersonalizarAncheta({ open, onClose, selectedAnchetaIndex }) {
  const apiUrl = process.env.REACT_APP_AMJOR_API_URL;
  const deployApiUrl = process.env.REACT_APP_AMJOR_DEPLOY_API_URL;

  const theme = createTheme({
    components: {
      MuiDialog: {
        styleOverrides: {
          paper: {
            borderRadius: '10px',
            // Otros estilos personalizados aquí
          },
        },
      },
    },
  });


  // COSAS DE addAncheta de Brandon

  const navigate = useNavigate();

  const [values, setValues] = useState({
    NombreAncheta: '',
    Descripcion: '',
    PrecioUnitario: '',
    ID_Estado: '2',
    image: ''
  });

  const initialValues = {
    NombreAncheta: '',
    Descripcion: '',
    PrecioUnitario: '',
    ID_Estado: '2',
    image: ''
  };

  const [nombreError, setNombreError] = useState('');
  const [descripcionError, setDescripcionError] = useState('');

  const [imageUrl, setImageUrl] = useState(null);
  const [imageHolder, setImageHolder] = useState(null);

  const Globalstate = useContext(Insumoscontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;
  const { state: insumosState } = useContext(Insumoscontext);
  const insumosAgregados = insumosState.map((insumo) => insumo.ID_Insumo);

  const [data, setData] = useState([]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filterName, setFilterName] = useState('');

  const states = state.map(obj => ({ idInsumo: obj.ID_Insumo, cantidad: obj.Cantidad, precio: obj.PrecioUnitario * obj.Cantidad }));

  const Precio = state.reduce((Precio, insumo) => {
    return Precio + insumo.PrecioUnitario * insumo.Cantidad;
  }, 0)



  const formatPrice = (price) => {
    return price.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    });
  };

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`${apiUrl}/api/admin/insumos`)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err));
    };

    fetchData();
    return () => {
      dispatch({ type: 'ResetInsumos' });
    };
  }, [dispatch, apiUrl]);


  const handleReset = () => {
    setValues(initialValues);
    setImageUrl(null);
    setNombreError('');
    setDescripcionError('');
    dispatch({ type: 'ResetInsumos' });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (page + 1) * rowsPerPage - data.length) : 0;

  const filteredUsers = filter(data, (_nombre) => _nombre.NombreInsumo.toLowerCase().indexOf(filterName.toLowerCase()) !== -1);

  const isNotFound = !filteredUsers.length && !!filterName;

  const dataLength = state ? (data.length - state.length) : (data.length);

  



const totalGeneral = insumosState.reduce((total, insumo) => {
  if (insumo.PrecioUnitario && insumo.Cantidad) {
    return total + insumo.PrecioUnitario * insumo.Cantidad;
  }
  return total;
}, 0);


  const { cart } = useCart()

  const selectedProduct = cart[selectedAnchetaIndex];

  const [dataInsumo, setDataInsumo] = useState([]);
  const [InitialInsumos, setInitialInsumos] = useState(true);

  if (InitialInsumos) {
    data.forEach((insumo) => {
        const dataInsumoItem = dataInsumo.find(item => item.ID_Insumo === insumo.ID_Insumo);
        if (dataInsumoItem) {
            dispatch({ type: 'AddInsumo', payload: { ...insumo, Cantidad: dataInsumoItem.Cantidad, Precio: insumo.PrecioUnitario } });
            setInitialInsumos(false);
        }
    });
}

  useEffect(() => {
    if (selectedProduct) {
      selectedProduct.insumos.forEach(insumo => {
        setDataInsumo(selectedProduct.insumos);
        dispatch({ type: 'AddInsumo', payload: { insumo, Precio: insumo.PrecioUnitario } });
      });
      selectedProduct.insumos.forEach(insumo => {
        console.log(insumo.Total); // Esto imprimirá el precio de cada insumo
      });
    }
  }, [selectedProduct]);


  console.log("STATES", states)
  console.log("state:", state)
  console.log("Insumos:", dataInsumo)
  console.log("Selected product:", selectedProduct)
  console.log("Insumos agregados:", insumosAgregados)

  // Calcula el total general de los insumos
 



  // const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  // ACTUALIZAR CARRITO CON LA PERSONALIZACIÓN



  return (
    <>
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <Dialog
            fullScreen
            open={open}
            onClose={onClose}
            style={{ borderRadius: '10px' }}
            sx={{ '& .MuiDialog-container': { borderRadius: '10px', }, borderRadius: '10px', padding: '24px 24px 24px 24px', boxShadow: 'rgba(0, 0, 0, 0.24) -40px 40px 80px -8px;', borderRadius: 30 }}
          >
            <DialogTitle>
              <Typography type="h2" sx={{ fontWeight: 700, fontSize: '1.125rem', fontFamily: '"Public Sans", sans-serif;', lineHeight: '1.55556;', }}>
                Personalizando {selectedProduct && selectedProduct.NombreAncheta}
              </Typography>

              {/* Personalizando {selectedProduct && selectedProduct.NombreAncheta} */}

            </DialogTitle>

            <DialogContent sx={{ '& .MuiDialog-container': { borderRadius: '10px', }, borderRadius: '10px' }}>

              <Box marginBottom={3} fullWidth>
                <Typography type="p" sx={{ fontWeight: 400, fontSize: '16px', color: 'rgb(99, 115, 129);', fontFamily: '"Public Sans", sans-serif;' }}>
                  Aquí puedes personalizar tu ancheta con los insumos que tu desees.
                </Typography>
              </Box>


              <Container maxWidth={"xl"} marginTop="20px">
                {/* <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>Crear Ancheta</Typography>
            <Link to="/dashboard/anchetas">
                <Button variant="contained" startIcon={<Iconify icon="ph:arrow-left" />}>
                Volver
                </Button>
            </Link>
            
        </Stack> */}

                <Grid container spacing={2}>
                  <Grid item md={5} >

                    <Card style={{ marginBottom: '16px' }} sx={{ width: '100%', border: 'none', borderRadius: '16px', marginBottom: '25px', boxShadow: 'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.3) 0px 12px 24px -4px;' }}>

                      {state.length === 0 ? (<CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '235px', color: "#98a4b0" }}><Typography variant="body1">Sin Insumos</Typography></CardContent>
                      ) : (
                        <List sx={{ height: "235px", overflowY: 'auto' }}>
                          {state.map((insumo) => (
                            <ListItem key={insumo.ID_Insumo} secondaryAction={
                              <div>
                                <IconButton color="primary" onClick={() => dispatch({ type: 'Decrement', payload: insumo })}>
                                  <RemoveIcon sx={{ fontSize: '16px' }} />
                                </IconButton>
                                <TextField type="number" value={insumo.Cantidad} onChange={(event) => dispatch({ type: "SetCantidad", payload: { idInsumo: insumo.ID_Insumo, cantidad: event.target.value } })} inputProps={{ style: { textAlign: 'center', fontSize: '14px', width: '15px', height: '5px' } }} />
                                <IconButton color="primary" onClick={() => dispatch({ type: 'Increment', payload: insumo })}>
                                  <AddIcon sx={{ fontSize: '16px' }} />
                                </IconButton>
                              </div>
                            }>
                              <ListItemIcon aria-label="delete" onClick={() => dispatch({ type: 'RemoveInsumo', payload: insumo })}>
                                <IconButton color="primary" sx={{ fontSize: "22px" }}>
                                  <Iconify icon="ph:trash" class="big-icon" />
                                </IconButton>
                              </ListItemIcon>
                              <Grid item sm={6} xs={6}>
                                <ListItemText
                                  primaryTypographyProps={{ style: { fontSize: '14px' } }}
                                  primary={insumo.NombreInsumo}
                                  secondaryTypographyProps={{ style: { fontSize: '14px' } }}
                                  secondary={formatPrice(insumo.Precio * insumo.Cantidad)}
                                />
                              </Grid>
                            </ListItem>
                          ))}
                        </List>
                      )}
                    </Card>
                    <Typography variant="h5" marginBottom={1}>Total: {formatPrice(Precio)}</Typography>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Button type="submit" variant="contained" color="primary" fullWidth>Crear Ancheta</Button>
                      <Button type="reset" variant="contained" color="secondary" fullWidth>Cancelar</Button>
                    </Stack>
                  </Grid>
                  <Grid item md={7}>

                    <Card sx={{ width: '100%', border: 'none', borderRadius: '16px', marginBottom: '25px', boxShadow: 'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.3) 0px 12px 24px -4px;' }}>
                      <UserListToolbar
                        filterName={filterName}
                        onFilterName={handleFilterByName}
                        placeholder="Buscar insumo..."
                      />
                      <List sx={{ height: 'auto', overflowY: 'auto' }}>
                        {filteredUsers.filter(insumo => !insumosAgregados.includes(insumo.ID_Insumo) && insumo.Estado !== 'Agotado').slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((insumo, index) => {

                          insumo.Cantidad = 1;
                          insumo.Precio = insumo.PrecioUnitario;

                          return (
                            <React.Fragment key={insumo.ID_Insumo}>
                              <ListItem key={insumo.ID_Insumo} secondaryAction={
                                <Typography variant="subtitle2">{formatPrice(insumo.Precio)}</Typography>
                              }>
                                <ListItemIcon onClick={() => dispatch({ type: 'AddInsumo', payload: insumo })}>
                                  <IconButton color="primary" sx={{ fontSize: "20px" }}>
                                    <Iconify icon="typcn:plus" class="big-icon" />
                                  </IconButton>
                                </ListItemIcon>
                                <Grid item sm={8} xs={8}>
                                  <ListItemText primary={insumo.NombreInsumo} />
                                </Grid>
                              </ListItem>
                              {index < data.length - 1 && <Divider />}
                            </React.Fragment>
                          );
                        })}
                        {isNotFound && (
                          <Paper sx={{ textAlign: 'center' }}>
                            <Typography variant="h6" paragraph>No encontrado</Typography>
                            <Typography variant="body2">No se encontraron resultados para
                              &nbsp;<strong>&quot;{filterName}&quot;</strong>.
                              <br /> Intente verificar errores tipográficos o usar palabras completas.
                            </Typography>
                          </Paper>
                        )}
                        {emptyRows > 0 && (<ListItem style={{ height: 73 * emptyRows }} />)}
                      </List>
                      <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={dataLength}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        labelRowsPerPage="Filas por pagina:"
                      />
                    </Card>
                  </Grid>

                </Grid>
              </Container>



              <DialogContentText>




              </DialogContentText>

              <Box
                noValidate
                component="form"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  m: "auto",
                  width: "fit-content",
                }}
              >
                {/* <FormControl sx={{ mt: 2, minWidth: 120 }}>
              <InputLabel htmlFor="max-width">maxWidth</InputLabel>
              <Select
                autoFocus
                //value={maxWidth}
                //onChange={handleMaxWidthChange}
                label="maxWidth"
                inputProps={{
                  name: "max-width",
                  id: "max-width",
                }}
              >
                <MenuItem value={false}>false</MenuItem>
                <MenuItem value="xs">xs</MenuItem>
                <MenuItem value="sm">sm</MenuItem>
                <MenuItem value="md">md</MenuItem>
                <MenuItem value="lg">lg</MenuItem>
                <MenuItem value="xl">xl</MenuItem>
              </Select>
            </FormControl> */}

                {/* <FormControlLabel
              sx={{ mt: 1 }}
              control={
                <Switch checked={fullWidth} onChange={handleFullWidthChange} />
              }
              label="Full width"
            /> */}
              </Box>

              <DialogActions>
                <Button variant="contained" size="large" color="secondary" sx={{ backgroundColor: "#9C27B0", textTransform: 'none', padding: '6px 16px', fontSize: '14px', marginTop: '8px', borderRadius: '6px;', fontWeight: 700, fontFamily: '"Public Sans", sans-serif;' }}>Modificar</Button>
                <Button variant="contained" size="large" sx={{ ":hover": { bgcolor: "#000", color: "white" }, backgroundColor: "#343A40", textTransform: 'none', padding: '6px 16px', fontSize: '14px', marginTop: '8px', borderRadius: '6px;', fontWeight: 700, fontFamily: '"Public Sans", sans-serif;' }}>Cancelar</Button>
              </DialogActions>

            </DialogContent>





            {/* <DialogActions>
          <Button onClick={onClose}>Close</Button>
        </DialogActions> */}

          </Dialog>
        </ThemeProvider>
      </React.Fragment>
    </>
  );
}
