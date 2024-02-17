import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Register.css";

const Register = ({ onCancel }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const navigate = useNavigate();

  const handleRegister = () => {
    // Validación del email
    if (!email.includes("@") || !email.includes(".")) {
      setIsEmailValid(false); // Establece el estado de validez del email a falso
      return;
    } else {
      setIsEmailValid(true); // Establece el estado de validez del email a verdadero
    }

    // Validación de la contraseña
    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    // Comentario: Aquí es donde enviarías los datos al servidor para registrar al usuario.
    // El servidor debería verificar si el nombre de usuario ya existe y, en caso afirmativo,
    // devolver un mensaje de error.

    alert("Usuario registrado");
    onCancel(); // Esto te llevará de nuevo a la página de inicio de sesión
  };

  const handleLoginClick = () => {
    navigate("/login"); // Navega a la página de registro
  };

  return (
    <div className="register-container">
      <div className="register">
        <img src="https://example.com/icon.png" alt="icon" />
        <h1>Registro</h1>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Apellido"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <label>
          {isEmailValid ? "Email" : "Por favor, ingrese un email válido."}{" "}
          {/* Cambia el texto del label aquí */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
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
        <div className="register-buttons">
          <button onClick={handleRegister}>Confirmar</button>
          <button onClick={handleLoginClick}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
