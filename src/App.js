import Login from "./components/login/Login";
import Register from "./components/register/Register";
import "./App.css";
import { useRef, useState } from "react";

function App() {
  const [showRegister, setShowRegister] = useState(false);

  const handleRegisterClick = () => {
    setShowRegister(true);
  };

  const handleLoginClick = () => {
    setShowRegister(false);
  };

  return (
    <div className="App">
      {!showRegister && (
        <div className="login-section">
          <Login onRegisterClick={handleRegisterClick} />
        </div>
      )}
      {showRegister && (
        <div className="register-section">
          <Register onLoginClick={handleLoginClick} />
        </div>
      )}
    </div>
  );
}

export default App;
