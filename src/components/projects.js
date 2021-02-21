import React from 'react'

import ProjectCard from './projectCard'

const Projects = (data) => {

  const projectGrid = data.projects.map((project) => {

    return <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
             <ProjectCard values={project.node.frontmatter}/>
           </div>
  });

  return (
    <div className="section projects is-medium is-white has-text-centered">
      <div className="container is-narrow">
        <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">Fun stuff.</h1>
        <h2 className="subtitle is-size-5-desktop">Here are some things I have worked on recently.</h2>
        <div className="project-grid">
          <div className="columns is-multiline is-mobile">
            {projectGrid}
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column">
            <a href="https://dribbble.com/beauherron_dev" target="_blank" rel="noreferrer" className="button is-yellow is-outlined is-rounded is-medium">
              <span>See more on Dribbble</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Projects
