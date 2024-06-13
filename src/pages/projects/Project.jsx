import React from 'react'
import ProjectCard from '../../components/project-card/ProjectCard';
import './Project.css'
import portfolioProjectImage from '../../assets/project-portfolio.png'
import blankImage from '../../assets/blank.png'
import imageEditor from '../../assets/image-editor.jpeg'
import webScrapper from '../../assets/web-scraper.jpeg'
import quizApp from '../../assets/quiz-app.png'

function Project() {

  let allProjects = [
    {
      name : "PORTFOLIO-WEBSITE",
      image : portfolioProjectImage,
      githubLink : "https://github.com/androemeda/Portfolio",
      deployedLink : "https://portfolio-ten-phi-45.vercel.app/"
    },
    {
      name : "IMAGE-EDITOR",
      image : imageEditor,
      githubLink : "https://github.com/androemeda/image-editor",
      deployedLink : null
    },
    {
      name : "WEB-SCRAPER",
      image : webScrapper,
      githubLink : "https://github.com/androemeda/web_scraper_price-comparison",
      deployedLink : null
    },
    {
      name : "QUIZ-APP",
      image : quizApp,
      githubLink : "https://github.com/androemeda/Quiz-App?tab=readme-ov-file",
      deployedLink : "https://androemeda.github.io/Quiz-App/"
    }
  ];

  return (
    <div className='project'>
      <div className='projects-header'>
        <span className='projects-header-text'>PROJECTS</span>
      </div>
      <div className='projects-content'>
        {
          allProjects.map((project , index) => {
            return (
              <ProjectCard name={project.name} image={project.image} githubLink={project.githubLink} deployedLink={project.deployedLink}></ProjectCard>
            )
          })
        }
      </div>
    </div>
  )
}

export default Project;