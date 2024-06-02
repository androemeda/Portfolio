import React from 'react';
import './About.css';

function About() {
  return (
    <div className='about-parent'>
      <div className='about-heading'>
        <span className="about-heading-text">
          ABOUT
        </span>
      </div>

      <div className='about-content'>
        <div className='about-img'>
          <img src='https://cdn.dribbble.com/users/3484830/screenshots/16787618/media/b134e73ef667b926c76d8ce3f962dba2.gif'></img>
        </div>
        <div className='about-text'>
          <h1>HEY THERE</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus pariatur totam tenetur accusamus, iste error itaque eos asperiores, dolore magni aperiam modi, deserunt commodi soluta officiis harum mollitia officia unde?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolore deleniti nobis nam earum optio consequuntur obcaecati doloremque asperiores, dolorem, sapiente, facilis illum animi quidem quaerat. Quam officiis placeat architecto.</p>
          <span>Happy Coding!</span>
        </div>
      </div>
    </div>
  )
}

export default About
