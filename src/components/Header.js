

// src/components/Header.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

function Header() {
  return (
    <nav className="menu">

      <div className="menu-left">
        <img src="/favicon.ico" alt="logo" className="logo" />
        <span className="site-title">Knowall Paranormal</span>
      </div>

      <ul className="menu-list">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/tiktoks">TikToks</NavLink></li>
        <li><NavLink to="/youtube">YouTube</NavLink></li>
        <li><NavLink to="/submit">Submit Story</NavLink></li>
        <li><NavLink to="/donate">Donate</NavLink></li>
      </ul>

    </nav>
  );
}

export default Header;