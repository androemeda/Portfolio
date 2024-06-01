import React from 'react';
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
        <ul className='nav-bar'>
            <li className='nav-item'><a href='/'>Home</a></li>
            <li className='nav-item'><a href='/about'>About</a></li>
            <li className='nav-item'><a href='/skills'>Skills</a></li>
            <li className='nav-item'><a href='/projects'>Projects</a></li>
            <li className='nav-item'><a href='/contact'>Contact</a></li>
        </ul>
    </nav>
  )
}

export default NavBar