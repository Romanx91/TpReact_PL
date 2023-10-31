import React, { useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { ThemeContext } from "./components/themeContext/ThemeContext"; // Asegúrate de que la ruta sea correcta
import Spinner from "./components/spinner/Spinner"; // Asegúrate de que la ruta sea correcta
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  const { theme, toggleTheme, loading, setLoading } = useContext(ThemeContext);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => setLoading(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [loading, setLoading]);

  const handleNavigation = () => {
    setLoading(true);
  };

  return (
    <Router>
      <div>
        <Navbar />
        {loading && <Spinner />}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
        {/* Aquí puedes poner botones o enlaces que llamen a handleNavigation cuando se haga clic en ellos */}
      </div>
    </Router>
  );
};

export default App;
