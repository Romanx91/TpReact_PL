import { useState } from "react";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import API_URL from "../../services/const/api";
import logo from "../icons/Icono.jpg";

const defaultTheme = createTheme();

export default function Register() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);

  const navigate = useNavigate();

  const handleLoginPageClick = () => {
    navigate("/Login"); // Navega a la página de registro
  };

  const validateFields = () => {
    setNameError(username.trim() === "");
    setEmailError(email.trim() === "");
    setPasswordError(password.trim() === "");
    setLastNameError(lastName.trim() === "");
  };

  const signup = async (e) => {
    e.preventDefault();

    validateFields();

    if (nameError || emailError || passwordError || lastNameError) {
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/User`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          lastName,
          password,
          email,
          username,
          Role: "1",
        }),
      });

      if (response.ok) {
        // Registro exitoso, puedes manejar la respuesta del servidor si es necesario
        navigate("/Login"); // Redirige a la página de inicio de sesión después del registro
      } else {
        // Manejar errores, por ejemplo, mostrar un mensaje de error
        console.log("Error en el registro");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img className="icono" src={logo} alt="Logo" />
          <Box component="form" noValidate onSubmit={signup} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Usuario"
                  autoFocus
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                {nameError && (
                  <Typography color="error">Ingrese un usuario</Typography>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Nombre"
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {nameError && (
                  <Typography color="error">Ingrese un nombre</Typography>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Apellido"
                  name="lastName"
                  autoComplete="family-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {lastNameError && (
                  <Typography color="error">Ingrese un apellido</Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
                {emailError && (
                  <Typography color="error">Ingrese un email válido</Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
                {passwordError && (
                  <Typography color="error">
                    La contraseña debe tener al menos 6 caracteres
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12} color={"black"}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="secondary" />
                  }
                  label="Quiero recibir inspiración, promociones de marketing y actualizaciones por correo electrónico."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrar
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button onClick={handleLoginPageClick}>
                  ¿Ya tienes una cuenta? Iniciar sesión
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
