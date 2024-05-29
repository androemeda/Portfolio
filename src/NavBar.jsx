import React from 'react';
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
        <ul className='nav-bar'>
            <li className='nav-item'><a href='#'>Home</a></li>
            <li className='nav-item'><a href='#'>About</a></li>
            <li className='nav-item'><a href='#'>Skills</a></li>
            <li className='nav-item'><a href='#'>Projects</a></li>
            <li className='nav-item'><a href='#'>Experience</a></li>
            <li className='nav-item'><a href='#'>Blogs</a></li>
            <li className='nav-item'><a href='#'>Contact</a></li>
        </ul>
    </nav>
  )
}

export default NavBar
