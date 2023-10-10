import Login from "./components/login/Login";
import Register from "./components/register/Register";
import "./App.css";
import { useRef, useState } from "react";

function App() {
  const [showRegister, setShowRegister] = useState(false);

  const handleRegisterClick = () => {
    setShowRegister(true);
  };

  return (
    <div className="App">
      <Login onRegisterClick={handleRegisterClick} />
      {showRegister && (
        <div className="register-section">
          <Register />
        </div>
      )}
    </div>
  );
}

export default App;
