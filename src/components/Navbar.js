// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/products">Product List</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
