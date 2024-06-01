import React from 'react';

import Typing from '../../components/typing/Typing';
import myphoto from '../../assets/my-photo.png';

import './Home.css';

function Home() {
  return (
    <>
        <div className='description'>
            <div className='my-img'>
              <img src={myphoto} width={200}></img>
            </div>
            <h1 className='red'>Hi , My name is</h1>
            <h1>KARTIK DESHPANDE</h1>
            <Typing 
                text={["a coder" , "a developer" , "a tech-blogger"]}
                typingSpeed={100}
                deletingSpeed={50}
                duration={1000}
            ></Typing>
        </div>
    </>
  )
}

export default Home
