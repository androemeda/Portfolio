import React from 'react'
import './SkillCard.css'

function SkillCard({ icon, text }) {
  return (
    <div className='skill-card'>
      <div className='skill-icon'>
        {icon}
      </div>
      <div className='skill-name'>
        {text}
      </div>
    </div>
  )
}

export default SkillCard
