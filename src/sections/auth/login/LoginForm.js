import { useState } from "react";
// @mui
import {
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
// components
import Iconify from "../../../components/iconify";

import { Link } from "react-router-dom";

//Axios
import axios from "axios";
import Swal from 'sweetalert2'

import { useFormContext } from "../../../context/formContext";
import { useNavigate } from 'react-router-dom';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const apiUrl = process.env.REACT_APP_AMJOR_API_URL;

  const { checkoutUrl } = useFormContext();
  const { setCheckoutUrl } = useFormContext();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [correoInput, setCorreoInput] = useState(null);

  const [passwordInput, setPasswordInput] = useState(null);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const passwordRegex = /^[^<>$"]*$/;

  const [values, setValues] = useState({
    Correo: "",
    Password: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;

    if (name === "Correo") {
      if (!value) {
        setCorreoInput("El campo es obligatorio");
      } else if (!emailRegex.test(value)) {
        setCorreoInput("Ingrese un correo valido");
      } else {
        setCorreoInput(null);
      }
    } else if (name === "Password") {
      if (!value) {
        setPasswordInput("El campo es obligatorio");
      } else if (!passwordRegex.test(value)) {
        setPasswordInput("No se admiten caracteres especiales.");
      } else {
        setPasswordInput(null);
      }
    }
  };

  axios.defaults.withCredentials = true;
  const handleSubmit = (event) => {
    event.preventDefault();

    handleBlur({ target: { name: "Correo", value: values.Correo } });
    handleBlur({ target: { name: "Password", value: values.Password } });

    if (correoInput === null && passwordInput === null) {
      setLoading(true);
      axios
        .post(`${apiUrl}/api/login`, values)
        .then((res) => {
          if (res.data.Status === "Success client") {

            if (checkoutUrl === "/checkout") {
              setCheckoutUrl(1)
              navigate('/checkout');
              window.location.reload(true);
            } else {
              const redirectTo = res.data.redirectTo;
              window.location.href = redirectTo;
            }
          } else if (res.data.Status === "Success Admin") {
            const redirectTo = res.data.redirectToAdmin;
            window.location.href = redirectTo;
          } else if (res.data.Status === "off") {
            Swal.fire({
              title: 'Error',
              //color: '#000',
              timer: 3000,
              text: 'Tu cuenta está deshabilitada ponte en contacto con el administrador del sistema.',
              icon: 'error',
              confirmButtonColor: '#9C27B0',
              confirmButtonText: 'Ok',
              showConfirmButton: true,
              didClose: () => {
                navigate("/")
              },
            })
          }
          else {
            setCorreoInput("Correo incorrecto");
            setPasswordInput("Contraseña incorrecta");
            setLoading(false);
          }
        })
        .catch((err) => console.log(err))
        .finally(() => {
          //setLoading(false);
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            //color="info"
            color="secondary"
            name="Correo"
            label="Correo"
            id="Correo"
            value={values.Correo}
            onChange={handleInput}
            onBlur={handleBlur}
            error={correoInput !== null}
            helperText={correoInput}
          />

          <TextField
            //color="info"
            color="secondary"
            name="Password"
            id="Password"
            label="Contraseña"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    <Iconify
                      icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            onChange={handleInput}
            onBlur={handleBlur}
            error={passwordInput !== null}
            helperText={passwordInput}
          />
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ my: 2 }}
        >
          <Link
            to="/reset"
            fontFamily={"Mukta"}
            style={{ fontSize: 16, color: "#212B36", textDecoration: "underline" }}
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </Stack>

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
          <span>Iniciar sesión</span>
        </LoadingButton>

        {/* 
        <Button
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          color="secondary"
          fontFamily={"Mukta"}
        //onClick={() => setLoading(true)} 
        >
          {loading && <CircularProgress color="inherit" size={26} />}
          {!loading && "Iniciar sesión"}
        </Button> */}

      </form>
    </>
  );
}
