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

import { useCart } from '../../hooks/useCart'

export default function PersonalizarAncheta({ open, onClose, selectedAnchetaIndex }) {
  const apiUrl = process.env.REACT_APP_AMJOR_API_URL;


  // COSAS DE addAncheta de Brandon

  
  //const [open, setOpen] = React.useState(false);
  //const [fullWidth, setFullWidth] = React.useState(true);
  //const [maxWidth, setMaxWidth] = React.useState("sm");

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const handleMaxWidthChange = (event) => {
  //   setMaxWidth(
  //     // @ts-expect-error autofill of arbitrary value is not handled.
  //     event.target.value
  //   );
  // };

  // const handleFullWidthChange = (event) => {
  //   setFullWidth(event.target.checked);
  // };

    // Obtener la información de la ancheta usando el índice



  const { cart } = useCart()

  const selectedProduct = cart[selectedAnchetaIndex];

  console.log("Received index in PersonalizarAncheta:", selectedAnchetaIndex);
  console.log("Selected product:", selectedProduct)

  return (
    <>
    <React.Fragment>
      <Dialog
        fullWidth
        maxWidth="xl"
        open={open}
        onClose={onClose}
        style={{borderRadius: '30px'}}
        sx={{padding: '24px 24px 24px 24px', boxShadow: 'rgba(0, 0, 0, 0.24) -40px 40px 80px -8px;', borderRadius: 30}}
      >
        <DialogTitle>
          <Typography type="h2" sx={{fontWeight: 700, fontSize: '1.125rem', fontFamily: '"Public Sans", sans-serif;', lineHeight: '1.55556;', }}>
            Personalizando {selectedProduct && selectedProduct.NombreAncheta}
            </Typography>
            
            {/* Personalizando {selectedProduct && selectedProduct.NombreAncheta} */}

        </DialogTitle>

        <DialogContent>
          <DialogContentText>

            <Typography type="p" sx={{fontWeight: 400, fontSize: '16px', color: 'rgb(99, 115, 129);', fontFamily: '"Public Sans", sans-serif;' }}>
            Aquí puedes personalizar tu ancheta con los insumos que tu desees.

            </Typography>
          
            
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
          <Button variant="contained" color="secondary" sx={{ backgroundColor:"#9C27B0", textTransform: 'none', padding: '6px 16px', fontSize: '14px', marginTop: '8px', borderRadius: '6px;', fontWeight: 700, fontFamily: '"Public Sans", sans-serif;'}}>Modificar</Button>
          <Button variant="contained" onClick="" sx={{":hover": {bgcolor: "#000", color: "white"}, backgroundColor:"#343A40", textTransform: 'none', padding: '6px 16px', fontSize: '14px', marginTop: '8px', borderRadius: '6px;', fontWeight: 700, fontFamily: '"Public Sans", sans-serif;'}}>Cancelar</Button>
        </DialogActions> 

        </DialogContent>





        {/* <DialogActions>
          <Button onClick={onClose}>Close</Button>
        </DialogActions> */}

      </Dialog>
    </React.Fragment>
    </>
  );
}
