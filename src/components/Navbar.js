import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="Pokemon Logo" />
      </Link>
      <div className="navbar__buttons">
        <Link to="/add-pokemon" className="btn">
          Add Pokemon
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
