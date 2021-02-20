import React from 'react'

import ProjectCard from './projectCard'
import CoffeePNG from '../images/coffee.png'
import CoffeeSVG from '../images/coffee-logo.svg'
import TJSVG from '../images/tjmorrow-logo.svg'
import MMSVG from '../images/murraymac-logo.svg'

const projects = [
  {
    project: "Drip Coffee",
    imageURL: CoffeePNG,
    subtitle: "Design / Adobe XD",
    logoURL: CoffeeSVG,
    buttonString: "View on Dribbble",
    link: 'https://dribbble.com/shots/14389001-Landing-Page-Coffee-Service'
  },
  {
    project: "Tj Morrow Music",
    imageURL: CoffeePNG,
    subtitle: "React Website",
    logoURL: TJSVG,
    buttonString: "Visit Website",
    link: 'https://www.tjmorrowmusic.com'
  },
  {
    project: "MurrayMac Records",
    imageURL: CoffeePNG,
    subtitle: "HTML/CSS Website",
    logoURL: MMSVG,
    buttonString: "Visit Website",
    link: 'https://www.murraymacrecords.com'
  },
  {
    project: "MurrayMac Records",
    imageURL: CoffeePNG,
    subtitle: "HTML/CSS Website",
    logoURL: MMSVG,
    buttonString: "Visit Website",
    link: 'https://www.murraymacrecords.com'
  }
]


const Projects = () => {
  const projectGrid = projects.map((project) => {

    return <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
             <ProjectCard values={project}/>
           </div>
  });

  return (
    <div className="section projects is-medium is-white has-text-centered">
      <div className="container is-narrow">
        <h1 className="title is-spaced is-size-4-desktop is-size-5-mobile">Fun stuff.</h1>
        <h2 className="subtitle">Here are some things I have worked on recently.</h2>
        <div className="project-grid">
          <div className="columns is-multiline is-mobile">
            {projectGrid}
          </div>
        </div>
      </div>
    </div>
  )
}


export default Projects
