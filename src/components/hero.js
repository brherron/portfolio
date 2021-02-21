import React from 'react'
import HeroImage from './heroImage'
import HeroTitle from './heroTitle'

const Hero = () => {

  return (
    <div className="section hero is-white has-text-centered">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-three-fifths">
              <HeroTitle />
              <h3 className="subtitle">I design and code things with minimalism in mind.</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-foot">
          <div className="is-bottom">
            <HeroImage />
          </div>
      </div>
    </div>
  )
}


export default Hero
