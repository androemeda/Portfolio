import React from 'react'
import ProjectCard from '../../components/project-card/ProjectCard';
import './Project.css'
import portfolioProjectImage from '../../assets/project-portfolio.png'
import blankImage from '../../assets/blank.png'

function Project() {

  let allProjects = [
    {
      name : "PORTFOLIO-WEBSITE",
      image : portfolioProjectImage
    },
    {
      name : "WILL BE UPDATED",
      image : blankImage
    },
    {
      name : "WILL BE UPDATED",
      image : blankImage
    },
    {
      name : "WILL BE UPDATED",
      image : blankImage
    },
    {
      name : "WILL BE UPDATED",
      image : blankImage
    },
    {
      name : "WILL BE UPDATED",
      image : blankImage
    }
  ];

  return (
    <div className='project'>
      <div className='projects-header'>
        <span className='projects-header-text'>ALL PROJECTS WILL COME HERE</span>
      </div>
      <div className='projects-content'>
        {
          allProjects.map((project , index) => {
            return (
              <ProjectCard name={project.name} image={project.image}></ProjectCard>
            )
          })
        }
      </div>
    </div>
  )
}

export default Project;