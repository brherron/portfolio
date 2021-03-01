import React from 'react'
import TechGrid from './techGrid'

const Tech = () => {

  return (
    <div className="section tech is-medium is-white has-text-centered is-long">
      <div className="container is-narrow">
        <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">Tools and Technology.</h1>
        <div className="columns is-centered">
          <div className="column is-three-fifths">
            <h2 className="subtitle is-size-5-desktop">
              Each project requires a different toolset, here are some that I am currently working with. 
              There are always new trends with new tools that will be added to my arsenal.
            </h2>
          </div>
        </div>
        <TechGrid />
      </div>
    </div>
  )
}


export default Tech
