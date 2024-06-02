import React from 'react'
import SkillCard from '../../components/skill-card/SkillCard'
import { ImCss3, ImHtmlFive2 } from "react-icons/im";
import { TbBrandJavascript } from "react-icons/tb";
import { SiLeetcode , SiSpringboot , SiPandas , SiNumpy } from "react-icons/si";
import { FaReact , FaNode } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoTerminal } from "react-icons/io5";
import './skills.css';


function skills() {
  let skillsList = [
    {
      icon : <ImHtmlFive2 />,
      text : "HTML 5"
    },
    {
      icon : <ImCss3/>,
      text : "CSS 3"
    },
    {
      icon : <TbBrandJavascript/>,
      text : "JAVASCRIPT"
    },
    {
      icon : <SiLeetcode />,
      text : "DSA"
    },
    {
      icon : <FaReact/>,
      text : "REACT"
    },
    {
      icon : <SiSpringboot />,
      text : "SPRING BOOT"
    },
    {
      icon : <GrMysql/>,
      text : "SQL"
    },
    {
      icon : <SiPandas/>,
      text : "PANDAS"
    },
    {
      icon : <IoTerminal/>,
      text : "SHELL SCRIPTING"
    },
    {
      icon : <SiNumpy />,
      text : "NUMPY"
    },
    {
      icon : <FaNode/>,
      text : "NODE-JS"
    }
  ];

  return (
    <div className='skills-parent'>
      <div className='skills-heading'>
        <span className='skills-heading-text'>SKILLS</span>
      </div>
      <div className='skill-cards'>
        {
          skillsList.map((element, index) => {
            return (
              <SkillCard key={index} icon={element.icon} text={element.text} />
            );
          })
        }
      </div>
    </div>
  )
}

export default skills
