import React, { useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { ThemeContext } from "./services/theme.context";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import CheckoutPage from "./components/checkoutPage/CheckoutPage";
import "./App.css";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Router>
      <div className={theme === "dark" && "dark-theme"}>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/CheckoutPage" element={<CheckoutPage />} />
          <Route path="/" element={<Navigate to="/Dashboard" />} />
        </Routes>
        {/* Aquí puedes poner botones o enlaces que llamen a handleNavigation cuando se haga clic en ellos */}
      </div>
    </Router>
  );
};

export default App;
