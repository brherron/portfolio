import React, { useState } from 'react'


const ProjectCard = (props) => {
  const data = props.values
 
  const [state, toggle] = useState(true)

  return (
    <figure className="image is-3by2" onMouseOver={() => toggle(!state)} onMouseOut={() => toggle(!state)} onFocus={() => toggle(!state)} onBlur={() => toggle(!state)}>
      <img src={data.logo} alt="" className="project-logo" style={{ maxHeight: state ? '40%' : '20%', margin: state ? 'auto' : '1rem 1rem 0.2rem 1rem', width: state ? '100%' : 'auto'}}/>
      <img src={data.image} alt="" className="project-thumb" style={{ transform: `scale(${ state ? 6 : 1 }) translateX(${state ? 50 : 0 }px)`, borderRadius: '12px' }}/>
      <figcaption style={{opacity: state ? '0' : '1'}}>
        <h3 className="subtitle">{data.project}</h3>
        <p>{data.subtitle}</p>
        <a href={data.link} target="_blank" rel="noreferrer" style={{ visibility: state ? 'hidden' : 'visible' }}>
          <span>{data.buttonString}</span>
        </a>
      </figcaption>
      <div className="overlay"
           style={{backgroundColor: state ? '#fedb6ae4' : '#000000a3'}}>
      </div>
    </figure>
  )
}


export default ProjectCard