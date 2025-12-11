// frontend/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Criaremos este CSS em seguida

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">AdotaPet</Link>
      </div>
    </nav>
  );
};

export default Navbar;