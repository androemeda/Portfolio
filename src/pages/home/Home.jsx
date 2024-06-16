import React from 'react';

import Typing from '../../components/typing/Typing';
import myphoto from '../../assets/my-photo.png';

import './Home.css';
import SocialCard from '../../components/social-card/SocialCard';
import instaImage from '../../assets/instagram.png'
import twitterImage from '../../assets/twitter.png'
import linkedinImage from '../../assets/linkedin.png'
import youtubeImage from '../../assets/youtube.png'
import githubImage from '../../assets/github.png'
import leetcodeImage from '../../assets/leetcode.png'

function Home() {

  let socialHandles = [
    {
      link : "https://www.instagram.com/__kartikdeshpande/?hl=en",
      image : instaImage
    },
    {
      link : "https://x.com/KartikD83218701",
      image : twitterImage
    },
    {
      link : "https://www.linkedin.com/in/kartikdeshpande2810/",
      image : linkedinImage
    },
    {
      link : "https://www.youtube.com/channel/UCl5g5U6PNkEIuVi7BiMJQ1Q",
      image : youtubeImage
    },
    {
      link : "https://github.com/androemeda",
      image : githubImage
    }
  ];

  return (
    <>
        <div className='description'>
            <div className='my-img'>
              <img src={myphoto} width={200}></img>
            </div>
            <h1 style={{color : 'white'}}>Hi , My name is</h1>
            <h1 style={{color : 'green'}}>KARTIK DESHPANDE</h1>
            
            <Typing 
                text={["a coder" , "a developer" , "a tech-enthusiast"]}
                typingSpeed={100}
                deletingSpeed={50}
                duration={1000}
            ></Typing>

            <div className='social-handles'>
              {
                socialHandles.map((handle , index) => {
                  return (
                    <SocialCard link={handle.link} image={handle.image}></SocialCard>
                  );
                })
              }
            </div>
        </div>
    </>
  )
}

export default Home
