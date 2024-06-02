import React from 'react'
import './SocialCard.css'

function SocialCard({image , link}) {
  return (
    <div className='social-card'>
      <a href={link}><img src={image} /></a>
    </div>
  )
}

export default SocialCard
