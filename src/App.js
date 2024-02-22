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
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./Reducer";
import Checkout from "./components/checkout/Checkout";

const App = () => {
  const [{ user }, dispatch] = useStateValue();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className={theme === "dark" && "dark-theme"}>
        <Navbar />
        <Routes>
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
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
