import React from 'react'
import './ProjectCard.css'
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({image , name , githubLink , deployedLink}) {
  return (
    <div className='project-card'>

      <div className='project-name'>{name}</div>


      <div className='project-image'>

        <img src={image} alt="" />

        <div className='cover'>
          <a href={githubLink}><FaGithub className='icon'/></a>
          {deployedLink && <a href={deployedLink}><FaExternalLinkAlt className='icon'/></a>}
        </div>

      </div>

    </div>
  )
}

export default ProjectCard;
