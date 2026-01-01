// src/components/Menu.js  (or inside Header.js if you prefer)
import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

function Menu() {
  return (
    <nav className="menu">
      <div className="menu-title">KNOWALL PARANORMAL</div>

      <ul className="menu-list">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/tiktoks">Tiktoks</NavLink></li>
        <li><NavLink to="/youtube">YouTube</NavLink></li>
        <li><NavLink to="/submit">Submit Story</NavLink></li>
        <li><NavLink to="/donate">Donate</NavLink></li>
      </ul>
    </nav>
  );
}

export default Menu;
