import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../themeContext/ThemeContext";
import "./Login.css";

const Login = ({ onRegisterClick }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setLoading } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Activa el spinner
    setLoading(true);

    // Aquí es donde realizarías la autenticación con la base de datos.
    // ...

    // Simula una redirección después de una operación exitosa de inicio de sesión
    setTimeout(() => {
      navigate("/otraRuta"); // Cambia esto a donde quieras redirigir después del inicio de sesión
      setLoading(false); // Desactiva el spinner
    }, 1000); // Este es un tiempo de espera simulado, reemplázalo con tu lógica real
  };

  const handleRegisterClick = () => {
    navigate("/register"); // Navega a la página de registro
  };

  return (
    <div className="login-container">
      <div className="login">
        <img src="https://example.com/icon.png" alt="icon" />
        <h1>Iniciar sesión</h1>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button onClick={handleLogin} disabled={!username || !password}>
          Ingresar
        </button>
        <button onClick={handleRegisterClick}>Registrar</button>
      </div>
    </div>
  );
};

export default Login;
