import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav>
      <ul className='nav-bar'>
        <li className='nav-item'><Link to="/">Home</Link></li>
        <li className='nav-item'><Link to="/about">About</Link></li>
        <li className='nav-item'><Link to="/skills">Skills</Link></li>
        <li className='nav-item'><Link to="/projects">Projects</Link></li>
        <li className='nav-item'><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;