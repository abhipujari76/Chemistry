import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-logo">CW</div>
      <ul className="nav-menu">
        <li><NavLink to="/" className="nav-link">Home</NavLink></li>
        <li><NavLink to="/register" className="nav-link">Register</NavLink></li>
        <li><NavLink to="/login" className="nav-link">Login</NavLink></li>
      </ul>
    </div>
  );
};

export default Navbar;
