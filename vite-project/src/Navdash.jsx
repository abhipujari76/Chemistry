import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navdash.css';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-logo">CW</div>
      <ul className="nav-menu">
        <li><NavLink to="/home" className="nav-link">Home</NavLink></li>
        <li><NavLink to="/Experiment" className="nav-link">Experiment</NavLink></li>
        <li><NavLink to="/explore" className="nav-link">Explore</NavLink></li>
        <li><NavLink to="/Equation" className="nav-link">Equation</NavLink></li>
        <li><NavLink to="/logout" className="nav-link">Logout</NavLink></li>
      </ul>
    </div>
  );
};

export default Navbar;
