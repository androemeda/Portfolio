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
          <p>My name is Kartik Deshpande.</p>
          <p>I am a first year student at Scaler School Of Technology. I am parallelly pursuing my BSc in Computer Science from BITS PILANI.</p>
          <p>I am passionate about Technology. In my free time I love doing questions on leetcode and making projects.</p>
        </div>
      </div>
    </div>
  )
}

export default About
