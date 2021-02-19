import React from 'react'
import NodeSVG from '../images/Tech/node-logo.svg'
import styled from 'styled-components'

const Node = styled.img`
  filter: saturate(0%);
  opacity: 0.2;
  transition: 0.2s;

  :hover {
    filter: saturate(100%);
    opacity: 1;
    transition: 0.2s;
  }
`;

const Tech = () => {

  return (
    <div className="section tech is-medium is-white has-text-centered">
      <div className="container is-narrow">
        <h1 className="title is-spaced is-size-4-desktop is-size-5-mobile">Tools and Technology.</h1>
        <h2 className="subtitle">Each project requires a different toolset, here are some that I am currently working with. 
                                                  There are always new trends that can be added to the arsenal.</h2>
        <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer" aria-label="Tech Image"><Node src={NodeSVG} alt=""/></a>
      </div>
    </div>
  )
}


export default Tech
