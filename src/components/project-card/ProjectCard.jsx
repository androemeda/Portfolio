import React from 'react'
import './ProjectCard.css'

function ProjectCard({image , name}) {
  return (
    <div className='project-card'>
      <div className='project-name'>{name}</div>
      <div className='project-image'>
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export default ProjectCard
