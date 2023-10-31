import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../themeContext/ThemeContext";
import "./Navbar.css";

import {
  IoMdSunny,
  IoMdMoon,
  IoMdCart,
  IoMdPerson,
  IoIosSearch,
} from "react-icons/io";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [cartCount, setCartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("Buscando:", searchTerm);
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">
        <h1>𝕮𝖆𝖗𝖉𝖘𝕭𝖆𝖙𝖙𝖑𝖊𝕼𝖚𝖊𝖘𝖙𝖘</h1>
      </div>
      <div className="navbar-theme-toggle">
        <IoMdSunny />
        <label className="switch">
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
          <span className="slider round"></span>
        </label>
        <IoMdMoon />
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleSearch} // Usamos onKeyDown en lugar de onKeyPress
        />
      </div>
      <div className="navbar-icons">
        <Link to="/infouser">
          <IoMdPerson />
        </Link>
        <Link to="/cart">
          <IoMdCart />
          <span className="cart-count">{cartCount}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
